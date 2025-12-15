"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  liveUrl?: string
  githubUrl?: string
  technologies?: string[]
}

export default function ProjectCard({
  title,
  description,
  image = "/placeholder.svg",
  liveUrl,
  githubUrl,
  technologies = [],
}: ProjectCardProps) {
  return (
    <div className="w-full max-w-xl bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Project Image */}
      <div className="relative overflow-hidden bg-muted h-40 w-full">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={600}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        {/* Header */}
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-card-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* CTA Buttons (equal width) */}
        <div className="mt-3 grid grid-cols-2 gap-3">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex bg-primary text-primary-foreground hover:opacity-80 transition-opacity py-2 rounded-md font-medium items-center justify-center gap-2"
            >
              View Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          ) : (
            <button className="w-full bg-muted text-muted-foreground py-2 rounded-md font-medium" disabled>
              View Project
            </button>
          )}

          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 border border-border rounded-md py-2 text-sm text-muted-foreground hover:bg-black hover:text-white hover:border-black transition-colors"
              aria-label={`${title} GitHub`}
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  )
}
