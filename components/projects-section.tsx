"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Briefcase, UserCheck } from "lucide-react"
import Image from "next/image"
import ProjectCard from "@/components/project-card"

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0)

  const railslipsDescription =
    "Railslips is a compact HR & payroll app built with Ruby on Rails. It features employee records, payroll and leave management, role-based access, and PDF payslips. Hosted on Render." 

  const projects = [
    {
      title: "Railslips - HR & Payroll System",
      description: railslipsDescription,
      image: "/railslips.png",
      technologies: ["Ruby on Rails", "Tailwind CSS", "PostgreSQL", "Docker"],
      liveUrl: "https://railslips.flevaris.gr",
      githubUrl: "https://github.com/flevosss/BE_payslips",
      featured: true,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            My <span className="text-primary">Projects</span>
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {featuredProjects.map((project, idx) => (
              <div key={idx} className="w-full max-w-xl">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  technologies={project.technologies}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 py-20">
          <div className="px-8">
            <h3 className="text-3xl font-bold text-center mb-12">
              Education & <span className="text-primary">Work Experience</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-bold mb-8 text-center">Education</h4>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Bachelor's Degree in Computer Science</h4>
                        <p className="text-muted-foreground mb-2">University of Twente</p>
                        <div className="space-y-1 pt-2 text-sm text-muted-foreground">
                          <p>- Minor in Cybersecurity and Cybercrime, Communication Science</p>
                          <p>- Elective in Embedded Systems</p>
                          <p>- Research Project: "5G for Aviation Communication Systems"</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-8 text-center">Work Experience</h4>
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
                  
                  
                  <div className="relative flex items-start mb-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 border-2 border-primary/20 shadow-lg">
                      <Image src="/note-bridge.svg" alt="Note-Bridge" width={40} height={40} className="w-10 h-10" />
                    </div>
                    <div className="ml-6">
                      <h5 className="text-lg font-semibold text-slate-800 dark:text-white">Full-Stack Developer</h5>
                      <p className="text-muted-foreground font-medium">
                        @ <a href="https://note-bridge.com/" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-white hover:underline">Note-Bridge</a>
                      </p>
                      <p className="text-sm text-muted-foreground dark:text-white mt-1">Jul 2023 - Jun 2024</p>
                    </div>
                  </div>

                  
                  <div className="relative flex items-start mb-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 border-2 border-secondary/20 shadow-lg">
                      <Image src="/utwente.jpeg" alt="University of Twente" width={40} height={40} className="w-10 h-10 rounded-full" />
                    </div>
                    <div className="ml-6">
                      <h5 className="text-lg font-semibold text-slate-800 dark:text-white">Head Teaching Assistant</h5>
                      <p className="text-muted-foreground font-medium">
                        @ <a href="https://www.utwente.nl/en/tcs/" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-white hover:underline">University of Twente - TCS</a>
                      </p>
                      <p className="text-sm text-muted-foreground dark:text-white mt-1">Jun 2025 - Nov 2025</p>
                    </div>
                  </div>

                  
                  <div className="relative flex items-start mb-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 border-2 border-secondary/20 shadow-lg">
                      <Image src="/utwente.jpeg" alt="University of Twente" width={40} height={40} className="w-10 h-10 rounded-full" />
                    </div>
                    <div className="ml-6">
                      <h5 className="text-lg font-semibold text-slate-800 dark:text-white">Teaching Assistant</h5>
                      <p className="text-muted-foreground font-medium">
                        @ <a href="https://www.utwente.nl/en/tcs/" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-white hover:underline">University of Twente - TCS</a>
                      </p>
                      <p className="text-sm text-muted-foreground dark:text-white mt-1">Jul 2024 - Present</p>
                    </div>
                  </div>

                  
                  <div className="relative flex items-start mb-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 border-2 border-accent/20 shadow-lg">
                      <Image src="/fiverr.jpeg" alt="Fiverr" width={40} height={40} className="w-10 h-10 rounded-full" />
                    </div>
                    <div className="ml-6">
                      <h5 className="text-lg font-semibold text-slate-800 dark:text-white">Programming Teacher</h5>
                      <p className="text-muted-foreground font-medium">
                        @ <a href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-white hover:underline">Fiverr</a>
                      </p>
                      <p className="text-sm text-muted-foreground dark:text-white mt-1">Jul 2023 - Aug 2025</p>
                    </div>
                  </div>

                  
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 border-2 border-primary/20 shadow-lg">
                      <Image src="/utwente.jpeg" alt="University of Twente" width={40} height={40} className="w-10 h-10 rounded-full" />
                    </div>
                    <div className="ml-6">
                      <h5 className="text-lg font-semibold text-slate-800 dark:text-white">Student for a Day Mentor</h5>
                      <p className="text-muted-foreground font-medium">
                        @ <a href="https://www.utwente.nl/en/tcs/" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-white hover:underline">University of Twente - TCS</a>
                      </p>
                      <p className="text-sm text-muted-foreground dark:text-white mt-1">Oct 2022 - Dec 2023</p>
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
