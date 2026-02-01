import React from "react";
import { motion } from "framer-motion";
import { Heart, RotateCcw } from "lucide-react";
import FallingPetals from "./FallingPetals";

import MenuButton from "./MenuButton";
import FloatingHearts from "./FloatingHearts";

const SuccessPage = ({ onRestart, onMenuClick }) => {
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen relative overflow-y-auto overflow-x-hidden flex flex-col items-center bg-[#FFF1F2] py-16 md:py-20 px-4"
        >
            <FloatingHearts />

            <MenuButton onClick={onMenuClick} />

            {/* Header Section */}
            <div className="text-center mb-4 md:mb-8 z-10">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-rose-400 italic text-lg mb-1 font-script"
                >
                    a special delivery...
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-black text-rose-500 mb-2 drop-shadow-sm font-handwriting"
                >
                    Happy Valentine's Day! ✨
                </motion.h1>
            </div>

            {/* Central Success Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-pink-100/80 rounded-[2rem] p-6 md:p-10 border-2 md:border-4 border-pink-400/30 shadow-2xl max-w-4xl w-full z-10 flex flex-col items-center text-center relative overflow-hidden"
            >
                {/* Heart Icon Circle */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                    className="w-20 h-20 bg-rose-200 rounded-full flex items-center justify-center mb-6 shadow-inner"
                >
                    <Heart className="w-10 h-10 text-rose-500 fill-rose-500" />
                </motion.div>

                <h2 className="text-rose-500 font-heading text-3xl md:text-4xl font-script mb-1">
                    Sent With Care
                </h2>
                <p className="text-rose-400 text-sm md:text-base font-medium mb-6 font-handwriting">
                    Just For You
                </p>

                {/* Row of Hearts */}
                <div className="flex gap-2 mb-8">
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: 1,
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                opacity: { delay: 0.8 + i * 0.1 },
                                scale: {
                                    duration: 0.8,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    delay: 1.5 + i * 0.1,
                                    ease: "easeInOut"
                                }
                            }}
                            className={i % 2 === 0 ? 'text-rose-300' : 'text-rose-400'}
                        >
                            <Heart className={`w-5 h-5 fill-current`} />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom White Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 w-full shadow-inner border border-white/40"
                >
                    <p className="text-rose-500 italic font-bold text-xl mb-1 font-script flex items-center justify-center gap-2">
                        Always <Heart className="w-5 h-5 fill-rose-300 text-rose-300" />
                    </p>
                    <p className="text-rose-300 text-xs md:text-sm font-medium">
                        {today}
                    </p>
                </motion.div>

                {/* See Again Button */}
                <motion.button
                    onClick={onRestart}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 15px 35px -5px rgba(244, 63, 94, 0.5), 0 8px 10px -6px rgba(244, 63, 94, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-10 py-3 rounded-full font-bold text-lg shadow-[0_10px_20px_-5px_rgba(244,63,94,0.4)] flex items-center gap-3 group transition-all cursor-pointer font-heading"
                >
                    See Again ✨
                    <motion.span
                        animate={{ rotate: 360, x: [0, 5, 0] }}
                        transition={{
                            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                            x: { duration: 0.5, repeat: Infinity }
                        }}
                    >
                        <RotateCcw className="w-5 h-5" />
                    </motion.span>
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default SuccessPage;
