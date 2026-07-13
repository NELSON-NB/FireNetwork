import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Calendar, Tag } from 'lucide-react'
import hotImg from '../assets/hot.jpeg';
import hotelImg from '../assets/hotel.jpeg';
import banImg from '../assets/ban.jpg';
import bankImg from '../assets/bank.jpg';
import surImg from '../assets/sur.jpg';
import enoeImg from '../assets/eneo.jpg';
import barImg from '../assets/bar.jpg';
import badImg from '../assets/bad.jpg';
import sarlImg from '../assets/sarl.jpg';
import omoaImg from '../assets/omoa.jpg';
import bataImg from '../assets/bata.jpg';
import webImg from '../assets/web.png';
import figecImg from '../assets/figec.jpg';
import barrageImg from '../assets/barrage.jpg';
import sarImg from '../assets/sar.jpg';




const categories = ['All', 'Fire Detection', 'Extinction Automatique' , 'Network', 'CCTV', 'Access Control','Alarm Intrusion','Gate Motorisation']

const projects = [
  {
    title: 'Hotel IBRIS',
    category: 'Fire Detection',
    location: 'Bata, Guinee Equatorial',
    year: '2025',
    img: bataImg,
    desc: 'Full addressable fire alarm system covering 5 floors, 150 devices, integrated with hotel BMS.',
    tag: 'Hotel',
  },
  {
    title: 'SOFITEL LUXURY SIPOPO',
    category: 'Fire Detection',
    location: 'Malabo, Guinee',
    year: '2025',
    img: hotImg,
    desc: 'Full addressable fire alarm system covering 5 floors, 560 devices, integrated with smoke ventilation hotel BMS.',
    tag: 'Hospitality',
  },
  {
    title: 'Barrage Hydro-electric of lagdo',
    category: 'Gate Motorisation',
    location: 'Lagdo, Cameroun',
    year: '2023',
    img: barrageImg,
    desc: 'Installation of an automated gate system, providing secure, reliable, and convenient access for residential and commercial properties.',
    tag: 'Energy',
  },
  {
    title: 'OMOA CAMEROUN',
    category: 'Network',
    location: 'Douala, Cameroon',
    year: '2023',
    img: webImg,
    desc: 'Cat6A structured cabling and fiber optic backbone for 30-rack enterprise data center.',
    tag: 'Telecom',
  },
  {
    title: 'LIMBE POWER PLANT',
    category: 'CCTV',
    location: 'LIMBE, Cameroon',
    year: '2022',
    img: surImg,
    desc: '50-camera HD IP surveillance system with AI analytics covering production and factory.',
    tag: 'Industrial',
  },
  {
    title: 'Eneo de Gaulle',
    category: 'Gate Motorisation',
    location: 'Gaulle, Cameroon',
    year: '2025',
    img: sarImg,
    desc: 'Installation of an automated gate system, providing secure, reliable, and convenient access for residential and commercial properties.',
    tag: 'Industrial',
  },
  {
    title: 'Barrage Hydroelectrique Edea',
    category: 'Access Control',
    location: 'Edea, Cameroon',
    year: '2021',
    img: barImg,
    desc: 'Controle daccess par carte des point strategic dont le control room, salle des machines et entree principal du site .',
    tag: 'Energy',
  },
  {
    title: 'Bamenda Power Plant',
    category: 'Access Control',
    location: 'Bamenda, Cameroon',
    year: '2021',
    img: badImg,
    desc: 'Controle daccess par carte des point strategic dont le control room, salle des machines et entree principal du site .',
    tag: 'Energy',
  },
 
 
  {
    title: 'STANDARD CHATERED',
    category: 'Extinction Automatique',
    location: 'Douala, Cameroon',
    year: '2023',
    img: banImg,
    desc: 'automatique extinction for server room, evacuation Audible alarm with HVAC shutdown, including an IG-55 fire extincteur agent and with ditection dispositives.',
    tag: 'Industrial',
  },
  {
    title: 'BANGE BANK CAMEROUN',
    category: 'Extinction Automatique',
    location: 'Douala, Cameroon',
    year: '2020',
    img: bankImg,
    desc: 'automatique extinction for server room, evacuation Audible alarm with HVAC shutdown, including an IG-55 fire extincteur agent and with ditection dispositives.',
    tag: 'Government',
  },
  {
    title: 'CAIU Sarl',
    category: 'Network',
    location: 'Douala, Cameroon',
    year: '2024',
    img: sarlImg,
    desc: 'Cat6A structured cabling and fiber optic backbone for 30-rack enterprise data center.',
    tag: 'Education',
  },
  {
    title: 'Micro-finance FIGEC',
    category: 'Alarm Intrusion',
    location: 'Douala, Cameroon',
    year: '2025',
    img: figecImg,
    desc: 'Installation of a modern intrusion alarm system with motion detectors, door contacts, alarm pedales, seimic detector and real-time alerts to ensure maximum protection of property 24/7.',
    tag: 'Education',
  },
  {
    title: 'ENEO Koumassi CAMEROUN',
    category: 'CCTV',
    location: 'Douala, Cameroon',
    year: '2025',
    img: enoeImg,
    desc: '50-camera HD IP surveillance system with AI analytics covering the entire site and access to the offices.',
    tag: 'Energy',
  },
  {
    title: 'BANGE BANK CAMEROUN',
    category: 'Alarm Intrusion',
    location: 'Douala, Cameroon',
    year: '2020',
    img: bankImg,
    desc: 'Installation of a modern intrusion alarm system with motion detectors, door contacts, alarm pedales, seimic detector and real-time alerts to ensure maximum protection of property 24/7.',
    tag: 'Government',
  },
]

const tagColors = {
  Healthcare:    'bg-blue-100 text-blue-700',
  Hospitality:   'bg-amber-100 text-amber-700',
  Telecom:       'bg-purple-100 text-purple-700',
  Industrial:    'bg-green-100 text-slate-700',
  Banking:       'bg-emerald-100 text-emerald-700',
  Government:    'bg-red-100 text-red-700',
  Education:     'bg-orange-100 text-orange-700',
  Energy:        'bg-yellow-100 text-yellow-700',
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <main className="overflow-x-hidden pt-20">

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative py-28 bg-[#1A2332] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A2332]/80 to-[#1A2332]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#FF6B35] text-sm font-bold uppercase tracking-widest">Our Portfolio</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mt-4 mb-6 leading-tight">
            Real Projects,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3001B] to-[#FF6B35]">
              Real Impact
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            A selection of our most notable installations across Cameroon and Central Africa.
          </p>
        </div>
      </section>

      {/* ── FILTER + GRID ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === cat
                    ? 'bg-[#E3001B] text-white shadow-lg shadow-red-200'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#E3001B] hover:text-[#E3001B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(({ title, category, location, year, img, desc, tag }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/60 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${tagColors[tag] ?? 'bg-gray-100 text-gray-700'}`}>
                    {tag}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><MapPin size={12} />{location}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} />{year}</span>
                    <span className="flex items-center gap-1"><Tag size={12} />{category}</span>
                  </div>
                  <h3 className="text-[#1A2332] font-bold text-lg mb-2 leading-snug">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#E3001B] to-[#9B0012] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-3">Your project could be next</h2>
          <p className="text-red-200 mb-8 text-base">Let's discuss your requirements and build something remarkable together.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#E3001B] font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
          >
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  )
}