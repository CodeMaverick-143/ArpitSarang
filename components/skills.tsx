"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiExpress,
  SiTailwindcss,
  SiPython,
  SiMongodb,
  SiMysql,
  SiGit,
  SiLinux,
  SiNextdotjs,
  SiGo,
  SiRust,
  SiKotlin,
  SiGnubash,
  SiCloudflare,
  SiTauri,
  SiAstro,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiSqlite,
  SiPrisma,
  SiNodedotjs,
  SiDocker,
  SiAmazonwebservices,
  SiVercel,
  SiNetlify,
  SiGithubactions,
  SiTensorflow,
  SiOpenai,
  SiElectron,
  SiHtml5,
  SiCss3
} from "react-icons/si"
import {
  Code2,
  LayoutTemplate,
  Server,
  Database,
  BrainCircuit,
  Monitor,
  Cloud,
  Wrench,
  Users,
  Target,
  Rocket,
  FileText,
  Lightbulb,
  Globe
} from "lucide-react"

type Skill = {
  name: string
  color: string
  level?: number
  proficiency: string
  context: string
  icon: React.ReactNode
}

type SkillSection = {
  category: string
  icon: React.ReactNode
  description: string
  skills: Skill[]
}

export default function Skills() {
  const skillSections: SkillSection[] = [
    {
      category: "Core Languages",
      icon: <Code2 className="w-5 h-5" />,
      description: "The languages I use daily to build scalable products",
      skills: [
        {
          name: "TypeScript",
          color: "#3178c6",
          level: 90,
          proficiency: "Advanced (90%)",
          context: "Primary language for all production frontend projects at Saturn",
          icon: <SiTypescript className="w-6 h-6" />
        },
        {
          name: "JavaScript (ES6+)",
          color: "#f1e05a",
          level: 90,
          proficiency: "Advanced (90%)",
          context: "Node.js backends, React applications, and CLI tooling",
          icon: <SiJavascript className="w-6 h-6" />
        },
        {
          name: "Python",
          color: "#3572A5",
          level: 75,
          proficiency: "Intermediate (75%)",
          context: "AI/ML experiments, data analysis, and backend scripting",
          icon: <SiPython className="w-6 h-6" />
        },
        {
          name: "Rust",
          color: "#CE412B",
          level: 75,
          proficiency: "Intermediate (75%)",
          context: "Tauri desktop app development for Saturn IDE, performance-critical systems",
          icon: <SiRust className="w-6 h-6" />
        },
        {
          name: "SQL",
          color: "#4169E1",
          level: 85,
          proficiency: "Advanced (85%)",
          context: "Complex queries, optimization, database auditing",
          icon: <SiPostgresql className="w-6 h-6" />
        },
        {
          name: "Bash/Shell",
          color: "#4EAA25",
          level: 80,
          proficiency: "Intermediate (80%)",
          context: "CLI tools, DevOps scripts, automation",
          icon: <SiGnubash className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Frontend Development",
      icon: <LayoutTemplate className="w-5 h-5" />,
      description: "Building fast, responsive, and beautiful interfaces with React and Next.js",
      skills: [
        {
          name: "React",
          color: "#61dafb",
          level: 85,
          proficiency: "Advanced (85%)",
          context: "Component-driven UI development, state management, production applications",
          icon: <SiReact className="w-6 h-6" />
        },
        {
          name: "Next.js",
          color: "#005571",
          level: 80,
          proficiency: "Advanced (80%)",
          context: "Full-stack React, SSR/SSG, API routes, and edge functions",
          icon: <SiNextdotjs className="w-6 h-6" />
        },
        {
          name: "Astro",
          color: "#FF5D01",
          level: 75,
          proficiency: "Intermediate (75%)",
          context: "Static site generation, performance-optimized web projects",
          icon: <SiAstro className="w-6 h-6" />
        },
        {
          name: "Tailwind CSS",
          color: "#38bdf8",
          level: 90,
          proficiency: "Advanced (90%)",
          context: "Rapid UI development, design systems, responsive layouts",
          icon: <SiTailwindcss className="w-6 h-6" />
        },
        {
          name: "HTML/CSS",
          color: "#e34f26",
          level: 88,
          proficiency: "Advanced (88%)",
          context: "Semantic markup, CSS Grid/Flexbox, animations",
          icon: <div className="flex gap-1"><SiHtml5 className="w-4 h-4" /><SiCss3 className="w-4 h-4" /></div>
        }
      ]
    },
    {
      category: "Backend & Server-Side",
      icon: <Server className="w-5 h-5" />,
      description: "Designing APIs and systems that power production applications",
      skills: [
        {
          name: "Node.js",
          color: "#339933",
          level: 85,
          proficiency: "Advanced (85%)",
          context: "Express servers, REST APIs, backend automation for Saturn",
          icon: <SiNodedotjs className="w-6 h-6" />
        },
        {
          name: "Express.js",
          color: "#828282",
          level: 80,
          proficiency: "Advanced (80%)",
          context: "RESTful API development, middleware, routing",
          icon: <SiExpress className="w-6 h-6" />
        },
        {
          name: "Prisma ORM",
          color: "#2D3748",
          level: 85,
          proficiency: "Advanced (85%)",
          context: "Database modeling, migrations, and type-safe queries for Saturn",
          icon: <SiPrisma className="w-6 h-6" />
        },
        {
          name: "Go (Golang)",
          color: "#00ADD8",
          level: 70,
          proficiency: "Intermediate (70%)",
          context: "Performance-critical services, concurrent systems",
          icon: <SiGo className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Databases & Data",
      icon: <Database className="w-5 h-5" />,
      description: "Expert in relational and NoSQL databases; database auditing and optimization",
      skills: [
        {
          name: "PostgreSQL",
          color: "#4169E1",
          level: 85,
          proficiency: "Advanced (85%)",
          context: "Primary database for Saturn, complex schemas, performance tuning",
          icon: <SiPostgresql className="w-6 h-6" />
        },
        {
          name: "MySQL",
          color: "#00758F",
          level: 75,
          proficiency: "Intermediate (75%)",
          context: "Relational databases, data auditing, optimization",
          icon: <SiMysql className="w-6 h-6" />
        },
        {
          name: "SQLite",
          color: "#003B57",
          level: 85,
          proficiency: "Advanced (85%)",
          context: "Local-first development, embedded databases, Tauri applications",
          icon: <SiSqlite className="w-6 h-6" />
        },
        {
          name: "MongoDB",
          color: "#4DB33D",
          level: 80,
          proficiency: "Intermediate (80%)",
          context: "NoSQL data modeling, document storage, real-time applications",
          icon: <SiMongodb className="w-6 h-6" />
        }
      ]
    },
    {
      category: "AI/ML & Data Science",
      icon: <BrainCircuit className="w-5 h-5" />,
      description: "Integrating AI models and data science into production applications",
      skills: [
        {
          name: "Python ML Stack",
          color: "#3776AB",
          level: 75,
          proficiency: "Intermediate (75%)",
          context: "NumPy, Pandas, scikit-learn for data manipulation and analysis",
          icon: <div className="flex gap-1"><SiPython className="w-4 h-4" /><SiNumpy className="w-4 h-4" /><SiPandas className="w-4 h-4" /></div>
        },
        {
          name: "Deep Learning",
          color: "#FF6F00",
          level: 60,
          proficiency: "Beginner (60%)",
          context: "Neural networks, TensorFlow fundamentals (AI For Everyone certified)",
          icon: <SiTensorflow className="w-6 h-6" />
        },
        {
          name: "LLM Integration",
          color: "#412991",
          level: 75,
          proficiency: "Intermediate (75%)",
          context: "Local LLMs, API integration, prompt engineering",
          icon: <SiOpenai className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Desktop & Mobile",
      icon: <Monitor className="w-5 h-5" />,
      description: "Building cross-platform desktop applications and mobile experiences",
      skills: [
        {
          name: "Tauri",
          color: "#24C8DB",
          level: 80,
          proficiency: "Advanced (80%)",
          context: "Building Saturn IDE—lightweight desktop apps with Rust + TypeScript",
          icon: <SiTauri className="w-6 h-6" />
        },
        {
          name: "React Native",
          color: "#61dafb",
          level: 80,
          proficiency: "Intermediate (80%)",
          context: "Cross-platform mobile development with Expo",
          icon: <SiReact className="w-6 h-6" />
        },
        {
          name: "Electron",
          color: "#47848F",
          level: 75,
          proficiency: "Intermediate (75%)",
          context: "Desktop application development with node runtime",
          icon: <SiElectron className="w-6 h-6" />
        }
      ]
    },
    {
      category: "DevOps & Infrastructure",
      icon: <Cloud className="w-5 h-5" />,
      description: "From local development to production deployment and CI/CD pipelines",
      skills: [
        {
          name: "Git & GitHub",
          color: "#6e5494",
          level: 85,
          proficiency: "Advanced (85%)",
          context: "Version control, collaboration, open source contributions (500+)",
          icon: <SiGit className="w-6 h-6" />
        },
        {
          name: "Docker",
          color: "#2496ed",
          level: 70,
          proficiency: "Intermediate (70%)",
          context: "Containerization, local development, application deployment",
          icon: <SiDocker className="w-6 h-6" />
        },
        {
          name: "Vercel / Netlify",
          color: "#000000",
          level: 85,
          proficiency: "Advanced (85%)",
          context: "Frontend deployment, serverless functions, edge computing",
          icon: <div className="flex gap-1"><SiVercel className="w-4 h-4" /><SiNetlify className="w-4 h-4" /></div>
        },
        {
          name: "AWS",
          color: "#232F3E",
          level: 70,
          proficiency: "Intermediate (70%)",
          context: "EC2, S3, RDS, for production deployments",
          icon: <SiAmazonwebservices className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: <Wrench className="w-5 h-5" />,
      description: "Development tools, IDEs, and utility platforms",
      skills: [
        {
          name: "VS Code",
          color: "#007acc",
          level: 90,
          proficiency: "Advanced (90%)",
          context: "Primary development environment, extensions, debugging",
          icon: <Wrench className="w-6 h-6" />
        },
        {
          name: "GitHub Actions",
          color: "#2088ff",
          level: 75,
          proficiency: "Intermediate (75%)",
          context: "CI/CD pipelines, automation, testing workflows",
          icon: <SiGithubactions className="w-6 h-6" />
        },
        {
          name: "NeonDB",
          color: "#00E599",
          level: 85,
          proficiency: "Advanced (85%)",
          context: "Serverless PostgreSQL for Saturn and production projects",
          icon: <SiPostgresql className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Soft Skills & Competencies",
      icon: <Users className="w-5 h-5" />,
      description: "Professional abilities that drive product and team success",
      skills: [
        {
          name: "Full-Stack Development",
          color: "#3B82F6",
          proficiency: "Advanced",
          context: "End-to-end application design and implementation",
          icon: <LayoutTemplate className="w-6 h-6" />
        },
        {
          name: "System Design",
          color: "#8B5CF6",
          proficiency: "Advanced",
          context: "Database schema design, API architecture, scalable systems",
          icon: <Server className="w-6 h-6" />
        },
        {
          name: "Problem-Solving",
          color: "#EF4444",
          proficiency: "Advanced",
          context: "Complex bug reproduction, root cause analysis, performance optimization",
          icon: <Target className="w-6 h-6" />
        },
        {
          name: "UI/UX Design",
          color: "#EC4899",
          proficiency: "Intermediate",
          context: "Figma, component design, user experience optimization",
          icon: <Lightbulb className="w-6 h-6" />
        },
        {
          name: "Product Development",
          color: "#F59E0B",
          proficiency: "Intermediate",
          context: "Building Saturn IDE—feature prioritization, user feedback integration",
          icon: <Rocket className="w-6 h-6" />
        },
        {
          name: "Technical Documentation",
          color: "#10B981",
          proficiency: "Advanced",
          context: "README files, API docs, onboarding guides for open source",
          icon: <FileText className="w-6 h-6" />
        },
        {
          name: "Open Source",
          color: "#6366F1",
          proficiency: "Advanced",
          context: "500+ contributions, community engagement, collaborative development",
          icon: <Globe className="w-6 h-6" />
        }
      ]
    }
  ]

  return (
    <section className="py-20 space-y-16">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Skills & Tech Stack</h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Building production-grade applications with modern tech. Specialized in full-stack development,
          database systems, and AI integration. Creator of Saturn IDE—an AI-powered local database IDE.
        </p>
      </div>

      <div className="grid gap-12">
        {skillSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-6">
            <div className="flex items-center gap-3 border-b border-border/50 pb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {section.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{section.category}</h3>
                <p className="text-muted-foreground">{section.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.skills.map((skill, skillIndex) => (
                <Card key={skillIndex} className="group border-border/50 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <CardContent className="p-5 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${skill.color}15` }}
                        >
                          <div style={{ color: skill.color }}>
                            {skill.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg leading-tight">{skill.name}</h4>
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            {skill.proficiency}
                          </span>
                        </div>
                      </div>
                    </div>

                    {skill.level && (
                      <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700 ease-out group-hover:shadow-[0_0_8px_rgba(0,0,0,0.2)]"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                        ></div>
                      </div>
                    )}

                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {skill.context}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
