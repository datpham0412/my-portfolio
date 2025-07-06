"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Globe,
  Server,
  GitBranch,
  Calendar,
  Users,
  Download,
} from "lucide-react"
import Link from "next/link"
import { SOCIAL_LINKS, PERSONAL_INFO, QUICK_STATS } from "@/data/constants"

const iconMap = {
  Calendar,
  Code,
  Users,
  Server,
}

export default function HeroSection() {
  return (
    <section className="relative w-full flex justify-center min-h-screen py-12">
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">Hi, I'm {PERSONAL_INFO.name}</h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground flex items-center">
                <span>{PERSONAL_INFO.title}</span>
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
                  href={SOCIAL_LINKS.github}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href={SOCIAL_LINKS.linkedin}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href={`mailto:${SOCIAL_LINKS.email}`}
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
                {QUICK_STATS.map((stat) => {
                  const IconComponent = iconMap[stat.icon as keyof typeof iconMap]
                  return (
                    <div
                      key={stat.label}
                      className="flex items-center space-x-2 px-3 py-2 bg-background rounded-full shadow-md border border-border hover:border-foreground hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <IconComponent className="text-foreground text-lg" />
                      <div className="flex flex-col leading-tight">
                        <span className="text-xs font-semibold text-foreground">{stat.value}</span>
                        <span className="text-[10px] text-muted-foreground">{stat.label}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Avatar with Floating Tech Icons */}
          <div className="relative flex justify-center items-center">
            <div className="relative z-10">
              <Avatar className="w-80 h-80 lg:w-96 lg:h-96 shadow-2xl border-8 border-background hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
                <AvatarImage src="/avatar.jpg" alt={PERSONAL_INFO.name} className="object-cover" />
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
  )
} 