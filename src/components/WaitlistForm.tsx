import { useState, type FormEvent } from 'react';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';

export function WaitlistForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setStatus('error');
            setMessage('Please enter a valid email.');
            return;
        }

        try {
            const { error } = await supabase.from('waitlist').insert([{ email }]);
            if (error) {
                if (error.code === '23505') { // Unique violation
                    setStatus('success');
                    setMessage("You're already on the list!");
                } else {
                    throw error;
                }
            } else {
                setStatus('success');
                setMessage("Welcome to the future of search.");
                setEmail('');
            }
        } catch (err: any) {
            console.error(err);
            setStatus('error');
            setMessage(err.message || 'Something went wrong. Try again.');
        }
    };

    return (
        <div className="w-full max-w-md relative z-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative group">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 ${status === 'loading' || status === 'success' ? 'opacity-0' : ''}`}></div>
                    <div className="relative flex items-center bg-black rounded-lg border border-white/10 p-1 pl-4 focus-within:border-white/30 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 mr-3">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ENTER_EMAIL_ADDRESS"
                            disabled={status === 'loading' || status === 'success'}
                            className="w-full bg-transparent py-3 outline-none text-white placeholder-white/20 font-mono text-sm tracking-wider"
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className="bg-white/10 hover:bg-white text-white hover:text-black font-medium text-sm px-6 py-2.5 rounded-md transition-all duration-300 ml-2 disabled:opacity-0 disabled:px-0 rounded-l-none"
                        >
                            {status === 'loading' ? 'Processing...' : 'Join'}
                        </button>
                    </div>
                </div>
            </form>

            <AnimatePresence>
                {message && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`mt-4 text-sm ${status === 'error' ? 'text-red-400' : 'text-green-400'}`}
                    >
                        {message}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}
