import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import limelight from "../assets/clubs/Limelight.png"  
import androyen from "../assets/clubs/Androyen.png"    
import artclub from "../assets/clubs/art.png"      
import dicomaster from "../assets/clubs/Dicomaster.png"
import mun from "../assets/clubs/MUN.png"             


const cardData = [
  { 
    title: "limelight club", 
    subtitle: "Lights, camera, action!", 
    description: "Students learn about theatres, short film making, audio, video editing and photo editing",
    image: limelight
  },
  { 
    title: "Androyen", 
    description: "Dive into the world of robotics, where creativity and technology come together. Build, code, and innovate with like-minded enthusiasts. Shape the future with hands-on projects and competitions.",
    image: androyen
  },
  { title: "ArtClub", description: " Unleash your imagination through painting, sketching, and diverse art forms. Express yourself in a space that celebrates creativity and passion. Join us to explore, create, and inspire.", image: artclub },
  { title: "Dicomaster", description: "Master the art of public speaking, debate, and leadership. Engage in discussions that challenge your thinking and refine your communication skills. Become a confident speaker and a strong leader.", image: dicomaster },
  {title: "MUN" , description: "Step into the world of diplomacy and global affairs. Discuss international issues, negotiate solutions, and represent nations. Be a voice for change and a leader for peace.", image: mun }
]

function Card({ title, subtitle, description, image, index, scrollYProgress }) {
    const isEven = index % 2 === 0
    const yOffset = useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [isEven ? 100 : -100, 0, isEven ? -100 : 100]
    )
  
    return (
      <motion.div 
        className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl relative flex flex-col"
        style={{ y: yOffset }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="flex justify-center items-center mb-4">
          <div className="w-[320px] h-[100px] bg-white rounded-lg flex items-center justify-center p-4">
            <img 
              src={image} 
              alt={`${title} logo`} 
              className="h-[100px] w-auto object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <h3 className="text-lg font-bold mb-1 text-white uppercase">{title}</h3>
          <h4 className="text-sm mb-2 text-white/80">{subtitle}</h4>
          <p className="text-white/90 text-sm leading-relaxed">{description}</p>
        </div>
      </motion.div>
    )
  }

function Clubcard2() {
  const containerRef1 = useRef(null)
  const containerRef2 = useRef(null)
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: containerRef1,
    offset: ["start end", "end start"]
  })
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: containerRef2,
    offset: ["start end", "end start"]
  })

  return (
    <>
      <div ref={containerRef1} className="flex justify-center items-center min-h-screen bg-black p-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full max-w-6xl">
          {cardData.slice(0, 3).map((card, index) => (
            <Card key={index} index={index} scrollYProgress={scrollYProgress1} {...card} />
          ))}
        </div>
      </div>

      <div ref={containerRef2} className="flex justify-center items-center min-h-screen bg-black p-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full max-w-3xl justify-center">
          {cardData.slice(3).map((card, index) => (
            <Card key={index} index={index} scrollYProgress={scrollYProgress2} {...card} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Clubcard2