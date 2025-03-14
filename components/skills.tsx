"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Server, Smartphone, Layers, Palette } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Code className="w-6 h-6" />,
    color: "from-indigo-400 to-purple-500",
    technologies: [
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "Next.js", level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    color: "from-blue-400 to-indigo-600",
    technologies: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "Express", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-purple-400 to-indigo-600",
    technologies: [
      { name: "Flutter", level: 85 },
      { name: "React Native", level: 80 },
      { name: "Swift", level: 60 },
      { name: "Kotlin", level: 65 },
      { name: "Mobile UI/UX", level: 75 },
    ],
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    color: "from-indigo-400 to-blue-600",
    technologies: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Firebase", level: 90 },
      { name: "MySQL", level: 75 },
      { name: "Redis", level: 65 },
    ],
  },
  {
    category: "DevOps",
    icon: <Layers className="w-6 h-6" />,
    color: "from-purple-400 to-orange-500",
    technologies: [
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Vercel", level: 85 },
      { name: "Git", level: 90 },
    ],
  },
  {
    category: "Design",
    icon: <Palette className="w-6 h-6" />,
    color: "from-blue-400 to-orange-400",
    technologies: [
      { name: "Figma", level: 80 },
      { name: "Adobe XD", level: 75 },
      { name: "UI/UX", level: 85 },
      { name: "Responsive Design", level: 90 },
      { name: "Animation", level: 70 },
    ],
  },
]

// Optimize the Skills section for better performance
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category)

  const activeCategoryData = skills.find((skill) => skill.category === activeCategory)

  return (
    <motion.section
      className="py-12 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-orange-400"
        initial={{ y: -30 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring", stiffness: 70 }}
        viewport={{ once: true }}
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12">
        {skills.map((skill) => (
          <button
            key={skill.category}
            className={`relative p-2 sm:p-3 md:p-4 rounded-xl transition-all duration-300 ${
              activeCategory === skill.category ? "bg-white/20 shadow-lg scale-105" : "bg-white/10 hover:bg-white/15"
            }`}
            onClick={() => setActiveCategory(skill.category)}
          >
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-2 bg-gradient-to-br ${skill.color}`}
              >
                {skill.icon}
              </div>
              <span className="text-white font-medium text-xs sm:text-sm md:text-base">{skill.category}</span>
            </div>
            {activeCategory === skill.category && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-orange-500"
                layoutId="activeCategory"
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/20">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center text-white">
          {activeCategoryData?.category} Technologies
        </h3>

        <div className="space-y-4 sm:space-y-6">
          {activeCategoryData?.technologies.map((tech, index) => (
            <div key={tech.name} className="space-y-1 sm:space-y-2">
              <div className="flex justify-between">
                <span className="text-white font-medium text-sm sm:text-base">{tech.name}</span>
                <span className="text-white/70 text-sm sm:text-base">{tech.level}%</span>
              </div>
              <div className="h-2 sm:h-3 w-full bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${activeCategoryData.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

