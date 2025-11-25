import Link from "next/link"
import { Github, Star, GitFork } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border-border/50 bg-card/50 hover:bg-card">
            <CardHeader>
                <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-xl font-bold truncate">
                        <Link href={`/projects/${project.slug}`} className="hover:text-primary hover:underline">
                            {project.title}
                        </Link>
                    </CardTitle>
                    <div className="flex gap-2">
                        {project.openSource && (
                            <Badge variant="secondary" className="text-xs font-normal">
                                Open Source
                            </Badge>
                        )}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
                <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="pt-4 border-t border-border/50">
                <div className="flex justify-between items-center w-full text-sm">
                    <div className="flex gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            <span>0</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            <span>0</span>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        {project.demoUrl && (
                            <Link
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                                aria-label={`View ${project.title} demo`}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span>Demo</span>
                            </Link>
                        )}
                        <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label={`View ${project.title} on GitHub`}
                        >
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                        </Link>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
