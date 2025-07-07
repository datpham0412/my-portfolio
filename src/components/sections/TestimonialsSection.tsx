import { Users, MapPin, Download, Linkedin } from "lucide-react"
import Link from "next/link"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-background dark:bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              What People <span className="text-gray-600 dark:text-gray-400">Say</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Professional recommendation from my supervisor at Quest Payment System
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Quest Payment System Testimonial */}
            <div className="group">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden border-transparent hover:-translate-y-1">
                <div className="flex items-start mb-6">
                  <div className="w-20 h-20 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-gray-900 mr-6 shadow-lg flex-shrink-0 overflow-hidden">
                    <img
                      src="/Luke_Fuller_avatar.jpg"
                      alt="Luke Fuller avatar"
                      className="w-20 h-20 object-cover rounded-full border-2 border-gray-200 dark:border-gray-700"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Luke Fuller</h3>
                    <h4 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-1">
                      Chief Product Officer
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">Quest Payment System</p>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">Melbourne, Australia</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">★</span>
                    ))}
                    <span className="ml-3 text-gray-600 dark:text-gray-400 font-semibold">Exceptional Performance</span>
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg italic mb-4">
                    "During his internship with Quest, Dat consistently demonstrated exceptional intelligence, dedication, and a strong aptitude for learning. He played a primary role in developing a new developer portal, transforming our existing documentation into a comprehensive tool. He also drove forward an initiative which allowed us to gather market data and Quest has continued to benefit from this work since his return to university."
                  </blockquote>
                  <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg italic">
                    "Dat is a personable and likable team player who consistently demonstrated punctuality and reliability. I look forward to seeing Dat achieving great things as his career unfolds."
                  </blockquote>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                        <strong>Key Strengths:</strong> Full-stack development, API integration, performance optimization, team collaboration, mobile development
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        Direct supervisor for 12 months • Quest Payment System
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href="/Luke-Fuller-Letter.pdf"
                        className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Full Letter
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/luke-fuller-0650836/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 text-sm"
                      >
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 