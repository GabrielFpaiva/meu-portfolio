"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Home, User, Code, Layers, Share2, Heart, Menu, MoveHorizontal, X } from "lucide-react"
import { useLanguage } from "@/context/language-context"


export default function Navbar() {
  const { t } = useLanguage()

  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const navItems = [
    { name: t.nav.home, icon: <Home className="w-4 h-4 text-orange-400" />, href: "#home" },
    { name: t.nav.about, icon: <User className="w-4 h-4" />, href: "#about" },
    { name: t.nav.myTastes, icon: <Heart className="w-4 h-4 text-orange-400" />, href: "#my-tastes" },
    { name: t.nav.skills, icon: <Code className="w-4 h-4" />, href: "#skills" },
    { name: t.nav.projects, icon: <Layers className="w-4 h-4 text-orange-400" />, href: "#projects" },
    { name: t.nav.social, icon: <Share2 className="w-4 h-4" />, href: "#social" },
  ]

  // Referência para o botão
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 920)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

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

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Modificar a função scrollToSection para corrigir o problema de navegação
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      // Reduzir significativamente o offset para que a seção apareça mais próxima do topo
      const navbarHeight = 20 // Reduzido de 100 para 20
      const elementPosition = element.getBoundingClientRect().top + window.scrollY

      // Scroll to element with offset for the navbar
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      })

      setActiveSection(href.substring(1))

      // Close mobile menu after clicking
      if (isMobile) {
        setIsMobileMenuOpen(false)
      }
    }
  }

  // Desktop navbar
  const DesktopNavbar = () => (
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

  // Mobile floating button navbar
  const MobileNavbar = () => {
    // Estados para controlar a posição do botão
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)
    const [showHint, setShowHint] = useState(false)

    // Verificar se o usuário já viu a dica
    useEffect(() => {
      const hasSeenHint = localStorage.getItem("hasSeenDragHint")
      if (!hasSeenHint) {
        setShowHint(true)
        // Mostrar a dica apenas uma vez e depois de 5 segundos escondê-la
        const timer = setTimeout(() => {
          setShowHint(false)
          localStorage.setItem("hasSeenDragHint", "true")
        }, 5000)
        return () => clearTimeout(timer)
      }
    }, [])

    // Carregar posição salva ao iniciar
    useEffect(() => {
      const savedPosition = localStorage.getItem("menuButtonPosition")
      if (savedPosition) {
        try {
          setPosition(JSON.parse(savedPosition))
        } catch (e) {
          console.error("Erro ao carregar posição salva:", e)
        }
      }
    }, [])

    // Salvar posição quando mudar
    useEffect(() => {
      if (!isDragging) {
        localStorage.setItem("menuButtonPosition", JSON.stringify(position))
      }
    }, [position, isDragging])

    // Função para lidar com o fim do arrasto
    const handleDragEnd = (event: any, info: any) => {
      setPosition({ x: position.x + info.offset.x, y: position.y + info.offset.y })
      setIsDragging(false)
    }

    return (
      <>
        <motion.div
          ref={buttonRef}
          className="fixed z-50 touch-none"
          style={{ top: 24, right: 24 }}
          initial={{ x: position.x, y: position.y }}
          animate={{ x: position.x, y: position.y }}
          drag
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
        >
          <motion.button
            className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
              isMobileMenuOpen
                ? "bg-red-500 backdrop-blur-md border border-white/20"
                : "bg-gradient-to-r from-blue-600 to-orange-500 backdrop-blur-md border border-white/20"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}

            {/* Indicador visual de que o botão é arrastável - mostrado apenas quando necessário */}
            {(isDragging || showHint) && (
              <motion.div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <MoveHorizontal className="w-3 h-3 inline mr-1" />
                Arraste-me
              </motion.div>
            )}
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed z-40"
              style={{
                top: 24 + position.y + 60, // 60px abaixo do botão
                right: 24 - position.x, // Alinhado com o botão
              }}
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <ul className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25, delay: navItems.indexOf(item) * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`flex items-center justify-center w-12 h-12 rounded-full shadow-md ${
                        activeSection === item.href.substring(1)
                          ? item.href === "#my-tastes"
                            ? "bg-gradient-to-r from-blue-600 to-orange-500 backdrop-blur-md border border-white/20 text-white"
                            : "bg-gradient-to-r from-blue-600 to-orange-500 backdrop-blur-md border border-white/20 text-white"
                          : "bg-black/80 backdrop-blur-md border border-white/10 text-white/80"
                      }`}
                      aria-label={item.name}
                    >
                      {item.icon}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )
  }

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />
}

