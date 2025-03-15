"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Check, ChevronDown } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import type { Language } from "@/lib/i18n/translations"

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: "en", name: t.language.en, flag: "🇺🇸" },
    { code: "pt", name: t.language.pt, flag: "🇧🇷" },
    { code: "it", name: t.language.it, flag: "🇮🇹" },
  ]

  const toggleDropdown = () => setIsOpen(!isOpen)
  const closeDropdown = () => setIsOpen(false)

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    closeDropdown()
  }

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <div className="fixed top-6 left-6 z-50">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={toggleDropdown}
          className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
            isOpen ? "bg-white/20 backdrop-blur-md shadow-lg" : "bg-black/30 backdrop-blur-md hover:bg-black/40"
          }`}
          aria-label="Change language"
        >
          <Globe className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">{currentLanguage?.flag}</span>
          <ChevronDown
            className={`w-4 h-4 text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 mt-2 bg-black/70 backdrop-blur-md rounded-xl overflow-hidden shadow-xl border border-white/10 w-40"
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="py-1">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-4 py-2 flex items-center justify-between ${
                        language === lang.code
                          ? "bg-gradient-to-r from-blue-600/30 to-orange-500/30 text-white"
                          : "text-white/80 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="mr-2">{lang.flag}</span>
                        <span className="text-sm">{lang.name}</span>
                      </div>
                      {language === lang.code && <Check className="w-4 h-4" />}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

