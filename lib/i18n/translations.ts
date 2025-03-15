// Definição de tipos para as traduções
export type Language = "en" | "pt" | "it"

export interface Translations {
  // Navbar
  nav: {
    home: string
    about: string
    myTastes: string
    skills: string
    projects: string
    social: string
  }
  // Header
  header: {
    title: string[]
    subtitle: string
  }
  // About
  about: {
    title: string
    description1: string
    description2: string
    downloadCV: string
    quickFacts: string
    fullStack: string
    mobile: string
    creative: string
    techEnthusiast: string
  }
  // My Tastes
  myTastes: {
    title: string
    spotify: string
    listenOn: string
    steam: string
    totalPlaytime: string
    lastPlayed: string
    viewOn: string
  }
  // Skills
  skills: {
    title: string
    technologies: string
  }
  // Projects
  projects: {
    title: string
    github: string
    liveDemo: string
  }
  // Social
  social: {
    title: string
    sendMessage: string
    yourName: string
    yourEmail: string
    yourMessage: string
    sending: string
    sent: string
    messageSent: string
    thankYou: string
    connectWithMe: string
    email: string
  }
  // Footer
  footer: {
    developedWith: string
    rights: string
  }
  // Language Switcher
  language: {
    en: string
    pt: string
    it: string
  }
}

// Traduções em inglês (padrão)
export const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    myTastes: "My Tastes",
    skills: "Skills",
    projects: "Projects",
    social: "Social",
  },
  header: {
    title: ["Hello, I'm Gabriel Fernandes Paiva!", "Full Stack Developer", "Mobile Developer", "Creative Coder"],
    subtitle: "Crafting beautiful, interactive experiences for web and mobile",
  },
  about: {
    title: "About Me",
    description1:
      "I'm a passionate Full Stack and Mobile developer with a love for creating beautiful, functional, and user-friendly applications. My journey in tech has been driven by curiosity and a desire to bring creative ideas to life.",
    description2:
      "With experience across various technologies and frameworks, I enjoy tackling complex problems and turning them into elegant solutions. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
    downloadCV: "Download CV",
    quickFacts: "Quick Facts",
    fullStack: "Full Stack Developer",
    mobile: "Mobile App Developer",
    creative: "Creative Problem Solver",
    techEnthusiast: "Tech Enthusiast",
  },
  myTastes: {
    title: "What I'm Into",
    spotify: "Last Played on Spotify",
    listenOn: "Listen on Spotify",
    steam: "Last Played on Steam",
    totalPlaytime: "total playtime",
    lastPlayed: "Last played",
    viewOn: "View on Steam",
  },
  skills: {
    title: "Skills & Technologies",
    technologies: "Technologies",
  },
  projects: {
    title: "Personal Projects",
    github: "GitHub",
    liveDemo: "Live Demo",
  },
  social: {
    title: "Get In Touch",
    sendMessage: "Send Me a Message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourMessage: "Your Message",
    sending: "Sending...",
    sent: "Message Sent!",
    messageSent: "Thank you for reaching out. I'll get back to you soon.",
    thankYou: "Thank you for reaching out. I'll get back to you soon.",
    connectWithMe: "Connect With Me",
    email: "Email",
  },
  footer: {
    developedWith: "Developed with",
    rights: "All Rights Reserved",
  },
  language: {
    en: "English",
    pt: "Portuguese",
    it: "Italian",
  },
}

// Traduções em português
export const pt: Translations = {
  nav: {
    home: "Início",
    about: "Sobre",
    myTastes: "Vibe",
    skills: "Habilidades",
    projects: "Projetos",
    social: "Contato",
  },
  header: {
    title: [
      "Olá, eu sou Gabriel Fernandes Paiva!",
      "Desenvolvedor Full Stack",
      "Desenvolvedor Mobile",
      "Programador Criativo",
    ],
    subtitle: "Criando experiências bonitas e interativas para web e mobile",
  },
  about: {
    title: "Sobre Mim",
    description1:
      "Sou um desenvolvedor Full Stack e Mobile apaixonado por criar aplicações bonitas, funcionais e amigáveis. Minha jornada na tecnologia tem sido impulsionada pela curiosidade e pelo desejo de dar vida a ideias criativas.",
    description2:
      "Com experiência em várias tecnologias e frameworks, gosto de enfrentar problemas complexos e transformá-los em soluções elegantes. Quando não estou programando, você me encontrará explorando novas tecnologias, contribuindo para projetos open-source ou compartilhando conhecimento com a comunidade de desenvolvedores.",
    downloadCV: "Baixar CV",
    quickFacts: "Fatos Rápidos",
    fullStack: "Desenvolvedor Full Stack",
    mobile: "Desenvolvedor de Apps Mobile",
    creative: "Solucionador Criativo de Problemas",
    techEnthusiast: "Entusiasta de Tecnologia",
  },
  myTastes: {
    title: "Meus Gostos",
    spotify: "Última Música no Spotify",
    listenOn: "Ouvir no Spotify",
    steam: "Último Jogo na Steam",
    totalPlaytime: "tempo total de jogo",
    lastPlayed: "Jogado pela última vez",
    viewOn: "Ver na Steam",
  },
  skills: {
    title: "Habilidades & Tecnologias",
    technologies: "Tecnologias",
  },
  projects: {
    title: "Projetos Pessoais",
    github: "GitHub",
    liveDemo: "Demo ao Vivo",
  },
  social: {
    title: "Entre em Contato",
    sendMessage: "Envie-me uma Mensagem",
    yourName: "Seu Nome",
    yourEmail: "Seu Email",
    yourMessage: "Sua Mensagem",
    sending: "Enviando...",
    sent: "Mensagem Enviada!",
    messageSent: "Obrigado por entrar em contato. Responderei em breve.",
    thankYou: "Obrigado por entrar em contato. Responderei em breve.",
    connectWithMe: "Conecte-se Comigo",
    email: "Email",
  },
  footer: {
    developedWith: "Desenvolvido com",
    rights: "Todos os Direitos Reservados",
  },
  language: {
    en: "Inglês",
    pt: "Português",
    it: "Italiano",
  },
}

