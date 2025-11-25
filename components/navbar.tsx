
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, BookOpen, GitPullRequest, Plus, Search, Terminal, Briefcase, Mail, Menu, X, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Overview", href: "/", icon: BookOpen },
    { name: "Repositories", href: "/projects", icon: GitPullRequest },
    { name: "Skills", href: "/skills", icon: Terminal },
    { name: "Experience", href: "/experience", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Mail },
  ]

  return (
    <div className="flex justify-center w-full fixed top-4 z-50 px-4">
      <header
        className={`w-full max-w-5xl rounded-full border transition-all duration-300 ${isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg border-border/50"
          : "bg-background/50 backdrop-blur-sm border-transparent shadow-sm"
          }`}
      >
        <div className="flex h-14 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center px-4 py-3 text-lg font-medium rounded-md transition-colors ${pathname === item.href
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2 group" aria-label="Home">
              <div className="p-1 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
                <Github className="h-6 w-6" />
              </div>
              <span className="font-semibold hidden sm:inline-block group-hover:text-primary transition-colors">
                CodeMaverick-143
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-full transition-all ${pathname === item.href
                  ? "bg-secondary text-foreground font-semibold shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">


            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full" aria-label="Create new">
                  <Plus className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>New repository</DropdownMenuItem>
                <DropdownMenuItem>New project</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeToggle />
          </div>
        </div>
      </header>
    </div>
  )
}
