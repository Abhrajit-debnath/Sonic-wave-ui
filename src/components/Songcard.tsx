import useAudioStore from "../zustand/useAudioStore";

type SongcardProps = {
  authorName: string;
  SongTitle: string;
  isPlayingNow: boolean;
  SongSrc:string
};


const Songcard = ({ authorName, SongTitle, isPlayingNow,SongSrc }: SongcardProps) => {
    const isPlaying = useAudioStore((state) => state.isPlaying);
  return (
   <div className="border-2 border-purple-500 p-3 rounded-xl w-full hover:bg-purple-50/10 transition">
      <div className="flex items-center gap-4">

        {/* Image */}
        <div className="min-w-[70px] w-[30%] h-20 rounded-lg overflow-hidden">
          <img
            src={SongSrc}
            className="w-full h-full object-cover"
            alt="cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">

          {/* Equalizer */}
          {isPlayingNow && (
            <div className="flex gap-1 h-2 mb-2">
              <span className={`w-[3px] ${isPlaying ? "animate-equalizer" : ""} bg-purple-700 [animation-delay:0.1s]`} />
              <span className={`w-[3px] ${isPlaying ? "animate-equalizer" : ""} bg-purple-700 [animation-delay:0.2s]`} />
              <span className={`w-[3px] ${isPlaying ? "animate-equalizer" : ""} bg-purple-700 [animation-delay:0.3s]`} />
            </div>
          )}

          <h1 className="text-blue-400 text-xs font-[nunito]">
            {isPlayingNow ? "Now Playing" : ""}
          </h1>

          <h3 className="font-[poppins] text-sm font-semibold truncate py-1 text-white">
            {SongTitle}
          </h3>

          <h2 className="font-[poppins] text-xs text-gray-200 truncate">
            {authorName}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Songcard;
