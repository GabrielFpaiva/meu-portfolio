"use client"

import { motion } from "framer-motion"
import { FileDown, ExternalLink } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function About() {
  const { t } = useLanguage()

  // Bolhas com posições e tamanhos fixos em vez de aleatórios
  const backgroundBubbles = [
    {
      width: "280px",
      height: "280px",
      left: "70%",
      top: "20%",
    },
    {
      width: "220px",
      height: "220px",
      left: "20%",
      top: "60%",
    },
    {
      width: "180px",
      height: "180px",
      left: "50%",
      top: "30%",
    },
  ]

  return (
    <motion.section
      className="py-12 md:py-16 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Bolhas de fundo com valores fixos em vez de aleatórios */}
        {backgroundBubbles.map((bubble, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-15"
            style={{
              width: bubble.width,
              height: bubble.height,
              left: bubble.left,
              top: bubble.top,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 30 + i * 5, // Duração diferente para cada bolha
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/20">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
          initial={{ y: -30 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", stiffness: 70 }}
          viewport={{ once: true }}
        >
          {t.about.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
          <div>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-4">{t.about.description1}</p>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">{t.about.description2}</p>

            {/* Botão de download do CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <a
                href="/cv.pdf"
                download="Gabriel_Fernandes_CV.pdf"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <FileDown className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                <span>{t.about.downloadCV}</span>
                <div className="ml-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ExternalLink className="w-3 h-3 text-white" />
                </div>
              </a>
            </motion.div>
          </div>

          <div className="relative h-56 sm:h-64 md:h-full rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-500 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-90 p-4 sm:p-6">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 w-full">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{t.about.quickFacts}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                    {t.about.fullStack}
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                    {t.about.mobile}
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                    {t.about.creative}
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-pink-400 rounded-full mr-2"></span>
                    {t.about.techEnthusiast}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

