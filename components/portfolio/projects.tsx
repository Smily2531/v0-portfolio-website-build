"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Folder } from "lucide-react"
import Link from "next/link"

// Placeholder projects - User will update these with their actual projects
const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of your first project. Explain what problem it solves and the key features.",
    image: null,
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Smily2531",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of your second project. Highlight the technologies used and your role.",
    image: null,
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Smily2531",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of your third project. Share the impact or results of this project.",
    image: null,
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/Smily2531",
    live: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description of your fourth project. Mention any challenges you overcame.",
    image: null,
    tech: ["MERN Stack", "REST API"],
    github: "https://github.com/Smily2531",
    live: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Project 5",
    description: "Description of your fifth project. Include any notable achievements.",
    image: null,
    tech: ["React", "Express.js", "MongoDB"],
    github: "https://github.com/Smily2531",
    live: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Project 6",
    description: "Description of your sixth project. Explain what you learned from building it.",
    image: null,
    tech: ["Angular", "Node.js", "PostgreSQL"],
    github: "https://github.com/Smily2531",
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

        {/* Featured Projects - Larger Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="glass border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Folder className="w-16 h-16 text-primary/50" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-xs font-medium">
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
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <Link 
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Link>
                    <Link 
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects - Grid */}
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
                    <Link 
                      href={project.live}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
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

        {/* GitHub CTA */}
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
