import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    Sparkles,
    Music,
    Brain,
    Camera,
    Heart,
    Mail,
    PartyPopper
} from "lucide-react";

const Sidebar = ({ isOpen, onClose, currentPage, onNavigate }) => {
    const menuItems = [
        { id: "home", label: "Start", icon: Sparkles },
        { id: "note", label: "Activities", icon: PartyPopper },
        { id: "music", label: "Chill Zone", icon: Music },
        { id: "game", label: "Memory Game", icon: Brain },
        { id: "pictures", label: "Moments", icon: Camera },
        { id: "reasons", label: "Why Special", icon: Heart },
        { id: "letter", label: "Letter", icon: Mail },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
                    />

                    {/* Sidebar Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-[280px] bg-[#FFF1F2] border-l border-rose-100 shadow-2xl z-[110] flex flex-col p-6 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-heading text-rose-500 italic">Explore</h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-rose-100 rounded-full transition-colors text-rose-400"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-3 flex-1">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = currentPage === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            onNavigate(item.id);
                                            onClose();
                                        }}
                                        className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${isActive
                                            ? "bg-rose-400 text-white shadow-lg"
                                            : "bg-white/60 text-rose-400 hover:bg-pink-100"
                                            }`}
                                    >
                                        <div className={`p-2 rounded-xl ${isActive ? "bg-white/20" : "bg-rose-50"}`}>
                                            <Icon size={20} className={isActive ? "text-white" : "text-rose-400"} />
                                        </div>
                                        <span className="font-bold flex-1 text-left font-heading">{item.label}</span>
                                        {isActive && <motion.span layoutId="active-nav" className="text-white text-xs">→</motion.span>}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="mt-auto pt-6 text-center">
                            <p className="text-rose-400 font-medium italic text-xs flex items-center justify-center gap-1 font-script">
                                Made with <Heart size={10} className="fill-rose-400" /> for you
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;
