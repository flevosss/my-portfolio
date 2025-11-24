"use client"

import Image from "next/image"

interface Skill {
  name: string
  percentage: number
  color: string
  position: string
}

interface SkillCircleProps {
  profileImage: string
  skills: Skill[]
}

export function SkillCircle({ profileImage, skills }: SkillCircleProps) {
  return (
    <div className="flex justify-center mb-16">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
            <Image
              src={profileImage}
              alt="Profile Picture"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="absolute inset-0">
          {skills.map((skill, index) => (
            <div key={index} className={`absolute ${skill.position}`}>
              <div className={`${skill.color} px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg`}>
                  {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
