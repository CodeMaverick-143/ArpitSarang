import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiPython,
  SiMongodb,
  SiMysql,
  SiGit,
  SiLinux,
  SiNextdotjs,
  SiGo,
  SiDjango
} from "react-icons/si"

export default function Skills() {
  const skills = [
    {
      name: "JavaScript",
      color: "#f1e05a",
      level: 90,
      icon: <SiJavascript className="w-6 h-6" />
    },
    {
      name: "TypeScript",
      color: "#3178c6",
      level: 80,
      icon: <SiTypescript className="w-6 h-6" />
    },
    {
      name: "React",
      color: "#61dafb",
      level: 85,
      icon: <SiReact className="w-6 h-6" />
    },

    {
      name: "Express.js",
      color: "#828282",
      level: 80,
      icon: <SiExpress className="w-6 h-6" />
    },
    {
      name: "Tailwind",
      color: "#38bdf8",
      level: 90,
      icon: <SiTailwindcss className="w-6 h-6" />
    },
    {
      name: "Bootstrap",
      color: "#7952b3",
      level: 75,
      icon: <SiBootstrap className="w-6 h-6" />
    },
    {
      name: "Python",
      color: "#3572A5",
      level: 75,
      icon: <SiPython className="w-6 h-6" />
    },
    {
      name: "Golang",
      color: "#00ADD8",
      level: 70,
      icon: <SiGo className="w-6 h-6" />
    },
    {
      name: "Django",
      color: "#092E20",
      level: 65,
      icon: <SiDjango className="w-6 h-6" />
    },
    {
      name: "MongoDB",
      color: "#4DB33D",
      level: 80,
      icon: <SiMongodb className="w-6 h-6" />
    },
    {
      name: "MySQL",
      color: "#00758F",
      level: 75,
      icon: <SiMysql className="w-6 h-6" />
    },
    {
      name: "GitHub",
      color: "#6e5494",
      level: 85,
      icon: <SiGit className="w-6 h-6" />
    },
    {
      name: "Linux",
      color: "#ffcc00",
      level: 70,
      icon: <SiLinux className="w-6 h-6" />
    },

    {
      name: "Next.js",
      color: "#005571",
      level: 65,
      icon: <SiNextdotjs className="w-6 h-6" />
    }
  ]

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Skills & Tech Stack</h2>

      <Card className="border-border/50">
        <CardHeader className="pb-8">
          <CardTitle className="text-2xl">Technical Proficiency</CardTitle>
          <p className="text-muted-foreground mt-2">
            Technologies and tools I work with regularly
          </p>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group space-y-3 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${skill.color}20`,
                      }}
                    >
                      <div style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                    </div>
                    <span className="font-semibold text-lg">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out group-hover:shadow-lg"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                      boxShadow: `0 0 10px ${skill.color}40`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
