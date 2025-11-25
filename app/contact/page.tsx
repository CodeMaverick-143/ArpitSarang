"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Send, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500))

        toast({
            title: "Message sent!",
            description: "Thanks for reaching out. I'll get back to you soon.",
        })

        setFormData({ name: "", email: "", message: "" })
        setIsLoading(false)
    }

    return (
        <div className="space-y-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-center">
                <h1 className="text-4xl font-bold">Get in Touch</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-border/50">
                    <CardHeader>
                        <CardTitle>Send a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="How can I help you?"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? (
                                    <>Sending...</>
                                ) : (
                                    <>
                                        <Send className="mr-2 h-4 w-4" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                <div className="space-y-8">
                    <Card className="border-border/50 bg-primary/5">
                        <CardContent className="pt-6 space-y-4">
                            <h3 className="font-semibold text-lg">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-background rounded-full border">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Email</p>
                                        <a href="mailto:arpitsarang2020@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                            arpitsarang2020@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-background rounded-full border">
                                        <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Location</p>
                                        <p className="text-muted-foreground">India</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Connect on Social Media</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="h-auto py-4 justify-start" asChild>
                                <Link href="https://github.com/CodeMaverick-143" target="_blank">
                                    <Github className="mr-3 h-5 w-5" />
                                    <div className="text-left">
                                        <div className="font-semibold">GitHub</div>
                                        <div className="text-xs text-muted-foreground">Follow my code</div>
                                    </div>
                                </Link>
                            </Button>
                            <Button variant="outline" className="h-auto py-4 justify-start" asChild>
                                <Link href="www.linkedin.com/in/arpitsarang" target="_blank">
                                    <Linkedin className="mr-3 h-5 w-5" />
                                    <div className="text-left">
                                        <div className="font-semibold">LinkedIn</div>
                                        <div className="text-xs text-muted-foreground">Connect with me</div>
                                    </div>
                                </Link>
                            </Button>
                            <Button variant="outline" className="h-auto py-4 justify-start" asChild>
                                <Link href="https://x.com/CodeMaverick143" target="_blank">
                                    <Twitter className="mr-3 h-5 w-5" />
                                    <div className="text-left">
                                        <div className="font-semibold">Twitter</div>
                                        <div className="text-xs text-muted-foreground">Follow updates</div>
                                    </div>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
