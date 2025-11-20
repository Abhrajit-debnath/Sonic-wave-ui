import { motion } from "motion/react";
import useAudioStore from "../zustand/useAudioStore";
import Songcard from "./Songcard";
import "../index.css";

const SongListSidebar = () => {
  const songs = useAudioStore((state) => state.songs);
  const selectSong = useAudioStore((state) => state.selectSong);

  return (
    <div className="rounded-lg w-full p-5 h-[470px] flex flex-col custom-scrollbar border-white/10 border">
     
     
      <h2 className="font-[poppins] text-xl font-semibold">My Playlist</h2>

    
      <div className="mt-4 overflow-y-auto flex-1 pr-1.5">
        <div
          className="
            grid 
            grid-cols-1
            2xl:grid-cols-2
            gap-3
          "
        >
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.21,
                duration: 1.5,
                type: "spring",
                stiffness: 150,
                damping: 20,
                ease: "linear",
              }}
              onClick={() => selectSong(song.id)}
              className="cursor-pointer"
            >
              <Songcard
                authorName={song.author}
                SongTitle={song.title}
                SongSrc={song.cover}
                isPlayingNow={song.isPlayingNow || false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongListSidebar;
