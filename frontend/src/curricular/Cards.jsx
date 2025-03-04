import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const cardData = [
  { title: "Design", description: "Creative solutions for modern interfaces" },
  { title: "Development", description: "Robust and scalable web applications" },
  { title: "Marketing", description: "Strategic digital growth approaches" },
  { title: "Consulting", description: "Expert guidance for technology strategies" }
]

function Card({ title, description, index, scrollYProgress }) {
  const isEven = index % 2 === 0
  const yOffset = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isEven ? 100 : -100, 0, isEven ? -100 : 100]
  )

  return (
    <motion.div 
      className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl"
      style={{ y: yOffset }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

function ScrollCards() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <div ref={containerRef} className="flex justify-center items-center min-h-screen bg-black p-4">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full max-w-6xl">
        {cardData.map((card, index) => (
          <Card key={index} index={index} scrollYProgress={scrollYProgress} {...card} />
        ))}
      </div>
    </div>
  )
}

export default ScrollCards