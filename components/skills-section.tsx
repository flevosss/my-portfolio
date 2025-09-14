"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

export function SkillsSection() {
  const circularSkills = [
    { name: "TypeScript", percentage: 30, color: "#3178c6" },
    { name: "Java", percentage: 50, color: "#f89820" },
    { name: "Git", percentage: 20, color: "#f05032" },
  ]

  const createPath = (startAngle: number, endAngle: number, radius: number) => {
    const start = polarToCartesian(0, 0, radius, endAngle)
    const end = polarToCartesian(0, 0, radius, startAngle)
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
    return ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(" ")
  }

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    }
  }

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 80 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="relative">
            <svg width="300" height="300" className="transform -rotate-90">
              {circularSkills.map((skill, index) => {
                const total = circularSkills.reduce((sum, s) => sum + s.percentage, 0)
                const startAngle = circularSkills
                  .slice(0, index)
                  .reduce((sum, s) => sum + (s.percentage / total) * 360, 0)
                const endAngle = startAngle + (skill.percentage / total) * 360
                const path = createPath(startAngle, endAngle, 120)

                return (
                  <path
                    key={skill.name}
                    d={path}
                    fill="none"
                    stroke={skill.color}
                    strokeWidth="20"
                    className="hover:stroke-[25] transition-all duration-300"
                  />
                )
              })}
            </svg>

            {/* Profile image in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-lg">
                <Image
                  src="/profile-picture.jpg"
                  alt="Michalis"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Skill labels */}
            <div className="absolute inset-0 flex items-center justify-center">
              {circularSkills.map((skill, index) => {
                const total = circularSkills.reduce((sum, s) => sum + s.percentage, 0)
                const angle =
                  circularSkills.slice(0, index).reduce((sum, s) => sum + (s.percentage / total) * 360, 0) +
                  ((skill.percentage / total) * 360) / 2
                const radius = 140
                const x = Math.cos(((angle - 90) * Math.PI) / 180) * radius
                const y = Math.sin(((angle - 90) * Math.PI) / 180) * radius

                return (
                  <div
                    key={skill.name}
                    className="absolute text-sm font-medium bg-background/90 px-2 py-1 rounded shadow-sm"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                      color: skill.color,
                    }}
                  >
                    {skill.name} {skill.percentage}%
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Tech Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Python",
              "PostgreSQL",
              "MongoDB",
              "Tailwind CSS",
              "Docker",
              "AWS",
              "Git",
              "Figma",
            ].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover-lift"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
