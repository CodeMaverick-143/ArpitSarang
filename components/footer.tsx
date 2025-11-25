import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react"
import BackToTop from "@/components/back-to-top"

export default function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1 rounded-full bg-secondary">
                <Github className="h-6 w-6" />
              </div>
              <span className="font-bold text-lg">CodeMaverick-143</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Full-Stack Developer & Open Source Enthusiast. Building digital experiences that matter.
            </p>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Arpit Sarang. All rights reserved.
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Overview</Link>
              <Link href="/projects" className="hover:text-primary transition-colors">Repositories</Link>
              <Link href="/skills" className="hover:text-primary transition-colors">Skills</Link>
              <Link href="/experience" className="hover:text-primary transition-colors">Experience</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Social & Stats Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex gap-4">
              <Link href="https://github.com/CodeMaverick-143" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/CodeMaverick143" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/arpitsarang" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:arpitsarang2020@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </div>

            <div className="pt-4 border-t border-border/50 w-full max-w-xs">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span>Open Source Contributions</span>
                <span className="font-mono font-bold text-primary">500+</span>
              </div>
              <Link href="/sponsor" className="flex items-center gap-2 text-sm text-pink-500 hover:text-pink-600 transition-colors">
                <Heart className="h-4 w-4 fill-current" />
                <span>Sponsor on GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </footer>
  )
}
