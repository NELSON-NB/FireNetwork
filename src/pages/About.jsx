import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Award, Users, ShieldCheck, Zap } from 'lucide-react'
import ceoImg from '../assets/ceo.png';
import jobImg from '../assets/job.jpeg';
import DidierImg from '../assets/Didier.jpeg';
import elsaImg from '../assets/elsa.jpeg';
import JosephImg from '../assets/Joseph.jpeg';
import MerveilleImg from '../assets/Merveille.jpeg';
import entreImg from '../assets/entre.jpeg';
import bossImg from '../assets/boss.png';

const team = [
  {
    name: 'Fokem Ngoune Etienne',
    role: 'Directeur General',
    img: bossImg,
    desc: '30 years in fire protection systems across Central Africa.',
  },
  {
    name: 'Nouboudem Joseph',
    role: 'Directeur Technique',
    img: JosephImg,
    desc: 'Certified engineer and specializing in structured cabling.',
  },
  {
    name: 'Notewo Didier',
    role: 'Conducteur des Travaux',
    img: DidierImg,
    desc: 'Expert in fire ditection CCTV, access control, and integrated security.',
  },
  {
    name: 'Tessa Mervielle',
    role: 'Assistante de Direction ',
    img: MerveilleImg,
    desc: 'Supports the director with administrative tasks .',
  },
  {
    name: 'Ngnintedem Elsa',
    role: 'Responsible du ShowRoom ',
    img: elsaImg,
    desc: 'Sales techniques and helping customer relationship managment.',
  },
]

const milestones = [
  { year: '2018', event: 'FIRE NETWORK EQUIPMENTS INGINEERING SARL founded in Douala, Cameroon' },
  { year: '2019', event: 'Partnership signature with Sensorpoint Soluçôes de Segurança Lda ' },
  { year: '2020', event: 'Systems installation of acess control at Bamenda themal center and at edea hydroelectric barrage   ' },
  { year: '2021', event: 'Systems installation of videosuillance and acess control a la themal center of Limbe ' },
  { year: '2022', event: 'System installation of access control, parking gate,intrusion alarm & CCTV at ENEO sites and Garoua delegation' },
  { year: '2023', event: 'Sign Attestation with HIKVISION' },
  { year: '2024', event: 'system installation automatic supression a gas(IG55) at the campost Douala, installation of wall screen at ENEO Koumassi ' },
  { year: '2025', event: 'Rehabilitation of fire ditection system and smoke ventilation of SOFITEL LUXURY SIPOPO(Malabo) ' },
  { year: '2026', event: '150+ projects across Central Africa' },
]

const values = [
  { icon: ShieldCheck, title: 'Safety First', desc: 'Every decision starts with human safety. We never cut corners on compliance or quality.' },
  { icon: Award,       title: 'Excellence',   desc: 'We hold ourselves to international standards — NFPA, EN54, Reglementation APSAD and beyond.' },
  { icon: Users,       title: 'Partnership',  desc: 'We treat every client as a long-term partner, not a one-time transaction.' },
  { icon: Zap,         title: 'Innovation',   desc: 'Integrating the latest technologies to deliver smarter, more reliable systems.' },
]

export default function About() {
  return (
    <main className="overflow-x-hidden pt-20">

      {/* ── PAGE HERO ──────────────────────────────────────────────────────── */}
      <section className="relative py-28 bg-[#1A2332] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332] via-[#1A2332]/90 to-[#9B0012]/40" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#FF6B35] text-sm font-bold uppercase tracking-widest">Who We Are</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mt-4 mb-6 leading-tight">
            Built on Trust,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3001B] to-[#FF6B35]">
              Driven by Safety
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Since 2018, FIRE NETWORK EQUIPMENTS INGINEERING SARL has been Cameroon's most trusted partner
            for fire protection, network infrastructure, and integrated security systems.
          </p>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#E3001B] text-sm font-bold uppercase tracking-widest">Our Story</span>
              <h2 className="text-4xl font-black text-[#1A2332] mt-3 mb-6 leading-tight">
                9 years protecting what matters most
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  FIRE NETWORK EQUIPMENTS INGINEERING SARL was founded in Douala in 2018 by a team of electronic security engineers
                  who saw a gap in the market: buildings across Cameroon were being constructed
                  without adequate fire safety systems, putting lives and assets at risk.
                </p>
                <p>
                  Over the years, we've grown from a small fire-alarm contractor into a
                  full-service engineering firm covering fire detection, suppression, structured
                  network cabling, CCTV, and access control — serving hotels, hospitals, banks,
                  industrial plants, and government facilities.
                </p>
                <p>
                  Today, with over 60 active clients and 350+ completed installations across
                  Central Africa, FIRE NETWORK EQUIPMENTS INGINEERING SARL remains committed to one thing: making sure of people and properties
                   in Africa generally and Cameroon in partical .
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-[#E3001B] hover:bg-[#FF6B35] text-white font-bold px-7 py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Work With Us <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <img
                src={entreImg}
                alt="FIRE NETWORK EQUIPMENTS INGINEERING SARL office and operations"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl shadow-gray-200"
              />
              <div className="absolute -bottom-5 -left-5 bg-[#1A2332] rounded-2xl p-5 shadow-xl">
                <p className="text-[#FF6B35] text-3xl font-black">60+</p>
                <p className="text-gray-300 text-xs mt-1">Active Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#E3001B] text-sm font-bold uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-4xl font-black text-[#1A2332] mt-3">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#E3001B]/10 rounded-xl mb-5">
                  <Icon size={26} className="text-[#E3001B]" />
                </div>
                <h3 className="font-bold text-[#1A2332] text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#1A2332]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FF6B35] text-sm font-bold uppercase tracking-widest">Our Journey</span>
            <h2 className="text-4xl font-black text-white mt-3">Milestones That Define Us</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-10">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition-colors`}>
                      <p className="text-[#FF6B35] font-black text-xl mb-1">{year}</p>
                      <p className="text-gray-300 text-sm">{event}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="flex-shrink-0 w-5 h-5 bg-[#E3001B] rounded-full border-4 border-[#1A2332] ring-2 ring-[#E3001B]/40 z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#E3001B] text-sm font-bold uppercase tracking-widest">Our People</span>
            <h2 className="text-4xl font-black text-[#1A2332] mt-3">Meet the Team</h2>
            <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm leading-relaxed">
              Certified engineers, project managers, and technicians united by a shared commitment to safety and precision.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(({ name, role, img, desc }) => (
              <div key={name} className="group text-center">
                <div className="relative mb-5 inline-block">
                  <img
                    src={img}
                    alt={name}
                    className="w-40 h-40 rounded-2xl object-cover mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#E3001B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-bold text-[#1A2332] text-base">{name}</h3>
                <p className="text-[#E3001B] text-xs font-semibold uppercase tracking-wide mt-1 mb-2">{role}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-8">Certifications & Standards</p>
          <div className="flex flex-wrap justify-center gap-6">
            {['NFPA 72', 'NFPA 13', 'EN54', 'IEC 62305', 'Cisco Certified','APSAD'].map(cert => (
              <span
                key={cert}
                className="flex items-center gap-2 bg-white border border-gray-200 text-[#1A2332] font-bold text-sm px-5 py-3 rounded-xl shadow-sm"
              >
                <CheckCircle2 size={16} className="text-[#E3001B]" />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}