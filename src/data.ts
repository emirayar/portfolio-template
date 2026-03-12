import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Emir Ayar",
  role: "",
  introduction: "SHORT_INTRODUCTION",
  description: "TELL_ABOUT_YOURSELF",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/emir-ayar-portfolyo.pdf`,
  links: {
    github: "https://github.com/emirayar",
    itchIO: "https://emirayar.itch.io",
    linkedIn: "https://www.linkedin.com/in/emirayar",
  }
};

export const games: Game[] = [
  {
    name: "T19",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://elbruznartthawkho.itch.io/t19" },
    ],
    media: [
      { source: "/images/games/T19/Screenshot_1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/T19/Screenshot_2.jpg", type: MediaType.Image },
      { source: "/images/games/T19/Screenshot_3.jpg", type: MediaType.Image },
      { source: "/images/games/T19/Screenshot_4.jpg", type: MediaType.Image },
    ],
  },
  {
    name: "GAME_NAME",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  }
];