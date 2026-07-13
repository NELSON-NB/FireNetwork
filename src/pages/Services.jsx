import { Link } from 'react-router-dom'
import {
  ShieldCheck, Radio, Wifi, Camera, Zap, Wrench,
  ArrowRight, CheckCircle2, Phone,
  LockIcon,
  Shield
} from 'lucide-react'
import saveImg from '../assets/save.jpeg';
import savImg from '../assets/sav.jpeg';
import ronImg from '../assets/ron.jpeg';
import cabImg from '../assets/cab.jpeg';
import videImg from '../assets/vide.jpeg';
import entImg from '../assets/ent.jpeg';
import insImg from '../assets/ins.jpeg';
import excImg from '../assets/exc.jpeg';
import dorImg from '../assets/dor.jpg';
import alarmImg from '../assets/alarm.jpg';

const services = [
  {
    id: 'fire-detection',
    icon: ShieldCheck,
    title: 'Fire Detection Systems',
    tagline: 'Detect threats before they become disasters',
    img: saveImg,savImg,
    color: 'bg-red-600',
    features: [
      'Addressable & conventional fire alarm panels',
      'Smoke, heat, CO, and flame detectors',
      'Aspirating smoke detection (ASD/VESDA)',
      'Beam detectors for large open spaces',
      'Integrated sounders, strobes & voice evacuation',
      'Interface with BMS and suppression systems',
    ],
    desc: 'We design, supply, install, and commission fire detection systems tailored to your buildings specific risk profile — from small offices to large industrial complexes.',
  },
  {
    id: 'fire-suppression',
    icon: Zap,
    title: 'Fire automatic Suppression Systems',
    tagline: 'Automatic response when every second counts',
    img: ronImg,
    color: 'bg-orange-600',
    features: [
      'Wet & dry pipe sprinkler systems',
      'Pre-action systems for sensitive areas',
      'FM200 & CO₂ clean agent suppression',
      'Foam suppression for fuel/chemical areas',
      'Kitchen hood fire suppression',
      'Fire pump and water storage sizing',
    ],
    desc: 'From office buildings to data centers and fuel storage facilities, we engineer suppression systems that activate automatically and minimize collateral damage.',
  },
  {
    id: 'network-cabling',
    icon: Wifi,
    title: 'Network Cabling & Infrastructure',
    tagline: 'The backbone your connectivity depends on',
    img: cabImg,
    color: 'bg-blue-600',
    features: [
      'Cat6 / Cat6A structured cabling',
      'Single-mode & multi-mode fiber optic',
      'Server room / data center cabling',
      'Patch panel and cable management',
      'Network rack installation and labeling',
      'Cable certification and test reports',
    ],
    desc: 'Clean, certified, and future-ready structured cabling that underpins your entire IT and communication infrastructure.',
  },
  {
    id: 'cctv',
    icon: Camera,
    title: 'CCTV & Video Surveillance',
    tagline: 'Complete visibility, 24 hours a day',
    img: videImg,
    color: 'bg-slate-600',
    features: [
      'HD & 4K IP camera systems',
      'PTZ cameras for wide-area coverage',
      'NVR/DVR with remote access',
      'AI analytics: motion, intrusion, face detection',
      'Night vision and thermal cameras',
      'Cloud backup and local storage',
    ],
    desc: 'We design surveillance systems that give you total visibility across your property, accessible from any device, anywhere in the world.',
  },
  {
    id: 'access-control',
    icon: Radio,
    title: 'Access Control Systems',
    tagline: 'The right people in the right places',
    img: entImg,
    color: 'bg-emerald-600',
    features: [
      'RFID / smart card readers',
      'Biometric fingerprint & facial recognition',
      'Electric door locks and barriers',
      'Intercom and video door phones',
      'Zone-based access scheduling',
      'Audit trail and reporting',
    ],
    desc: 'Control who enters your premises, when, and where — with scalable access control systems that integrate with your existing security infrastructure.',
  },
   {
    id: 'extinction',
    icon: Zap,
    title: ' Equipement de lutte contre le Feu ',
    tagline: 'Automatic response when every second counts',
    img: excImg,
    color: 'bg-orange-600',
    features: [
      'Wet & dry pipe sprinkler systems',
      'Fire pump and water storage sizing',
      'Fire Extinguisher sales & Using Training'
    ],
    desc: 'From office buildings to data centers and fuel storage facilities, we engineer suppression systems that activate automatically and minimize collateral damage.',
  },
  {
    id: 'alarm intrusion',
    icon: LockIcon,
    title: ' Alarm Intrusion ',
    tagline: 'Safety and Protection focus',
    img: alarmImg,
    color: 'bg-orange-600',
    features: [
      'Motion dection, door/window sensors',
      'Connection to monitoring center and mobile alerts',
      'Link alarms to surveillance camaras'
    ],
    desc: 'We design and install professional intrusion alarm systems to protect homes, officies, and banking etablissment.',
  },
  {
    id: 'gate motorisation',
    icon: Shield,
    title: ' Gate Motorisation ',
    tagline: 'Security and Conveinience focus',
    img: dorImg,
    color: 'bg-orange-600',
    features: [
      'Motorizations for sliding gates',
      'Motorizations for Swing/Double leaf gates',
      'Remote contorl access, key fobs, and code pads',
      'Full servicing to ensure long-term reliabilty'
    ],
    desc: 'We provide the supply, installation and maintainance of automated gate systems for residential, commercial,  banking etablissment.Our solution improve security, conveinence and access control.',
  },
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'Maintenance & Inspection',
    tagline: 'Systems that stay ready when you need them',
    img: insImg,
    color: 'bg-purple-600',
    features: [
      'Annual and bi-annual service contracts',
      'NFPA / EN54 compliance inspections',
      'System testing and certification',
      'Fault-finding and emergency repair',
      '24/7 emergency call-out service',
      'Detailed service reports and records',
    ],
    desc: 'A fire system that hasnt been tested is a system you cant trust. Our maintenance contracts keep your systems compliant, functional, and ready.',
  },
]

