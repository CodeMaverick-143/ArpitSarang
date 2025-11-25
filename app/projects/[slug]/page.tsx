import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Github, Globe, Star, GitFork, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"

interface ProjectPageProps {
    params: {
        slug: string
    }
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projects.find((p) => p.slug === params.slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <Link href="/projects" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
            </Link>

            <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <h1 className="text-4xl font-bold">{project.title}</h1>
                    <div className="flex gap-2">
                        <Button asChild variant="outline" size="sm">
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                View Code
                            </Link>
                        </Button>
                        <Button asChild size="sm">
                            <Link href="#" target="_blank" rel="noopener noreferrer">
                                <Globe className="mr-2 h-4 w-4" />
                                Live Demo
                            </Link>
                        </Button>
                    </div>
                </div>

                <p className="text-xl text-muted-foreground">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>

            <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
                <div className="space-y-8">
                    <div className="prose dark:prose-invert max-w-none border rounded-xl p-8 bg-card">
                        <h2>About the Project</h2>
                        <p>
                            This is a placeholder for the project's README content. In a real application,
                            this would be fetched from the GitHub repository or a local markdown file.
                        </p>
                        <h3>Key Features</h3>
                        <ul>
                            <li>Feature 1: Description of the first key feature.</li>
                            <li>Feature 2: Description of the second key feature.</li>
                            <li>Feature 3: Description of the third key feature.</li>
                        </ul>
                        <h3>Tech Stack</h3>
                        <p>
                            Built with {project.tags.join(", ")}.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="border rounded-xl p-6 bg-card space-y-4">
                        <h3 className="font-semibold">Project Stats</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center p-3 bg-secondary/50 rounded-lg">
                                <Star className="h-5 w-5 mb-1 text-yellow-500" />
                                <span className="font-bold">124</span>
                                <span className="text-xs text-muted-foreground">Stars</span>
                            </div>
                            <div className="flex flex-col items-center p-3 bg-secondary/50 rounded-lg">
                                <GitFork className="h-5 w-5 mb-1 text-blue-500" />
                                <span className="font-bold">45</span>
                                <span className="text-xs text-muted-foreground">Forks</span>
                            </div>
                            <div className="flex flex-col items-center p-3 bg-secondary/50 rounded-lg">
                                <Eye className="h-5 w-5 mb-1 text-green-500" />
                                <span className="font-bold">1.2k</span>
                                <span className="text-xs text-muted-foreground">Views</span>
                            </div>
                            <div className="flex flex-col items-center p-3 bg-secondary/50 rounded-lg">
                                <div className="h-5 w-5 mb-1 font-bold text-purple-500">MIT</div>
                                <span className="font-bold">License</span>
                                <span className="text-xs text-muted-foreground">Type</span>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-xl p-6 bg-card space-y-4">
                        <h3 className="font-semibold">Contributors</h3>
                        <div className="flex -space-x-2 overflow-hidden">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-secondary flex items-center justify-center text-xs font-medium"
                                >
                                    U{i}
                                </div>
                            ))}
                            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-muted flex items-center justify-center text-xs font-medium">
                                +5
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
