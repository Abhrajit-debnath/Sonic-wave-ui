import { useEffect, useState } from "react";
import useAudioStore from "../zustand/useAudioStore";
import {
  motion
} from "motion/react";

const Song = () => {
  const songs = useAudioStore((state) => state.songs);
  const currentIndex = useAudioStore((state) => state.currentIndex);
  const isPlaying = useAudioStore((state) => state.isPlaying);
  const currentSongDuration = useAudioStore((state) => state.currentSongDuration);
  const [currentSong, setcurrentSong] = useState(songs[currentIndex]);

  useEffect(() => {
    setcurrentSong(songs[currentIndex]);
  }, [currentIndex]);


  return (
    <div className="w-full flex">
      <motion.div
        initial={{
          opacity: 1,
          scale: 1,
        }}
        key={currentIndex}
        animate={{
          opacity: 1,
          scale: isPlaying ? 1.05 : 1,
        }}
        transition={{
          duration: 0.4,
          type: "spring",
          
        }}
        className={`w-full flex items-center gap-5 bg-[#1A112B] p-5 rounded-2xl shadow-xl  transition-all duration-300  backdrop-blur-lg ${
          isPlaying
            ? "border-purple-600 border transition-all duration-300"
            : "border-white/10 border "
        }`}
      >
        {/* ARTWORK */}
        <div className="relative">
          <div className="w-28 h-28 rounded-2xl  overflow-hidden shadow-lg shadow-purple-500/20">
            <img
              src={currentSong.cover}
              className="w-full h-full object-cover"
              alt="cover"
            />
          </div>

          {/* Small glowing dot */}
          <div
            className={`absolute -bottom-1 -right-1 w-4 h-4   ${
              isPlaying ? "bg-[#662dcf] " : "bg-[#8a4bff] "
            } rounded-full shadow-[0_0_10px_3px_rgba(155,100,255,0.7)]"`}
          ></div>
        </div>

        {/* TEXT */}
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-widest text-purple-300">
            Now Playing
          </p>

          <h2 className="text-2xl font-semibold text-white mt-1">
            {currentSong.title}
          </h2>

          <h4 className="text-sm text-gray-300 italic">{currentSong.author}</h4>

          <p className="text-sm mt-1 text-gray-400 italic">{currentSongDuration}</p>

          {/* Progress bar (dummy) */}
          {/* <div className="w-52 mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-purple-500 w-[45%]"></div>
        </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Song;
