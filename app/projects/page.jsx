
'use client'

import { ArrowRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { Cedarville_Cursive } from 'next/font/google'

const cedarville = Cedarville_Cursive({
  subsets: ['latin'],
  weight: '400',
})

const projectsData = [
  {
    id: 1,
    title: 'Andaman Bliss',
    url: 'https://andamanbliss.com',
    image: '/images/companies/andaman_bliss.png',
    description: 'Resort and hospitality management platform for booking and customer management',
    tech: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
    category: 'Hospitality',
    featured: true,
  },
  {
    id: 2,
    title: 'Think n Maker',
    url: 'https://www.thinknmaker.com',
    image: 'https://www.thinknmaker.com/theme_2/pix.png',
    description: 'Creative marketplace platform for makers and artists',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'E-Commerce',
    featured: true,
  },
  {
    id: 3,
    title: 'Seadeck',
    url: 'https://seadeck.in',
    image: 'https://seadeck.in/theme-1/upload/logo-nx1.png',
    description: 'Marine logistics and shipping management platform',
    tech: ['Laravel', 'PHP', 'MySQL'],
    category: 'Logistics',
    featured: true,
  },
  {
    id: 4,
    title: 'Island Wonders',
    url: 'https://islandswonder.com',
    image: 'https://islandswonder.com/assets/img/home/900ba028c5d27653.png',
    description: 'Island attractions and tourism booking platform',
    tech: ['React', 'Laravel', 'Stripe'],
    category: 'Tourism',
  },
  {
    id: 5,
    title: 'Andaman Akash',
    url: 'https://andamanakash.com',
    image: 'https://andamanakash.com/themes-2/images/logo.png',
    description: 'Travel and accommodation booking platform',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    category: 'Travel',
  },
  {
    id: 6,
    title: 'MCM Building Solutions',
    url: '#',
    image: null,
    description: 'Enterprise inventory management system for construction materials',
    tech: ['Laravel', 'MySQL', 'Admin Panel'],
    category: 'Enterprise',
  },
]

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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function ProjectsPage() {
  const featuredProjects = projectsData.filter(p => p.featured)
  const otherProjects = projectsData.filter(p => !p.featured)

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-950 to-purple-950 text-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className={`${cedarville.className} text-5xl sm:text-6xl font-bold mb-4 gradient-text`}>
            Featured Projects
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of projects I've built and deployed. Each project represents unique challenges solved with modern technologies.
          </p>
        </motion.div>

        {/* Featured Projects Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className={`${cedarville.className} text-3xl font-bold gradient-text mb-8`}>
              Current Working Projects
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/50 transition-all group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8 p-8">
                  {/* Left: Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative h-64 lg:h-auto lg:col-span-1 rounded-lg overflow-hidden"
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center rounded-lg">
                        <span className="text-5xl opacity-20">{project.title.charAt(0)}</span>
                      </div>
                    )}
                  </motion.div>

                  {/* Right: Content */}
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl sm:text-3xl font-bold group-hover:gradient-text transition-all">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{project.description}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 text-xs rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex gap-4 pt-4">
                      {project.url !== '#' && (
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-gradient px-6 py-2 rounded-lg font-semibold flex items-center gap-2 inline-flex"
                        >
                          Visit Project <ExternalLink size={16} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Other Projects Section */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className={`${cedarville.className} text-3xl font-bold gradient-text mb-8`}>
              Portfolio Projects
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="glass rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-400/50 transition-all group h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <span className="text-4xl opacity-20">{project.title.charAt(0)}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold group-hover:gradient-text transition-all">{project.title}</h3>
                    <span className="px-2 py-1 text-xs font-semibold rounded bg-blue-500/20 text-blue-300 whitespace-nowrap ml-2">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 2).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 2 && (
                      <span className="px-2 py-1 text-xs rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        +{project.tech.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Link */}
                  {project.url !== '#' && (
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 group"
                    >
                      View Project <ArrowRight size={14} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass p-8 sm:p-12 rounded-2xl border border-blue-500/20">
            <h2 className={`${cedarville.className} text-3xl font-bold mb-4 gradient-text`}>
              Interested in Working Together?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always open to new projects and collaborations. Let's discuss your next big idea.
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
            >
              Get In Touch <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}