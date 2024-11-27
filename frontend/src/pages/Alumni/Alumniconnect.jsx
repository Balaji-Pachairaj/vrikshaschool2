
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

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
          Stay Connected
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
  Join the conversation and stay engaged with your alumni community through events, updates, and more.
</p>

        
      </div>
    </section>
  )
}

