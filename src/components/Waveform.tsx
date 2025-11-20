import  { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import Controls from "./Controls";
import useAudioStore from "../zustand/useAudioStore";

const Waveform = () => {
  const containerRef = useRef(null);

  const [durationLabel, setDurationLabel] = useState("00:00");
  const [currentTimeLabel, setCurrentTimeLabel] = useState("00:00");

  const setDuration = useAudioStore((state) => state.setDuration);
  const setCurrentTime = useAudioStore((state) => state.setCurrentTime);
  const setWavesurfer = useAudioStore((state) => state.setWavesurfer);
  const songs = useAudioStore((state) => state.songs);
  const currentIndex = useAudioStore((state) => state.currentIndex);

  const formatTime = (seconds: number) => {
    if (!seconds) return "00:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ws = WaveSurfer.create({
      container,
      url: songs[currentIndex].src,
      cursorColor: "violet",
      barWidth: 2,
      barRadius: 4,
      barGap: 3,
      height: 80,
      normalize: true,
      waveColor: "rgba(154,109,240,0.25)",
      progressColor: "#6342E8",
    });



    setWavesurfer(ws);
    ws.on("ready", () => {
      const dur = ws.getDuration();

      setDurationLabel(formatTime(dur));
      setDuration(formatTime(dur));
    });
    ws.on("audioprocess", () => {
      const currentDur = ws.getCurrentTime();
      setCurrentTimeLabel(formatTime(currentDur));
      setCurrentTime(currentDur);
    });

    return () => ws.destroy();
  }, []);

  return (
    <div>
      <div ref={containerRef} className="mt-8"/>

      <div className="flex justify-between">
        <div className="">
          <p className="mt-2 text-sm text-purple-300">{currentTimeLabel}</p>
        </div>
        <div className="">
          <p className="mt-2 text-sm text-purple-300">{durationLabel}</p>
        </div>
      </div>

      <Controls />
    </div>
  );
};

export default Waveform;
