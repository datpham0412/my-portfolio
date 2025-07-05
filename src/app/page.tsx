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
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"] },
    { category: "DevOps", items: ["Docker", "AWS", "Vercel", "GitHub Actions", "Kubernetes"] },
    { category: "Tools", items: ["Git", "VS Code", "Figma", "Postman", "Jest"] },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      image: "/placeholder.svg?height=200&width=400",
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration, and analytics.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      image: "/placeholder.svg?height=200&width=400",
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      title: "AI Chat Application",
      description: "Intelligent chatbot with natural language processing and machine learning capabilities.",
      tech: ["Python", "FastAPI", "OpenAI API", "React", "Docker"],
      image: "/placeholder.svg?height=200&width=400",
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring dashboard with data visualization and location-based forecasts.",
      tech: ["Vue.js", "D3.js", "Express.js", "Weather API"],
      image: "/placeholder.svg?height=200&width=400",
      github: "https://github.com",
      live: "https://example.com",
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
        <div className="w-full max-w-6xl flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">John Doe</span>
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

      {/* Hero Section */}
      <section className="w-full flex justify-center py-24 md:py-32">
        <div className="w-full max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Full Stack Developer</h1>
                <h2 className="text-xl text-muted-foreground sm:text-2xl">Building exceptional digital experiences</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                  Passionate developer with 5+ years of experience creating scalable web applications. I specialize in
                  React, Node.js, and cloud technologies, turning complex problems into elegant solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-4 pt-4 justify-center lg:justify-start">
                <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="mailto:john@example.com" className="text-muted-foreground hover:text-foreground">
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Avatar className="h-80 w-80">
                <AvatarImage src="/placeholder.svg?height=320&width=320" alt="John Doe" />
                <AvatarFallback className="text-6xl">JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full flex justify-center py-24 md:py-32">
        <div className="w-full max-w-6xl">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a passionate full-stack developer who loves creating innovative solutions that make a difference. With a
              strong foundation in both frontend and backend technologies, I enjoy tackling complex challenges and
              delivering high-quality, scalable applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 justify-center">
                    {skillGroup.category === "Frontend" && <Globe className="h-5 w-5" />}
                    {skillGroup.category === "Backend" && <Server className="h-5 w-5" />}
                    {skillGroup.category === "DevOps" && <Database className="h-5 w-5" />}
                    {skillGroup.category === "Tools" && <GitBranch className="h-5 w-5" />}
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full flex justify-center py-24 md:py-32">
        <div className="w-full max-w-6xl">
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
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="aspect-video object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4 p-6 text-center lg:text-left">
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
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.github}>
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={project.live}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
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
        <div className="w-full max-w-6xl">
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
        <div className="w-full max-w-6xl">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Work Together</h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
              to life.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="mailto:john@example.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://linkedin.com">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Link>
              </Button>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div className="flex flex-col items-center gap-2">
                <Mail className="h-8 w-8 text-primary" />
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">john@example.com</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Linkedin className="h-8 w-8 text-primary" />
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">linkedin.com/in/johndoe</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Github className="h-8 w-8 text-primary" />
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-sm text-muted-foreground">github.com/johndoe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0 w-full flex justify-center">
        <div className="w-full max-w-6xl flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with Next.js and Tailwind CSS. © {new Date().getFullYear()} John Doe.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:john@example.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
