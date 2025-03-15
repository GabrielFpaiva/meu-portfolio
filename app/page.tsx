import { Suspense, lazy } from "react"
import Header from "@/components/header"
import About from "@/components/about"
import LoadingSpinner from "@/components/loading-spinner"
import Navbar from "@/components/navbar"
import LanguageSwitcher from "@/components/language-switcher"

// Lazy load non-critical components
const MyTastes = lazy(() => import("@/components/my-tastes"))
const Skills = lazy(() => import("@/components/skills"))
const Projects = lazy(() => import("@/components/projects"))
const Social = lazy(() => import("@/components/social"))
const Footer = lazy(() => import("@/components/footer"))

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-900 overflow-x-hidden">
      <Navbar />
      <LanguageSwitcher />
      <div className="w-full mx-auto">
        {/* Seção Home com ID explícito */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <Header />
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Seção About com ID explícito */}
          <section id="about" className="py-16">
            <About />
          </section>

          {/* Seção My Tastes com ID explícito */}
          <section id="my-tastes" className="py-16">
            <Suspense fallback={<LoadingSpinner />}>
              <MyTastes />
            </Suspense>
          </section>

          {/* Seção Skills com ID explícito */}
          <section id="skills" className="py-16">
            <Suspense fallback={<LoadingSpinner />}>
              <Skills />
            </Suspense>
          </section>

          {/* Seção Projects com ID explícito */}
          <section id="projects" className="py-16">
            <Suspense fallback={<LoadingSpinner />}>
              <Projects />
            </Suspense>
          </section>

          {/* Seção Social com ID explícito */}
          <section id="social" className="py-16">
            <Suspense fallback={<LoadingSpinner />}>
              <Social />
            </Suspense>
          </section>

          <Suspense fallback={<LoadingSpinner />}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </main>
  )
}

