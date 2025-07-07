import { Code, Calendar, MapPin, Users, BookOpen } from "lucide-react"

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-background dark:bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Educational <span className="text-gray-600 dark:text-gray-400">Background</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              My academic journey and continuous learning path in computer science and software engineering
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* University Education */}
            <div className="group h-full">
              <a 
                href="https://www.swinburne.edu.au/course/undergraduate/bachelor-of-engineering-honours-professional/software/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden cursor-pointer border-transparent hover:-translate-y-1 flex flex-col">
                <div className="flex items-start mb-4 relative z-10">
                  <div className="w-14 h-14 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-gray-900 mr-4 shadow-lg transition-all duration-300">
                    <BookOpen className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Bachelor of Engineering (Honours) (Professional)</h3>
                    <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-1">
                      Software Engineering
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                      Swinburne University of Technology
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        2021 - 2025
                      </span>
                      <span className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        Melbourne, Australia
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold">
                        GPA: 3.5/4.0
                      </span>
                      <span className="px-3 py-1 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm font-semibold">
                        Graduate 12/2025
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Focused on software development, embedded system engineering, data structures, and object-oriented
                  programming. Currently working on capstone AI project involving membership inference attacks in
                  vision large language models.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Courses:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                      Object Oriented Programming (C#)
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                      Data Structures & Algorithms (C++)
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                      Software Deployment & Evolution
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                      Data Management (SQL)
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Notable Achievements:</p>
                  <ul className="space-y-1">
                    <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                      <span>
                        Awarded Swinburne International Excellence Undergraduate Scholarship for outstanding academic
                        performance
                      </span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                      <span>Currently developing AI capstone project on membership inference attacks</span>
                    </li>
                  </ul>
                </div>
              </div>
              </a>
            </div>

            {/* High School Education */}
            <div className="group h-full">
              <a 
                href="https://www.linkedin.com/school/hsgs-hus/about/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden cursor-pointer border-transparent hover:-translate-y-1 flex flex-col">
                <div className="flex items-start mb-4 relative z-10">
                  <div className="w-14 h-14 bg-gray-700 dark:bg-gray-300 rounded-full flex items-center justify-center text-white dark:text-gray-900 mr-4 shadow-lg transition-all duration-300">
                    <Users className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      High School for Gifted Students
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-1">Major: Chemistry</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">Top 1 High School in Vietnam</p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        2017 - 2020
                      </span>
                      <span className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        Hanoi, Vietnam
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold">
                        GPA: 9.5/10
                      </span>
                      <span className="px-3 py-1 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm font-semibold">
                        Graduated
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Attended Vietnam's most prestigious high school, renowned for academic excellence and competition
                  achievements. Strong foundation in STEM subjects with leadership experience in programming club.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Courses:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                      Computer Science
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                      Advanced Mathematics
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                      Physics
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                      Chemistry
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Notable Achievements:</p>
                  <ul className="space-y-1">
                    <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                      <span>Second prize in city-level chemistry competition for excellent students</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                      <span>Programming Club President - Led technical initiatives and mentored peers</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                      <span>Graduated from Vietnam's top-ranked high school for gifted students</span>
                    </li>
                  </ul>
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 