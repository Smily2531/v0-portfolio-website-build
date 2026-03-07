"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react"

const experience = [
  {
    type: "work",
    title: "Front End Developer Intern",
    organization: "Technical Hub Pvt Ltd",
    location: "Surampalem, Kakinada",
    period: "June 2024 - July 2024",
    description: [
      "Designed and developed interactive static and dynamic websites using HTML, CSS, React.js, and JavaScript to improve user engagement",
      "Built reusable React components and implemented responsive UI layouts",
      "Identified and fixed bugs and performance issues to ensure smooth and efficient web application functionality",
      "Used Git for version control, enabling collaboration and maintaining an organized code repository",
    ],
    skills: ["HTML", "CSS", "React.js", "JavaScript", "Git"],
  },
]

const education = [
  {
    degree: "Bachelor of Technology in CSE",
    institution: "Aditya College of Engineering & Technology (ACET)",
    university: "Aditya University",
    period: "2022 - 2026 (Expected)",
    grade: "8.02 CGPA",
    status: "4th Year",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Vidhya Nidhi Junior College",
    period: "2020 - 2022",
    grade: "860/1000",
    subjects: "Mathematics, Physics, Chemistry",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-border" />
              
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-10 pb-8 last:pb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  
                  <Card className="glass border-border hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-lg">{exp.title}</h4>
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {exp.organization}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary mt-1">-</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-border" />
              
              {education.map((edu, index) => (
                <div key={index} className="relative pl-10 pb-8 last:pb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  
                  <Card className="glass border-border hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-lg">{edu.degree}</h4>
                        {edu.status && (
                          <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                            {edu.status}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      {edu.university && (
                        <p className="text-sm text-muted-foreground mb-2">{edu.university}</p>
                      )}
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1 text-primary font-medium">
                          <GraduationCap className="w-3 h-3" />
                          {edu.grade}
                        </span>
                      </div>
                      
                      {edu.subjects && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Subjects: {edu.subjects}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
