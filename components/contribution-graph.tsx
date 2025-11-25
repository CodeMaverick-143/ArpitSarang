"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function ContributionGraph() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  // Determine current theme
  const currentTheme = mounted ? (theme === "system" ? resolvedTheme : theme) : "light"

  // Theme-based colors matching your emerald/green theme
  const graphColors = currentTheme === "dark"
    ? {
      bg_color: "0d1117",      // Dark background matching dark mode
      color: "10b981",         // Emerald-500 for text
      line: "34d399",          // Emerald-400 for line
      point: "6ee7b7",         // Emerald-300 for points
      area_color: "10b981"     // Emerald-500 for area
    }
    : {
      bg_color: "ffffff",      // White background for light mode
      color: "059669",         // Emerald-600 for text
      line: "10b981",          // Emerald-500 for line
      point: "047857",         // Emerald-700 for points
      area_color: "10b981"     // Emerald-500 for area
    }

  const graphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=CodeMaverick-143&bg_color=${graphColors.bg_color}&color=${graphColors.color}&line=${graphColors.line}&point=${graphColors.point}&area=true&hide_border=true&area_color=${graphColors.area_color}`

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Contribution Activity</h2>
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">GitHub Activity</span>
        </div>
      </div>

      <div className="border border-border rounded-lg p-4 bg-card">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center">
              {mounted && (
                <img
                  key={currentTheme}
                  src={graphUrl}
                  alt="GitHub Activity Graph"
                  className="w-full max-w-3xl rounded-lg"
                />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
