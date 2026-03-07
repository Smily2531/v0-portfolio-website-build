"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Github, Linkedin, Send, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Let&apos;s work <span className="text-gradient">together</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a Full Stack Developer passionate about building web applications that make a difference. Feel free to reach out if you&apos;d like to collaborate on a project or just have a chat about technology.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="glass border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4">
                  <Link 
                    href="mailto:smilynakka135@gmail.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium group-hover:text-primary transition-colors">smilynakka135@gmail.com</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="glass border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Andhra Pradesh, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex items-center gap-4">
                <Link 
                  href="https://github.com/Smily2531" 
                  target="_blank"
                  className="p-4 rounded-lg glass hover:bg-primary/20 transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/smily-nakka-168103312/" 
                  target="_blank"
                  className="p-4 rounded-lg glass hover:bg-primary/20 transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link 
                  href="mailto:smilynakka135@gmail.com"
                  className="p-4 rounded-lg glass hover:bg-primary/20 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass border-border">
            <CardContent className="p-6 md:p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
