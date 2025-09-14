"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"
import { SkillCircle } from "@/components/skill-circle"

export function AboutSection() {
  const skills = [
    { name: "Java", percentage: 30, color: "bg-primary text-primary-foreground", position: "top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" },
    { name: "TypeScript", percentage: 20, color: "bg-secondary text-secondary-foreground", position: "top-1/4 right-2 sm:right-4 transform translate-x-1/2 -translate-y-1/2" },
    { name: "Python", percentage: 10, color: "bg-accent text-accent-foreground", position: "bottom-1/4 right-2 sm:right-4 transform translate-x-1/2 translate-y-1/2" },
    { name: "SQL", percentage: 20, color: "bg-muted text-muted-foreground", position: "bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2" },
    { name: "Next.js", percentage: 10, color: "bg-primary/80 text-primary-foreground", position: "bottom-1/4 left-2 sm:left-4 transform -translate-x-1/2 translate-y-1/2" },
    { name: "Node.js", percentage: 10, color: "bg-secondary/80 text-secondary-foreground", position: "top-1/3 left-2 sm:left-4 transform -translate-x-1/2 -translate-y-1/2" }
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
              My journey into the world of technology began with a deep curiosity about problem-solving, 
              which I quickly discovered I truly enjoyed. This passion led me to pursue a degree in Computer 
              Science at the University of Twente. Over the past few years, I’ve focused on full-stack development,
               gaining hands-on experience in both front-end and back-end technologies.
              </p>
              <p>
              A rewarding moment in my journey was receiving the Best Project Award, which led to an internship where I learned to
               apply the knowledge I gained at university to real-world projects.
              </p>
              <p>
              After my internship, I worked as a Teaching Assistant both at the university and externally. I really enjoyed helping students
               understand complex concepts and guiding them through challenges. My ability to explain difficult topics clearly was frequently highlighted, 
               and I was recognized for my effective communication skills. Eventually, I was promoted to Head Teaching Assistant for a course, where I took on greater 
               responsibilities.
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
