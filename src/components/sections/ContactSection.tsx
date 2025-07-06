"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/data/constants"

export default function ContactSection() {
  return (
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
              <Link href={`mailto:${SOCIAL_LINKS.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={SOCIAL_LINKS.linkedin}>
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2">
              <Mail className="h-8 w-8 text-foreground" />
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm text-muted-foreground">{PERSONAL_INFO.email}</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Linkedin className="h-8 w-8 text-foreground" />
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">{PERSONAL_INFO.linkedin}</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Github className="h-8 w-8 text-foreground" />
              <h3 className="font-semibold">GitHub</h3>
              <p className="text-sm text-muted-foreground">{PERSONAL_INFO.github}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 