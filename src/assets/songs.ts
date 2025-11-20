export interface Song {
  id: number;
  title: string;
  author: string;
  cover: string;
  src: string;
  duration?: number;
  isPlayingNow?: boolean;
}

export const songs: Song[] = [
  {
    id: 0,
    title: "Blue Eyes",
    author: "Yo Yo Honey Singh",
    cover:
      "https://tse1.mm.bing.net/th/id/OIP.KJ4YvqURvTaYDnNyCsWKWQHaF6?rs=1&pid=ImgDetMain&o=7&rm=3",
    src: "/data/songs/Blue Eyes .mp3",
  },

  {
    id: 1,
    title: "AAdat",
    author: "Yo Yo Honey Singh",
    cover:
      "https://tse2.mm.bing.net/th/id/OIP.sqdqsSYqpxLvLkFZJDFdGwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    src: "/data/songs/AADAT (Audio)： YO YO HONEY SINGH ｜ 51 GLORIOUS DAYS ｜ AP DHILLON.mp3",
  },

  {
    id: 2,
    title: "Phurr",
    author: "Yo Yo Honey Singh",
    cover:
      "https://tse4.mm.bing.net/th/id/OIF.OtTlKxWujo8763XWGPzxqQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    src: "/data/songs/PHURR Official Song – Kapil Sharma x Yo Yo Honey Singh ｜ Josh Brar ｜ Kis Kisko Pyaar Karoon 2.mp3",
  },
  {
    id: 3,
    title: "Call Aundi",
    author: "Yo Yo Honey Singh",
    cover: "https://i.ytimg.com/vi/iMd5EJVe6MA/maxresdefault.jpg",
    src: "/data/songs/Call Aundi.mp3",
  },
  {
    id: 4,
    title: "Ishare Tere",
    author: "Guru Randhawa",
    cover:
      "https://filmymantra.com/wp-content/uploads/2018/08/WhatsApp-Image-2018-08-28-at-3.07.05-PM.jpeg",
    src: "/data/songs/Ishare Tere.mp3",
  },
  {
    id: 5,
    title: "Kalaastar",
    author: "Yo Yo Honey Singh",
    cover: "https://i.scdn.co/image/ab67616d0000b273c90075e08033984b46b1df93",
    src: "/data/songs/Kalaastar.mp3",
  },
  {
    id: 6,
    title: "Lahore",
    author: "Guru Randhawa",
    cover: "https://i.scdn.co/image/ab67616d0000b2731b82f0c68a62faa2bde45675",
    src: "/data/songs/Lahore.mp3",
  },
  {
    id: 7,
    title: "Made In India",
    author: "Guru Randhawa",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c7/dc/0d/c7dc0d3b-a460-6587-ed3a-a294616f6c1e/8903431676887_cover.jpg/800x800cc.jpg",
    src: "/data/songs/Made In India.mp3",
  },
  {
    id: 8,
    title: "Buttabomma",
    author: "Armaan Mallik",
    cover: "https://i.zoomtventertainment.com/media/buttabomma.jpg",
    src: "/data/songs/Buttabomma.mp3",
  },
  {
    id: 9,
    title: "Mujhko Barsaat",
    author: "Arijit Singh",
    cover: "https://i.ytimg.com/vi/56bSAWFgZ1I/maxresdefault.jpg",
    src: "/data/songs/Mujhko Barsaat.mp3",
  },
  {
    id: 10,
    title: "Vigdiyan Heeran",
    author: "Yo Yo Honey Singh",
    cover:
      "https://tse1.mm.bing.net/th/id/OIP.ZGQGqEYw9T-3QrhQLCgHfQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    src: "/data/songs/Vigdiyan Heeran.mp3",
  },
  {
    id: 11,
    title: "Tumhe Apna.",
    author: "Yo Yo Honey Singh",
    cover: "https://i.ytimg.com/vi/eDU-6Zt44Do/maxresdefault.jpg",
    src: "/data/songs/Tumhe Apna..mp3",
  },
];
