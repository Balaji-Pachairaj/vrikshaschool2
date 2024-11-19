import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const cardData = [
  { title: "Qualified trainers and coaches", description: "monitor the progress of every child, to ensure that they learn, and excel in sports. Keeping this in view, the school has invested heavily in creating world - class sports infrastructure" },
  { title: "indoor sports", description: "A huge indoor sports Auditorium set up is under progress which aims to provide extensive training to the students in Table Tennis, Badminton, Basketball and many other indoor games." },
  { title: "martial arts and yoga", description: "Martial arts are also taught for self-defense. Yoga is regular features of the senior school’s schedule. The School encourages students and provides them with opportunities to participate in different inter school competitions at the national and international levels. Sports Day is celebrated every year with great zeal and enthusiasm." },
 
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
      <h3 className="text-xl font-bold mb-2 text-white uppercase">{title}</h3>
      <p className="text-white  ">{description}</p>
    </motion.div>
  )
}

function Sportscard() {
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

export default Sportscard