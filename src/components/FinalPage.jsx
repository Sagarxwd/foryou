import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";
import FloatingHearts from "./FloatingHearts";
import MenuButton from "./MenuButton";

const FinalPage = ({ onRestart, onSeal, onMenuClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen relative overflow-y-auto overflow-x-hidden flex flex-col items-center bg-[#FFF1F2] py-16 md:py-20 px-4"
        >
            <FloatingHearts />

            <MenuButton onClick={onMenuClick} />

            <div className="text-center mb-4 md:mb-6 z-10" >
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-rose-400 italic text-lg mb-1 font-script"
                >
                    the grand finale...
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-black text-rose-500 mb-2 drop-shadow-sm font-handwriting"
                >
                    One Last Valentine Thought
                </motion.h1>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="bg-pink-100/80 rounded-[1.5rem] p-3 md:p-6 border-2 md:border-4 border-pink-400/30 shadow-2xl max-w-4xl w-full z-10 relative overflow-hidden"
            >
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-rose-400 rounded-full flex items-center justify-center shadow-lg">
                        <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-rose-500 font-script text-xl md:text-2xl">
                        Final Letter
                    </h2>
                </div>

                <div className="bg-white/70 rounded-xl p-4 md:p-6 font-handwriting text-lg md:text-lg text-gray-800 leading-relaxed shadow-inner border border-white/50">
                    <p className="mb-3 md:mb-4 text-rose-500 italic">Hey Aaru,</p>
                    <p className="mb-2 md:mb-3 font-medium">This wasn't about perfection, just honesty.</p>
                    <p className="mb-2 md:mb-3 font-medium">I wanted you to feel appreciated today.</p>
                    <p className="mb-0 font-medium">Whatever comes next, I'm glad this moment exists.</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-6 md:mt-8 gap-4">
                    <p className="text-[8px] md:text-[10px] text-rose-400/80 font-sans italic max-w-[200px] leading-tight text-center md:text-left">
                        Bye Bye , Good night    Made by Swgarxwd
                    </p>

                    <div className="flex gap-3">
                        <motion.button
                            onClick={onSeal}
                            whileHover={{ scale: 1.05, boxShadow: "0 15px 35px -5px rgba(244, 63, 94, 0.5), 0 8px 10px -6px rgba(244, 63, 94, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-[0_10px_20px_-5px_rgba(244,63,94,0.4)] flex items-center gap-2 text-sm md:text-base font-heading group transition-all cursor-pointer"
                        >
                            Seal It
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 0.5 }}
                                className="flex items-center gap-1"
                            >
                                <Mail className="w-4 h-4" /> <Heart className="w-4 h-4 fill-current" />
                            </motion.span>
                        </motion.button>

                        <motion.button
                            onClick={onRestart}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(216, 180, 254, 1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-purple-200/80 text-purple-700 px-8 py-3 rounded-full font-bold shadow-md text-sm md:text-base font-heading transition-colors"
                        >
                            Restart
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default FinalPage;
