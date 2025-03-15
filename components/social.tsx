"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Twitter, Mail, Send, ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"

// Optimize the Social section for better performance
export default function Social() {
  const { t } = useLanguage()

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

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
       {t.social.title}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        {/* Contact Form */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/20"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-white">{t.social.sendMessage}e</h3>

          {isSubmitted ? (
            <motion.div
              className="bg-teal-500/20 border border-teal-500/30 rounded-xl p-4 sm:p-6 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-teal-500/30 mb-3 sm:mb-4">
                <Send className="w-6 h-6 sm:w-8 sm:h-8 text-teal-500" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{t.social.sent}</h4>
              <p className="text-white/80 text-sm sm:text-base">
              {t.social.thankYou}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-1 sm:mb-2 text-xs sm:text-sm">
                {t.social.yourName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 mb-1 sm:mb-2 text-xs sm:text-sm">
                {t.social.yourEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-1 sm:mb-2 text-xs sm:text-sm">
                {t.social.yourMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 resize-none text-sm sm:text-base"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-blue-500 to-orange-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center disabled:opacity-70 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                    <span>{t.social.sending}</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <span>{t.social.sendMessage}</span>
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/20"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-white">{t.social.connectWithMe}</h3>

          <div className="space-y-3 sm:space-y-5">
            <a
              href="mailto:gabrielpaiva.jm@gmail.com"
              className="flex items-center p-3 sm:p-4 rounded-xl bg-white/10 hover:bg-white/15 transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500/20 flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-orange-500/30 transition-colors">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">{t.social.email}</h4>
                <p className="text-white/70 text-xs sm:text-sm">gabrielpaiva.jm@gmail.com</p>
              </div>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/50 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://github.com/GabrielFpaiva"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 sm:p-4 rounded-xl bg-white/10 hover:bg-white/15 transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700/30 flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-gray-700/40 transition-colors">
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">GitHub</h4>
                <p className="text-white/70 text-xs sm:text-sm">github.com/GabrielFpaiva</p>
              </div>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/50 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://www.linkedin.com/in/gabriel-fernandes-paiva-b948b2209/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 sm:p-4 rounded-xl bg-white/10 hover:bg-white/15 transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600/20 flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-blue-600/30 transition-colors">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">LinkedIn</h4>
                <p className="text-white/70 text-xs sm:text-sm">linkedin.com/in/gabriel</p>
              </div>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/50 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://x.com/gfernandes_73"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 sm:p-4 rounded-xl bg-white/10 hover:bg-white/15 transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-indigo-500/30 transition-colors">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">X</h4>
                <p className="text-white/70 text-xs sm:text-sm">x.com/gfernandes_73</p>
              </div>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/50 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://www.instagram.com/gabriel_fnandes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 sm:p-4 rounded-xl bg-white/10 hover:bg-white/15 transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center mr-3 sm:mr-4 group-hover:from-orange-500/30 group-hover:to-purple-500/30 transition-colors">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">Instagram</h4>
                <p className="text-white/70 text-xs sm:text-sm">instagram.com/gabrielfnandes</p>
              </div>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/50 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

