import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Emir Ayar",
  role: "Game Developer",
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
    name: "LIBER∞",
    description: "Bu oyun Google Oyun ve Uygulama Akademisi 2024 Bootcamp'i bünyesinde Unity Grup 19 üyeleri tarafından hazırlanmıştır. LIBER∞, singleplayer şeklinde oynanan, diyalog sistemi içeren, meslek & mini oyunlarıyla PC oyun çeşitlerini denemenize imkan tanıyan 3D bir hikaye oyunudur. Hikayenin ana kahramanı John, bir iş adamının ölümüyle ilgili olarak suçlanmıştır. Ölüm şüpheli bir şekilde gerçekleşmiş, deliller John'u suçlu göstermiş ve John adil olmayan bir şekilde hapis cezasına çarptırılmıştır. 25 yılın ardından John hapishaneden kaçar. Bu kaçış onun masumiyetini kanıtlama ve gerçek suçluyu bulma amacıyla başlar.",
    genres: ["Adventure"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/EylulKavak/LIBER8" },
      { source: LinkImageSource.ItchIo, url: "https://elbruznartthawkho.itch.io/liber8" },
    ],
    media: [
      { source: "/images/games/LIBER∞/Screenshot_1.jpg", type: MediaType.Image },
      { source: "https://youtu.be/DGz_yOnT-yY", type: MediaType.YouTube },
      { source: "/images/games/LIBER∞/Screenshot_2.jpg", type: MediaType.Image },
      { source: "/images/games/LIBER∞/Screenshot_3.jpg", type: MediaType.Image },
      { source: "/images/games/LIBER∞/Screenshot_4.jpg", type: MediaType.Image },
      { source: "/images/games/LIBER∞/Screenshot_5.jpg", type: MediaType.Image },
    ],
  },
  {
    name: "T19",
    description: "GAME_DESCRIPTION",
    genres: ["FPS", "Puzzle"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://elbruznartthawkho.itch.io/t19" },
    ],
    media: [
      { source: "/images/games/T19/Screenshot_1.jpg", type: MediaType.Image },
      { source: "/images/games/T19/Screenshot_2.jpg", type: MediaType.Image },
      { source: "/images/games/T19/Screenshot_3.jpg", type: MediaType.Image },
      { source: "/images/games/T19/Screenshot_4.jpg", type: MediaType.Image },
    ],
  },
  {
    name: "Pengu",
    description: "MağaraJam 2025 için 48 saatte tek başıma geliştirilmiştir. Mahsur kaldığınız eski bir araştırma tesisinde penguenleri kontrol ederek bulmacaları çözün ve onlarla beraber kurtulun.",
    genres: ["Puzzle", "Cozy"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/emirayar/Pengu" },
      { source: LinkImageSource.ItchIo, url: "https://emirayar.itch.io/pengu" },
    ],
    media: [
      { source: "/images/games/Pengu/Screenshot_1.jpg", type: MediaType.Image },
      { source: "/images/games/Pengu/Screenshot_2.jpg", type: MediaType.Image },
      { source: "/images/games/Pengu/Screenshot_3.jpg", type: MediaType.Image },
      { source: "/images/games/Pengu/Screenshot_4.jpg", type: MediaType.Image },
    ],
  },
  {
    name: "Stunt Double",
    description: "Google Oyun ve Uygulama Akademisi game jam'i için 48 saatte yapıldı. Aynı zamanda ilk katıldığım ve ilk projemi bitirdiğim game jam. Dublörler aynı süper kahramanlar gibi değil mi ? Kimsenin cesaret edemediği hareketleri yapıyorlar. Belki de gerçekten süper kahramanlardır. En iyi aksiyon filmlerinden biri için dublör olarak seçildin. Zamanı manipüle et ve bu şansı kaçırma!",
    genres: ["Platformer", "ACTION"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://emirayar.itch.io/stuntdouble" },
    ],
    media: [
      { source: "/images/games/Stunt Double/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=IWu4RE9dfsM", type: MediaType.YouTube },
      { source: "/images/games/Stunt Double/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Stunt Double/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Stunt Double/Screenshot_4.png", type: MediaType.Image },
    ],
  },  
  {
    name: "Ketchup",
    description: "GAME_DESCRIPTION",
    genres: ["Card Game", "Arcade", "Mobile"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://emirayar.itch.io/ketchup" },
    ],
    media: [
      { source: "/images/games/Ketchup/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Ketchup/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Ketchup/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Ketchup/Screenshot_4.png", type: MediaType.Image },
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