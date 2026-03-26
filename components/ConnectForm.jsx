'use client'

import { Github, Instagram, Linkedin, MailPlus, MessageCircle, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const ConnectForm = () => {
  const [formData, setFormData] = useState({ username: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Send email using fetch to a backend API or email service
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: 'shivakumar28226@gmail.com',
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ username: '', email: '', phone: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        throw new Error('Failed to send email')
      }
    } catch (err) {
      setError('Failed to send message. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div className="glass rounded-2xl border border-blue-500/20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          {/* Left: Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 sm:p-10"
          >
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Send Message</h3>
              <p className="text-gray-400">I'll get back to you within 24 hours</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9933XXXXXX"
                  className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="4"
                  className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                />
              </motion.div>

              {error && (
                <motion.p variants={itemVariants} className="text-red-400 text-sm">
                  {error}
                </motion.p>
              )}

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full btn-gradient rounded-lg py-3 font-semibold flex items-center justify-center gap-2 mt-8 disabled:opacity-50"
              >
                <MailPlus size={18} />
                {loading ? 'Sending...' : submitted ? 'Message Sent! ✓' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Contact Info & Social */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 sm:p-10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <motion.div variants={itemVariants}>
                <p className="text-xl sm:text-2xl font-bold mb-4">Let's Work Together</p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed italic">
                  "Have a great idea in mind? Let's connect and bring it to life together — transforming your vision into something truly remarkable."
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-sm text-gray-400">
                  Whether it's a web app, creative project, or a digital dream — I'd love to hear it.
                </p>

                {/* Quick Contact Methods */}
                <div className="space-y-3">
                  <motion.a
                    href="mailto:shivakumar28226@gmail.com"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30">
                      <MailPlus size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="font-medium">shivakumar28226@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+7430809911"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30">
                      <Phone size={18} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Phone</p>
                      <p className="font-medium">+91 7430809911</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/7430809911"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30">
                      <MessageCircle size={18} className="text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">WhatsApp</p>
                      <p className="font-medium">Quick Chat</p>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-4 mt-8">
              <p className="text-sm font-semibold text-gray-300">Follow Me</p>
              <div className="flex gap-3">
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
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    title={label}
                    className="w-10 h-10 rounded-lg glass border border-blue-500/30 flex items-center justify-center text-blue-400 hover:text-blue-300 hover:border-blue-400/50 transition-all"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ConnectForm
