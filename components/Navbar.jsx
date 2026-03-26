'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const pathname = usePathname()
  const [hash, setHash] = useState(typeof window !== 'undefined' ? window.location.hash : '')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', `#${id}`)
      setHash(`#${id}`)
      setIsOpen(false)
    }
  }

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  const isActive = (id) => (pathname === '/' && (hash === '' || hash === '#home')) && id === 'home' || hash === `#${id}`

  return (
    <nav className="fixed top-0 w-full z-50">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="glass backdrop-blur-xl border-b border-blue-500/20 h-16 flex items-center justify-between px-6"
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <h1 className="gradient-text text-2xl font-bold">
            SK
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollTo(e, item.id)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(item.id)
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {isActive(item.id) && (
                  <motion.div
                    layoutId="navbar-highlight"
                    className="absolute inset-0 glass-sm rounded-lg bg-gradient-to-r from-blue-500/30 to-purple-500/30"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </motion.button>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden glass backdrop-blur-xl border-b border-blue-500/20 overflow-hidden"
      >
        <ul className="flex flex-col space-y-2 p-4">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollTo(e, item.id)}
                className={`block px-4 py-2 rounded-lg transition-all ${
                  isActive(item.id)
                    ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  )
}

export default Navbar