// Traduções em italiano
export const it: Translations = {
  nav: {
    home: "Home",
    about: "Chi Sono",
    myTastes: "Vibe",
    skills: "Competenze",
    projects: "Progetti",
    social: "Contatti",
  },
  header: {
    title: [
      "Ciao, sono Gabriel Fernandes Paiva!",
      "Sviluppatore Full Stack",
      "Sviluppatore Mobile",
      "Programmatore Creativo",
    ],
    subtitle: "Creo esperienze belle e interattive per web e mobile",
  },
  about: {
    title: "Chi Sono",
    description1:
      "Sono uno sviluppatore Full Stack e Mobile appassionato di creare applicazioni belle, funzionali e user-friendly. Il mio percorso nella tecnologia è stato guidato dalla curiosità e dal desiderio di dare vita a idee creative.",
    description2:
      "Con esperienza in varie tecnologie e framework, mi piace affrontare problemi complessi e trasformarli in soluzioni eleganti. Quando non sto programmando, mi troverai a esplorare nuove tecnologie, contribuire a progetti open-source o condividere conoscenze con la comunità di sviluppatori.",
    downloadCV: "Scarica CV",
    quickFacts: "Fatti Rapidi",
    fullStack: "Sviluppatore Full Stack",
    mobile: "Sviluppatore di App Mobile",
    creative: "Problem Solver Creativo",
    techEnthusiast: "Appassionato di Tecnologia",
  },
  myTastes: {
    title: "I Miei Gusti",
    spotify: "Ultima Riproduzione su Spotify",
    listenOn: "Ascolta su Spotify",
    steam: "Ultimo Gioco su Steam",
    totalPlaytime: "tempo totale di gioco",
    lastPlayed: "Giocato l'ultima volta",
    viewOn: "Visualizza su Steam",
  },
  skills: {
    title: "Competenze & Tecnologie",
    technologies: "Tecnologie",
  },
  projects: {
    title: "Progetti Personali",
    github: "GitHub",
    liveDemo: "Demo Live",
  },
  social: {
    title: "Contattami",
    sendMessage: "Inviami un Messaggio",
    yourName: "Il Tuo Nome",
    yourEmail: "La Tua Email",
    yourMessage: "Il Tuo Messaggio",
    sending: "Invio in corso...",
    sent: "Messaggio Inviato!",
    messageSent: "Grazie per avermi contattato. Ti risponderò presto.",
    thankYou: "Grazie per avermi contattato. Ti risponderò presto.",
    connectWithMe: "Connettiti Con Me",
    email: "Email",
  },
  footer: {
    developedWith: "Sviluppato con",
    rights: "Tutti i Diritti Riservati",
  },
  language: {
    en: "Inglese",
    pt: "Portoghese",
    it: "Italiano",
  },
}

// Função auxiliar para formatar datas relativas
export function formatLastPlayed(dateString: string, language: Language): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  if (language === "en") {
    if (diffDays === 0) return "Today"
    if (diffDays === 1) return "Yesterday"
    if (diffDays < 7) return `${diffDays} days ago`
    return date.toLocaleDateString("en-US")
  } else if (language === "pt") {
    if (diffDays === 0) return "Hoje"
    if (diffDays === 1) return "Ontem"
    if (diffDays < 7) return `${diffDays} dias atrás`
    return date.toLocaleDateString("pt-BR")
  } else if (language === "it") {
    if (diffDays === 0) return "Oggi"
    if (diffDays === 1) return "Ieri"
    if (diffDays < 7) return `${diffDays} giorni fa`
    return date.toLocaleDateString("it-IT")
  }

  return date.toLocaleDateString()
}

// Função auxiliar para formatar tempo de jogo
export function formatPlaytime(minutes: number, language: Language): string {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  if (language === "en") {
    return `${hours}h ${mins}m`
  } else if (language === "pt") {
    return `${hours}h ${mins}m`
  } else if (language === "it") {
    return `${hours}h ${mins}m`
  }

  return `${hours}h ${mins}m`
}

