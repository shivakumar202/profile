'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Inter } from 'next/font/google'
import { Github, Instagram, Linkedin, ArrowRight, Code2, Briefcase, Zap } from 'lucide-react'
import ConnectForm from '../components/ConnectForm'
import Projects from '../components/Projects'
import SkillBars from '../components/SkillBars'

// Lazy load 3D background for better performance
const HeroBackground = dynamic(() => import('../components/HeroBackground'), {
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40" />,
  ssr: false,
})

const inter = Inter({
  subsets: ['latin'],
  weight: '900',
})

const skills = [
  {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    desc: 'The foundation of every web page — defining structure and semantic layout for modern websites.',
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    desc: 'Used for styling and designing beautiful, responsive, and animated web interfaces.',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    desc: 'The core scripting language for interactive web experiences and dynamic applications.',
  },
  {
    name: 'jQuery',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
    desc: 'A lightweight JavaScript library that simplifies DOM manipulation and event handling.',
  },
  {
    name: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    desc: 'A popular open-source relational database system for structured data storage and queries.',
  },
  {
    name: 'PHP',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    desc: 'A powerful backend scripting language used for dynamic web applications and APIs.',
  },
  {
    name: 'Slim Framework',
    logo: 'https://avatars.githubusercontent.com/u/1087554?s=200&v=4',
    desc: 'A lightweight PHP micro-framework for building simple yet robust RESTful web applications.',
  },
  {
    name: 'Laravel',
    logo: 'https://laravel.com/img/logotype.min.svg',
    desc: 'A modern PHP framework focused on elegant syntax, MVC architecture, and developer productivity.',
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    desc: 'A React-based framework for fast, SEO-friendly, and full-stack web applications.',
  },
]

const experience = [
  {
    title: 'Full Stack Developer at Andaman Bliss',
    period: 'Dec 2024 - Dec 2025',
    image: '/images/companies/andaman_bliss.png',
    description:
      'Developed and maintained web applications using Laravel and React. Collaborated with cross-functional teams to deliver high-quality software solutions.',
  },
  {
    title: 'Junior Developer at Three Geeks Web Solutions',
    period: 'Jun 2023 - Dec 2024',
    image: '/images/companies/three_geeks.png',
    description:
      'Assisted in building responsive websites and web applications. Gained experience in frontend and backend development using PHP, JavaScript, and MySQL.',
  },
]

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with the latest technologies',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Fast-loading, SEO-friendly websites optimized for user experience and conversion',
  },
  {
    icon: Briefcase,
    title: 'Full-Stack Solutions',
    description: 'End-to-end development from frontend design to backend architecture and deployment',
  },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [showLoader, setShowLoader] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const keys = ['L', 'O', 'A', 'D', 'I', 'N', 'G']

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % keys.length)
    }, 200)
    return () => clearInterval(interval)
  }, [keys.length])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 1400)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  if (showLoader) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900">
        <div className="flex gap-3" style={{ perspective: '800px' }}>
          {keys.map((key, index) => (
            <div
              key={index}
              className={`w-11 h-11 sm:w-15 sm:h-15 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center font-bold text-sm sm:text-xl transition-all duration-150 ${
                index === activeIndex ? 'translate-y-1.5 scale-96 text-green-500' : 'text-sky-400'
              }`}
              style={{
                boxShadow: index === activeIndex
                  ? '0 2px 0 #020617, 0 4px 10px rgba(0,0,0,0.5)'
                  : '0 6px 0 #020617, 0 10px 20px rgba(0,0,0,0.6)',
              }}
            >
              {key}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-950 to-purple-950 text-white overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        className="relative min-h-screen pt-24 pb-12 flex items-center justify-center overflow-hidden"
      >
        {/* 3D Background */}
        {mounted && <HeroBackground />}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/50" />

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Profile Text & CTA */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span className="inline-block text-sm uppercase tracking-widest text-blue-400 font-semibold mb-3">
                ✨ Full-Stack Developer
              </motion.span>
              <h1
                className={`${inter.className} text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4`}
              >
                <motion.span className="gradient-text inline-block">
                  Shiva Kumar
                </motion.span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-300 font-light">
                Crafting Digital Experiences with Code
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-lg"
            >
              I'm a Full-Stack Developer with 2+ years of experience building scalable, user-focused web applications. I specialize in transforming complex problems into elegant solutions using modern tech stacks like Laravel, React, Next.js, and Node.js.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 py-6"
            >
              {[
                { label: 'Projects', value: '15+' },
                { label: 'Clients', value: '10+' },
                { label: 'Experience', value: '2y' },
              ].map((stat, i) => (
                <div key={i} className="glass p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
              >
                Hire Me <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-8 py-3 rounded-lg font-semibold hover:bg-white/20 flex items-center gap-2"
              >
                View Work
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              {[
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/shivakumar-h-p-927b621b4/', label: 'LinkedIn' },
                { Icon: Github, href: 'https://github.com/shivakumar202', label: 'GitHub' },
                { Icon: Instagram, href: 'https://www.instagram.com/_7ncognito?igsh=NHVqdWlzcGxua3Vh', label: 'Instagram' },
              ].map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass p-3 rounded-lg hover:glow-blue transition-all"
                  title={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-full"
            >
              <div className="glass p-2 rounded-2xl overflow-hidden border border-blue-500/50">
                <img
                  src="/images/profile.png"
                  alt="Shiva Kumar"
                  className="w-full h-80 sm:h-96 lg:h-full object-cover rounded-xl"
                />
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10 animate-glow-pulse" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <motion.div className="w-1 h-2 bg-blue-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`${inter.className} text-4xl sm:text-5xl font-bold mb-4 gradient-text`}>
            Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition-all group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center mb-4 group-hover:glow-blue"
              >
                <service.icon size={28} className="text-blue-400" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`${inter.className} text-4xl sm:text-5xl font-bold mb-4 gradient-text`}>
            Technical Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proficiency in modern technologies and frameworks for full-stack development
          </p>
        </motion.div>

        <div className="space-y-12">
          <SkillBars />
        </div>

        {/* Tech Stack Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className={`${inter.className} text-2xl font-bold mb-8 text-center gradient-text`}>
            Tech Stack Highlights
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-4 rounded-lg text-center group cursor-pointer hover:glow-blue"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-12 h-12 mx-auto mb-3 grayscale group-hover:grayscale-0 transition-all"
                />
                <p className="text-sm font-semibold text-gray-300 group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`${inter.className} text-4xl sm:text-5xl font-bold mb-4 gradient-text`}>
            Work Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proven track record of delivering high-quality solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass p-8 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition-all group hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="glass p-3 rounded-lg w-20 h-20 flex items-center justify-center">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-blue-400 font-semibold mb-3">{exp.period}</p>
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex-shrink-0 flex items-center"
                >
                  <ArrowRight className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`${inter.className} text-4xl sm:text-5xl font-bold mb-4 gradient-text`}>
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects I've built and deployed
          </p>
        </motion.div>

        <Projects />
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`${inter.className} text-4xl sm:text-5xl font-bold mb-4 gradient-text`}>
            Let's Connect
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>

        <ConnectForm />
      </section>

      {/* ===== BOTTOM SPACER ===== */}
      <div className="py-12" />
    </main>
  )
}
