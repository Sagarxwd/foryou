import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuButton from "./MenuButton";
import FloatingHearts from "./FloatingHearts";

const CARDS = [
    { id: 1, emoji: "🌹", matched: false },
    { id: 2, emoji: "🌹", matched: false },
    { id: 3, emoji: "💖", matched: false },
    { id: 4, emoji: "💖", matched: false },
    { id: 5, emoji: "🎁", matched: false },
    { id: 6, emoji: "🎁", matched: false },
    { id: 7, emoji: "🧸", matched: false },
    { id: 8, emoji: "🧸", matched: false },
    { id: 9, emoji: "🍭", matched: false },
    { id: 10, emoji: "🍭", matched: false },
    { id: 11, emoji: "✨", matched: false },
    { id: 12, emoji: "✨", matched: false },
];

const MemoryGame = ({ onNext, onMenuClick }) => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const [matchedCount, setMatchedCount] = useState(0);

    useEffect(() => {
        shuffleCards();
    }, []);

    const shuffleCards = () => {
        const shuffled = [...CARDS]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, uniqueId: Math.random() }));
        setCards(shuffled);
        setFlippedCards([]);
        setMoves(0);
        setMatchedCount(0);
    };

    const handleCardClick = (index) => {
        if (flippedCards.length === 2 || cards[index].matched || flippedCards.includes(index)) return;

        const newFlipped = [...flippedCards, index];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            setMoves((prev) => prev + 1);
            const [firstIndex, secondIndex] = newFlipped;
            if (cards[firstIndex].emoji === cards[secondIndex].emoji) {
                const newCards = [...cards];
                newCards[firstIndex].matched = true;
                newCards[secondIndex].matched = true;
                setCards(newCards);
                setMatchedCount((prev) => prev + 1);
                setFlippedCards([]);
            } else {
                setTimeout(() => setFlippedCards([]), 1000);
            }
        }
    };

    const hasStarted = moves > 0 || flippedCards.length > 0 || matchedCount > 0;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen relative overflow-y-auto overflow-x-hidden flex flex-col items-center p-4 bg-[#FFF0F3] py-16 md:py-20"
        >
            <FloatingHearts />

            <div className="text-center mb-4 z-10 px-4">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-rose-400 italic text-sm md:text-base mb-1 font-script"
                >
                    A little fun for today
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-6xl font-black text-rose-500 mb-2 drop-shadow-sm leading-tight font-handwriting"
                >
                    Valentine Memory Match
                </motion.h1>
                <p className="text-[#ff8da1] font-bold text-xs md:text-sm mb-4 font-heading italic">
                    Match the pairs and test your memory 🧠
                </p>
            </div>

            <div className="z-10 flex gap-4 md:gap-6 mb-6">
                <div className="bg-white/80 backdrop-blur-sm border-2 border-rose-200 rounded-2xl p-3 md:p-4 shadow-md flex flex-col items-center min-w-[80px] md:min-w-[120px]">
                    <span className="text-gray-500 font-bold text-[0.6rem] md:text-xs uppercase tracking-widest mb-1 font-sans">Moves</span>
                    <span className="text-rose-500 text-xl md:text-3xl font-heading">{moves}</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border-2 border-rose-200 rounded-2xl p-3 md:p-4 shadow-md flex flex-col items-center min-w-[80px] md:min-w-[120px]">
                    <span className="text-gray-500 font-bold text-[0.6rem] md:text-xs uppercase tracking-widest mb-1 font-sans">Matched</span>
                    <span className="text-rose-500 text-xl md:text-3xl font-heading">{matchedCount}/6</span>
                </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 px-4 md:px-8 z-10 max-w-5xl mb-8">
                {cards.map((card, index) => (
                    <motion.div
                        key={card.uniqueId}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCardClick(index)}
                        className="relative w-20 h-20 md:w-28 md:h-28 cursor-pointer"
                    >
                        <div className={`absolute inset-0 transition-transform duration-500 transform-gpu preserve-3d ${flippedCards.includes(index) || card.matched ? "rotate-y-180" : ""}`}>
                            {/* Front (Hidden) */}
                            <div className="absolute inset-0 bg-rose-400 rounded-xl md:rounded-2xl border-2 border-white/50 shadow-md flex items-center justify-center text-white text-2xl md:text-3xl font-bold backface-hidden">
                                ?
                            </div>
                            {/* Back (Visible Emojis) */}
                            <div className="absolute inset-0 bg-white/90 rounded-xl md:rounded-2xl border-2 border-rose-200 shadow-md flex items-center justify-center text-3xl md:text-5xl rotate-y-180 backface-hidden">
                                {card.emoji}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 z-20 relative">
                <motion.button
                    disabled={!hasStarted}
                    onClick={(e) => {
                        e.stopPropagation();
                        shuffleCards();
                    }}
                    whileHover={hasStarted ? { scale: 1.05, backgroundColor: "rgba(255, 228, 232, 1)" } : {}}
                    whileTap={hasStarted ? { scale: 0.95 } : {}}
                    className={`px-8 py-3 rounded-full font-bold text-lg shadow-sm font-heading transition-all relative z-30 ${hasStarted
                        ? "bg-rose-50 text-rose-500 border-2 border-rose-200 cursor-pointer opacity-100"
                        : "bg-gray-100/50 text-gray-400 border-2 border-gray-200 cursor-not-allowed opacity-50"
                        }`}
                >
                    Reset Game
                </motion.button>

                <motion.button
                    onClick={onNext}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 15px 35px -5px rgba(244, 63, 94, 0.5), 0 8px 10px -6px rgba(244, 63, 94, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-10 py-3 rounded-full font-bold text-lg shadow-[0_10px_20px_-5px_rgba(244,63,94,0.4)] flex items-center gap-3 group transition-all cursor-pointer font-heading relative z-30"
                >
                    Next ✨
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.5 }}
                    >
                        →
                    </motion.span>
                </motion.button>
            </div>

            <MenuButton onClick={onMenuClick} />

            <style dangerouslySetInnerHTML={{
                __html: `
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />
        </motion.div>
    );
};

export default MemoryGame;
