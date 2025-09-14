"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "michail@flevaris.gr",
      link: "mailto:michail@flevaris.gr",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+31 611 47 45 00",
      link: "tel:31611474500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Enschede, The Netherlands",
      link: "https://maps.app.goo.gl/suR3JxxCDpMpbT2W7",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
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
                        <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
