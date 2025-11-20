import Songcard from "./Songcard";
import useAudioStore from "../zustand/useAudioStore";
import { motion } from "motion/react";

export type SonglistProps = {
  setSidebarOpen: (value: boolean) => void;
  sidebar: boolean;
};

const Songlist = ({ setSidebarOpen, sidebar }: SonglistProps) => {
  const songs = useAudioStore((state) => state.songs);

  const selectSong = useAudioStore((state) => state.selectSong);

  return (
    <div
      className="
        grid gap-4
        grid-cols-1
        xxss:grid-cols-2 
      "
    >
      {songs.map((song) => (
        <motion.div
          onClick={() => {
            selectSong(song.id);
            setSidebarOpen(false);
          }}
          key={song.id}
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{ opacity: sidebar ? 1 : 0, y: sidebar ? 0 : 50 }}
          transition={{
            delay: song.id * 0.21,
            duration: 1.5,
            type: "spring",
            stiffness: 130,
            damping: 20,
            ease: "linear",
          }}
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
  );
};

export default Songlist;
