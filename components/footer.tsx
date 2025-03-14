"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="py-8 border-t border-white/10 mt-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <p className="text-white/80 mb-2 flex items-center justify-center">
            Developed with
            <motion.span
              className="mx-2 text-orange-500 inline-block"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              <Heart className="w-5 h-5 fill-current" />
            </motion.span>
            by Gabriel Fernandes Paiva
          </p>
          <p className="text-white/60 text-sm">© {currentYear} All Rights Reserved</p>
        </motion.div>

        <motion.div
          className="mt-6 h-1 w-32 bg-gradient-to-r from-blue-500 via-indigo-500 to-orange-400 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.footer>
  )
}

