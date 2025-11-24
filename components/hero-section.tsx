"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Computer Science Student & Teaching Assistant @UTwente"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-slide-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Michalis</span>
          </h1>

          <div className="text-2xl md:text-3xl text-muted-foreground mb-8 h-16">
            <span className="border-r-2 border-primary animate-pulse">{displayText}</span>
          </div>

          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-float hover-lift">
                <Image
                  src="/michalis-flevaris.png"
                  alt="Michalis - Full-Stack Developer"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse"></div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty">
          I turn ideas into functional, user-friendly web applications, bringing concepts to life with modern 
          technologies and innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg hover-lift"
            >
              View My Work
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <Button variant="ghost" size="icon" className="hover-lift hover:bg-primary hover:text-primary-foreground" asChild>
              <a href="https://github.com/flevosss/" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift hover:bg-primary hover:text-primary-foreground" asChild>
              <a href="https://www.linkedin.com/in/mflevaris/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift hover:bg-primary hover:text-primary-foreground" asChild>
              <a href="mailto:michail@flevaris.gr">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
