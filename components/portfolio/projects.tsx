"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Folder } from "lucide-react"
import Link from "next/link"

// Projects Data
const projects = [
  {
    id: 1,
    title: "FlySmily – Book Smarter, Travel Lighter",
    description: "FlySmily is a full-stack MERN flight booking web application that allows customers to search and book flights while administrators and operators manage flights, bookings, and flight status. The platform supports role-based dashboards for Customers, Admins, and Flight Operators to provide a smooth travel booking experience.",
    image: "https://drive.google.com/uc?export=view&id=1ZP8CNxxoLGPJk4ysJLb1-BTJaO5-5Ljf",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Authentication", "Bootstrap/Tailwind CSS", "Cloudinary/Multer (optional)"],
    github: "https://github.com/Smily2531/FlySmily-BookSmarter-TravelLighter",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "SAMVAAD – AI Real-Time Communication & Meeting Assistant",
    description: "SAMVAAD AI is an intelligent real-time communication platform that integrates messaging, video conferencing, and AI-powered meeting intelligence. It provides live transcription, speaker diarization, AI meeting summaries, and PDF reports using a microservices architecture combining React, Node.js, and Python AI services.",
    image: "https://drive.google.com/uc?export=view&id=1uRom6hXhIEZi2LglEW7gcXTBFRKbqJGX",
    tech: [
      "React", "Vite", "Tailwind CSS", "Socket.io Client", "React Query", "Framer Motion",
      "Node.js", "TypeScript", "Express.js", "MongoDB", "JWT Authentication", "Socket.io",
      "Python AI Services: FastAPI, Faster-Whisper, Pyannote.audio, PyTorch",
      "Docker, Jenkins, Vercel"
    ],
    github: "https://github.com/Smily2531/samvaad-ai",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Event Ticketing Web Application",
    description: "A complete MERN stack web application for managing event registrations and ticketing. Organizers can create events and manage registrations, while users can discover events and register for tickets with automatic or manual approval workflows.",
    image: "https://drive.google.com/uc?export=view&id=1ZyID7FtMTNZ7NdEzFwLvfRRD09oU4Tal",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Authentication", "Axios", "Context API"],
    github: "https://github.com/Smily2531/event-ticketing-app",
    live: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Secure Steganography Chat",
    description: "Secure Steganography Chat is a Spring Boot messaging platform where text messages are hidden inside images using LSB (Least Significant Bit) steganography. Messages are never stored in plaintext, ensuring high security by embedding secret messages within image pixels.",
    image: "https://drive.google.com/uc?export=view&id=1FygjY71eGbseZp9GL0UPGQyBZKG2ifGB",
    tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "HTML", "CSS", "JavaScript", "Bootstrap", "Canvas API"],
    github: "https://github.com/Smily2531/Secure-Steganography-Chat",
    live: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Deep Learning Fundus Image Analysis for Diabetic Retinopathy Detection",
    description: "A deep learning web application that detects diabetic retinopathy from retinal fundus images using an Xception-based convolutional neural network. The application allows users to upload medical images and receive instant AI predictions through a Flask web interface.",
    image: "https://drive.google.com/uc?export=view&id=1Hstt-CrKE2tWVzpgAc9Oy4bmGNmQbLbh",
    tech: ["Python", "TensorFlow/Keras", "Xception CNN", "Flask", "NumPy", "HTML", "CSS"],
    github: "https://github.com/Smily2531/DeepLearning_Fundus_DR",
    live: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Login & Registration Form with Navigation Bar",
    description: "A responsive login and registration web interface featuring a modern navigation bar and toggle functionality between login and signup forms. The project demonstrates clean UI design and basic form validation using HTML, CSS, and JavaScript.",
    image: "https://drive.google.com/uc?export=view&id=1cuGtHmQSQVkF2yiupLja0hfL3x0XS98-",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Smily2531/login-registration-form-menubar",
    live: "#",
    featured: false,
  },
]

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I&apos;ve built to solve real problems
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="glass border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden">
              <CardContent className="p-0">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-xs font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground">{tech}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <Link href={project.github} target="_blank" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-4 h-4" /> Code
                    </Link>
                    <Link href={project.live} target="_blank" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-semibold mb-8 text-center">Other <span className="text-gradient">Projects</span></h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card key={project.id} className="glass border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary/50" />
                  <div className="flex items-center gap-3">
                    <Link href={project.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link href={project.live} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs text-muted-foreground">{tech}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary">
            <Link href="https://github.com/Smily2531" target="_blank">
              <Github className="w-4 h-4 mr-2" /> View More on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
