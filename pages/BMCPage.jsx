import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  HeartPulse,
  MapPin,
  MessageSquareText,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  ThermometerSun,
  Zap,
  ChevronDown,
  Languages,
} from "lucide-react";

const WHATSAPP_NUMBER = "6285817778911";

const DEFAULT_TEXT = `Hi Optima Labs team, I’d like to book a treatment.\n\n*Name:* \n*Location:* \n*Preferred time:* \n*Symptoms / Goals:* \n*Notes:* \n\nCould you please recommend the most suitable IV or treatment?`;

function buildWALink(text = DEFAULT_TEXT) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function BMCPage() {
  return (
    <div className='min-h-screen bg-[#dae2cb] text-slate-900 selection:bg-emerald-100/80'>
      <TopBar />
      <Header />
      <Hero />
      <USPs />
      <Optimizer />
      <FeaturedPackages />
      <Services />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <ContactCTA />
      <Footer />
      {/* <QuickBookDock /> */}
      <Schema />
    </div>
  );
}

/* --------------------------------- TopBar -------------------------------- */
function TopBar() {
  return (
    <div className='w-full bg-green-950 text-white'>
      <div className='max-w-6xl mx-auto px-4 py-2 text-xs sm:text-sm flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Clock className='h-4 w-4' />
          <span>Open 24/7 • In‑home medical concierge • Island‑wide</span>
        </div>
        <div className='hidden sm:flex items-center gap-2 opacity-90'>
          <Languages className='h-4 w-4' />
          <span>English / Bahasa</span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- Header -------------------------------- */
function Header() {
  return (
    <div className='sticky top-0 z-40 bg-[#dae2cb] backdrop-blur'>
      <div className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='w-8'>
            <img src='/OptimaLabsLogo.png' />
          </div>
          <span className='font-medium tracking-tight'>Optima Labs</span>
        </div>
        <nav className='hidden md:flex items-center gap-6 text-sm text-green-950'>
          <a href='#optimize' className='hover:text-green-700'>
            Optimize You
          </a>
          <a href='#packages' className='hover:text-green-700'>
            Pricing
          </a>
          <a href='#services' className='hover:text-green-700'>
            Services
          </a>
          <a href='#how' className='hover:text-green-700'>
            How it works
          </a>
          <a href='#faq' className='hover:text-green-700'>
            FAQ
          </a>
        </nav>
        <a
          href={buildWALink()}
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm shadow-sm'
        >
          <PhoneCall className='h-4 w-4' /> WhatsApp Now
        </a>
      </div>
    </div>
  );
}

/* --------------------------------- Hero --------------------------------- */

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Stagger delay
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

function Hero() {
  return (
    <header className='relative w-full h-[90vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden text-white'>
      {/* Background & Overlay */}
      <div className='absolute inset-0 bg-slate-900 -z-10' />
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.17, 0.67, 0.3, 0.98] }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1800&auto=format&fit=crop')] bg-cover bg-center"
        style={{ backgroundAttachment: "fixed" }}
      />
      <div className='absolute inset-0 bg-black/40' />

      {/* Animated Content */}
      <motion.div
        initial='hidden'
        animate='visible'
        className='relative z-10 max-w-3xl mx-auto px-4 sm:px-8 flex flex-col items-center gap-4 sm:gap-6'
      >
        <motion.p
          custom={0}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className='text-xs sm:text-sm uppercase tracking-widest text-white/60'
        >
          Your Sanctuary for Wellness
        </motion.p>

        <motion.h1
          custom={1}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className='text-4xl sm:text-5xl md:text-7xl leading-tight tracking-[0.02em]'
        >
          Feel Better, Faster.
          <br className='hidden sm:block' />
          <span className='sm:hidden'> </span>
          24/7 In‑Home Medical Care.
        </motion.h1>

        <motion.p
          custom={2}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className='text-base sm:text-lg text-white/80 leading-relaxed sm:leading-8 max-w-2xl px-2'
        >
          IV therapy, vitamin injections & rapid relief delivered to your villa,
          hotel, or home by licensed nurses.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full px-4'
        >
          <motion.a
            href={buildWALink()}
            target='_blank'
            rel='noreferrer'
            whileHover={buttonHover}
            className='w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base shadow-sm hover:bg-emerald-700/50 transition-colors backdrop-blur hover:backdrop-blur-md'
          >
            <MessageSquareText className='h-4 w-4 sm:h-5 sm:w-5' />
            Book via WhatsApp
          </motion.a>

          <motion.a
            href='#services'
            whileHover={buttonHover}
            className='w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/60 text-white/90 rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base hover:bg-white/5 transition-colors'
          >
            View Services
          </motion.a>
        </motion.div>
      </motion.div>
    </header>
  );
}

