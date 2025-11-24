"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

export function ContactSection() {

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "michalis@flevaris.gr",
      link: "mailto:michalis@flevaris.gr",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+31 611 47 45 00",
      link: "tel:31611474500",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/flevosss",
      link: "https://github.com/flevosss",
    },
    { // linkedin
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/mflevaris",
      link: "https://linkedin.com/in/mflevaris",
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            You can <span className="text-primary">reach out </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-lift bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{info.title}</p>
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">I'm currently based in</p>
              <a
                href="https://maps.app.goo.gl/suR3JxxCDpMpbT2W7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Enschede, The Netherlands
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
