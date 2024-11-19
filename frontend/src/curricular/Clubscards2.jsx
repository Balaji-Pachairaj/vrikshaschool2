import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const cardData = [
  { title: "limelight club", subtitle: "Lights, camera, action!", description: "Students learn about theatres, short film making, audio, video editing and photo editing" },
  { title: "vriksha tinkering club", subtitle: "Innovate with latest tools and equipment", description: "Students are given a chance to work with latest tools and equipment to understand the concept of technology and engineering. The tinkering lab provides a workspace where young minds can give shape to their ideas through hands on do-it-yourself mode, and learn innovation skills." },
  { title: "unite for change", description: "An initiative to teach our students to explore various fields ranging from Art & craft to life skills and develop their horizons" },
 
]

function Card({ title, subtitle, description, index, scrollYProgress }) {
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
        <h3 className="text-xl font-bold mb-2 text-white uppercase">{title}</h3>
        <h4 className="text-lg mb-3 text-white/80">{subtitle}</h4>
        <p className="text-white">{description}</p>
      </motion.div>
    )
  }

function Clubcard2() {
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

export default Clubcard2