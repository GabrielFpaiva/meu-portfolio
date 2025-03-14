"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, User, Code, Layers, Share2, Heart } from "lucide-react"

const navItems = [
  { name: "Home", icon: <Home className="w-4 h-4 text-orange-400" />, href: "#home" },
  { name: "About", icon: <User className="w-4 h-4" />, href: "#about" },
  { name: "Vibe", icon: <Heart className="w-4 h-4 text-orange-400" />, href: "#my-tastes" },
  { name: "Skills", icon: <Code className="w-4 h-4" />, href: "#skills" },
  { name: "Projects", icon: <Layers className="w-4 h-4 text-orange-400" />, href: "#projects" },
  { name: "Social", icon: <Share2 className="w-4 h-4" />, href: "#social" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // More aggressive debounce function
    function debounce(func: Function, wait: number) {
      let timeout: NodeJS.Timeout
      return function executedFunction(...args: any[]) {
        const later = () => {
          clearTimeout(timeout)
          func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
      }
    }

    // Optimized scroll handler with throttling
    let lastScrollTime = 0
    const scrollThrottle = 150 // ms between scroll events

    const handleScroll = debounce(() => {
      const now = Date.now()
      if (now - lastScrollTime < scrollThrottle) return
      lastScrollTime = now

      // Check if page is scrolled
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))

      // Use a more efficient way to check sections
      let foundActive = false
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && !foundActive) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            // Reduced from 200 to 100 to improve accuracy
            setActiveSection(section)
            foundActive = true
            break
          }
        }
      }
    }, 150) // Increased debounce time for better performance

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Call once on mount to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      // Get the navbar height to offset the scroll
      const navbarHeight = 1 // Approximate height of navbar + some padding
      const elementPosition = element.getBoundingClientRect().top + window.scrollY

      // Scroll to element with offset for the navbar
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      })

      setActiveSection(href.substring(1))
    }
  }

  return (
    <motion.nav
      className={`fixed top-6 left-1/2 z-50 transform -translate-x-1/2 px-2 py-2 rounded-full backdrop-blur-lg transition-all duration-300 ${
        scrolled ? "bg-black/50 shadow-lg" : "bg-black/30"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <ul className="flex items-center space-x-1 sm:space-x-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`relative flex items-center justify-center px-3 py-2 rounded-full transition-all duration-300 ${
                activeSection === item.href.substring(1) ? "text-white" : "text-white/60 hover:text-white/90"
              }`}
            >
              <span className="sm:mr-1">{item.icon}</span>
              <span className="hidden sm:inline text-sm font-medium">{item.name}</span>
              {activeSection === item.href.substring(1) && (
                <motion.div
                  className={`absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-blue-600 to-orange-500`}
                  layoutId="activeNavSection"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

