"use client"

import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Link from "next/link"

export function Hero() {
  const { ref: heroRef, isRevealed: heroRevealed } = useScrollReveal()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-full blur-3xl" />
      </div>

      <div ref={heroRef} className={`max-w-6xl mx-auto w-full relative z-10 transition-all duration-1000 ${heroRevealed ? 'animate-scale-in' : 'opacity-0'}`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground animate-slide-in-left">
              <span className="w-2 h-2 bg-fuchsia-500 rounded-full animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              Hi, I&apos;m{" "}
              <span className="text-gradient animate-gradient">Smily Nakka</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              Full Stack Developer
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              BTech 4th-year CSE student at Aditya College of Engineering & Technology (ACET)
              with skills in Java Programming, DSA, MERN Stack, and Basics of SpringBoot.
              Passionate about competitive programming and problem-solving.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
              <MapPin className="w-4 h-4 text-primary" />
              <span>Andhra Pradesh, India</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-slide-in-left" style={{ animationDelay: '1s' }}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground magnetic-btn glow-border">
                <Link href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary magnetic-btn spotlight">
                <Link href="/resume.pdf" target="_blank">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 animate-slide-in-left" style={{ animationDelay: '1.2s' }}>
              <Link
                href="https://github.com/Smily2531"
                target="_blank"
                className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 magnetic-btn spotlight"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/smily-nakka-168103312/"
                target="_blank"
                className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 magnetic-btn spotlight"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:smilynakka135@gmail.com"
                className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 magnetic-btn spotlight"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right - Avatar/Visual */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse scale-110" />
              <div className="absolute inset-0 rounded-full border border-primary/10 scale-125 animate-glow" />
              <div className="absolute inset-0 rounded-full border border-accent/20 scale-150 animate-pulse" style={{ animationDelay: '1s' }} />

              {/* Avatar circle with initials */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center glass animate-float card-3d glow-border">
                <span className="text-6xl md:text-8xl font-bold text-gradient animate-gradient">SN</span>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 right-4 px-4 py-2 rounded-full glass text-sm font-medium animate-float spotlight" style={{ animationDelay: '0.5s' }}>
                MERN Stack
              </div>
              <div className="absolute -bottom-4 left-4 px-4 py-2 rounded-full glass text-sm font-medium animate-float spotlight" style={{ animationDelay: '1s' }}>
                React.js
              </div>
              <div className="absolute top-1/2 -left-8 px-4 py-2 rounded-full glass text-sm font-medium animate-float spotlight" style={{ animationDelay: '1.5s' }}>
                Java
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
