"use client"

import { useState } from 'react'
import { Code, Users, Settings, Globe, Server, Database, Activity, Monitor, Cloud, Paintbrush } from 'lucide-react'
import { technicalSkills, softSkills, tools } from '@/data/skills'

export default function SkillsSection() {
  const [activeSkillTab, setActiveSkillTab] = useState<'technical' | 'soft' | 'tools'>('technical')

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Skills & <span className="text-gray-600 dark:text-gray-400">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Technical competencies and professional skills I've developed through experience and continuous learning
            </p>
          </div>

          {/* Skills Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-gray-900 p-1 flex rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
              <button
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeSkillTab === "technical"
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
                onClick={() => setActiveSkillTab("technical")}
              >
                <Code className="text-xl" />
                <span>Technical</span>
              </button>
              <button
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeSkillTab === "soft"
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
                onClick={() => setActiveSkillTab("soft")}
              >
                <Users className="text-xl" />
                <span>Soft Skills</span>
              </button>
              <button
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeSkillTab === "tools"
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
                onClick={() => setActiveSkillTab("tools")}
              >
                <Settings className="text-xl" />
                <span>Tools</span>
              </button>
            </div>
          </div>

          {/* Technical Skills */}
          {activeSkillTab === "technical" && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Frontend Development */}
              <div className="group">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full min-h-[400px] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-gray-900 mr-4 shadow-lg">
                      <Monitor className="text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Frontend Development</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {technicalSkills.frontend.map((skill) => (
                      <div
                        key={skill}
                        className="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700 text-center"
                      >
                        <span className="font-semibold text-gray-900 dark:text-white text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Backend Development */}
              <div className="group">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full min-h-[400px] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-700 dark:bg-gray-300 rounded-full flex items-center justify-center text-white dark:text-gray-900 mr-4 shadow-lg">
                      <Server className="text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Backend Development</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {technicalSkills.backend.map((skill) => (
                      <div
                        key={skill}
                        className="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700 text-center"
                      >
                        <span className="font-semibold text-gray-900 dark:text-white text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Database & Cloud */}
              <div className="group">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full min-h-[400px] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-600 dark:bg-gray-400 rounded-full flex items-center justify-center text-white dark:text-gray-900 mr-4 shadow-lg">
                      <Cloud className="text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Database & Cloud</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {technicalSkills.database.map((skill) => (
                      <div
                        key={skill}
                        className="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700 text-center"
                      >
                        <span className="font-semibold text-gray-900 dark:text-white text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Soft Skills */}
          {activeSkillTab === "soft" && (
            <div className="grid lg:grid-cols-3 gap-8">
              {softSkills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-gray-900 mb-4 shadow-lg">
                        <skill.icon className="text-2xl" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{skill.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tools */}
          {activeSkillTab === "tools" && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Development Tools */}
              <div className="group">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full min-h-[400px] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-gray-900 mr-4 shadow-lg">
                      <Code className="text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Development Tools</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {tools.development.map((tool) => (
                      <div
                        key={tool}
                        className="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700 text-center"
                      >
                        <span className="font-semibold text-gray-900 dark:text-white text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Design Tools */}
              <div className="group">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full min-h-[400px] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-700 dark:bg-gray-300 rounded-full flex items-center justify-center text-white dark:text-gray-900 mr-4 shadow-lg">
                      <Paintbrush className="text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Design Tools</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {tools.design.map((tool) => (
                      <div
                        key={tool}
                        className="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700 text-center"
                      >
                        <span className="font-semibold text-gray-900 dark:text-white text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testing & Deployment */}
              <div className="group">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full min-h-[400px] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-600 dark:bg-gray-400 rounded-full flex items-center justify-center text-white dark:text-gray-900 mr-4 shadow-lg">
                      <Settings className="text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Testing & Deployment</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {tools.testing.map((tool) => (
                      <div
                        key={tool}
                        className="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700 text-center"
                      >
                        <span className="font-semibold text-gray-900 dark:text-white text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 