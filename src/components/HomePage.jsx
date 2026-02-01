import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import FloatingHearts from "./FloatingHearts";
import MenuButton from "./MenuButton";

const HomePage = ({ onOpen, onMenuClick }) => {
    const [noCount, setNoCount] = useState(0);
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

    const handleNoInteraction = () => {
        if (noCount === 0) {
            setNoCount(1);
        } else {
            // Move the button to a random position within a reasonable range
            const randomX = Math.random() * 300 - 150;
            const randomY = Math.random() * 200 - 100;
            setNoButtonPosition({ x: randomX, y: randomY });
        }
    };

    const getNoButtonText = () => {
        if (noCount === 0) return "No 😢";
        return "Are you sure? 🥺";
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-screen relative overflow-hidden flex flex-col items-center justify-center p-4 px-6 md:px-12 font-sans bg-gradient-to-br from-[#fff5f7] via-[#fffafa] to-[#ffe4e9]"
        >
            {/* Animated Mesh Gradient Layer */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.3)_0%,transparent_50%)]"
            />

            <FloatingHearts />

            <MenuButton onClick={onMenuClick} />

            {/* Header Section */}
            <div className="text-center mb-6 z-10 w-full max-w-4xl px-4">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-rose-400 italic text-base md:text-lg mb-2 font-medium font-script"
                >
                    Hey i have made something special for you...
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black text-rose-500 italic leading-[1.1] mb-4 drop-shadow-xl whitespace-nowrap relative font-handwriting"
                >
                    Will You Be My Valentine
                    <span className="ml-2">?</span>
                    <span className="absolute -bottom-2 left-0 w-full h-2 bg-rose-200/50 -rotate-1"></span>
                </motion.h1>

                {/* Central Heart */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    className="text-rose-500 mb-4 filter drop-shadow-2xl inline-block"
                >
                    <Heart className="w-16 h-16 md:w-24 md:h-24" />
                </motion.div>
            </div>

            {/* Window Card */}
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="relative w-full max-w-lg z-10"
            >
                {/* Cute Rabbit Sticker */}
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -left-10 -bottom-2 w-20 h-20 z-20 pointer-events-none"
                >
                    <img src="https://media.tenor.com/OnGof_VnOfMAAAAi/mocha-and-milk-bears-cute.gif" alt="cute-bunny" className="w-full h-full object-contain scale-x-[-1]" />
                </motion.div>

                {/* Cute Cat Sticker */}
                <motion.div
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -right-6 -top-10 w-20 h-20 z-20 pointer-events-none"
                >
                    <img src="https://media.tenor.com/OnGof_VnOfMAAAAi/mocha-and-milk-bears-cute.gif" alt="cute-cat" className="w-full h-full object-contain" />
                </motion.div>

                <div className="bg-[#ffeef2]/80 backdrop-blur-md rounded-3xl border-2 border-rose-100 shadow-[0_20px_50px_rgba(255,182,193,0.3)] overflow-hidden">
                    {/* Mock Window Header */}
                    <div className="flex items-center gap-2 p-3 bg-white/40 border-b border-rose-100">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 text-center flex flex-col items-center">
                        <p className="text-gray-700 text-base md:text-lg font-medium mb-4 leading-relaxed font-heading">
                            A little reminder of what this day feels like with you.
                        </p>
                        <div className="flex items-center gap-1 text-rose-400 font-semibold mb-6 italic font-script">
                            <motion.span>
                                {"Choose wisely".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.1,
                                            delay: 1.5 + (index * 0.1),
                                            ease: "easeIn"
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{
                                    opacity: { duration: 0.8, repeat: Infinity, delay: 2.8 },
                                    default: { delay: 2.8 }
                                }}
                                className="w-1 h-5 bg-rose-400 inline-block"
                            ></motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2.9 }}
                                className="ml-1"
                            >✨</motion.span>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-4 relative min-h-[60px] w-full">
                            <motion.button
                                onClick={onOpen}
                                whileHover={{ scale: 1.05, boxShadow: "0 15px 35px -5px rgba(244, 63, 94, 0.5), 0 8px 10px -6px rgba(244, 63, 94, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-10 py-3 rounded-full font-bold text-lg shadow-[0_10px_20px_-5px_rgba(244,63,94,0.4)] flex items-center gap-3 group transition-all z-10 font-heading"
                            >
                                Yes! �
                            </motion.button>

                            <motion.button
                                onClick={handleNoInteraction}
                                onMouseEnter={noCount > 0 ? handleNoInteraction : undefined}
                                animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="bg-white text-rose-400 border-2 border-rose-200 px-8 py-3 rounded-full font-bold text-lg shadow-md hover:bg-rose-50 transition-colors z-10 whitespace-nowrap"
                            >
                                {getNoButtonText()}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Footer */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-8 text-rose-300 font-medium text-xs md:text-sm text-center relative z-10"
            >
                Made with warmth, care, and genuine feelings 💜
            </motion.p>
        </motion.div>
    );
};

export default HomePage;
