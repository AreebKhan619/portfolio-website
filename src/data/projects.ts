import { Project } from '@/types/portfolio'

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    name: "Portfolio Website",
    description: "The current website being viewed. Built with Next.js and TypeScript for optimal performance and SEO.",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    liveLink: "https://areeb.co.in",
    repoLink: "https://github.com/AreebKhan619/portfolio-website",
  },
  {
    id: 'game-2048',
    name: "2048 Game",
    description: "Classic game of 2048 in ReactJS. Was addicted to the game; thought of making a version of it myself.",
    technologies: [
      { name: "ReactJS" },
      { name: "styled-components" },
    ],
    liveLink: "https://2048-three.vercel.app",
    repoLink: "https://github.com/AreebKhan619/2048",
  },
  {
    id: 'sticky-notes',
    name: "Sticky Notes",
    description: "Draggable sticky notes application. My first ReactJS project exploring component state and user interactions.",
    technologies: [
      { name: "ReactJS" },
      { name: "CSS3" },
    ],
    liveLink: "https://stickynotesinreact.netlify.app/",
    repoLink: "https://github.com/AreebKhan619/react-sticky-notes",
  },
  {
    id: 'movies-explorer',
    name: "Movies Explorer",
    description: "App created using MERN stack which acts like a movie explorer for browsing, managing and playing stored movies, with offline metadata caching (kind of like Plex).",
    technologies: [
      { name: "ReactJS" },
      { name: "Chakra UI" },
      { name: "NodeJS" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    repoLink: "https://github.com/AreebKhan619/MoviesExplorer",
  },
  {
    id: 'snake-game',
    name: "Snake Game",
    description: "Classic game of Snake implemented in ReactJS with smooth animations and responsive controls.",
    technologies: [
      { name: "ReactJS" },
      { name: "CSS3" },
    ],
    repoLink: "https://github.com/AreebKhan619/snake-game",
  },
]