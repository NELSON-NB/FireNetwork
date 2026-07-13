import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Flame } from 'lucide-react'
import fneLogo from "../assets/fne.png";
import logoLogo from "../assets/logo.png";
import siteLogo from "../assets/site.png";


const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Certifications', path: '/certification' },
  { name: 'Contact', path: '/contact' },
  
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = scrolled
    ? 'bg-[#1A2332] shadow-lg shadow-black/30'
    : 'bg-[#1A2332]/90 backdrop-blur-md'

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
                   src={logoLogo}
                 alt="logo"
                 className="w-[280px] h-[290px] object-contain"
               />
            
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              const linkClass = isActive
                ? 'text-[#FF6B35] border-b-2 border-[#FF6B35] pb-1 text-sm font-medium'
                : 'text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200'
              return (
                <Link key={link.path} to={link.path} className={linkClass}>
                  {link.name}
                </Link>
              )
            })}
            <a
              href="https://wa.me/+237695493594"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E3001B] hover:bg-[#FF6B35] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Get a Quote
            </a>
              
            
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#243447] px-4 pb-6 pt-2 space-y-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            const mobileClass = isActive
              ? 'block text-sm py-2 px-3 rounded-lg font-medium bg-[#E3001B] text-white'
              : 'block text-sm py-2 px-3 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-white/10'
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={mobileClass}
              >
                {link.name}
              </Link>
            )
          })}
          <a
            href="https://wa.me/+237695493594"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-3 bg-[#E3001B] text-white text-sm font-semibold px-5 py-3 rounded-lg"
          
            
          >
            Get a Quote
            </a>  
          
        </div>
      )}
    </nav>
  )
}