/* ---------------------------------- USPs -------------------------------- */

const STAGGER_CHILD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function USPs() {
  const items = [
    {
      icon: Clock,
      title: "24/7 Availability",
      desc: "Anytime, anywhere in Bali — we come to you.",
    },
    {
      icon: ShieldCheck,
      title: "Licensed Nurses",
      desc: "STR/SIPP‑verified team with audited SOPs.",
    },
    {
      icon: Stethoscope,
      title: "Doctor Oversight",
      desc: "Prescription services require MD approval.",
    },
    {
      icon: Sparkles,
      title: "Premium & Discreet",
      desc: "Medical‑grade vitamins, sterile setup, privacy‑first.",
    },
  ];

  return (
    <section className='mx-auto px-8 lg:px-24 py-12 '>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'
      >
        {items.map((it, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={STAGGER_CHILD_VARIANTS}
            className='flex items-start gap-4 p-6 rounded-card bg-bone/5 border border-misty/20 backdrop-blur-sm'
          >
            <it.icon className='h-6 w-6 text-olive mt-1 flex-shrink-0' />
            <div>
              <h3 className='font-medium text-base text-bone'>{it.title}</h3>
              <p className='text-sm text-bone/70 leading-relaxed mt-1'>
                {it.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ---------------------------- Optimizer Picker --------------------------- */

function Optimizer() {
  const options = [
    { k: "LETHARGIC", icon: Zap },
    { k: "NAUSEA", icon: ThermometerSun },
    { k: "GUT ISSUES", icon: HeartPulse },
    { k: "STRESSED", icon: HeartPulse },
    { k: "TIRED", icon: Zap },
    { k: "SKIN ISSUES", icon: Syringe },
    { k: "BRAIN FOG", icon: Zap },
    { k: "INJURED", icon: ThermometerSun },
    { k: "JET LAG", icon: Clock },
    { k: "HUNGOVER", icon: ThermometerSun },
    { k: "DEHYDRATED", icon: ThermometerSun },
    { k: "INFLAMMATION", icon: ThermometerSun },
  ];

  const [selected, setSelected] = useState([]);
  const [area, setArea] = useState("");
  const [time, setTime] = useState("");

  const text = useMemo(() => {
    return `Hi Optima Labs team, I’d like to book a treatment.\n\n*Name:* ____\n*Location:* ${
      area || "____"
    }\n*Preferred time:* ${time || "____"}\n*Symptoms / Goals:* ${
      selected.length ? selected.join(", ") : "____"
    }\n*Notes:* ____\n\nCould you please recommend the most suitable IV or treatment?`;
  }, [selected, area, time]);

  return (
    <section id='optimize' className='bg-[#dae2cb] '>
      <div className='max-w-6xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* Left Side - Placeholder Image */}
        <motion.div
          custom={0}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className='w-full h-[400px] lg:h-[500px] rounded-2xl bg-green-900/10 border border-green-200 flex items-center justify-center overflow-hidden'
        >
          <div className='text-green-700 text-sm tracking-wide '>
            <img src='https://images.unsplash.com/photo-1488228469209-c141f8bcd723?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <div>
          {/* Title */}
          <motion.h2
            custom={1}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className='text-3xl md:text-4xl text-green-950'
          >
            How can we optimize you today?
          </motion.h2>

          <motion.p
            custom={2}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className='text-green-800 mt-2 text-lg'
          >
            Tap any that apply — we’ll tailor your treatment.
          </motion.p>

          {/* Symptom Buttons */}
          <motion.div
            custom={3}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className='mt-6 grid sm:grid-cols-2 gap-3'
          >
            {options.map(({ k, icon: Icon }) => {
              const active = selected.includes(k);
              return (
                <button
                  key={k}
                  onClick={() =>
                    setSelected((s) =>
                      s.includes(k) ? s.filter((i) => i !== k) : [...s, k]
                    )
                  }
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all ${
                    active
                      ? "border-green-700 bg-green-100 text-green-900 shadow-sm"
                      : "border-green-200 bg-white text-green-800 hover:bg-green-50"
                  }`}
                >
                  <Icon className='h-4 w-4' /> {k}
                </button>
              );
            })}
          </motion.div>

          {/* Inputs + Submit */}
          <motion.div
            custom={4}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className='mt-8 grid sm:grid-cols-2 gap-3'
          >
            {/* Area */}
            <div className='flex items-center gap-2 border border-green-200 rounded-lg px-3 py-2 bg-white'>
              <MapPin className='h-4 w-4 text-green-700' />
              <input
                placeholder='Area (e.g., Canggu) or paste Google Maps pin'
                className='w-full outline-none text-sm bg-transparent'
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>

            {/* Time */}
            <div className='flex items-center gap-2 border border-green-200 rounded-lg px-3 py-2 bg-white'>
              <Clock className='h-4 w-4 text-green-700' />
              <input
                placeholder='Preferred time today'
                className='w-full outline-none text-sm bg-transparent'
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </motion.div>

          {/* Submit */}
          <motion.div
            custom={5}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className='mt-4'
          >
            <a
              href={buildWALink(text)}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm shadow-sm'
            >
              Submit via WhatsApp <ArrowRight className='h-4 w-4' />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Featured Packages --------------------------- */
function FeaturedPackages() {
  const pkgs = [
    {
      title: "Bali Belly Rapid Relief",
      price: 2190000,
      points: ["Hydration", "Anti‑nausea & stomach protector", "Probiotics"],
      tag: "Most booked",
      icon: ThermometerSun,
    },
    {
      title: "NAD+ Anti‑Aging IV (250mg)",
      price: 3390000,
      points: [
        "Cellular energy",
        "Repair & longevity support",
        "Doctor‑overseen",
      ],
      tag: "Advanced",
      icon: Sparkles,
    },
    {
      title: "Super Immune Booster",
      price: 2440000,
      points: ["High‑dose Vitamin C", "Antioxidants", "B‑complex & Zinc"],
      tag: "Immunity",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id='packages' className='bg-[#f7f2ee] border-t border-[#e7e0db]'>
      <div className='max-w-6xl mx-auto px-4 py-20'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            custom={0}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className='text-center mb-16'
          >
            <span className='text-[#8c7662] font-medium tracking-wide text-sm mb-3 block'>
              FEATURED PACKAGES
            </span>
            <h2 className='text-3xl md:text-[2.5rem] leading-tight font-medium text-[#2c1810] mb-4 tracking-tight'>
              Popular Treatments
            </h2>
            <p className='text-[#594a42] max-w-xl mx-auto text-lg'>
              Tailored for rapid relief and optimal wellness
            </p>
          </motion.div>

          <motion.div
            custom={1}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className='grid md:grid-cols-3 gap-8'
          >
            {pkgs.map((p, i) => (
              <motion.div
                key={i}
                custom={i + 2}
                variants={STAGGER_CHILD_VARIANTS}
                className='group bg-[#ffffff] rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl'
              >
                <div className='px-8 pt-8 pb-6'>
                  <div className='mb-6'>
                    <span className='inline-block text-xs font-medium px-3 py-1 rounded-full bg-[#f7f2ee] text-[#8c7662]'>
                      {p.tag}
                    </span>
                  </div>
                  <h3 className='text-xl font-medium text-[#2c1810] mb-2'>
                    {p.title}
                  </h3>
                  <div className='text-2xl font-medium text-[#594a42] mb-6'>
                    {formatIDR(p.price)}
                  </div>

                  <ul className='space-y-3 text-[#594a42] mb-8'>
                    {p.points.map((pt, idx) => (
                      <li key={idx} className='flex items-center gap-3'>
                        <div className='text-[#8c7662]'>
                          <p.icon className='h-4 w-4' />
                        </div>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={buildWALink(
                    `Hi Optima Labs, I want to book: ${p.title}. My location: ____. Preferred time: ____.`
                  )}
                  target='_blank'
                  rel='noreferrer'
                  className='block w-full py-4 text-center bg-[#2c1810] hover:bg-[#1a0d09] text-white font-medium transition-colors'
                >
                  Book This Package
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------- Services ------------------------------- */
function Services() {
  const services = [
    {
      title: "Essential Hydration",
      price: 600000,
      desc: "Fluids + electrolytes",
    },
    {
      title: "Hangover Recovery",
      price: 1860000,
      desc: "Hydration + B‑complex + anti‑nausea",
    },
    {
      title: "Bali Belly Relief",
      price: 2190000,
      desc: "Hydration + anti‑cramp + gut support",
    },
    {
      title: "Immunity Boost",
      price: 2075000,
      desc: "Vitamin C, Zinc, B‑complex",
    },
    {
      title: "NAD+ IV (250mg)",
      price: 3390000,
      desc: "Cellular energy & longevity",
    },
    {
      title: "Dengue Recovery",
      price: 1650000,
      desc: "Vitals + blood test + RL 1000ml + B‑complex",
    },
    {
      title: "STD/STI Rapid Panel",
      price: 1200000,
      desc: "Discreet in‑villa testing",
    },
    {
      title: "Vitamin Shots",
      price: 200000,
      desc: "B12 / D3 / L‑Carnitine / Glutathione",
    },
  ];
  return (
    <section id='services' className='bg-white border-t border-gray-100'>
      <div className='max-w-6xl mx-auto px-4 py-16'>
        <div className='text-center mb-14'>
          <h2 className='text-3xl md:text-[2.5rem] leading-tight font-medium text-[#2c1810] mb-4 tracking-tight'>
            Services & Pricing
          </h2>
          <p className='text-[#594a42] max-w-xl mx-auto text-lg'>
            Mobile treatments delivered to your location
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((s, i) => (
            <ServiceRow key={i} title={s.title} price={s.price} desc={s.desc} />
          ))}
        </div>

        <div className='mt-10 text-center'>
          <a
            href={buildWALink()}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm shadow-sm'
          >
            Book via WhatsApp <ArrowRight className='h-4 w-4 ml-1' />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ How it Works ----------------------------- */
function HowItWorks() {
  const steps = [
    {
      title: "Message us on WhatsApp",
      desc: "Send name + location pin + service",
      icon: MessageSquareText,
    },
    {
      title: "Quick Consent Form",
      desc: "We confirm price & dispatch a nurse",
      icon: ArrowRight,
    },
    {
      title: "Treatment Begins",
      desc: "Sterile setup. Pay cash or transfer",
      icon: HeartPulse,
    },
  ];

  return (
    <section id='how' className='bg-[#2c1810] text-white'>
      {/* Kontainer utama dengan layout flex untuk desktop */}
      <div className='lg:flex'>
        {/* Kolom Kiri: Konten Teks (3/5) */}
        <div className='lg:w-1/2'>
          <div className='mx-auto max-w-2xl px-6 py-24 sm:px-8 lg:px-12'>
            <div className='text-center lg:text-left mb-8'>
              <span className='block text-sm font-medium tracking-wide text-[#8c7662] mb-3'>
                BOOKING PROCESS
              </span>
              <h2 className='text-3xl font-medium leading-tight tracking-tight md:text-[2.5rem] mb-4'>
                60 Second Booking Flow
              </h2>
              <p className='mx-auto max-w-xl text-lg text-[#8c7662] lg:mx-0'>
                Simple three-step process for your convenience
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-12 relative'>
              {steps.map((step, i) => (
                <div
                  key={i}
                  className='group relative text-center md:text-left'
                >
                  <div className='mb-8'>
                    <span className='inline-block text-3xl font-medium tracking-tight text-[#8c7662] mb-2'>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className='text-2xl font-medium tracking-tight mb-3'>
                      {step.title}
                    </h3>
                    <p className='text-lg leading-relaxed text-[#8c7662]'>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-16 text-center lg:text-left'>
              <a
                href={buildWALink()}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm text-white shadow-sm hover:bg-emerald-700'
              >
                Start Your Booking <ArrowRight className='h-5 w-5' />
              </a>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Gambar (2/5) */}
        <div className='lg:w-1/2'>
          <img
            src='https://images.unsplash.com/photo-1658081717736-ef4f67f41915?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Booking process illustration'
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Reviews -------------------------------- */
function Reviews() {
  const items = [
    {
      quote:
        "Came to my villa and fixed me up — incredible service and attention to detail. Would highly recommend!",
      name: "Alex Thompson",
      location: "Los Angeles, USA",
    },
    {
      quote:
        "Very professional team, excellent communication, and the treatment made me feel amazing after.",
      name: "Sarah Chen",
      location: "Singapore",
    },
    {
      quote:
        "Fast, discreet, and friendly. Perfect for our hotel guests who need immediate care.",
      name: "Made Wijaya",
      location: "Canggu, Bali",
    },
  ];
  return (
    <section className='bg-[#0f2e15] '>
      <div className='max-w-7xl mx-auto px-6 py-24 sm:py-32'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-medium tracking-tight text-white'>
            What Our Clients Say
          </h2>
          <p className='text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-8'>
            Trusted by travellers across Bali — service that arrives, cares, and
            restores.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {items.map((t, i) => (
            <figure key={i} className='border border-white p-8 flex flex-col'>
              <blockquote className='text-white text-lg leading-relaxed flex-grow'>
                “{t.quote}”
              </blockquote>
              <figcaption className='mt-6'>
                <div className='font-semibold text-white'>{t.name}</div>
                <div className='text-sm text-gray-400 mt-1'>{t.location}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- FAQ --------------------------------- */
function FAQ() {
  const faqs = [
    {
      q: "How fast can you arrive?",
      a: "In popular areas (Canggu, Seminyak, Uluwatu, Ubud) we typically dispatch within 60–90 minutes, 24/7.",
    },
    {
      q: "Do you serve all of Bali?",
      a: "Yes — island‑wide. Travel fees may apply for remote locations; we’ll confirm on WhatsApp.",
    },
    {
      q: "Who administers treatments?",
      a: "Licensed nurses with MD oversight. Prescription services require doctor approval and informed consent.",
    },
    {
      q: "How long does a drip take?",
      a: "Most IV treatments run 45–90 minutes depending on your protocol.",
    },
    {
      q: "What payments do you accept?",
      a: "Cash, Indonesian bank transfer, and secure card payments via link. Receipts provided.",
    },
  ];
  return (
    <section
      id='faq'
      className='w-full bg-[#0f2e15] text-[rgb(252,254,239)] '
      aria-label='FAQ'
    >
      <div className='max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 pb-36'>
        {/* LEFT: Header */}
        <div className='flex flex-col justify-start'>
          <div className='leading-none'>
            {/* "Frequently" */}
            <h2
              className='text-[42px] md:text-[56px] lg:text-[64px] font-[InstrumentSans]'
              style={{ letterSpacing: "-0.05em", lineHeight: "110%" }}
            >
              <span style={{ whiteSpace: "nowrap", display: "inline-block" }}>
                Frequently
              </span>
              <br />
              <span
                className='italic'
                style={{
                  color: "rgb(250,253,135)",
                  fontFamily: "'Playfair Display', serif",
                  display: "inline-block",
                }}
              >
                asked
              </span>{" "}
              <span style={{ display: "inline-block" }}>questions</span>
            </h2>
          </div>

          <p className='mt-6 text-base max-w-sm text-[rgb(252,254,239)]/90'>
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* RIGHT: FAQ list */}
        <div className='flex flex-col justify-start'>
          <div className='w-full'>
            {faqs.map((item, idx) => {
              const isLast = idx === faqs.length - 1;
              return (
                <details
                  key={idx}
                  className='w-full border-b border-yellow-300'
                  // keep closed by default; users can open
                >
                  <summary
                    className='flex items-center justify-between px-6 py-6 cursor-pointer list-none outline-none'
                    tabIndex={0}
                    style={{
                      color: "rgb(252,254,239)",
                      // border-bottom handled by wrapper below to match framer file
                    }}
                  >
                    <p className='m-0 text-lg md:text-xl leading-tight'>
                      {item.q}
                    </p>

                    {/* arrow */}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='rgb(252,254,239)'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='h-6 w-6 transition-transform duration-150'
                      aria-hidden
                      style={{
                        transformOrigin: "center",
                      }}
                    >
                      <polyline points='6 9 12 15 18 9' />
                    </svg>
                  </summary>
                  <div
                    className='w-full'
                    style={{
                      height: 1,
                      marginTop: 0,
                    }}
                  />
                  <div className='px-6 pb-4 text-[rgb(252,254,239)]/80 text-base'>
                    {item.a}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Contact CTA ------------------------------ */
function ContactCTA() {
  return (
    <section className='border-t border-slate-200'>
      <div className='max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center'>
        <div>
          <h2 className='text-4xl font-semibold'>Get in touch</h2>
          <p className='text-slate-600 mt-1 text-xl'>
            We’ll guide you through the steps and dispatch a nurse to your
            villa, hotel, or home.
          </p>
          <ul className='mt-4 text-sm text-slate-700 space-y-1'>
            <li className='flex items-center gap-2'>
              <PhoneCall className='h-4 w-4' /> WhatsApp:{" "}
              <a
                className='underline'
                href={buildWALink()}
                target='_blank'
                rel='noreferrer'
              >
                Message us
              </a>
            </li>
            <li className='flex items-center gap-2'>
              <MapPin className='h-4 w-4' /> Island‑wide • Bali, Indonesia
            </li>
            <li className='flex items-center gap-2'>
              <Clock className='h-4 w-4' /> 24/7 dispatch
            </li>
          </ul>
        </div>
        <div
          className='rounded-2xl border border-slate-200 overflow-hidden bg-cover bg-center'
          aria-label='Calm Bali villa setting'
        >
          <img src='/manwithiv.png' />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Footer -------------------------------- */
function Footer() {
  return (
    <footer className='border-t border-slate-200'>
      <div className='max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
        <div>
          <div className='font-semibold'>Optima Labs</div>
          <div className='text-slate-600 text-sm'>
            24/7 in‑home care • WhatsApp‑first • Licensed • Doctor‑overseen
          </div>
        </div>
        <a
          href={buildWALink()}
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-black text-white px-5 py-3'
        >
          <PhoneCall className='h-4 w-4' /> WhatsApp Now
        </a>
      </div>
    </footer>
  );
}

/* ---------------------------- Quick Book Dock ---------------------------- */
function QuickBookDock() {
  return (
    <div className='fixed inset-x-0 bottom-0 z-50'>
      <div className='max-w-6xl mx-auto px-4 pb-4'>
        <div className='rounded-2xl shadow-lg border border-slate-200 bg-white px-4 py-3 flex items-center justify-between'>
          <div className='text-sm text-slate-700 hidden sm:block'>
            Need help now? <b>24/7 dispatch</b> across Bali.
          </div>
          <a
            href={buildWALink()}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 text-sm'
          >
            <MessageSquareText className='h-4 w-4' /> Book on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- Utilities ------------------------------ */
function formatIDR(num) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(num);
}

function ServiceRow({ title, price, desc }) {
  return (
    <div className='bg-gray-50 rounded-lg p-5 hover:shadow-sm transition-shadow'>
      <div className='flex items-baseline justify-between mb-2'>
        <h3 className='font-medium text-lg text-gray-900'>{title}</h3>
        <div className='text-emerald-600 font-semibold'>{formatIDR(price)}</div>
      </div>
      <div className='text-gray-600'>{desc}</div>
    </div>
  );
}

/* --------------------------------- Schema -------------------------------- */
function Schema() {
  const json = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Optima Labs",
    "areaServed": "Bali, Indonesia",
    "sameAs": [buildWALink()],
    "telephone": WHATSAPP_NUMBER,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        "opens": "00:00",
        "closes": "23:59",
      },
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Bali Belly Rapid Relief",
        "priceCurrency": "IDR",
        "price": 2190000,
      },
      {
        "@type": "Offer",
        "name": "NAD+ Anti‑Aging IV (250mg)",
        "priceCurrency": "IDR",
        "price": 3390000,
      },
      {
        "@type": "Offer",
        "name": "Super Immune Booster",
        "priceCurrency": "IDR",
        "price": 2440000,
      },
    ],
  };
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
