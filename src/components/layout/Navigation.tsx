"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Code,
  User,
  Star,
  GraduationCap,
  Folder,
  ListChecks,
  BookOpen,
  MessageCircle,
  Users,
  Award,
  Download,
  Menu,
  X,
  Target,
  Activity,
  Cloud,
  Server,
  Quote,
  Terminal,
} from "lucide-react"
import Link from "next/link"
import { PERSONAL_INFO } from "@/data/constants"

const NAV_LINKS = [
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Star },
  { href: "#goals", label: "Goals", icon: Target },
  { href: "#education", label: "Education", icon: GraduationCap },
  { href: "#experience", label: "Experience", icon: BookOpen },
  { href: "#projects", label: "Projects", icon: Folder },
  { href: "#testimonials", label: "Testimonials", icon: Quote },
  { href: "#leetcode", label: "LeetCode", icon: ListChecks },
  { href: "#contact", label: "Contact", icon: MessageCircle },
]

function getSectionIdFromHref(href: string) {
  return href.replace(/^#/, "")
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const offsets = NAV_LINKS.map((link) => {
        const section = document.getElementById(getSectionIdFromHref(link.href))
        if (!section) return { id: link.href, top: Infinity }
        const rect = section.getBoundingClientRect()
        return { id: link.href, top: Math.abs(rect.top) }
      })
      const visible = offsets.filter((o) => o.top < window.innerHeight * 0.5)
      if (visible.length > 0) {
        visible.sort((a, b) => a.top - b.top)
        setActiveSection(visible[0].id)
      } else {
        setActiveSection("")
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-2 text-sm font-medium">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon
              const isActive = activeSection === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1 px-2 py-1 rounded transition-colors duration-200
                    ${isActive
                      ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-semibold"
                      : "hover:text-foreground/80"}
                  `}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-white dark:text-gray-900" : "text-muted-foreground"}`} />
                  <span>{link.label}</span>
                </Link>
              )
            })}
          </nav>
          {/* Resume Button (always visible on desktop) */}
          <Button variant="outline" size="sm" className="ml-4 bg-transparent hidden md:flex" asChild>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-4 w-4" />
            Resume
            </Link>
          </Button>
          {/* Mobile Hamburger (always last) */}
          <div className="md:hidden flex items-center ml-auto">
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-background border-b z-50 shadow-lg animate-fade-in">
          <div className="flex flex-col items-center py-4 space-y-2">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon
              const isActive = activeSection === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 w-full text-center py-2 px-4 text-base font-medium rounded transition-colors duration-200
                    ${isActive
                      ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-semibold"
                      : "hover:bg-muted"}
                  `}
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "text-white dark:text-gray-900" : "text-muted-foreground"}`} />
                  <span>{link.label}</span>
                </Link>
              )
            })}
            <Button variant="outline" size="sm" className="mt-2 w-full bg-transparent flex md:hidden justify-center" asChild>
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
} 