export default function Services() {
  return (
    <main className="overflow-x-hidden pt-20">

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative py-28 bg-[#1A2332] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#FF6B35] text-sm font-bold uppercase tracking-widest">What We Offer</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mt-4 mb-6 leading-tight">
            End-to-End Safety &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3001B] to-[#FF6B35]">
              Technology Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
            Six specialized disciplines, one trusted partner. We handle every system
            from design to installation to ongoing maintenance.
          </p>
        </div>
      </section>

      {/* ── SERVICE CARDS ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map(({ id, icon: Icon, title, tagline, img, color, features, desc }, i) => (
            <div
              key={id}
              id={id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Image */}
              <div className={`relative ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/40">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className={`absolute -bottom-4 ${i % 2 !== 0 ? '-left-4' : '-right-4'} ${color} rounded-2xl p-4 shadow-xl`}>
                  <Icon size={28} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <span className="text-[#E3001B] text-xs font-bold uppercase tracking-widest">{tagline}</span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#1A2332] mt-2 mb-4">{title}</h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">{desc}</p>
                <ul className="space-y-3 mb-8">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#E3001B] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#E3001B] hover:bg-[#FF6B35] text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 text-sm"
                >
                  Request This Service <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#1A2332] to-[#243447] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-gray-400 mb-8 text-base leading-relaxed">
            Our engineers will assess your facility and recommend the right solution.
            Free site visit, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/237XXXXXXXXX?text=Hello!%20I%20need%20help%20choosing%20the%20right%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-7 py-4 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Phone size={18} /> WhatsApp an Engineer
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-7 py-4 rounded-xl transition-all duration-300"
            >
              Send an Enquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}