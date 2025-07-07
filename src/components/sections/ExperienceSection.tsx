"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Calendar,
  MapPin,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { experience } from "@/data/experience"

export default function ExperienceSection() {
  const [expandedJobs, setExpandedJobs] = useState<{ [key: number]: boolean }>({})

  const toggleJobExpansion = (jobIndex: number) => {
    setExpandedJobs(prev => ({
      ...prev,
      [jobIndex]: !prev[jobIndex]
    }))
  }

  return (
    <section id="experience" className="w-full flex justify-center py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Experience</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My journey across software development and hospitality, building both technical expertise and
            interpersonal skills.
          </p>
        </div>

        <div className="mt-16 max-w-6xl mx-auto">
          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-border"></div>

            {experience.map((job, index) => (
              <div key={index} className="relative flex items-start mb-12">
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-8 w-4 h-4 bg-background border-4 border-foreground rounded-full z-10"></div>

                {/* Content Card - Always on the right side */}
                <div className="ml-16 w-full">
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group relative p-0 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                    >
                      <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge
                                  variant={job.type === "Software Development" ? "default" : "secondary"}
                                  className="text-xs"
                                >
                                  {job.type}
                                </Badge>
                              </div>
                              <CardTitle className="text-xl group-hover:text-foreground/80 transition-colors">
                                {job.title}
                              </CardTitle>
                              <CardDescription className="text-lg font-medium text-foreground/70">
                                {job.company}
                              </CardDescription>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {job.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground leading-relaxed">{job.description}</p>

                          {/* Key Achievements */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <ArrowRight className="h-4 w-4" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {job.achievements
                                .slice(0, expandedJobs[index] ? job.achievements.length : (job.type === "Software Development" ? 4 : 3))
                                .map((achievement, achievementIndex) => (
                                  <li
                                    key={achievementIndex}
                                    className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                                  >
                                    <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              {job.achievements.length > (job.type === "Software Development" ? 4 : 3) && (
                                <li>
                                  <button
                                    onClick={e => { e.preventDefault(); toggleJobExpansion(index); }}
                                    className="text-sm text-muted-foreground/60 hover:text-foreground/80 transition-colors flex items-center gap-1 group"
                                  >
                                    {expandedJobs[index] ? (
                                      <>
                                        <ChevronUp className="h-3 w-3" />
                                        Show less
                                      </>
                                    ) : (
                                      <>
                                        <ChevronDown className="h-3 w-3" />
                                        + {job.achievements.length - (job.type === "Software Development" ? 4 : 3)} more achievements
                                      </>
                                    )}
                                  </button>
                                </li>
                              )}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  ) : (
                    <Card className="group relative p-0 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge
                                variant={job.type === "Software Development" ? "default" : "secondary"}
                                className="text-xs"
                              >
                                {job.type}
                              </Badge>
                            </div>
                            <CardTitle className="text-xl group-hover:text-foreground/80 transition-colors">
                              {job.title}
                            </CardTitle>
                            <CardDescription className="text-lg font-medium text-foreground/70">
                              {job.company}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {job.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">{job.description}</p>

                        {/* Key Achievements */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <ArrowRight className="h-4 w-4" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {job.achievements
                              .slice(0, expandedJobs[index] ? job.achievements.length : (job.type === "Software Development" ? 4 : 3))
                              .map((achievement, achievementIndex) => (
                                <li
                                  key={achievementIndex}
                                  className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                                >
                                  <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full mt-2 flex-shrink-0"></span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            {job.achievements.length > (job.type === "Software Development" ? 4 : 3) && (
                              <li>
                                <button
                                  onClick={() => toggleJobExpansion(index)}
                                  className="text-sm text-muted-foreground/60 hover:text-foreground/80 transition-colors flex items-center gap-1 group"
                                >
                                  {expandedJobs[index] ? (
                                    <>
                                      <ChevronUp className="h-3 w-3" />
                                      Show less
                                    </>
                                  ) : (
                                    <>
                                      <ChevronDown className="h-3 w-3" />
                                      + {job.achievements.length - (job.type === "Software Development" ? 4 : 3)} more achievements
                                    </>
                                  )}
                                </button>
                              </li>
                            )}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 