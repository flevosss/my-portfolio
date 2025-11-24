"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"
import { SkillCircle } from "@/components/skill-circle"

export function AboutSection() {
  const skills = [
    { name: "Java", percentage: 30, color: "bg-amber-600 text-white", position: "top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" },
    { name: "TypeScript", percentage: 20, color: "bg-sky-600 text-white", position: "top-1/4 right-2 sm:right-4 transform translate-x-1/2 -translate-y-1/2" },
    { name: "Python", percentage: 10, color: "bg-violet-600 text-white", position: "bottom-1/4 right-2 sm:right-4 transform translate-x-1/2 translate-y-1/2" },
    { name: "SQL", percentage: 20, color: "bg-indigo-600 text-white", position: "bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2" },
    { name: "Ruby on Rails", percentage: 0, color: "bg-rose-600 text-white", position: "bottom-24 left-2 sm:left-4 transform -translate-x-1/2 translate-y-1/2" },
    { name: "Next.js", percentage: 10, color: "bg-neutral-900 text-white", position: "bottom-4 left-2 sm:left-4 transform -translate-x-1/2 translate-y-1/2" },
    { name: "Node.js", percentage: 10, color: "bg-emerald-600 text-white", position: "top-1/3 left-2 sm:left-4 transform -translate-x-1/2 -translate-y-1/2" },
    { name: "Git", percentage: 0, color: "bg-orange-600 text-white", position: "top-4 right-4 transform translate-x-0 -translate-y-0" },
    { name: "Docker", percentage: 0, color: "bg-sky-500 text-white", position: "right-2 top-1/2 transform translate-x-1/2 -translate-y-1/2" }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
              My interest in technology began with a simple curiosity about how things work. That curiosity eventually led me to 
              study Computer Science at the University of Twente. Over the years, I’ve focused on different fields of CS 
              but I got more practical experience in full-stack development.
              </p>
              <p>
               A rewarding moment in my journey was receiving the Best Project Award from a university project, which led to an 
               internship where I learned to apply the knowledge I gained at university to a real-world project.
              </p>
              <p>
                After finishing my internship, I worked as a Teaching Assistant both at the university and externally. 
                I enjoyed helping students understand challenging concepts and supporting them throughout their assignments. Later, 
                I was promoted to Head Teaching Assistant for a course, where I took on additional responsibilities and contributed to the 
                overall coordination of the teaching team.
              </p>
            </div>
          </div>

          <div className="relative">
          <SkillCircle 
          profileImage="/michalis-flevaris.png" 
          skills={skills} 
        />
          </div>
        </div>

      </div>
    </section>
  )
}
