import React, { useState } from "react";
import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

import MenuButton from "./MenuButton";

const ValentineNote = ({ onFinish, onMenuClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        // Move to the next page after the animation completes
        setTimeout(() => {
            onFinish();
        }, 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            className="min-h-screen relative overflow-y-auto overflow-x-hidden flex flex-col items-center p-4 px-6 md:px-12 font-sans bg-gradient-to-br from-[#fff5f7] via-[#fffafa] to-[#ffe4e9] py-16 md:py-24"
        >
            <FloatingHearts />

            {/* Header Section */}
            <div className="text-center mb-8 z-10 w-full max-w-4xl px-4">
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
                    className="text-4xl md:text-7xl font-black text-rose-500 italic leading-[1.1] mb-4 drop-shadow-xl font-handwriting"
                >
                    A Valentine Note <span className="inline-block">💌</span>
                </motion.h1>
            </div>

            {/* Note Container */}
            <motion.div
                className="relative w-full max-w-4xl bg-white/30 backdrop-blur-sm border-2 border-rose-100 rounded-[2.5rem] p-8 md:p-20 shadow-[0_20px_60px_rgba(255,182,193,0.2)] flex flex-col items-center justify-center min-h-[40vh] md:min-h-[50vh] cursor-pointer"
                onClick={handleOpen}
            >
                {/* Envelope wrapper to handle depth */}
                <div className="relative w-72 h-52 md:w-96 md:h-64 mb-12 perspective-1000">

                    {/* Back of Envelope */}
                    <div className="absolute inset-0 bg-[#ffd1dc] rounded-xl border-2 border-rose-200 shadow-inner z-0"></div>

                    {/* Letter (slides out) */}
                    <motion.div
                        animate={isOpen ? { y: -80, opacity: 1 } : { y: 0, opacity: 0.5 }}
                        transition={{ delay: 0.5, duration: 1, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute top-4 left-4 right-4 bottom-4 bg-white rounded-lg shadow-md z-10 p-6 flex flex-col items-center justify-center"
                    >
                        <div className="w-full h-2 bg-rose-50 rounded mb-2"></div>
                        <div className="w-3/4 h-2 bg-rose-50 rounded mb-2"></div>
                        <div className="w-1/2 h-2 bg-rose-50 rounded"></div>
                        <span className="text-2xl mt-4">🌸</span>
                    </motion.div>

                    {/* Top Flap */}
                    <motion.div
                        style={{ originY: 0 }}
                        animate={isOpen ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 20 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-[#ffb1bd] rounded-t-xl border-x-2 border-t-2 border-rose-200 z-20 overflow-hidden"
                    >
                        {/* Flap triangle look */}
                        <div className="w-full h-full bg-gradient-to-b from-rose-100/30 to-transparent"></div>
                    </motion.div>

                    {/* Front Body (V-shape) */}
                    <div className="absolute inset-0 bg-[#ffc1cc]/90 rounded-xl border-x-2 border-b-2 border-rose-200 z-30 shadow-lg flex items-center justify-center pointer-events-none">
                        {!isOpen && (
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="text-4xl filter drop-shadow-md"
                            >
                                ❤️
                            </motion.div>
                        )}

                        {/* Small decorative hearts */}
                        <span className="absolute -left-2 -bottom-2 text-xl">❤️</span>
                        <span className="absolute -right-2 top-0 text-xl">💖</span>
                    </div>
                </div>

                <p className="text-gray-500 font-medium text-base mb-6 animate-pulse font-heading">
                    {isOpen ? "Opening..." : "Click to open"}
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/70 border-2 border-rose-200 text-rose-400 px-8 py-3 rounded-full font-bold text-base shadow-sm hover:bg-rose-50 transition-all flex items-center gap-2 font-heading"
                >
                    A Valentine For You 💌
                </motion.button>
            </motion.div>

            <MenuButton onClick={onMenuClick} />
        </motion.div>
    );
};

export default ValentineNote;
