import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FallingPetals = () => {
    const [petals, setPetals] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Math.random().toString(36).substr(2, 9);
            const left = Math.random() * 100;
            const size = Math.random() * (20 - 10) + 10;
            const duration = Math.random() * (10 - 6) + 6;
            const delay = Math.random() * 2;

            setPetals((prev) => [...prev, { id, left, size, duration, delay }]);

            // Cleanup petal after animation
            setTimeout(() => {
                setPetals((prev) => prev.filter((p) => p.id !== id));
            }, (duration + delay) * 1000);
        }, 600);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <AnimatePresence>
                {petals.map((petal) => (
                    <motion.div
                        key={petal.id}
                        initial={{ y: "-10vh", opacity: 0, x: 0, rotate: 0 }}
                        animate={{
                            y: "110vh",
                            opacity: [0, 0.4, 0.4, 0],
                            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
                            rotate: [0, 180, 360],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: petal.duration,
                            delay: petal.delay,
                            ease: "linear"
                        }}
                        className="absolute"
                        style={{
                            left: `${petal.left}%`,
                            width: petal.size,
                            height: petal.size * 0.8,
                            backgroundColor: "#FFC2D1",
                            borderRadius: "50% 0 50% 50%",
                            filter: "blur(1px)",
                            opacity: 0.3
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default FallingPetals;
