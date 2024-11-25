
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'
import png1 from "../../assets/alumni/connect.png"

export default function WorkflowSection() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [30, -25])

  useEffect(() => {
    if (inView && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [inView])

  return (
    <section ref={containerRef} className="bg-black text-white min-h-screen flex items-center justify-center px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <div ref={inViewRef} className="relative w-full max-w-lg mx-auto mb-12 md:mb-16">
          <motion.div
            className="relative aspect-[18/9] rounded-[2.5rem] border-8 border-white overflow-hidden"
            style={{ rotate }}
          >
            <img
              src={png1}
              alt="Person using smartphone"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
          Ready to Transform Your Workflow?
        </h1>
        
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
            Get Started
          </button>
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 border border-white transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

