import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface MarqueeProps {
    children: ReactNode;
    direction?: 'left' | 'right';
    speed?: number;
    className?: string;
}

export function Marquee({ children, direction = 'left', speed = 20, className = '' }: MarqueeProps) {
    return (
        <div className={`flex overflow-hidden whitespace-nowrap ${className}`} style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <motion.div
                className="flex gap-10 pr-10"
                initial={{ x: direction === 'left' ? 0 : '-50%' }}
                animate={{ x: direction === 'left' ? '-50%' : 0 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
            >
                {children}
                {children}
                {children}
                {children}
            </motion.div>
        </div>
    );
}
