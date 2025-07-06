import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Server,
  GitBranch,
  Calendar,
  MapPin,
  Download,
  ArrowRight,
  Search,
  Target,
  Users,
  Clock,
  Activity,
  Plane,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "ASP.NET", "Redis"] },
    { category: "DevOps", items: ["Docker", "AWS", "Vercel", "GitHub Actions", "Azure"] },
    { category: "Tools", items: ["Git", "VS Code", "Figma", "Postman", "Jira"] },
  ]

  const projects = [
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

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description:
        "Led development of scalable web applications serving 100K+ users. Mentored junior developers and implemented CI/CD pipelines.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      location: "New York, NY",
      description:
        "Developed responsive web applications using React and TypeScript. Collaborated with UX/UI designers to implement pixel-perfect designs.",
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      location: "Austin, TX",
      description:
        "Built and maintained web applications using modern JavaScript frameworks. Participated in agile development processes.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
        <div className="container mx-auto px-4 flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">Dat Pham</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#experience" className="hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#contact" className="hover:text-foreground/80">
                Contact
              </Link>
            </nav>
            <Button variant="outline" size="sm" className="ml-4 bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section - Mimicking the Beautiful Style */}
      <section className="relative w-full flex justify-center min-h-screen py-12">
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground">Hi, I'm Dat Pham</h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground flex items-center">
                  <span>Software Engineer</span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              With 1+ years' professional experience, I see software as a bridge—turning complex needs into
                <span className="font-medium text-foreground"> intuitive solutions</span> that people actually love to
                use.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-foreground font-medium">Follow me on:</span>
                <div className="flex space-x-3">
                  <Link
                    href="https://github.com/datpham0412"
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/dat-pham-4b79b0219/"
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="mailto:tiendat041202@gmail.com"
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  asChild
                >
                  <Link href="#projects">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-transparent"
                  asChild
                >
                  <Link href="#contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="mt-6">
                <h4 className="text-left text-sm font-semibold text-foreground mb-3">Quick Stats:</h4>
                <div className="flex flex-wrap gap-3 justify-start">
                  <div className="flex items-center space-x-2 px-3 py-2 bg-background rounded-full shadow-md border border-border hover:border-foreground hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <Calendar className="text-foreground text-lg" />
                    <div className="flex flex-col leading-tight">
                      <span className="text-xs font-semibold text-foreground">1+</span>
                      <span className="text-[10px] text-muted-foreground">Years Experience</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 bg-background rounded-full shadow-md border border-border hover:border-foreground hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <Code className="text-foreground text-lg" />
                    <div className="flex flex-col leading-tight">
                      <span className="text-xs font-semibold text-foreground">2+</span>
                      <span className="text-[10px] text-muted-foreground">Platforms Launched</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 bg-background rounded-full shadow-md border border-border hover:border-foreground hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <Users className="text-foreground text-lg" />
                    <div className="flex flex-col leading-tight">
                      <span className="text-xs font-semibold text-foreground">5+</span>
                      <span className="text-[10px] text-muted-foreground">Happy Clients</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 bg-background rounded-full shadow-md border border-border hover:border-foreground hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <Server className="text-foreground text-lg" />
                    <div className="flex flex-col leading-tight">
                      <span className="text-xs font-semibold text-foreground">10+</span>
                      <span className="text-[10px] text-muted-foreground">Tasks Automated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Avatar with Floating Tech Icons */}
            <div className="relative flex justify-center items-center">
              <div className="relative z-10">
                <Avatar className="w-80 h-80 lg:w-96 lg:h-96 shadow-2xl border-8 border-background hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
                  <AvatarImage src="/avatar.jpg" alt="Dat Pham" className="object-cover" />
                  <AvatarFallback className="text-6xl font-bold bg-muted text-foreground">DP</AvatarFallback>
                </Avatar>
              </div>

              {/* Floating Tech Icons */}
              <div
                className="absolute top-0 left-20 w-16 h-16 bg-background rounded-full shadow-lg border border-border flex items-center justify-center hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-bounce cursor-pointer"
                style={{ animationDelay: "0s", animationDuration: "3s" }}
              >
                <Globe className="h-6 w-6 text-foreground" />
              </div>
              <div
                className="absolute top-0 right-0 w-16 h-16 bg-background rounded-full shadow-lg border border-border flex items-center justify-center hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-bounce cursor-pointer"
                style={{ animationDelay: "0.5s", animationDuration: "3s" }}
              >
                <Code className="h-6 w-6 text-foreground" />
              </div>
              <div
                className="absolute bottom-0 left-10 w-16 h-16 bg-background rounded-full shadow-lg border border-border flex items-center justify-center hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-bounce cursor-pointer"
                style={{ animationDelay: "1s", animationDuration: "3s" }}
              >
                <Database className="h-6 w-6 text-foreground" />
              </div>
              <div
                className="absolute bottom-10 right-12 w-16 h-16 bg-background rounded-full shadow-lg border border-border flex items-center justify-center hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-bounce cursor-pointer"
                style={{ animationDelay: "1.5s", animationDuration: "3s" }}
              >
                <Server className="h-6 w-6 text-foreground" />
              </div>
              <div
                className="absolute top-20 left-0 w-16 h-16 bg-background rounded-full shadow-lg border border-border flex items-center justify-center hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-bounce cursor-pointer"
                style={{ animationDelay: "2s", animationDuration: "3s" }}
              >
                <GitBranch className="h-6 w-6 text-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional About Section - Mimicking Reference Style */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                About <span className="text-gray-600 dark:text-gray-400">Me</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Discover my journey, passions, and the story behind my work
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Profile Image */}
              <div className="lg:w-1/3 flex justify-center lg:justify-start">
                <Avatar className="w-80 h-80 shadow-xl hover:rotate-3 transition-transform duration-300">
                  <AvatarImage src="/avatar.jpg" alt="Dat Pham" className="object-cover" />
                  <AvatarFallback className="text-6xl font-bold bg-gray-200 text-gray-900">DP</AvatarFallback>
                </Avatar>
              </div>

              {/* Content Grid */}
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Bio */}
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-4 bg-gray-900 dark:bg-white rounded-full shadow-lg flex items-center justify-center text-white dark:text-gray-900 shrink-0">
                        <Users className="text-lg" />
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Bio</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                      Final-year Software Engineering student with 1+ years of hands-on experience. Passionate about
                      creating user-friendly and scalable web applications.
                    </p>
                  </div>

                  {/* Hobbies */}
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-4 bg-gray-700 dark:bg-gray-300 rounded-full shadow-lg flex items-center justify-center text-white dark:text-gray-900 shrink-0">
                        <Activity className="text-lg" />
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Hobbies</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                      Shooting hoops, planning adventures, exploring new technologies, and contributing to open-source
                      projects.
                    </p>
                  </div>

                  {/* Languages */}
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-4 bg-gray-600 dark:bg-gray-400 rounded-full shadow-lg flex items-center justify-center text-white dark:text-gray-900 shrink-0">
                        <Globe className="text-lg" />
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Languages</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                      Fluent in Vietnamese and English. Currently learning Mandarin.
                    </p>
                  </div>

                  {/* Contact */}
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-4 bg-gray-800 dark:bg-gray-200 rounded-full shadow-lg flex items-center justify-center text-white dark:text-gray-900 shrink-0">
                        <Mail className="text-lg" />
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Contact</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                      Email: tiendat041202@gmail.com <br />
                      LinkedIn: linkedin.com/in/dat-pham-4b79b0219 <br />
                    </p>
                  </div>

                  {/* Location */}
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-4 bg-gray-500 dark:bg-gray-500 rounded-full shadow-lg flex items-center justify-center text-white shrink-0">
                        <MapPin className="text-lg" />
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                      Based in Melbourne, Australia. Available for remote work worldwide.
                    </p>
                  </div>

                  {/* Education */}
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-4 bg-gray-400 dark:bg-gray-600 rounded-full shadow-lg flex items-center justify-center text-white dark:text-white shrink-0">
                        <Code className="text-lg" />
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Education</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                      Bachelor of Software Engineering, Swinburne University of Technology (2021-2025). Specialized in full-stack
                      development.
                    </p>
                  </div>
                </div>

                {/* Social Links and CTA */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Follow me on:</span>
                    <div className="flex space-x-3">
                      <Link
                        href="https://www.linkedin.com/in/dat-pham-4b79b0219/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                      >
                        <Linkedin className="text-lg" />
                      </Link>
                      <Link
                        href="https://github.com/datpham0412"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                      >
                        <Github className="text-lg" />
                      </Link>
                      <Link
                        href="mailto:tiendat041202@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                      >
                        <Mail className="text-lg" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      <Download className="mr-2" />
                      Download CV
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full flex justify-center py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card key={project.title} className={project.featured ? "md:col-span-2" : ""}>
                <div className={`grid gap-6 ${project.featured ? "lg:grid-cols-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-lg ml-4">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="aspect-video object-cover transition-transform hover:scale-105 rounded-lg"
                      />
                    </a>
                  </div>
                  <div className="flex flex-col justify-center space-y-4 p-6 text-center lg:text-left rounded-lg">
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="mt-2 text-muted-foreground">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4 justify-center lg:justify-start">
                      {project.github && !project.privateRepo ? (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" disabled title="Private repository">
                          <Github className="mr-2 h-4 w-4" />
                          Private
                        </Button>
                      )}
                      <Button size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full flex justify-center py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and the companies I've had the pleasure to work with.
            </p>
          </div>
          <div className="mt-16 space-y-8 max-w-4xl mx-auto">
            {experience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription className="text-lg font-medium">{job.company}</CardDescription>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:text-right">
                      <div className="flex items-center gap-1 justify-center sm:justify-end">
                        <Calendar className="h-4 w-4" />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-1 justify-center sm:justify-end">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center sm:text-left">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full flex justify-center py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Work Together</h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
              ideas to life.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="mailto:tiendat041202@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://www.linkedin.com/in/dat-pham-4b79b0219/">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Link>
              </Button>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div className="flex flex-col items-center gap-2">
                <Mail className="h-8 w-8 text-foreground" />
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">tiendat041202@gmail.com</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Linkedin className="h-8 w-8 text-foreground" />
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">linkedin.com/in/dat-pham</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Github className="h-8 w-8 text-foreground" />
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-sm text-muted-foreground">github.com/datpham0412</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0 w-full flex justify-center">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with Next.js and Tailwind CSS. © {new Date().getFullYear()} Dat Pham.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://github.com/datpham0412" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dat-pham-4b79b0219/"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:tiendat041202@gmail.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
