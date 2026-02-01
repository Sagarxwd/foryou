import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./components/HomePage";
import ValentineNote from "./components/ValentineNote";
import Letter from "./components/Letter";
import MusicPage from "./components/MusicPage";
import MemoryGame from "./components/MemoryGame";
import Pictures from "./components/Pictures";
import ReasonsPage from "./components/ReasonsPage";
import FinalPage from "./components/FinalPage";
import SuccessPage from "./components/SuccessPage";
import Sidebar from "./components/Sidebar";

// Import your audio files
import track1 from "./assets/audio/Jeena Jeena Badlapur Varun_320(PagaiWorld.com).mp3";
import track2 from "./assets/audio/Tera Deedar Hua From Jannat 2-320kbps.mp3";
import track3 from "./assets/audio/Baatein Karo-320kbps.mp3";

const SONGS = [
  {
    title: "Jeena Jeena",
    subtitle: "Because closeness matters 🤍",
    color: "#bbf7d0",
    bgColor: "bg-[#E8F5E9]",
    src: track1
  },
  {
    title: "Tera Deedar Hua",
    subtitle: "When emotions say more than words 💕",
    color: "#bfdbfe",
    bgColor: "bg-[#E3F2FD]",
    src: track2
  },
  {
    title: "Baatein Karo",
    subtitle: "Some feelings feel calm and deep 💫",
    color: "#fecaca",
    bgColor: "bg-[#F5E6D3]",
    src: track3
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState("loading");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Persistent Audio State
  const [playingIndex, setPlayingIndex] = useState(null);
  const audioRefs = useRef([]);

  // Initialize audio refs once
  useEffect(() => {
    audioRefs.current = SONGS.map((song) => {
      const audio = new Audio(song.src);
      audio.onended = () => setPlayingIndex(null);
      return audio;
    });

    return () => {
      audioRefs.current.forEach(audio => {
        audio.pause();
        audio.src = "";
      });
    };
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const togglePlay = (index) => {
    const currentAudio = audioRefs.current[index];

    if (playingIndex === index) {
      currentAudio.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        audioRefs.current[playingIndex].pause();
        audioRefs.current[playingIndex].currentTime = 0;
      }
      currentAudio.play();
      setPlayingIndex(index);
    }
  };

  return (
    <div className="antialiased font-sans">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
      />
      <AnimatePresence mode="wait">
        {currentPage === "loading" && (
          <LoadingScreen key="loading" onComplete={() => setCurrentPage("home")} />
        )}
        {currentPage === "home" && (
          <HomePage key="home" onOpen={() => setCurrentPage("note")} onMenuClick={toggleSidebar} />
        )}
        {currentPage === "note" && (
          <ValentineNote key="note" onFinish={() => setCurrentPage("letter")} onMenuClick={toggleSidebar} />
        )}
        {currentPage === "letter" && (
          <Letter key="letter" onNext={() => setCurrentPage("music")} onMenuClick={toggleSidebar} />
        )}
        {currentPage === "music" && (
          <MusicPage
            key="music"
            onNext={() => setCurrentPage("game")}
            onMenuClick={toggleSidebar}
            songs={SONGS}
            playingIndex={playingIndex}
            onTogglePlay={togglePlay}
          />
        )}
        {currentPage === "game" && (
          <MemoryGame key="game" onNext={() => setCurrentPage("pictures")} onMenuClick={toggleSidebar} />
        )}
        {currentPage === "pictures" && (
          <Pictures key="pictures" onNext={() => setCurrentPage("reasons")} onMenuClick={toggleSidebar} />
        )}
        {currentPage === "reasons" && (
          <ReasonsPage key="reasons" onNext={() => setCurrentPage("final")} onMenuClick={toggleSidebar} />
        )}
        {currentPage === "final" && (
          <FinalPage
            key="final"
            onRestart={() => {
              // Stop music on restart
              if (playingIndex !== null) {
                audioRefs.current[playingIndex].pause();
                audioRefs.current[playingIndex].currentTime = 0;
                setPlayingIndex(null);
              }
              setCurrentPage("loading");
            }}
            onSeal={() => setCurrentPage("sealing")}
            onMenuClick={toggleSidebar}
          />
        )}
        {currentPage === "sealing" && (
          <LoadingScreen
            key="sealing"
            title="Sealing with Love"
            message="Your message is being sent to the stars..."
            onComplete={() => setCurrentPage("success")}
          />
        )}
        {currentPage === "success" && (
          <SuccessPage
            key="success"
            onRestart={() => {
              if (playingIndex !== null) {
                audioRefs.current[playingIndex].pause();
                audioRefs.current[playingIndex].currentTime = 0;
                setPlayingIndex(null);
              }
              setCurrentPage("loading");
            }}
            onMenuClick={toggleSidebar}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;