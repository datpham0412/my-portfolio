export interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  github: string | null
  live: string | null
  featured: boolean
  privateRepo?: boolean
}

export const projects: Project[] = [
  {
    title: "MatchFlow",
    description:
      "One-click web app that extracts invoice data from PDFs and matches it against purchase orders, eliminating manual reconciliation.",
    tech: ["ASP.NET", "React", "Nginx", "Azure", "SQL Server"],
    image: "/matchflow.png",
    github: "https://github.com/datpham0412/invoice-processor",
    live: "https://matchflow.app",
    featured: true,
  },
  {
    title: "Quest Developer Portal",
    description: "Centralized portal for internal and external developers to explore, test, and integrate with Quest Payment Systems' APIs.",
    tech: ["ASP.NET", "React", "Clerk", "AWS", "Next.js"],
    image: "/dev_portal.png",
    github: null,
    live: "https://dev.questps.com.au/",
    featured: true,
    privateRepo: true,
  },
  {
    title: "Covid-19 Prediction Model",
    description: "A machine learning model that predicts the number of cases of Covid-19 in Australia.",
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "C++"],
    image: "/covid_prediction.png",
    github: "https://github.com/datpham0412/covid19-prediction-model",
    live: null,
    featured: true,
    privateRepo: false,
  },
  {
    title: "Devto Clone",
    description: "A clone of Dev.to, a platform for developers to share their knowledge and connect with others.",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Supabase"],
    image: "/devto_clone.png",
    github: "https://github.com/datpham0412/devto-clone",
    live: "https://devto-clone-datpham.vercel.app/",
    featured: false,
  },
  {
    title: "Go Realtime Chat App",
    description: "A real-time chat application built with Go, React, and WebSocket, allowing users to chat with each other in real-time.",
    tech: ["Go", "Vue.js", "WebSocket", "Tailwind CSS", "TypeScript", "Supabase"],
    image: "/go_realtime_chat.png",
    github: "https://github.com/datpham0412/go-realtime-chat",
    live: "https://go-realtime-chat.fly.dev/",
    featured: false,
  },
] 