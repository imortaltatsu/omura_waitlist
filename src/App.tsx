import { ThreeScene } from './components/ThreeScene';
import { Marquee } from './components/Marquee';
import { WaitlistForm } from './components/WaitlistForm';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen text-white flex flex-col justify-between py-8">
      <ThreeScene />

      {/* Header / Marquee */}
      <header className="relative z-10 border-b border-white/5 backdrop-blur-md bg-black/20">
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/5">
          <div className="text-sm font-mono tracking-widest text-white/80">omura</div>
          <div className="flex gap-4 text-xs font-mono text-white/40">
            <span className="hidden sm:inline">NET_STATUS: <span className="text-emerald-500">OPTIMAL</span></span>
            <span>[ <span className="text-white">NON-CUSTODIAL</span> ]</span>
          </div>
        </div>
        <div className="py-2">
          <Marquee speed={40} className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/30">
            <span className="mx-8 text-indigo-500">///</span>
            <span className="mx-8">Encrypted Connection</span>
            <span className="mx-8 text-indigo-500">///</span>
            <span className="mx-8">Decentralized Indexing</span>
            <span className="mx-8 text-indigo-500">///</span>
            <span className="mx-8">Global Node Access</span>
          </Marquee>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 relative w-full max-w-7xl mx-auto my-8 sm:my-0">
        <div className="w-full relative flex justify-center items-center">

          {/* Decorative Corner Brackets */}
          <div className="hidden lg:block absolute -top-10 left-10 w-20 h-20 border-t border-l border-white/10 opacity-50"></div>
          <div className="hidden lg:block absolute -bottom-10 right-10 w-20 h-20 border-b border-r border-white/10 opacity-50"></div>

          <div className="relative z-20 pt-10 lg:pt-0 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                <span className="text-[10px] font-mono text-indigo-300 tracking-[0.2em] uppercase">Private Beta Access</span>
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 leading-[0.9] text-white">
                OMURA
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-10 font-light max-w-lg leading-relaxed text-center">
                The first <span className="text-white font-medium">Search Engine</span> built on the <span className="text-white font-medium">Walrus Protocol</span>. Decentralized, censorship-resistant, and powered by you.
              </p>

              <div className="w-full max-w-md">
                <WaitlistForm />
              </div>
            </motion.div>
          </div>

        </div>
      </main>

      {/* Footer / Marquee Reverse */}
      <footer className="relative z-10 py-4 border-y border-white/10">
        <Marquee direction="right" speed={25} className="text-lg md:text-xl font-medium tracking-widest opacity-60">
          <span>JOIN THE WAITLIST</span>
          <span className="mx-8">•</span>
          <a href="https://x.com/OmuraHQ" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">FOLLOW @OmuraHQ</a>
          <span className="mx-8">•</span>
          <span>POWERED BY OMURA</span>
          <span className="mx-8">•</span>
          <span>DECENTRALIZED SEARCH</span>
          <span className="mx-8">•</span>
        </Marquee>
      </footer>
    </div>
  );
}

export default App;
