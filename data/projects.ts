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
    {
        id: "5",
        slug: "recoil",
        title: "Recoil",
        description: "Recoil is a modern, tactical-themed system utility built with Tauri v2 and React. It allows you to instantly identify and terminate processes occupying specific network ports",
        tags: ["Tauri", "React", "System Utility", "Rust"],
        githubUrl: "https://github.com/CodeMaverick-143/Recoil",
        openSource: true,
        demoUrl: "https://recoil.xplnhub.tech",
    },
    {
        id: "6",
        slug: "tekron",
        title: "Tekron 2.0",
        description: "Tekron App is an event management and check-in system designed to eliminate the chaos typically seen during college fests. The application streamlines participant entry, delivers real-time updates, and provides precise event location assignments immediately after check-in",
        tags: ["React-Native", "Expo", "TypeScript", "Android", "iOS"],
        githubUrl: "https://github.com/nst-sdc/tekron-2.0-APK",
        openSource: true,
        demoUrl: "https://webapp.tekronfest.com",
    },
    {
        id: "7",
        slug: "maverick-cli",
        title: "Maverick CLI",
        description: "An intelligent CLI tool powered by AI, featuring a full-stack architecture with a Next.js frontend and an Express/Prisma backend.",
        tags: ["Next.js", "TypeScript", "Gemini", "CLI", "Prisma"],
        githubUrl: "https://github.com/CodeMaverick-143/maverick-cli",
        openSource: true,
        demoUrl: "https://maverick-cli.xplnhub.tech",
    },
    {
        id: "8",
        slug: "fineTuning",
        title: "CodeMaverick_Fine_tuning",
        description: "This competition challenges you to predict which responses users will prefer in a head-to-head battle between chatbots powered by large language models (LLMs).",
        tags: ["AI/ML", "Python", "AI-Models", "Kaggle"],
        githubUrl: "https://github.com/CodeMaverick-143/Fine_Tune",
        openSource: false,
        demoUrl: "https://www.kaggle.com/code/codemaverick143/codemaverick-fine-tuning",
    }
]
