import React from "react";
import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

import MenuButton from "./MenuButton";

const Letter = ({ onNext, onMenuClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen relative overflow-hidden flex flex-col items-center justify-center p-4 px-6 md:px-12 font-sans bg-gradient-to-br from-[#fff5f7] via-[#fffafa] to-[#ffe4e9]"
        >
            <FloatingHearts />

            {/* Header Section (Matching the previous page) */}
            <div className="text-center mb-6 z-10 w-full max-w-4xl px-4">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-rose-400 italic text-base md:text-lg mb-2 font-medium font-script"
                >
                    Just because today feels right
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-black text-rose-500 leading-[1.1] mb-4 drop-shadow-xl font-handwriting"
                >
                    A Valentine Note <span className="inline-block">💌</span>
                </motion.h1>
            </div>

            {/* Main Letter Container */}
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative w-full max-w-4xl bg-[#ffeef2]/60 backdrop-blur-xl rounded-[1.5rem] border-2 border-rose-100 p-8 md:p-5 shadow-[0_20px_50px_rgba(255,182,193,0.4),0_10px_15px_rgba(255,182,193,0.2)] flex flex-col items-center z-10"
            >
                {/* Inner White Paper */}
                <div className="w-full bg-white/80 rounded-[1.5rem] p-3 md:p-5 relative overflow-visible shadow-sm">

                    {/* Top Right Cat Sticker */}
                    <div className="absolute -right-4 -top-12 w-32 h-32 md:w-40 md:h-40 z-20">
                        <img
                            src="https://media.tenor.com/2K1zJ7z5vj8AAAAi/cute-cat.gif"
                            alt="cute sticker"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Letter Header */}
                    <div className="flex items-center gap-3 mb-8 ">
                        <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center text-white shadow-md">
                            <span className="text-xl">💝</span>
                        </div>
                        <h2 className="text-xl md:text-lg font-bold text-rose-400 font-script">Hey Nabina</h2>
                    </div>

                    {/* Message Content */}
                    <p className="text-gray-700 text-base md:text-md leading-[1.8] font-medium italic text-left mb-10 max-w-3xl font-handwriting">
                        I wanted to do something special today, simply because you matter to me.
                        Valentine's Day isn't about grand gestures—it's about the feeling of
                        choosing someone, even in the quiet moments. I admire the way you care,
                        understand, and bring calm positivity into my world. Being around you
                        feels safe, natural, and real. I appreciate your honesty, your kindness,
                        and the way you show up as yourself. I don't know where this path leads,
                        but I'd like to take a step forward and see where this connection can grow—at
                        its own pace, in its own time. No pressure, no expectations—just something
                        sincere, from the heart.
                    </p>

                    <div className="flex justify-end pr-4">
                        <p className="text-rose-400 font-bold italic text-lg flex items-center gap-2 font-script">
                            Always <span className="text-rose-300">🤍</span>
                        </p>
                    </div>

                    {/* Subtle sparkle decoration */}
                    <div className="absolute left-6 top-6 text-yellow-400/40 text-xl">✨</div>
                    <div className="absolute right-10 bottom-10 text-rose-300/40 text-xl">💖</div>
                </div>

                {/* Keep Going Button */}
                <motion.button
                    onClick={onNext}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 15px 35px -5px rgba(244, 63, 94, 0.5), 0 8px 10px -6px rgba(244, 63, 94, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-7 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-10 py-3 rounded-full font-bold text-lg shadow-[0_10px_20px_-5px_rgba(244,63,94,0.4)] flex items-center gap-3 group transition-all cursor-pointer font-sans"
                >
                    Keep Going ✨
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.5 }}
                    >
                        →
                    </motion.span>
                </motion.button>
            </motion.div>

            <MenuButton onClick={onMenuClick} />
        </motion.div>
    );
};

export default Letter;
