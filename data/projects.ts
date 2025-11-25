export type Project = {
    id: string
    slug: string
    title: string
    description: string
    tags: string[]
    githubUrl: string
    openSource: boolean
    image?: string
    demoUrl?: string
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "git-stat-apk",
        title: "Git Stat APK",
        description: "Cross-platform mobile application built with React Native and Expo that provides detailed GitHub analytics and user insights.",
        tags: ["React Native", "Expo", "TypeScript", "GitHub API"],
        githubUrl: "https://github.com/CodeMaverick-143/Git-Stat-APK",
        openSource: true,
        demoUrl: "https://github.com/CodeMaverick-143/Git-Stat-APK/releases",
    },
    {
        id: "2",
        slug: "xplnhub-snakeskin",
        title: "xplnhub-snakeskin",
        description: "Snakeskin is a modern, lightweight frontend framework/library designed to make building component-based web applications fast, flexible, and enjoyable.",
        tags: ["Python", "Frontend Framework", "Web Components"],
        githubUrl: "https://github.com/XplnHUB/xplnhub-snakeskin",
        openSource: true,
        demoUrl: "https://pypi.org/project/snakeskin-xplnhub/",
    },
    {
        id: "3",
        slug: "insight",
        title: "Insight",
        description: "Insight is a Python-based CLI tool that analyzes codebases and generates detailed reports.",
        tags: ["Python", "CLI", "Code Analysis"],
        githubUrl: "https://github.com/XplnHUB/Insight-Py",
        openSource: true,
        demoUrl: "https://pypi.org/project/insight-cli-sarang/",
    },
    {
        id: "4",
        slug: "finmate",
        title: "Finmate",
        description: "Finmate is a comprehensive personal finance tracker designed for students to manage income, expenses, savings goals, and budgets.",
        tags: ["Next.js", "TypeScript", "Finance", "Dashboard"],
        githubUrl: "https://github.com/XplnHUB/Finmate",
        openSource: true,
        demoUrl: "https://finmate-ten.vercel.app/dashboard",
    },
]
