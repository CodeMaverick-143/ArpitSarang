import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Hero from "@/components/hero"
import ContributionGraph from "@/components/contribution-graph"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"

export default function Home() {
  const featuredProjects = projects.filter(p => p.openSource).slice(0, 2)

  return (
    <div className="space-y-16">
      <Hero />

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="text-primary hover:underline flex items-center gap-2">
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <ContributionGraph />

      <section className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to collaborate?</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8">
            <Link href="/projects">Browse Portfolio</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
