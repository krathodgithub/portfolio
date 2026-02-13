import { Link } from 'react-scroll'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'projects', label: 'Projects' },
    { to: 'experience', label: 'Experience' },
    { to: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="home" smooth={true} duration={500}>
            <div className="cursor-pointer group relative">
              <div className="text-4xl font-black font-display tracking-tight relative">
                <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-secondary-500 bg-clip-text text-transparent drop-shadow-sm">
                  KR
                </span>
              </div>
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary-500 via-purple-500 to-secondary-500 transition-all duration-500 rounded-full"></div>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-primary-500 font-semibold"
                className="cursor-pointer hover:text-primary-500 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-2xl text-gray-700 hover:text-primary-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white/95 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onClick={() => setIsOpen(false)}
                className="block hover:text-primary-500 transition-colors cursor-pointer text-gray-700 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
