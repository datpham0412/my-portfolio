"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Cloud, Target, MessageCircle, Settings, Zap, ShoppingCart, Calculator, Lock, KeyRound, Dices, Copy } from "lucide-react"
import Image from "next/image"
import { projects } from "@/data/projects"
import { smallProjects } from "@/data/smallProjects"

export default function ProjectsSection() {
  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Cloud,
      Target,
      MessageCircle,
      Settings,
      Zap,
      ShoppingCart,
      Calculator,
      Lock,
      KeyRound,
      Dices,
      Copy
    }
    return icons[iconName] || Cloud
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
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
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="aspect-video object-cover transition-transform hover:scale-105 rounded-lg"
                      />
                    </a>
                  ) : (
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="aspect-video object-cover rounded-lg"
                    />
                  )}
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
                    {project.live ? (
                      <Button size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    ) : (
                      <Button size="sm" disabled title="No live demo available">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Small Projects Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {smallProjects.map((project) => {
            const IconComponent = getIconComponent(project.icon)
            
            return (
              <Card key={project.title} className="group relative p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-700 dark:bg-gray-300 rounded-full flex items-center justify-center text-white dark:text-gray-900 mx-auto mb-4 shadow-lg transition-all duration-300">
                      <IconComponent className="text-2xl" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
} 