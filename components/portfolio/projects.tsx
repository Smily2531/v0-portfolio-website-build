"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Folder, Video } from "lucide-react"
import Link from "next/link"

// Professional Projects Data
const projects = [
  {
    id: 1,
    title: "FlySmily – Book Smarter, Travel Lighter",
    description:
      "Full-stack MERN flight booking platform with role-based dashboards for Customers, Admins, and Flight Operators. Real-time flight management and booking workflows.",
    image: "https://drive.google.com/uc?id=1ZP8CNxxoLGPJk4ysJLb1-BTJaO5-5Ljf",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Bootstrap/Tailwind CSS",
    ],
    github: "https://github.com/Smily2531/FlySmily-BookSmarter-TravelLighter",
    live: "#",
    video: "https://drive.google.com/file/d/1_A2jGVhcZXmjomic0ts-w1IdkbxrvQwL/view",
    featured: true,
  },
  {
    id: 2,
    title: "SAMVAAD – AI Real-Time Communication & Meeting Assistant",
    description:
      "AI-powered real-time communication platform with messaging, video conferencing, live transcription, speaker diarization, and AI meeting summaries.",
    image: "https://drive.google.com/uc?id=1uRom6hXhIEZi2LglEW7gcXTBFRKbqJGX",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Socket.io",
      "Node.js",
      "TypeScript",
      "Python AI Services",
      "Docker",
      "Jenkins",
    ],
    github: "https://github.com/Smily2531/samvaad-ai",
    live: "#",
    video: null,
    featured: true,
  },
  {
    id: 3,
    title: "Event Ticketing Web Application",
    description:
      "MERN stack web app for managing event registrations and ticketing. Organizers can create events; users can register with automatic/manual approval workflows.",
    image: "https://drive.google.com/uc?id=1ZyID7FtMTNZ7NdEzFwLvfRRD09oU4Tal",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Axios", "Context API"],
    github: "https://github.com/Smily2531/event-ticketing-app",
    live: "#",
    video: null,
    featured: true,
  },
  {
    id: 4,
    title: "Secure Steganography Chat",
    description:
      "Spring Boot messaging platform that hides text messages in images using LSB steganography. Ensures encrypted communication with no plaintext storage.",
    image: "https://drive.google.com/uc?id=1FygjY71eGbseZp9GL0UPGQyBZKG2ifGB",
    tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap", "Canvas API"],
    github: "https://github.com/Smily2531/Secure-Steganography-Chat",
    live: "#",
    video: null,
    featured: false,
  },
  {
    id: 5,
    title: "Deep Learning Fundus Image Analysis",
    description:
      "AI system detects diabetic retinopathy from retinal fundus images using Xception CNN. Provides instant predictions via Flask web interface.",
    image: "https://drive.google.com/uc?id=1Hstt-CrKE2tWVzpgAc9Oy4bmGNmQbLbh",
    tech: ["Python", "TensorFlow/Keras", "Xception CNN", "Flask", "NumPy", "HTML/CSS"],
    github: "https://github.com/Smily2531/DeepLearning_Fundus_DR",
    live: "#",
    video: "https://drive.google.com/file/d/1IXfuCTzVBveESOMuqrYycPx3vBaAFveU/view",
    featured: false,
  },
  {
    id: 6,
    title: "Login & Registration Form with Navigation Bar",
    description:
      "Responsive login and registration interface with modern navbar and toggle between login/signup forms. Clean UI with form validation.",
    image: "https://drive.google.com/uc?id=1cuGtHmQSQVkF2yiupLja0hfL3x0XS98-",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Smily2531/login-registration-form-menubar",
    live: "#",
    video: null,
    featured: false,
  },
]

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my professional projects demonstrating real-world problem-solving skills
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="glass border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-0">
                <div
                  className="h-48 bg-cover bg-center flex items-center justify-center relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-xs font-medium">
                    Featured
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Link>
                    {project.live && project.live !== "#" && (
                      <Link
                        href={project.live}
                        target="_blank"
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Link>
                    )}
                    {project.video && (
                      <Link
                        href={project.video}
                        target="_blank"
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Video className="w-4 h-4" />
                        Video
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-semibold mb-8 text-center">
          Other <span className="text-gradient">Projects</span>
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card
              key={project.id}
              className="glass border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary/50" />
                  <div className="flex items-center gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    {project.live && project.live !== "#" && (
                      <Link
                        href={project.live}
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                    {project.video && (
                      <Link
                        href={project.video}
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Video className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>

                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary">
            <Link href="https://github.com/Smily2531" target="_blank">
              <Github className="w-4 h-4 mr-2" />
              View More on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
