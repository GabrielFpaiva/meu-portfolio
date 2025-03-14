import { Suspense, lazy } from "react"
import Header from "@/components/header"
import About from "@/components/about"
import LoadingSpinner from "@/components/loading-spinner"
import Navbar from "@/components/navbar"

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
      <div className="w-full mx-auto">
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <Header />
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <section id="about" className="pt-16">
            <About />
          </section>
          <section id="my-tastes" className="pt-16">
            <Suspense fallback={<LoadingSpinner />}>
              <MyTastes />
            </Suspense>
          </section>
          <section id="skills" className="pt-16">
            <Suspense fallback={<LoadingSpinner />}>
              <Skills />
            </Suspense>
          </section>
          <section id="projects" className="pt-16">
            <Suspense fallback={<LoadingSpinner />}>
              <Projects />
            </Suspense>
          </section>
          <section id="social" className="pt-16">
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

