import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'

const WHATSAPP_NUMBER = '+237695493594'
const WHATSAPP_MSG = encodeURIComponent('Hello FIRE NETWORK! I would like to discuss a project.')

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Office',
    lines: ['Akwa Business District', 'Douala, Cameroon'],
  },
  {
    icon: Phone,
    title: 'Phone & WhatsApp',
    lines: ['(237)  675 157 569', '(+237) 695 493 594'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['contact@fne-ingineering.com', 'e.fokem@fne-ingineering.com', 'fneingineering18@gmail.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon – Fri: 7:30am – 6:00pm', 'Emergency: 24/7'],
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  // Sends form content via WhatsApp
  const handleSubmit = () => {
    if (!form.name || !form.message) return
    const text = encodeURIComponent(
      `Hello FIRE NETWORK ! 👋\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <main className="overflow-x-hidden pt-20">

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-[#1A2332] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <span className="text-[#FF6B35] text-sm font-bold uppercase tracking-widest">Reach Out</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mt-4 mb-5 leading-tight">
            Let's Build Something<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3001B] to-[#FF6B35]">
              Safe Together
            </span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Get in touch for a free site assessment, project quote, or just to ask a question.
            We respond within 2 hours during business hours.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#E3001B]/10 rounded-xl mb-4">
                  <Icon size={22} className="text-[#E3001B]" />
                </div>
                <h3 className="font-bold text-[#1A2332] text-sm mb-3">{title}</h3>
                {lines.map(line => (
                  <p key={line} className="text-gray-500 text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + MAP ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-gray-100 border border-gray-100">
              <h2 className="text-2xl font-black text-[#1A2332] mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-8">
                Fill the form below — it opens WhatsApp with your message pre-filled for the fastest response.
              </p>

              <div className="space-y-5">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#E3001B] focus:ring-2 focus:ring-[#E3001B]/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#E3001B] focus:ring-2 focus:ring-[#E3001B]/10 transition-all"
                    />
                  </div>
                </div>

                {/* Phone + Service */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+237 6XX XXX XXX"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#E3001B] focus:ring-2 focus:ring-[#E3001B]/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#E3001B] focus:ring-2 focus:ring-[#E3001B]/10 transition-all"
                    >
                      <option value="">Select a service…</option>
                      <option>Fire Detection</option>
                      <option>Fire Suppression</option>
                      <option>Network Cabling</option>
                      <option>CCTV & Surveillance</option>
                      <option>Access Control</option>
                      <option>Maintenance Contract</option>
                      <option>Other / Multiple</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your project, building type, or question…"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#E3001B] focus:ring-2 focus:ring-[#E3001B]/10 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center gap-3 bg-[#E3001B] hover:bg-[#FF6B35] text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] text-base shadow-lg shadow-red-200"
                >
                  {sent ? (
                    <><CheckCircle2 size={20} /> Sent via WhatsApp!</>
                  ) : (
                    <><Send size={18} /> Send via WhatsApp</>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  Clicking the button will open WhatsApp with your message pre-filled.
                </p>
              </div>
            </div>

            {/* Map + Direct WhatsApp */}
            <div className="flex flex-col gap-6">
              {/* Google Maps embed — Douala, Cameroon */}
              <div className="flex-1 rounded-3xl overflow-hidden shadow-xl border border-gray-100 min-h-[350px]">
                <iframe
                  title="FIRENET Office Location - Douala, Cameroon"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127525.81098792!2d9.654827!3d4.061536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d3c3f01ff7b%3A0x7e7a1aec42d10e48!2sDouala%2C%20Cameroon!5e0!3m2!1sen!2scm!4v1700000000000!5m2!1sen!2scm"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '350px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Direct WhatsApp CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 bg-[#1A2332] hover:bg-[#243447] rounded-2xl p-6 border border-white/5 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-base">Chat directly on WhatsApp</p>
                  <p className="text-gray-400 text-sm mt-0.5">Average response time: under 30 minutes</p>
                </div>
                <div className="ml-auto text-gray-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}