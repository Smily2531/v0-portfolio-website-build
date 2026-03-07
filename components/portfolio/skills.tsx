"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Smartphone,
  GitBranch,
  Terminal,
  Layers
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React.js", "Next.js", "Angular", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript"],
    color: "from-cyan-500/20 to-teal-500/20",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQL"],
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["Java", "JavaScript", "C++", "DSA"],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    skills: ["Git", "GitHub", "Postman", "Eclipse", "Maven", "VS Code"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["MERN Stack", "React.js", "Express.js", "Bootstrap"],
    color: "from-red-500/20 to-rose-500/20",
  },
]

const languages = [
  { name: "Telugu", level: "Native", proficiency: 100 },
  { name: "English", level: "Fluent", proficiency: 85 },
  { name: "Hindi", level: "Beginner", proficiency: 40 },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category) => (
            <Card 
              key={category.title} 
              className="glass border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-foreground transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Languages Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Languages I <span className="text-gradient">Speak</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {languages.map((lang) => (
              <Card key={lang.name} className="glass border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-primary">{lang.level}</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full transition-all duration-1000"
                      style={{ width: `${lang.proficiency}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
