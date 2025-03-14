"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTypewriter, Cursor } from "react-simple-typewriter"

export default function Header() {
  const [text] = useTypewriter({
    words: ["Hello, I'm Gabriel Fernandes Paiva!", "Full Stack Developer", "Mobile Developer", "Creative Coder"],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Floating orbs background - only orange orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orange orbs only */}
        <motion.div
          className="absolute rounded-full bg-gradient-to-r from-orange-400 to-orange-500 opacity-15"
          style={{
            width: "180px",
            height: "180px",
            left: "70%",
            top: "30%",
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute rounded-full bg-gradient-to-r from-orange-400 to-orange-500 opacity-10"
          style={{
            width: "120px",
            height: "120px",
            left: "20%",
            top: "60%",
          }}
          animate={{
            x: [0, 15, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 opacity-15"
          style={{
            width: "150px",
            height: "150px",
            left: "40%",
            top: "20%",
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-white/20 shadow-xl"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-400 animate-gradient-xy opacity-40" />
          <Image
            src="/user1.png?height=500&width=500"
            alt="Gabriel Fernandes Paiva"
            fill
            className="object-cover z-10"
            priority
          />
        </motion.div>

        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-orange-300 animate-gradient-x">
              {text}
            </span>
            <Cursor cursorColor="#f97316" />
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Crafting beautiful, interactive experiences for web and mobile
          </p>
        </motion.div>
      </div>
    </section>
  )
}

