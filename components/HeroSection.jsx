'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Cedarville_Cursive } from 'next/font/google'
import { ArrowRight } from 'lucide-react'
import ThreeDObject from '@/components/ThreeDObject'

const cedarville = Cedarville_Cursive({
  subsets: ['latin'],
  weight: '400',
})

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollOffset, setScrollOffset] = useState(0)
  const containerRef = useRef(null)

  // Track mouse movement for 3D tilt effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height,
    })
  }

  // Track scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950"
      style={{ perspective: '1200px' }}
    >
      {/* Background Parallax Text - WEB DEVELOPER */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          transform: `translateX(${scrollOffset * 0.5}px) translateY(${scrollOffset * 0.3}px)`,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-[20vw] font-black leading-none tracking-tighter text-white select-none blur-[2px] whitespace-nowrap"
          style={{
            textShadow: '0 0 60px rgba(59, 130, 246, 0.3)',
            WebkitTextStroke: '1px rgba(139, 92, 246, 0.1)',
          }}
        >
          WEB DEVELOPER
        </motion.h1>
      </motion.div>

      {/* Background Parallax Text - FREELANCER (right side, different timing) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          transform: `translateX(${scrollOffset * -0.3}px) translateY(${scrollOffset * 0.2}px)`,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
          className="text-[18vw] font-black leading-none tracking-tighter text-purple-400 select-none blur-[1px] whitespace-nowrap absolute top-2/3"
          style={{
            textShadow: '0 0 60px rgba(139, 92, 246, 0.3)',
            WebkitTextStroke: '1px rgba(236, 72, 153, 0.1)',
          }}
        >
          FREELANCER
        </motion.h2>
      </motion.div>

      {/* Animated gradient divider - background layer */}
      <motion.div
        className="absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        style={{
          transform: `translateY(${scrollOffset * 0.5}px)`,
        }}
      />

      {/* Left Side Identity */}
      <motion.div
        className="absolute left-8 top-1/2 -translate-y-1/2 text-left z-20"
        style={{
          transform: `translateY(calc(-50% + ${scrollOffset * 0.2}px))`,
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            {['S', 'H', 'I', 'V', 'A'].map((letter, i) => (
              <motion.span
                key={i}
                className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 uppercase tracking-[4px]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xs text-gray-400 uppercase tracking-widest font-light"
          >
            Full Stack
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-xs text-gray-500 uppercase tracking-widest font-light"
          >
            Creative Developer
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Main Content Container - Center */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto px-4"
        style={{
          transform: `translateY(${scrollOffset * 0.15}px)`,
        }}
      >
        {/* 3D Object with Mouse Tracking */}
        <motion.div
          className="mb-12 h-56 w-56 relative"
          style={{
            rotateX: mousePosition.y * 15,
            rotateY: mousePosition.x * 15,
            transformStyle: 'preserve-3d',
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        >
          <ThreeDObject mouseX={mousePosition.x} mouseY={mousePosition.y} />
        </motion.div>

        {/* Main Headline */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className={`${cedarville.className} text-6xl md:text-7xl font-black mb-4 leading-none`}
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(59, 130, 246, 0.5)',
              filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.3))',
            }}
          >
            SHIVA KUMAR
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting premium digital experiences with modern technologies. Specializing in full-stack development, UI/UX design, and performance optimization.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <motion.a
            variants={itemVariants}
            href="#projects"
            className="group relative px-8 py-4 rounded-lg font-semibold text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-100 group-hover:opacity-80 transition-opacity" />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-40 blur-xl transition-opacity" />
            {/* Content */}
            <motion.div
              className="relative flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              View My Work
              <ArrowRight size={18} />
            </motion.div>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="#contact"
            className="group relative px-8 py-4 rounded-lg font-semibold text-white border-2 border-blue-500/50 hover:border-blue-400 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-opacity" />
            {/* Content */}
            <span className="relative">Let's Connect</span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-gray-400 uppercase tracking-widest">Scroll to explore</p>
            <svg
              className="w-6 h-6 text-blue-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Right side accent */}
      <motion.div
        className="absolute right-8 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-blue-500/50 to-purple-500/50 rounded-full z-20"
        style={{
          transform: `translateY(calc(-50% + ${scrollOffset * 0.2}px))`,
        }}
      />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.section>
  )
}
