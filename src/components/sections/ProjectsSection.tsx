"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { projects } from "@/data/projects"

export default function ProjectsSection() {
  return (
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
  )
} 