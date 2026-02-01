import React from "react";
import { motion } from "framer-motion";
import { Play, Pause, Heart } from "lucide-react";
import FallingPetals from "./FallingPetals";
import MenuButton from "./MenuButton";
import FloatingHearts from "./FloatingHearts";


const SongCard = ({ title, subtitle, color, bgColor, delay, index, isPlaying, onToggle }) => {
    const rotation = index % 2 === 0 ? -1 : 1;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: rotation }}
            transition={{ delay, duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
            whileHover={{ y: -8, scale: 1.03, rotate: 0, zIndex: 20 }}
            className={`relative w-full max-w-[42rem] ${bgColor} rounded-[2rem] p-6 shadow-2xl border border-black/5 flex flex-col items-center group cursor-pointer overflow-hidden transition-all duration-100`}
            style={{
                boxShadow: `0 25px 50px -12px ${color}40`,
                background: `linear-gradient(135deg, #F8F3E8 0%, #E8DCC4 100%)`
            }}
            onClick={onToggle}
        >
            {/* Corner Screws */}
            <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-gray-400/30 border border-gray-500/20 shadow-inner flex items-center justify-center">
                <div className="w-[1px] h-[6px] bg-gray-500/40 rotate-45"></div>
            </div>
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gray-400/30 border border-gray-500/20 shadow-inner flex items-center justify-center">
                <div className="w-[1px] h-[6px] bg-gray-500/40 -rotate-45"></div>
            </div>
            <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-gray-400/30 border border-gray-500/20 shadow-inner flex items-center justify-center">
                <div className="w-[1px] h-[6px] bg-gray-500/40 -rotate-45"></div>
            </div>
            <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-gray-400/30 border border-gray-500/20 shadow-inner flex items-center justify-center">
                <div className="w-[1px] h-[6px] bg-gray-500/40 rotate-45"></div>
            </div>

            {/* Side A Text */}
            <div className="mb-4 text-center">
                <span className="text-[0.65rem] font-bold text-gray-400 tracking-[0.5em] font-sans opacity-70">SIDE A</span>
            </div>

            {/* Inner Pink Zone */}
            <div className={`w-full ${title === "Baatein Karo" ? "bg-[#FFE4E9]" : title === "Jeena Jeena" ? "bg-[#E8F5E9]" : "bg-[#E3F2FD]"} rounded-[1.2rem] p-6 flex flex-col items-center border border-white/60 shadow-inner relative`}>
                <h3 className="text-3xl md:text-3xl font-bold text-gray-800 mb-1 font-heading tracking-tight">
                    {title}
                </h3>
                <p className="text-[0.75rem] md:text-sm text-rose-500/80 font-medium mb-6 italic font-script">
                    {subtitle}
                </p>

                {/* Cassette Tape Center */}
                <div className="w-full max-w-sm h-14 bg-white/90 rounded-full flex items-center justify-between px-2 shadow-sm border border-black/5">
                    {/* Left Reel */}
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 shadow-inner overflow-hidden">
                        <motion.div
                            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                            transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                            className="w-full h-full flex items-center justify-center opacity-40 text-xs"
                        >
                            <div className="w-8 h-8 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Tape Window */}
                    <div className="flex-1 h-8 mx-4 bg-[#1a1a1a] rounded-sm relative overflow-hidden flex items-center justify-center shadow-inner">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                        <div className="w-full h-[1px] bg-white/10 absolute top-1/2 -translate-y-1/2"></div>
                        <div className="flex gap-2 opacity-60">
                            <motion.div
                                animate={isPlaying ? { x: [-20, 20] } : {}}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="w-12 h-3 bg-gray-700 rounded-full"
                            ></motion.div>
                        </div>
                    </div>

                    {/* Right Reel */}
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 shadow-inner overflow-hidden">
                        <motion.div
                            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                            transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                            className="w-full h-full flex items-center justify-center opacity-40 text-xs"
                        >
                            <div className="w-8 h-8 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Controls Area */}
            <div className="flex justify-between w-full items-center mt-6 px-4">
                <div className="text-[0.7rem] bg-black/5 px-2 py-0.5 rounded text-gray-500 font-bold font-mono">
                    {isPlaying ? "PLAYING" : "PAUSED"}
                </div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-md border-2 border-white hover:bg-rose-400 transition-colors"
                >
                    {isPlaying ? (
                        <Pause size={20} className="fill-current" />
                    ) : (
                        <Play size={20} className="fill-current ml-1" />
                    )}
                </motion.div>

                <div className="flex items-center gap-4">
                    <motion.span
                        whileHover={{ scale: 1.2 }}
                        className="text-rose-400 text-lg cursor-pointer"
                    >
                        <Heart className="w-5 h-5 fill-current" />
                    </motion.span>
                    <div className="w-3 h-3 rounded-full bg-gray-400/20 border border-gray-500/10"></div>
                </div>
            </div>
        </motion.div>
    );
};

const MusicPage = ({ onNext, onMenuClick, songs, playingIndex, onTogglePlay }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen py-10 relative overflow-hidden flex flex-col items-center bg-[#FFF1F2]"
        >
            <FloatingHearts />

            {/* Floating Decorative Elements */}
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-[15%] text-rose-300 text-2xl opacity-40 z-0 select-none"
            >
                ♪
            </motion.div>
            <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-40 right-[15%] text-rose-300 text-3xl opacity-30 z-0 select-none"
            >
                🎧
            </motion.div>
            <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[20%] left-[10%] text-rose-200 text-5xl opacity-20 z-0 select-none"
            >
                ♫
            </motion.div>

            <div className="text-center mb-8 z-10 px-4">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-rose-400 italic text-lg md:text-xl mb-2 font-script"
                >
                    Hope they make you smile
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                    className="text-4xl md:text-6xl font-black text-rose-500 mb-6 drop-shadow-md leading-tight font-handwriting"
                >
                    Songs That Feel Like Valentine’s Day
                </motion.h1>
            </div>

            <div className="flex flex-col gap-6 items-center w-full max-w-5xl px-6 z-10 mb-12">
                {songs.map((song, index) => (
                    <SongCard
                        key={song.title}
                        {...song}
                        index={index}
                        delay={index * 0.12 + 0.2}
                        isPlaying={playingIndex === index}
                        onToggle={() => onTogglePlay(index)}
                    />
                ))}
            </div>

            <motion.button
                onClick={onNext}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05, boxShadow: "0 15px 35px -5px rgba(244, 63, 94, 0.5), 0 8px 10px -6px rgba(244, 63, 94, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="z-10 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-10 py-3 rounded-full font-bold text-lg shadow-[0_10px_20px_-5px_rgba(244,63,94,0.4)] flex items-center gap-3 group transition-all cursor-pointer font-heading mb-8"
            >
                Next ✨
                <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 0.5 }}
                >
                    →
                </motion.span>
            </motion.button>

            <MenuButton onClick={onMenuClick} />
        </motion.div>
    );
};

export default MusicPage;

