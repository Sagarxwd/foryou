import React from "react";
import { motion } from "framer-motion";
import FallingPetals from "./FallingPetals";

// Import images
import catsImg from "../assets/images/batman_hello_kitty_cats_1769954972287.png";
import dogImg from "../assets/images/dog_yellow_flowers.png";
import kittenImg from "../assets/images/ginger_kitten_gift.png";

import MenuButton from "./MenuButton";
import FloatingHearts from "./FloatingHearts";

const PictureCard = ({ src, caption, emoji, rotation, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: rotation }}
            transition={{ delay, duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
            className="bg-white p-2 pb-6 md:p-3 md:pb-8 shadow-2xl border border-gray-100 relative group cursor-pointer"
        >
            <div className="relative overflow-hidden aspect-square">
                <img
                    src={src}
                    alt={caption}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity"></div>

                {/* Decorative Pin/Tape */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-white/60 rounded-full blur-sm"></div>
            </div>

            <div className="mt-3 md:mt-4 text-center">
                <p className="font-handwriting text-lg md:text-xl text-gray-700 leading-tight">
                    {caption}
                </p>
                <span className="text-xl mt-0.5 block">{emoji}</span>
            </div>
        </motion.div>
    );
};

const Pictures = ({ onNext, onMenuClick }) => {
    const pictures = [
        {
            src: catsImg,
            caption: "Us?",
            emoji: "🥺",
            rotation: -5,
        },
        {
            src: dogImg,
            caption: "See i brought you flowers",
            emoji: "💕",
            rotation: 2,
        },
        {
            src: kittenImg,
            caption: "Some extra flowers & a surprise gift",
            emoji: "🫂",
            rotation: -2,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen relative overflow-y-auto overflow-x-hidden flex flex-col items-center bg-[#FFF1F2] py-16 md:py-20"
        >
            <FloatingHearts />
            <MenuButton onClick={onMenuClick} />

            <div className="text-center mb-2 md:mb-4 z-10 px-4">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-rose-400 italic text-xl md:text-xl mb-0 font-script"
                >
                    the kind that matter
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-4xl font-black text-rose-500 mb-0 drop-shadow-sm leading-tight font-handwriting"
                >
                    Some random thoughts
                </motion.h1>
                <p className="mt-2 text-[#ff8da1] text-[15px] md:text-[15px] font-heading ">
                    Simple thoughts, genuine feelings 💜
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 px-4 md:px-8 z-10 max-w-5xl mb-4">
                {pictures.map((pic, index) => (
                    <PictureCard
                        key={index}
                        {...pic}
                        delay={0.3 + index * 0.2}
                    />
                ))}
            </div>

            <motion.button
                onClick={onNext}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 35px -5px rgba(244, 63, 94, 0.5), 0 8px 10px -6px rgba(244, 63, 94, 0.5)",
                    transition: { duration: 0.1 }
                }}
                whileTap={{ scale: 0.95 }}
                className="z-10 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-10 py-3 rounded-full font-bold text-lg shadow-[0_10px_20px_-5px_rgba(244,63,94,0.4)] flex items-center gap-3 group transition-all duration-100 cursor-pointer font-heading mb-2"
            >
                Next ✨
                <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 0.5 }}
                >
                    →
                </motion.span>
            </motion.button>
        </motion.div>
    );
};

export default Pictures;
