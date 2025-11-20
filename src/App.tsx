import { useState } from "react";
import Song from "./components/Song";
import Waveform from "./components/Waveform";
import Sidebar from "./components/Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import SongListSidebar from "./components/SongListSidebar";
import { motion } from "motion/react";


const App = () => {
  const [sidebar, setSidebarOpen] = useState(false);
  return (
    <div className="bg-[#100919] w-screen h-screen">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col justify-center space-y-6 h-screen">
          <header className="flex">
            <motion.h1 className="fixed top-5 left-8 font-bold font-[poppins] text-xl lg:text-2xl">
              Sonic <span className="text-[#9A6DF0]">Wave UI</span>
            </motion.h1>
            <div
              className="fixed top-5 right-5 md:hidden"
              onClick={() => {
                console.log(sidebar);
                
                setSidebarOpen(!sidebar);
              }}
            >
              <RxHamburgerMenu className="text-2xl cursor-pointer" />
            </div>
          </header>

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: sidebar ? "0%" : "100%" }}
            transition={{
              type: "spring",
              stiffness: 130,
              damping: 22,
            }}
            className="fixed top-0 right-0 h-full w-full bg-[#100919] shadow-xl z-50 md:hidden"
          >
            <div
              className="fixed right-5 top-5"
              onClick={() => setSidebarOpen(false)}
            >
              <IoClose className="text-2xl" />
            </div>

            <Sidebar sidebar={sidebar} setSidebarOpen={setSidebarOpen} />
          </motion.div>

          <div className="w-full md:flex gap-10">
            <div className=" md:w-[60%]">
              <Song />
              <Waveform />
            </div>
            <div className="w-[40%] hidden md:block">
              <SongListSidebar/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
