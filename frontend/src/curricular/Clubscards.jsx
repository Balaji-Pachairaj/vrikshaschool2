import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const cardData = [
  { title: "avid club", subtitle: "Fashion designing, Arts, Crafts & housekeeping", description: "This club provides a forum in which children can learn life skills and shed their fear of failure. Through dramatics they take on life roles that they fear most and learn to overcome them. They learn about themselves, their families and society around them." },
  { title: "orange banana club", subtitle: "Healthy food choices", description: "The club is focused on healthy lifestyle by making sensible choices about food, teaching students cooking skills, exploring ingredients, examining recipes, learning to use appliances and equipment safely and observing live cooking demonstrations. They are all given opportunities to prepare tasty, healthy meals which theys can take home to share with their families." },
  { title: "mithra club", subtitle: "Gardening that connects children with nature", description: "The program provides hands-on learning across disciplines like science, math, and language arts. Activities include tree planting, eco-friendly projects (e.g., rainwater harvesting, compost pits), and campaigns like 'Say No to Poly Bags' and 'Save Water.' Students also join school and community events focused on ecology." },
 
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

function Clubcard() {
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

export default Clubcard