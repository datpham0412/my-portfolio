export interface SmallProject {
  title: string
  description: string
  tech: string[]
  github: string
  icon: string
}

export const smallProjects: SmallProject[] = [
  {
    title: "CGPA Calculator",
    description: "A tool for students to calculate their CGPA based on their grades and credits to track their academic performance",
    tech: ["C++", "OOP", "SQLite", "Google Test", "CMake"],
    github: "https://github.com/datpham0412/cgpa-calculator",
    icon: "Calculator"
  },
  {
    title: "Authentication Service",
    description: "Authentication application built using the MERN stack, allow users to register/sign-in and manage their account",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "React"],
    github: "https://github.com/datpham0412/sign-up-application",
    icon: "Lock"
  },
  {
    title: "Password Manager",
    description: "A browser-based password manager that lets user securely save, mask, copy, and delete their login credentials—no backend required",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/datpham0412/password-manager",
    icon: "KeyRound"
  },
  {
    title: "Grocery Hub Management",
    description: "A web-based system for supermarkets to manage user access, order processing, and sales reporting through an intuitive, responsive dashboard.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/datpham0412/grocery-hub-management",
    icon: "ShoppingCart"
  },
  {
    title: "Way To World Cup",
    description: "A turn-based board game where 2–4 players travel the world, buy cities, pay rent, and compete to be the last player with money remaining.",
    tech: ["C#", "OOP", "MySQL", "SplashKit"],
    github: "https://github.com/datpham0412/way-to-world-cup",
    icon: "Dices"
  },
  {
    title: "Reddit Clone",
    description: "A full-featured Reddit clone where users can sign up, create and browse subreddits, post and comment, and upvote or downvote content.",
    tech: ["Next.js", "React", "Tailwind CSS", "Prisma"],
    github: "https://github.com/datpham0412/reddit-clone",
    icon: "Copy"
  }
] 