"use client"

import Link from "next/link"
import { Code } from "lucide-react"
import { leetcodeHighlights } from "@/data/leetcode"

export default function LeetCodeSection() {
  return (
    <section id="leetcode" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              LeetCode <span className="text-gray-600 dark:text-gray-400">Highlights</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I love tackling algorithmic challenges—here are a few LeetCode problems where my solutions received
              community upvotes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {leetcodeHighlights.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer hover:-translate-y-1 block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </span>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.difficulty === "Easy" ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" : "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200"}`}>{item.difficulty}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.language === "C#" ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" : item.language === "Python" ? "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200" : "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"}`}>{item.language}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-yellow-600 dark:text-yellow-400">
                    <span className="mr-1">🏆</span>
                    <span className="text-sm font-semibold">{item.upvotes} upvotes</span>
                  </div>
                  <Code className="h-5 w-5 text-gray-400" />
                </div>
              </Link>
            ))}
          </div>

          {/* Link to Profile */}
          <div className="text-center mt-12">
            <Link
              href="https://leetcode.com/datpham0412"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Code className="mr-2" />
              View all on LeetCode →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 