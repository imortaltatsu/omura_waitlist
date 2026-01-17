import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// User requested to prioritize the publishable key
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase credentials missing. Check .env file. The app will run in read-only mode or fail on requests.');
} else {
  console.log('Supabase Config Loaded:', {
    url: supabaseUrl,
    keyLoaded: !!supabaseKey,
    keyPrefix: supabaseKey?.substring(0, 5) + '...'
  });
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder'
);
