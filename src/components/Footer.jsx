import { Link } from 'react-router-dom'
import { Flame, MapPin, Phone, Mail } from 'lucide-react'
import siteLogo from "../assets/site.png";

const WHATSAPP = '+237695493594'

export default function Footer() {
  return (
    <footer className="bg-[#111C2A] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              
                <img
                   src={siteLogo}
                 alt="logo"
                 className="w-[250px] h-[280px] object-contain"
               />
              
              
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mb-5">
              Cameroon's trusted partner for fire protection, network cabling, CCTV, and access control systems since 2018.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Pages</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'Projects', to: '/projects' },
                { label: 'Contact', to: '/contact' },
                { label: 'Certifications', to: '/certification' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-sm hover:text-[#FF6B35] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              {['Fire Detection', 'Fire Suppression', 'Network Cabling', 'CCTV & Surveillance', 'Access Control', 'Maintenance'].map(s => (
                <li key={s}>
                  <Link to="/services" className="hover:text-[#FF6B35] transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#E3001B] flex-shrink-0 mt-0.5" />
                <span>371 rue Sylvani Akwa,<br />Douala, Cameroon</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#E3001B] flex-shrink-0" />
                <a href="tel:+237695493594" className="hover:text-white transition-colors">+237 675 157 569 / 695 493 594</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#E3001B] flex-shrink-0" />
                <a href="mailto:contact@fne-ingineering.com" className="hover:text-white transition-colors">contact@fne-ingineering.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#E3001B] flex-shrink-0" />
                <a href="mailto:fneingineering18@gmail.com" className="hover:text-white transition-colors">fneingineering18@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#E3001B] flex-shrink-0" />
                <a href="mailto:fneingineering18@gmail.com" className="hover:text-white transition-colors">e.fokem@fne-ingineering.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} FIRE NETWORK INGINEERING SARL. All rights reserved.</p>
          <p>Douala, Cameroon — Serving Central Africa</p>
        </div>
      </div>
    </footer>
  )
}