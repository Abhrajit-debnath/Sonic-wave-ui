import { FaPlay, FaPause } from "react-icons/fa6";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import useAudioStore from "../zustand/useAudioStore";
import { motion } from "motion/react";

const buttonAnim = {
  initial: { scale: 0.7, opacity: 0, y: 20 },
  animate: { scale: 1, opacity: 1, y: 0 },
  transition: {
    duration: 1,
    type: "spring",
    stiffness: 120,
    damping: 12,
  },
};

const Controls = () => {
  const isPlaying = useAudioStore((state) => state.isPlaying);
  const prev = useAudioStore((state) => state.prev);
  const next = useAudioStore((state) => state.next);
  const togglePlay = useAudioStore((state) => state.togglePlay);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 0.20 }}
      className="mt-20 flex gap-5 justify-center items-center"
    >
      {/* Previous Button */}
      <motion.div
        variants={buttonAnim}
        whileHover={{ scale: 1.15, boxShadow: "0 0 20px #6d54e6" }}
        whileTap={{ scale: 0.9, boxShadow: "0 0 20px #6d54e6" }}
        className="bg-[#2C2544] rounded-full p-2"
      >
        <button
          className="bg-linear-to-r from-[#6342E8] to-[#593EC5] rounded-full p-2 cursor-pointer"
          onClick={prev}
        >
          <GrFormPrevious className="text-lg" />
        </button>
      </motion.div>

  
      <motion.div
        variants={buttonAnim}
        whileHover={{ scale: 1.2, boxShadow: "0 0 25px #7c62ff" }}
        whileTap={{ scale: 0.92, boxShadow: "0 0 20px #6d54e6" }}
        className="bg-[#2C2544] rounded-full p-2"
      >
        <button
          className="bg-linear-to-r from-[#6342E8] to-[#593EC5] rounded-full p-3 cursor-pointer"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <FaPause className="text-2xl" />
          ) : (
            <FaPlay className="text-2xl" />
          )}
        </button>
      </motion.div>

  
      <motion.div
        variants={buttonAnim}
        whileHover={{ scale: 1.15, boxShadow: "0 0 20px #6d54e6" }}
        whileTap={{ scale: 0.9, boxShadow: "0 0 20px #6d54e6" }}
        className="bg-[#2C2544] rounded-full p-2"
      >
        <button
          className="bg-linear-to-r from-[#6342E8] to-[#593EC5] rounded-full p-2 cursor-pointer"
          onClick={next}
        >
          <MdNavigateNext className="text-lg" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Controls;
