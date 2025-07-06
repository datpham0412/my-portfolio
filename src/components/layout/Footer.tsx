"use client"

import { Code, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/data/constants"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0 w-full flex justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Code className="h-6 w-6" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js and Tailwind CSS. © {new Date().getFullYear()} {PERSONAL_INFO.name}.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href={SOCIAL_LINKS.github} className="text-muted-foreground hover:text-foreground">
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href={SOCIAL_LINKS.linkedin}
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href={`mailto:${SOCIAL_LINKS.email}`} className="text-muted-foreground hover:text-foreground">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
} 