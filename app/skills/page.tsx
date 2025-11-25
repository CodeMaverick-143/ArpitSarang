import Skills from "@/components/skills"
import Certifications from "@/components/certifications"

export default function SkillsPage() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold">Skills & Certifications</h1>
                <p className="text-muted-foreground text-lg">
                    My technical expertise and professional certifications.
                </p>
            </div>
            <Skills />
            <Certifications />
        </div>
    )
}
