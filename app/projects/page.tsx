"use client"

import { useState } from "react"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
    const [filter, setFilter] = useState<"all" | "open-source" | "personal" | "work">("all")

    const filteredProjects = projects.filter((project) => {
        if (filter === "all") return true
        if (filter === "open-source") return project.openSource
        if (filter === "personal") return !project.openSource
        // Assuming "work" would be another property or tag, for now using placeholder logic
        if (filter === "work") return false
        return true
    })

    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold">Projects</h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    A collection of my open source contributions, personal projects, and professional work.
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                <Button
                    variant={filter === "all" ? "default" : "outline"}
                    onClick={() => setFilter("all")}
                >
                    All Projects
                </Button>
                <Button
                    variant={filter === "open-source" ? "default" : "outline"}
                    onClick={() => setFilter("open-source")}
                >
                    Open Source
                </Button>
                <Button
                    variant={filter === "personal" ? "default" : "outline"}
                    onClick={() => setFilter("personal")}
                >
                    Personal
                </Button>
                <Button
                    variant={filter === "work" ? "default" : "outline"}
                    onClick={() => setFilter("work")}
                >
                    Work
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}
