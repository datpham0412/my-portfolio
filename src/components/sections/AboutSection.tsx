"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Globe,
  Users,
  Activity,
  MapPin,
  Download,
  BookOpen,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/data/constants"

export default function AboutSection() {
  return (
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
                <AvatarImage src="/avatar.jpg" alt={PERSONAL_INFO.name} className="object-cover" />
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
                      <Heart className="text-lg" />
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
                    Email: {PERSONAL_INFO.email} <br />
                    LinkedIn: {PERSONAL_INFO.linkedin} <br />
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
                    Based in {PERSONAL_INFO.location}. Available for remote work worldwide.
                  </p>
                </div>

                {/* Education */}
                <div className="flex flex-col">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-4 bg-gray-400 dark:bg-gray-600 rounded-full shadow-lg flex items-center justify-center text-white dark:text-white shrink-0">
                      <BookOpen className="text-lg" />
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
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                    >
                      <Linkedin className="text-lg" />
                    </Link>
                    <Link
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                    >
                      <Github className="text-lg" />
                    </Link>
                    <Link
                      href={`mailto:${SOCIAL_LINKS.email}`}
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
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <Download className="mr-2" />
                    Download CV
                  </Link>
                  <Link
                    href="/transcript.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <Download className="mr-2" />
                    Download Transcript
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 