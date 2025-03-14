"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      className="py-12 md:py-16 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Reduce the number of background elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-15"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 30, // Even slower animation
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
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
          <div>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-4">
              I'm a passionate Full Stack and Mobile developer with a love for creating beautiful, functional, and
              user-friendly applications. My journey in tech has been driven by curiosity and a desire to bring creative
              ideas to life.
            </p>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              With experience across various technologies and frameworks, I enjoy tackling complex problems and turning
              them into elegant solutions. When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="relative h-56 sm:h-64 md:h-full rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-500 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-90 p-4 sm:p-6">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 w-full">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                    Full Stack Developer
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                    Mobile App Developer
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                    Creative Problem Solver
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-pink-400 rounded-full mr-2"></span>
                    Tech Enthusiast
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

