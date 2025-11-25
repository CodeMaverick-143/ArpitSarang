import Timeline from "@/components/timeline"

export default function ExperiencePage() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold">Experience</h1>
                <p className="text-muted-foreground text-lg">
                    My professional journey and career milestones.
                </p>
            </div>
            <Timeline />
        </div>
    )
}
