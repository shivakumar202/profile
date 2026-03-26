'use client'

import { motion } from 'framer-motion'
import { Cedarville_Cursive } from 'next/font/google'

const cedarville = Cedarville_Cursive({
  subsets: ['latin'],
  weight: '400',
})

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'PHP', level: 90 },
      { name: 'Laravel', level: 85 },
      { name: 'MySQL', level: 90 },
      { name: 'Node.js', level: 80 },
      { name: 'Slim Framework', level: 85 },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Git', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'jQuery', level: 85 },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
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

const barVariants = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
      delay: 0.3,
    },
  }),
}

export default function SkillBars() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-12"
    >
      {skillCategories.map((cat, idx) => (
        <motion.div key={idx} variants={itemVariants} className="space-y-6">
          <h3 className={`${cedarville.className} text-2xl gradient-text font-bold`}>
            {cat.category}
          </h3>

          <div className="space-y-4">
            {cat.skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-blue-400 text-sm"
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                <div className="h-2 bg-gray-700 rounded-full overflow-hidden glass-sm">
                  <motion.div
                    custom={skill.level}
                    variants={barVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
