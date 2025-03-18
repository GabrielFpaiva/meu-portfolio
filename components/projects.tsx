"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const projects = [
  {
    id: 1,
    title: "Aplicativo Mobile",
    description:
      "Aplicativo de controle de acesso a eventos, gerenciamento de eventos e cortesias",
    image: "/1.png?height=400&width=600",
    tags: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/gpcDev/Vip-Acess-Project",
    demo: "https://acessvip.com",
    color: "from-blue-500 to-orange-500",
  },
  {
    id: 2,
    title: "Site de Imobiliária",
    description:
      "Site de imobiliária com busca de imóveis, filtros, favoritos, e formulário de contato",
    image: "/2.png?height=400&width=600",
    tags: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/GabrielFpaiva/ds-imoveis",
    demo: "https://ds-imoveis.vercel.app/",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: 3,
    title: "Site de Casa de Massagem",
    description:
      "Site de casa de massagem com informações sobre os serviços, sobre o ambiente, e formulário de contato",
    image: "/3.png?height=400&width=600",
    tags: ["HTML", "CSS", "Javascript"],
    github: "https://www.oaspa.com.br/",
    demo: "https://github.com/GabrielFpaiva/oa_spa",
    color: "from-purple-500 to-blue-600",
  },
  {
    id: 4,
    title: "Course Plataform",
    description:
      "Uma plataforma de cursos online responsiva, com temas claro e escuro, recursos interativos, categorias filtráveis e animações suaves.",
    image: "/4.png?height=400&width=600",
    tags: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/GabrielFpaiva/course-plataform",
    demo: "https://course-platform-neon.vercel.app/",
    color: "from-blue-500 to-orange-400",
  },
]

// Optimize the Projects section for better performance
export default function Projects() {
  const { t } = useLanguage()
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  // Detect if device is mobile
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <motion.section
      className="py-12 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-orange-400"
        initial={{ y: -30 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring", stiffness: 70 }}
        viewport={{ once: true }}
      >
        {t.projects.title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative group rounded-2xl overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl"
            onMouseEnter={() => !isMobile && setHoveredProject(project.id)}
            onMouseLeave={() => !isMobile && setHoveredProject(null)}
            onClick={() => isMobile && setHoveredProject(hoveredProject === project.id ? null : project.id)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20 z-10" />

            <div
              className="absolute inset-0 bg-gradient-to-br opacity-30 z-0"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${project.color.split(" ")[0].replace("from-", "")} 0%, ${project.color.split(" ")[1].replace("to-", "")} 100%)`,
              }}
            />

            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-full">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute inset-0 z-20 p-3 sm:p-4 md:p-6 flex flex-col justify-end">
              <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-1 sm:mb-2">{project.title}</h3>

              <AnimatePresence>
                {(hoveredProject === project.id || isMobile) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-white/90 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 sm:gap-3 md:gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors text-xs sm:text-sm md:text-base"
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{t.projects.github}</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-orange-500/70 backdrop-blur-sm rounded-lg text-white hover:bg-orange-500/90 transition-colors text-xs sm:text-sm md:text-base"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{t.projects.liveDemo}</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

