import React from "react";
import { Menu } from "lucide-react";

const MenuButton = ({ onClick }) => {
    return (
        <div className="fixed top-6 right-6 z-50">
            <button
                onClick={onClick}
                className="w-10 h-10 bg-white/50 backdrop-blur-sm rounded-xl flex flex-col gap-1 items-center justify-center cursor-pointer hover:bg-pink-100 transition-colors border border-rose-100/50"
            >
                <div className="w-5 h-0.5 bg-rose-400 rounded-full"></div>
                <div className="w-5 h-0.5 bg-rose-400 rounded-full"></div>
                <div className="w-5 h-0.5 bg-rose-400 rounded-full"></div>
            </button>
        </div>
    );
};

export default MenuButton;
