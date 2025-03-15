"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, type Translations, en, pt, it } from "@/lib/i18n/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Tenta obter o idioma salvo no localStorage, ou usa 'en' como padrão
  const [language, setLanguageState] = useState<Language>("en")
  const [translations, setTranslations] = useState<Translations>(en)

  useEffect(() => {
    // Verifica se estamos no navegador antes de acessar localStorage
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && ["en", "pt", "it"].includes(savedLanguage)) {
        setLanguageState(savedLanguage)
      } else {
        // Tenta detectar o idioma do navegador
        const browserLang = navigator.language.split("-")[0]
        if (browserLang === "pt") {
          setLanguageState("pt")
        } else if (browserLang === "it") {
          setLanguageState("it")
        }
        // Caso contrário, mantém o inglês como padrão
      }
    }
  }, [])

  useEffect(() => {
    // Atualiza as traduções quando o idioma muda
    switch (language) {
      case "pt":
        setTranslations(pt)
        break
      case "it":
        setTranslations(it)
        break
      default:
        setTranslations(en)
    }

    // Salva o idioma no localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
    }
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

