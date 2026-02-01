import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onComplete, title = "Something Special", message = "is being prepared for you..." }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 25);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-br from-[#fff5f7] via-[#ffe4e9] to-[#ffd1dc] flex flex-col items-center justify-center p-4 font-sans"
        >
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative mb-12"
            >
                <div className="w-40 h-40 bg-pink-100 rounded-full border-4 border-[#e91e63]/20 shadow-inner flex items-center justify-center relative overflow-hidden">
                    <div className="w-full h-full bg-[#ffdee9] rounded-full relative">
                        <div className="absolute top-1/2 left-1/4 w-3 h-6 bg-[#4a1d2c] rounded-full"></div>
                        <div className="absolute top-1/2 right-1/4 w-3 h-6 bg-[#4a1d2c] rounded-full"></div>
                        <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-4 h-2 bg-[#4a1d2c] rounded-full opacity-30"></div>
                        <div className="absolute top-[60%] left-[15%] w-5 h-3 bg-[#ff99ac] rounded-full blur-[2px]"></div>
                        <div className="absolute top-[60%] right-[15%] w-5 h-3 bg-[#ff99ac] rounded-full blur-[2px]"></div>
                    </div>
                    <div className="absolute bottom-0 w-full h-8 bg-[#e91e63] rounded-t-full opacity-80"></div>
                </div>
            </motion.div>

            <div className="text-center mb-8">
                <h1 className="text-[#e91e63] text-5xl md:text-6xl font-black italic tracking-tight mb-2 drop-shadow-sm font-handwriting">
                    {title}
                </h1>
                <p className="text-[#ff8da1] text-lg font-medium tracking-wide italic leading-tight font-script">
                    {message}
                </p>
            </div>

            <div className="w-full max-w-sm">
                <div className="h-4 w-full bg-white/50 rounded-full overflow-hidden border border-pink-200 shadow-sm">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-gradient-to-r from-[#ff8da1] to-[#e91e63]"
                    />
                </div>
                <div className="flex justify-center gap-2 mt-4">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            className="w-3 h-3 bg-[#ff8da1] rounded-full"
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
