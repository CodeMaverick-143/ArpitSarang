import Link from "next/link"
import { FileText, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Skills from "@/components/skills"
import ContributionGraph from "@/components/contribution-graph"

export default function AboutPage() {
    return (
        <div className="space-y-16">
            <div className="grid gap-12 md:grid-cols-[2fr_1fr] items-start">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold">About Me</h1>
                    <div className="prose dark:prose-invert max-w-none text-lg text-muted-foreground">
                        <p>
                            Hello! I'm Arpit Sarang, a passionate Full-Stack Developer and Open Source Enthusiast based in India.
                            I enjoy building web applications that solve real-world problems and contributing to the developer community.
                        </p>
                        <p>
                            My journey in tech started with a curiosity for how things work on the internet, which led me to dive deep into
                            web development. Over the years, I've honed my skills in modern technologies like React, Next.js, Node.js, and Golang.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, writing technical blogs, or contributing to
                            open source projects on GitHub. I believe in the power of community and collaboration to drive innovation.
                        </p>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <Button asChild>
                            <Link href="/Resume_Arpit_Sarang.pdf" target="_blank">
                                <FileText className="mr-2 h-4 w-4" />
                                Download Resume
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="https://github.com/CodeMaverick-143" target="_blank">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="https://linkedin.com" target="_blank">
                                <Linkedin className="mr-2 h-4 w-4" />
                                LinkedIn
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="border rounded-xl p-6 bg-card space-y-4">
                        <h3 className="font-semibold text-lg">Stats</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Repositories</span>
                                <span className="font-mono font-bold">45</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Contributions</span>
                                <span className="font-mono font-bold text-green-500">1,234</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Followers</span>
                                <span className="font-mono font-bold">250</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Pull Requests</span>
                                <span className="font-mono font-bold">89</span>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-xl p-6 bg-card space-y-4">
                        <h3 className="font-semibold text-lg">Currently Learning</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-secondary rounded-full text-sm">Rust</span>
                            <span className="px-3 py-1 bg-secondary rounded-full text-sm">WebAssembly</span>
                            <span className="px-3 py-1 bg-secondary rounded-full text-sm">GraphQL</span>
                            <span className="px-3 py-1 bg-secondary rounded-full text-sm">Kubernetes</span>
                        </div>
                    </div>
                </div>
            </div>

            <Skills />

            <ContributionGraph />
        </div>
    )
}
