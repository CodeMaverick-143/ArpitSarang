import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: "Getting Started with Next.js 14 and Server Actions",
            excerpt: "A comprehensive guide to building modern web applications with Next.js 14's latest features including Server Actions and the App Router.",
            date: "Nov 15, 2024",
            readTime: "5 min read",
            tags: ["Next.js", "React", "Web Dev"],
            slug: "getting-started-nextjs-14"
        },
        {
            id: 2,
            title: "Mastering Tailwind CSS: Tips and Tricks",
            excerpt: "Learn how to write cleaner, more maintainable CSS using Tailwind's utility-first approach and advanced configuration options.",
            date: "Oct 28, 2024",
            readTime: "7 min read",
            tags: ["CSS", "Tailwind", "Frontend"],
            slug: "mastering-tailwind-css"
        },
        {
            id: 3,
            title: "Building Scalable APIs with Golang",
            excerpt: "Explore best practices for designing and implementing high-performance RESTful APIs using Go and the Gin framework.",
            date: "Sep 10, 2024",
            readTime: "10 min read",
            tags: ["Go", "Backend", "API"],
            slug: "scalable-apis-golang"
        },
        {
            id: 4,
            title: "The Future of Web Development: AI Integration",
            excerpt: "How Artificial Intelligence is reshaping the landscape of web development and what tools you should be watching.",
            date: "Aug 05, 2024",
            readTime: "6 min read",
            tags: ["AI", "Future Tech", "Opinion"],
            slug: "future-web-dev-ai"
        }
    ]

    return (
        <div className="space-y-12 max-w-4xl mx-auto">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold">Blog</h1>
                <p className="text-muted-foreground text-lg">
                    Thoughts, tutorials, and insights on web development and technology.
                </p>
            </div>

            <div className="grid gap-8">
                {posts.map((post) => (
                    <Card key={post.id} className="border-border/50 bg-card/50 hover:bg-card transition-colors">
                        <CardHeader>
                            <div className="flex justify-between items-start gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                    <CardTitle className="text-2xl font-bold hover:text-primary transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </CardTitle>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2">
                                    {post.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <Link href={`/blog/${post.slug}`} className="text-primary hover:underline flex items-center gap-1 text-sm font-medium">
                                    Read more <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
