"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Folder } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Link from "next/link"

// projects populated with real portfolio entries
const projects = [
  {
    id: 1,
    title: "FlySmily - Book Smarter, Travel Lighter",
    description: "Full-stack MERN flight booking platform with user roles for Customers, Admins and Flight Operators. Features include secure registration/login, flight search, booking management, admin analytics and real‑time status updates for operators.",
    image: "/images/projects/flysmily-screenshot.jpg", // Add your screenshot here
    video: null, // Or add video URL like "/videos/flysmily-demo.mp4"
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Mongoose",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/Smily2531/FlySmily-BookSmarter-TravelLighter",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "SAMVAAD AI – Intelligent Communication Platform",
    description: "Real-time messaging & video conferencing with AI meeting intelligence (transcription, diarization, summaries, PDF reports). Built as a microservices stack using React, Node/TypeScript and Python/FastAPI.",
    image: "/images/projects/samvaad-screenshot.jpg", // Add your screenshot here
    video: null, // Or add video URL like "/videos/samvaad-demo.mp4"
    tech: [
      "React",
      "Node.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "Socket.io",
      "MongoDB",
    ],
    github: "https://github.com/Smily2531/samvaad-ai",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Event Ticketing Web Application",
    description: "MERN stack system for event organizers and attendees. Create/manage events, handle registrations with auto/manual approval, and provide instant feedback through a modern gradient UI.",
    image: "/images/projects/event-ticketing-screenshot.jpg", // Add your screenshot here
    video: null,
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/Smily2531/event-ticketing-app",
    live: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Online Steganography Messenger",
    description: "Secure Spring Boot messaging app using LSB steganography to embed text inside images. No plaintext messages are stored; decoding happens client‑side on demand.",
    image: "/images/projects/steganography-screenshot.jpg", // Add your screenshot here
    video: null,
    tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "LSB Steganography"],
    github: "https://github.com/Smily2531/Secure-Steganography-Chat",
    live: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Login & Registration Form with Menubar",
    description: "Lightweight HTML/CSS/JS project featuring a toggling login/register form and responsive navigation bar with basic validation.",
    image: "/images/projects/login-form-screenshot.jpg", // Add your screenshot here
    video: null,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Smily2531/login-registration-form-menubar",
    live: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Deep Learning Fundus DR Classification",
    description: "Flask app for diabetic retinopathy detection using an Xception‑based CNN. Upload fundus images for instant predictions or retrain the model locally.",
    image: "/images/projects/fundus-dr-screenshot.jpg", // Add your screenshot here
    video: null,
    tech: ["Python", "Flask", "TensorFlow", "Keras"],
    github: "https://github.com/Smily2531/DeepLearning_Fundus_DR",
    live: "#",
    featured: false,
  },
]

export function Projects() {
  const { ref: projectsRef, isRevealed: projectsRevealed } = useScrollReveal()
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${projectsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I&apos;ve built to solve real problems
          </p>
        </div>

        {/* Featured Projects - Larger Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => {
            const slideAnim = projectsRevealed
              ? index % 2 === 0
                ? 'animate-slide-in-left'
                : 'animate-slide-in-right'
              : '';
            return (
            <Card
              key={project.id}
              className={`
                glass border-border hover:border-primary/50 transition-all duration-500 group overflow-hidden transform-gpu hover:-translate-y-2 hover:translate-x-2
                card-3d glow-border spotlight
                ${slideAnim}
                ${projectsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                {/* Project Media */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden group/media">
                  {project.video ? (
                    <video
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <Folder className="w-16 h-16 text-primary/50" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-xs font-medium animate-pulse-glow">
                    Featured
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <Button asChild variant="ghost" size="sm" className="magnetic-btn">
                      <Link
                        href={project.github}
                        target="_blank"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" size="sm" className="magnetic-btn">
                      <Link
                        href={project.live}
                        target="_blank"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )})}
        </div>

        {/* Other Projects - Grid */}
        <h3 className={`text-2xl font-semibold mb-8 text-center transition-all duration-700 delay-300 ${projectsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Other <span className="text-gradient">Projects</span>
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => {
            const slideAnim = projectsRevealed
              ? index % 2 === 0
                ? 'animate-slide-in-left'
                : 'animate-slide-in-right'
              : '';
            return (
            <Card
              key={project.id}
              className={`
                glass border-border hover:border-primary/50 transition-all duration-500 group transform-gpu hover:-translate-y-2 hover:translate-x-2
                card-3d glow-border spotlight
                ${slideAnim}
                ${projectsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <CardContent className="p-6">
                {/* Project Media for Other Projects */}
                {(project.image || project.video) && (
                  <div className="mb-4 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center relative overflow-hidden group/media">
                    {project.video ? (
                      <video
                        className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover/media:scale-105"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => e.currentTarget.pause()}
                      >
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover/media:scale-105"
                      />
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary/50" />
                  <div className="flex items-center gap-3">
                    <Button asChild variant="ghost" size="sm" className="magnetic-btn p-2">
                      <Link
                        href={project.github}
                        target="_blank"
                      >
                        <Github className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" size="sm" className="magnetic-btn p-2">
                      <Link
                        href={project.live}
                        target="_blank"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
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
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          )})}
        </div>

        {/* GitHub CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${projectsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary magnetic-btn glow-border">
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
