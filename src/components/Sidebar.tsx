import Songlist, { type SonglistProps } from "./Songlist";
import { motion } from "motion/react";

const Sidebar = ({ setSidebarOpen, sidebar }: SonglistProps) => {
  return (
    <div className="h-full flex flex-col p-5">
      <motion.h2
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={{ opacity: sidebar ? 1 : 0, x: sidebar ? 0 : 50 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 130,
          damping: 25,
         
        }}
        className="font-[poppins] text-xl font-semibold"
      >
        My Playlist
      </motion.h2>

      <div className="flex-1 overflow-y-auto mt-5 ">
        <Songlist sidebar={sidebar} setSidebarOpen={setSidebarOpen} />
      </div>
    </div>
  );
};

export default Sidebar;
