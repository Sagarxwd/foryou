import React from "react";
import { motion } from "framer-motion";
import FallingPetals from "./FallingPetals";
import MenuButton from "./MenuButton";
import FloatingHearts from "./FloatingHearts";

const ReasonCard = ({ icon, title, description, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-3xl p-6 flex flex-col items-center text-center shadow-[0_10px_30px_-5px_rgba(244,63,94,0.1)] border-2 border-pink-200/50 relative overflow-hidden group"
        >
            {/* Soft Glow Effect */}
            <div className="absolute inset-0 bg-white/20 z-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mb-5 relative z-10 shadow-sm">
                <div className="absolute inset-0 rounded-full bg-rose-200 blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <span className="text-3xl relative z-10">{icon}</span>
            </div>

            <h3 className="text-rose-500 font-heading text-xl mb-3 relative z-10">
                {title}
            </h3>

            <p className="text-rose-400 font-medium text-sm leading-relaxed mb-4 px-2 relative z-10 font-heading">
                {description}
            </p>

            <div className="w-12 h-1 bg-rose-300/50 rounded-full mt-auto relative z-10"></div>
        </motion.div>
    );
};

const ReasonsPage = ({ onNext, onMenuClick }) => {
    const reasons = [
        {
            icon: "💘",
            title: "Genuine Heart",
            description: "You care in ways that feel real and unforced",
        },
        {
            icon: "🌸",
            title: "Calm Presence",
            description: "Being with you feels peaceful and grounding",
        },
        {
            icon: "🤍",
            title: "Kind Nature",
            description: "Your kindness shows up naturally, without trying",
        },
        {
            icon: "✨",
            title: "You Listen",
            description: "You pay attention, remember things, and it shows",
        },
        {
            icon: "🌙",
            title: "Soft Strength",
            description: "Gentle, steady, and emotionally present",
        },
        {
            icon: "💖",
            title: "Just You",
            description: "Authentic, honest, and quietly special",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen py-12 px-4 relative overflow-hidden flex flex-col items-center bg-[#FFF1F2]"
        >
            <FloatingHearts/>

            <MenuButton onClick={onMenuClick} />

            <div className="text-center mb-12 z-10">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-rose-400 italic text-xl mb-2 font-script"
                >
                    especially today
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-black text-rose-500 mb-4 drop-shadow-sm font-handwriting"
                >
                    Why You Matter
                </motion.h1>
                <p className="text-[#ff8da1] italic text-sm md:text-base opacity-80 font-heading">
                    A glimpse into what makes you extraordinary to me
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full z-10 px-4 md:px-8 mb-12">
                {reasons.map((reason, index) => (
                    <ReasonCard
                        key={index}
                        {...reason}
                        delay={0.2 + index * 0.1}
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
                className="z-10 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-10 py-3 rounded-full font-bold text-lg shadow-[0_10px_20px_-5px_rgba(244,63,94,0.4)] flex items-center gap-3 group transition-all duration-100 cursor-pointer font-heading mb-8"
            >
                Continue the journey ✨
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

export default ReasonsPage;
