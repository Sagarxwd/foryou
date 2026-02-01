import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const FloatingHearts = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Math.random().toString(36).substr(2, 9);
            const left = Math.random() * 100;
            const size = Math.random() * (32 - 16) + 16;
            const duration = Math.random() * (10 - 6) + 6;
            const delay = Math.random() * 2;

            setHearts((prev) => [...prev, { id, left, size, duration, delay }]);

            // Cleanup heart after animation
            setTimeout(() => {
                setHearts((prev) => prev.filter((h) => h.id !== id));
            }, (duration + delay) * 1000);
        }, 400); // Increased frequency

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <AnimatePresence>
                {hearts.map((heart) => (
                    <motion.div
                        key={heart.id}
                        initial={{ y: "110vh", opacity: 0, x: 0, scale: 0 }}
                        animate={{
                            y: "-10vh",
                            opacity: [0, 0.7, 0.7, 0],
                            x: [0, Math.random() * 60 - 30, Math.random() * 60 - 30],
                            scale: [0, 1, 1, 0.5],
                            rotate: [0, Math.random() * 45 - 22.5, Math.random() * 90 - 45]
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: heart.duration,
                            ease: "easeOut",
                            delay: heart.delay
                        }}
                        className="absolute text-rose-400"
                        style={{ left: `${heart.left}%` }}
                    >
                        <Heart
                            size={heart.size}
                            className="fill-rose-300/30"
                            strokeWidth={1.5}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default FloatingHearts;
