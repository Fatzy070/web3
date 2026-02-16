'use client'

import Image from "next/image";
import { motion } from "framer-motion";

interface MarqueeProps {
    data: Array<{
        id: number;
        name: string;
        text: string;
        founder: string;
        image: any;
    }>;
    direction?: 'left' | 'right'; // New prop!
}

export default function Marquee({ data, direction = 'left' }: MarqueeProps) {
    if (!data || data.length === 0) return null;

    const doubledData = [...data, ...data];

    const xTranslation = direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"];

    return (
        <div className="mt-10 overflow-hidden py-5 w-full relative group">
            <motion.div 
                className="flex gap-6 w-max"
                animate={{ x: xTranslation }}
                transition={{ 
                    duration: 40,
                    ease: "linear", 
                    repeat: Infinity 
                }}
               
                style={{ cursor: 'pointer' }}
                whileHover={{ transition: { duration: 0 } }} 
            >
                {doubledData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#0b0812] border border-white/5 rounded-2xl w-[300px] md:w-[400px] py-6 px-6 flex flex-col justify-between"
                    >
                        <h2 className="pb-6 text-[1.1rem] font-mont italic leading-relaxed whitespace-normal text-gray-200">
                            {item.text}
                        </h2>
                        
                        <section className="flex items-center gap-4">
                            <Image 
                                src={item.image}
                                alt={item.name}
                                width={50}
                                height={50}
                                className="rounded-full w-12 h-12 object-cover border border-[#957fef]/20"
                            />
                            <div className="overflow-hidden">
                                <h3 className="font-semibold text-white text-sm font-mont">{item.name}</h3>
                                <p className="text-xs text-gray-500 truncate">{item.founder}</p>
                            </div>
                        </section>
                    </div>
                ))}
            </motion.div>

            {/* Fade edges to look more professional */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
        </div>
    )
}