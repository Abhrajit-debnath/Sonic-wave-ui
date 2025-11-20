import { create } from "zustand";
import { songs } from "../assets/songs";
import type { Song } from "../assets/songs";

interface PlayerState {
  songs: Song[];
  currentIndex: number;
  isPlaying: boolean;
  currentSongDuration: string;
  currentSongTime: number;
  wavesurfer: any;

  // actions

  selectSong: (index: number) => void;

  togglePlay: () => void;
  next: () => void;
  prev: () => void;
  setDuration: (d: string) => void;
  setCurrentTime: (t: number) => void;
  setIsPlaying: (v: boolean) => void;
  setWavesurfer: (ws: any) => void;
}
const useAudioStore = create<PlayerState>((set, get) => ({
  songs,
  currentIndex: 0,
  isPlaying: false,
  currentSongDuration: "",
  currentSongTime: 0,
  wavesurfer: null,

  setWavesurfer: (ws) => set({ wavesurfer: ws }),

  selectSong: (index) => {
    const ws = get().wavesurfer;
    if (!ws) return;

    const updatedSongs = get().songs.map((s, i) => ({
      ...s,
      isPlayingNow: i === index,
    }));

    set({ songs: updatedSongs, currentIndex: index, isPlaying: true });

    const song = updatedSongs[index];
    ws.load(song.src);
    ws.get

    ws.on("ready", () => ws.play());
  },

  togglePlay: () => {
    const ws = get().wavesurfer;
    if (!ws) return;

    if (ws.isPlaying()) {
      ws.pause();
      set({ isPlaying: false });
    } else {
      ws.play();
      set({ isPlaying: true });
    }
  },

  next: () => {
    const { currentIndex, songs, selectSong } = get();
    const nextIndex = (currentIndex + 1) % songs.length;
    selectSong(nextIndex);
  },

  prev: () => {
    const { currentIndex, songs, selectSong } = get();
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    selectSong(prevIndex);
  },

  setDuration: (d) => set({ currentSongDuration: d }),
  setCurrentTime: (t) => set({ currentSongTime: t }),
  setIsPlaying: (v) => set({ isPlaying: v }),
}));

export default useAudioStore;
