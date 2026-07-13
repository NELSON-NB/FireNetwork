import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck, Radio, Wifi, Camera, Zap, ArrowRight,
  Phone, CheckCircle2, TrendingUp, Users, Award, Clock,
  LockIcon,
  FireExtinguisherIcon
} from 'lucide-react'
import derImg from '../assets/der.jpeg';

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { icon: TrendingUp, value: '350+', label: 'Projects Completed' },
  { icon: Users,      value: '60+', label: 'Satisfied Clients' },
  { icon: Award,      value: '9+',  label: 'Years of Experience' },
  { icon: Clock,      value: '24/7', label: 'Emergency Support' },
]

const services = [
  {
    icon: ShieldCheck,
    title: 'Fire Dection System',
    desc: 'Advanced smoke, heat, and flame detectors with intelligent panel control for rapid early warning.',
    color: 'from-red-600 to-red-800',
    bg: 'bg-red-50',
    accent: 'text-red-600',
  },
  {
    icon: Zap,
    title: ' Fire Automatic Supression System ',
    desc: 'From industrial sites, to data centers and fuel storage facilities, we engineer suppression systems water , gas , and foam  that activate automatically and minimize collateral damage.',
    color: 'from-orange-500 to-red-600',
    bg: 'bg-orange-50',
    accent: 'text-orange-600',
  },
  {
    icon: LockIcon,
    title: 'Alarm Intrusion',
    desc: 'Protect your property with reliable intrusion alarm systems that detect incursions and provide instant alerts. We offer professional installation and maintenance for homes, businesses, and bank companies',
    color: 'from-orange-500 to-red-600',
    bg: 'bg-orange-50',
    accent: 'text-orange-600',
  },{
    icon: ShieldCheck,
    title: 'Gate Motorization',
    desc: 'Automate your gate for enhanced security, convenience, and easy access. We provide professional installation, maintenance, and smart access solutions for residential, commercial, and industrial properties.',
    color: 'from-orange-500 to-red-600',
    bg: 'bg-orange-50',
    accent: 'text-orange-600',
  },
  {
    icon: Wifi,
    title: 'Network Cabling',
    desc: 'Structured Cat6/Cat6A cabling, fiber optic runs, and full network infrastructure installation.',
    color: 'from-blue-600 to-blue-800',
    bg: 'bg-blue-50',
    accent: 'text-blue-600',
  },
  {
    icon: Camera,
    title: 'CCTV & Surveillance',
    desc: 'HD/4K IP camera systems with remote monitoring, NVR storage, and AI-powered analytics.',
    color: 'from-slate-600 to-slate-800',
    bg: 'bg-slate-50',
    accent: 'text-red-600',
  },
  {
    icon: Radio,
    title: 'Access Control',
    desc: 'Biometric, RFID, and smart card systems for secured perimeter and zone-based access management.',
    color: 'from-emerald-600 to-emerald-800',
    bg: 'bg-emerald-50',
    accent: 'text-emerald-600',
  },
  {
    icon: ShieldCheck,
    title: 'Maintenance & Support',
    desc: 'Periodic inspections, certifications, and 24/7 emergency response to keep your systems compliant.',
    color: 'from-purple-600 to-purple-800',
    bg: 'bg-purple-50',
    accent: 'text-purple-600',
  },
  {
    icon: FireExtinguisherIcon,
    title: 'Equipement de lutte contre le Feu',
    desc: 'Advanced fire protection solutions designed to safeguard lives and properties. We deliver reliable system de lutte contre le feu, installation, and maintenance services.',
    color: 'from-orange-500 to-red-600',
    bg: 'bg-orange-50',
    accent: 'text-red-600',
  },
]

const whyUs = [
  'Certified engineers on every project',
  'Compliant with NFPA, EN54, local safety standards and APSAD reglementation',
  'End-to-end: design, install, maintain, certify',
  'Rapid emergency response across Cameroon',
  'Integrated fire + network + security solutions',
  '100% client satisfaction guarantee',
]

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────

