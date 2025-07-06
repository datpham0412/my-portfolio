"use client"

import { Button } from "@/components/ui/button"
import { Code, Download } from "lucide-react"
import Link from "next/link"
import { PERSONAL_INFO } from "@/data/constants"

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="container mx-auto px-4 flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code className="h-6 w-6" />
            <span className="font-bold">{PERSONAL_INFO.name}</span>
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
  )
} 