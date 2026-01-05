'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [hash, setHash] = useState(typeof window !== 'undefined' ? window.location.hash : '')

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
    }
  }

  return (
    <nav>
      <div className="bg-red-700 backdrop-blur-sm h-16 flex items-center justify-between px-6">
        <h1 className="text-white font-bold text-xl">MyProfile</h1>

        <ul className="flex space-x-6">
          <li>
            <a
              href="#home"
              onClick={(e) => scrollTo(e, 'home')}
              className={`${(pathname === '/' && (hash === '' || hash === '#home')) ? 'bg-white text-red-700 px-3 py-1 rounded' : 'text-white hover:text-gray-200'} transition`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => scrollTo(e, 'projects')}
              className={`${hash === '#projects' ? 'bg-white text-red-700 px-3 py-1 rounded' : 'text-white hover:text-gray-200'} transition`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className={`${hash === '#contact' ? 'bg-white text-red-700 px-3 py-1 rounded' : 'text-white hover:text-gray-200'} transition`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