function Counter({ value }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef(null)

  useEffect(() => {
    const numeric = parseInt(value.replace(/\D/g, ''))
    const suffix = value.replace(/[0-9]/g, '')
    if (!numeric) { setDisplay(value); return }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      let start = 0
      const duration = 1800
      const step = (timestamp) => {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(Math.floor(eased * numeric) + suffix)
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.5 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{display}</span>
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1800&q=80')`,
          }}
        />
        {/* Dark overlay with red gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332]/95 via-[#1A2332]/85 to-[#9B0012]/70" />

        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E3001B]/20 border border-[#E3001B]/40 text-[#FF6B35] text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
            Certified Fire & Network Engineers — Cameroon
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Protecting Lives &{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3001B] to-[#FF6B35]">
                Infrastructure
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 300 6" fill="none">
                <path d="M0 3 Q75 0 150 3 Q225 6 300 3" stroke="#FF6B35" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
            {' '}With Precision
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            FIRE NETWORK EQUIPMENTS INGINEERING SARL delivers end-to-end fire detection,  network cabling,
            and physical security — engineered for safety, built to last.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="group flex items-center gap-2 bg-[#E3001B] hover:bg-[#FF6B35] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/40 text-base"
            >
              Get a Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/+237695493594"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 text-base"
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            {['NFPA Certified', 'EN54 Compliant',  '24/7 Support','Reglementation APSAD'].map(badge => (
              <span key={badge} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#FF6B35]" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs">
          <span>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <section className="bg-[#1A2332] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#E3001B]/10 border border-[#E3001B]/20 rounded-xl mb-3 group-hover:bg-[#E3001B]/20 transition-colors">
                  <Icon size={22} className="text-[#FF6B35]" />
                </div>
                <p className="text-4xl font-black text-white mb-1">
                  <Counter value={value} />
                </p>
                <p className="text-sm text-gray-400 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ──────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-[#E3001B] text-sm font-bold uppercase tracking-widest">What We Do</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#1A2332] mt-3 mb-4">
              Complete Safety &<br />Network Solutions
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              From fire alarm design to structured cabling — we handle every aspect of
              your building's safety and connectivity infrastructure.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, color, bg, accent }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 ${bg} rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} className={accent} />
                </div>
                <h3 className="text-[#1A2332] font-bold text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                <Link
                  to="/services"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${accent} hover:gap-3 transition-all duration-200`}
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#1A2332] hover:bg-[#243447] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50">
                <img
                  src={derImg}
                  alt="FIRENET engineering team at work"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332]/60 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-[#E3001B] rounded-2xl p-5 shadow-2xl shadow-red-900/30">
                <p className="text-white text-4xl font-black leading-none">9+</p>
                <p className="text-red-200 text-sm font-medium mt-1">Years Protecting<br />Cameroon</p>
              </div>
              {/* Decorative dot grid */}
              <div className="absolute -top-6 -left-6 w-32 h-32 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle, #E3001B 1.5px, transparent 1.5px)`,
                  backgroundSize: '14px 14px'
                }}
              />
            </div>

            {/* Content side */}
            <div>
              <span className="text-[#E3001B] text-sm font-bold uppercase tracking-widest">Why FIRE NETWORK EQUIPMENTS INGINEERING SARL</span>
              <h2 className="text-4xl sm:text-5xl font-black text-[#1A2332] mt-3 mb-6 leading-tight">
                Safety isn't optional —<br />
                <span className="text-[#E3001B]">neither is quality.</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                We combine deep fire protection expertise with cutting-edge 
                technology to deliver integrated solutions that protect your people,
                assets, and data — , every time.
              </p>

              <ul className="space-y-4 mb-10">
                {whyUs.map(point => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#E3001B] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/about"
                className="group inline-flex items-center gap-2 bg-[#E3001B] hover:bg-[#FF6B35] text-white font-bold px-7 py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                About Our Company
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECT BANNER ───────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-[#1A2332]/88" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#FF6B35] text-sm font-bold uppercase tracking-widest">Our Work Speaks</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 mb-6 leading-tight">
            350+ Projects Delivered<br />Across Central Africa
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            From Factories and hotels to data centers and warehouses — our systems
            protect some of the most critical facilities in the region.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-[#E3001B] hover:bg-[#FF6B35] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-base"
          >
            View Our Projects <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#E3001B] to-[#9B0012] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Ready to secure your facility?
            </h3>
            <p className="text-red-200 mt-1 text-sm">
              Talk to our engineers — free site assessment available.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="https://wa.me/(237)695493594?text=Hello!%20I%20need%20a%20free%20site%20assessment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-[#E3001B] font-bold px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-sm"
            >
              {/* WhatsApp icon inline */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 border-2 border-white text-white font-bold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-200 text-sm"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}