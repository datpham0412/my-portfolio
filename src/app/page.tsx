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

      {/* Professional Hero Section */}
      <section className="relative w-full flex justify-center lg:py-16">
        <div className="container mx-auto px-4 relative">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <div className="flex justify-center lg:justify-start">
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl lg:text-left">
                  <span className="block">Software</span>
                  <span className="block text-foreground/80">Engineer</span>
                </h1>
                <h2 className="text-xl text-muted-foreground sm:text-2xl font-medium">
                  Driven by curiosity. Committed to impact.
                </h2>
              </div>

              {/* Description */}
              <p className="max-w-[600px] text-muted-foreground text-lg leading-relaxed mx-auto lg:mx-0">
                With 1+ years' professional experience, I see software as a bridge—turning complex needs into
                <span className="font-medium text-foreground"> intuitive solutions</span> that people actually love to
                use.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button size="lg" className="group" asChild>
                  <Link href="#projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6 pt-6 justify-center lg:justify-start">
                <Link
                  href="https://github.com/datpham0412"
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/dat-pham-4b79b0219/"
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:tiendat041202@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>

            {/* Avatar */}
            <div className="flex items-center justify-center order-1 lg:order-2">
              <div className="relative">
                {/* Subtle shadow */}
                <div className="absolute -inset-4 bg-foreground/5 rounded-full blur-2xl" />

                {/* Avatar container */}
                <div className="relative bg-background rounded-full p-2">
                  <Avatar className="h-64 w-64 sm:h-72 sm:w-72 border-4 border-border shadow-2xl">
                    <AvatarImage src="/avatar.jpg" alt="Dat Pham" className="object-cover" />
                    <AvatarFallback className="text-4xl font-bold bg-muted text-foreground">DP</AvatarFallback>
                  </Avatar>
                </div>

                {/* Minimal floating elements */}
                <div className="absolute -top-4 -right-4 bg-foreground text-background rounded-full p-3 shadow-lg">
                  <Code className="h-6 w-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-muted text-foreground rounded-full p-3 shadow-lg">
                  <Globe className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Professional Stats */}
          <div className="mt-20 relative">
            <div className="relative bg-muted/30 border rounded-2xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4 group-hover:bg-muted/80 transition-colors">
                    <Calendar className="h-8 w-8 text-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">1+</div>
                  <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                </div>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4 group-hover:bg-muted/80 transition-colors">
                    <Code className="h-8 w-8 text-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">2+</div>
                  <div className="text-sm text-muted-foreground font-medium">Platforms Launched</div>
                </div>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4 group-hover:bg-muted/80 transition-colors">
                    <Server className="h-8 w-8 text-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">10+</div>
                  <div className="text-sm text-muted-foreground font-medium">Tasks Automated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional About Section */}
      <section id="about" className="w-full flex justify-center py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-muted/20" />
        <div className="container mx-auto px-4 relative">
          {/* Header */}
          <div className="mx-auto max-w-[800px] text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-muted text-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-foreground rounded-full"></span>
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Hi, I'm <span className="text-foreground/80">Dat Pham</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              Final-year Software Engineering student with 1+ years of hands-on experience.
            </p>
          </div>

          {/* What Drives Me */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <span className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 text-foreground" />
                </span>
                What drives me
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-muted hover:border-l-foreground/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-muted/80 transition-colors">
                      <Search className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-foreground">Curiosity</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        I've been taking things apart since I was a kid—first gadgets, now systems and code.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-muted hover:border-l-foreground/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-muted/80 transition-colors">
                      <Target className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-foreground">Real-world Impact</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        I built an automated invoice processor to free my team from manual busy-work.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-muted hover:border-l-foreground/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-muted/80 transition-colors">
                      <Users className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-foreground">Human-centered Design</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        I believe the best software disappears, letting people focus on what really matters.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* When I'm Off-the-Clock */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-muted/50 border-muted">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 text-foreground" />
                  </span>
                  <h3 className="text-2xl font-bold">When I'm off-the-clock</h3>
                </div>
                <div className="flex items-center justify-center gap-8 text-lg">
                  <div className="flex items-center gap-3 bg-background/80 rounded-full px-6 py-3 border">
                    <Activity className="h-5 w-5 text-foreground" />
                    <span className="font-medium">Shooting hoops</span>
                  </div>
                  <div className="hidden sm:block w-px h-8 bg-border"></div>
                  <div className="flex items-center gap-3 bg-background/80 rounded-full px-6 py-3 border">
                    <Plane className="h-5 w-5 text-foreground" />
                    <span className="font-medium">Planning adventures</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Expertise */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="space-y-4">
              <div className="w-16 h-px bg-border mx-auto"></div>
              <h3 className="text-2xl font-bold">Technical Expertise</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Here's the toolkit I use to bring ideas to life—from frontend frameworks to backend systems, I'm always
                expanding my skills to stay at the forefront of technology.
              </p>
              <div className="w-16 h-px bg-border mx-auto"></div>
            </div>
          </div>
          {/* Skills Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 justify-center group-hover:text-foreground/80 transition-colors">
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
                      <Badge key={skill} variant="secondary" className="hover:bg-muted transition-colors">
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
