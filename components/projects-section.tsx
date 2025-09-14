"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play, Code, Zap, Users, Palette, GraduationCap, Briefcase, UserCheck } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team chat, and progress tracking.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Here are some of my projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="text-center">
          <p>coming soon...</p>
        </div>

        {/* Featured Projects */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="hover-lift bg-card border-border overflow-hidden group transition-all duration-300 hover:border-primary/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" className="animate-glow">
                    <Play className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* Education and Work Experience Section */}
        <div className="mt-20 py-20">
          <div className="px-8">
            <h3 className="text-3xl font-bold text-center mb-12">
              Education & <span className="text-primary">Work Experience</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Education */}
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
                        <p className="text-sm text-muted-foreground">Major: Computer Science | Minor: Embedded Systems, Cybersecurity and Communication Science</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Work Experience Timeline */}
              <div>
                <h4 className="text-2xl font-bold mb-8 text-center">Work Experience</h4>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
                  
                  {/* Job 1 - Full-Stack Developer (Internship) */}
                  <div className="relative flex items-start mb-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 border-2 border-primary/20 shadow-lg">
                      <Image src="/note-bridge.svg" alt="Note-Bridge" width={40} height={40} className="w-10 h-10" />
                    </div>
                    <div className="ml-6">
                      <h5 className="text-lg font-semibold text-primary">Full-Stack Developer</h5>
                      <p className="text-muted-foreground font-medium">
                        @ <a href="https://note-bridge.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Note-Bridge</a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">Jul 2023 - Jun 2024</p>
                    </div>
                  </div>

                  {/* Job 2 - Head Teaching Assistant */}
                  <div className="relative flex items-start mb-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 border-2 border-secondary/20 shadow-lg">
                      <Image src="/utwente.jpeg" alt="University of Twente" width={40} height={40} className="w-10 h-10 rounded-full" />
                    </div>
                    <div className="ml-6">
                      <h5 className="text-lg font-semibold text-secondary">Head Teaching Assistant</h5>
                      <p className="text-muted-foreground font-medium">
                        @ <a href="https://www.utwente.nl/en/tcs/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">University of Twente - TCS</a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">Jun 2025 - Present</p>
                    </div>
                  </div>

                  {/* Job 3 - Teaching Assistant */}
                  <div className="relative flex items-start mb-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 border-2 border-secondary/20 shadow-lg">
                      <Image src="/utwente.jpeg" alt="University of Twente" width={40} height={40} className="w-10 h-10 rounded-full" />
                    </div>
                    <div className="ml-6">
                      <h5 className="text-lg font-semibold text-secondary">Teaching Assistant</h5>
                      <p className="text-muted-foreground font-medium">
                        @ <a href="https://www.utwente.nl/en/tcs/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">University of Twente - TCS</a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">Jul 2024 - Present</p>
                    </div>
                  </div>

                  {/* Job 4 - Programming Teacher */}
                  <div className="relative flex items-start mb-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 border-2 border-accent/20 shadow-lg">
                      <Image src="/fiverr.jpeg" alt="Fiverr" width={40} height={40} className="w-10 h-10 rounded-full" />
                    </div>
                    <div className="ml-6">
                      <h5 className="text-lg font-semibold text-accent">Programming Teacher</h5>
                      <p className="text-muted-foreground font-medium">
                        @ <a href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Fiverr</a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">Jul 2023 - Aug 2025</p>
                    </div>
                  </div>

                  {/* Job 5 - Student for a Day Mentor */}
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 border-2 border-primary/20 shadow-lg">
                      <Image src="/utwente.jpeg" alt="University of Twente" width={40} height={40} className="w-10 h-10 rounded-full" />
                    </div>
                    <div className="ml-6">
                      <h5 className="text-lg font-semibold text-primary">Student for a Day Mentor</h5>
                      <p className="text-muted-foreground font-medium">
                        @ <a href="https://www.utwente.nl/en/tcs/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">University of Twente - TCS</a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">Oct 2022 - Dec 2023</p>
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
