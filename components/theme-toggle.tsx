"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Toggle theme">
        <Sun className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const activeTheme = theme === "system" ? resolvedTheme : theme
  const nextTheme = activeTheme === "dark" ? "light" : "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative h-9 w-9"
      onClick={() => setTheme(nextTheme)}
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-4 w-4 transition-all ${activeTheme === "dark" ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
      />
      <Moon
        className={`absolute inset-0 m-auto h-4 w-4 transition-all ${activeTheme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}