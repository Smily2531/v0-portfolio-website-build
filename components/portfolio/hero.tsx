"use client"

import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for opportunities
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-gradient">Smily Nakka</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Full Stack Developer
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
             I Build Modern Web Applications Using MERN Stack and Have Strong Skills in Java, DSA, and Spring Boot Basics.
              I’m Passionate About Problem-Solving and Competitive Programming, Constantly Learning and Creating Impactful Projects.
            </p>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Andhra Pradesh, India</span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary">
                <Link href="https://drive.google.com/uc?export=download&id=1c9c7HhBwlWwE-8-RH2U_zqp1gn3eB0s4" target="_blank">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Link>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <Link 
                href="https://github.com/Smily2531" 
                target="_blank"
                className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/smily-nakka-168103312/" 
                target="_blank"
                className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link 
                href="mailto:smilynakka135@gmail.com"
                className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          {/* Right - Avatar/Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse scale-110" />
              <div className="absolute inset-0 rounded-full border border-primary/10 scale-125" />
              
              {/* Avatar circle with initials */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/30 to-cyan-500/30 flex items-center justify-center glass animate-float">
                <span className="text-6xl md:text-8xl font-bold text-gradient">SN</span>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 right-4 px-4 py-2 rounded-full glass text-sm font-medium animate-float" style={{ animationDelay: '0.5s' }}>
                MERN Stack
              </div>
              <div className="absolute -bottom-4 left-4 px-4 py-2 rounded-full glass text-sm font-medium animate-float" style={{ animationDelay: '1s' }}>
                React.js
              </div>
              <div className="absolute top-1/2 -left-8 px-4 py-2 rounded-full glass text-sm font-medium animate-float" style={{ animationDelay: '1.5s' }}>
                Java
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
