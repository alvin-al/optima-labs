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

/**
 * BMC — Bali Medical Concierge (v3)
 * Human+ inspired, but 100% original UX & copy. WhatsApp-first, conversion-focused.
 * Tailwind CSS + lucide-react + framer-motion
 * ------------------------------------------------------------
 * Highlights:
 * - Sticky Quick‑Book bar (mobile & desktop)
 * - "How can we optimize you today?" symptom picker that pre-fills WhatsApp
 * - 24/7 in‑home care positioning, licensed nurses, MD oversight
 * - Featured packages + transparent pricing
 * - FAQ accordions, trust badges, testimonials
 * - JSON‑LD for local SEO
 *
 * Setup:
 * 1) Replace WHATSAPP_NUMBER with your E.164 number (e.g., 6281234567890)
 * 2) Optional: tune default copy and pricing in data objects below
 */

const WHATSAPP_NUMBER = "6285817778911"; // e.g., 6281234567890

const DEFAULT_TEXT = `Hi BMC, I'd like to book an in‑villa treatment.\nName: ____\nLocation pin: ____\nArea (Canggu/Seminyak/Ubud/Uluwatu/Other): ____\nSymptoms/Goals: ____\nService (if known): ____\nPreferred time today: ____\nNotes: ____`;

function buildWALink(text = DEFAULT_TEXT) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function BMCPage() {
  return (
    <div className='min-h-screen bg-white text-slate-900 selection:bg-emerald-100/80'>
      <TopBar />
      <Header />
      <Hero />
      <USPs />
      <Optimizer />
      {/*  <FeaturedPackages />
      <Services />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <ContactCTA />
      <Footer />
      <QuickBookDock />
      <Schema /> */}
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
    <div className='sticky top-0 z-40 bg-[#dae2cb] backdrop-blur border-b border-slate-100'>
      <div className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Sparkles className='h-5 w-5 text-green-950' />
          <span className='font-semibold tracking-tight'>
            BMC — Bali Medical Concierge
          </span>
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
// function Hero() {
//   return (
//     <header
//       className='relative min-h-[100svh] isolate overflow-hidden'
//       aria-label='Home medical care in Bali'
//     >
//       {/* Fullscreen background */}
//       <div className='absolute inset-0 -z-10'>
//         <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
//         <div className='absolute inset-0 bg-black/40' />
//       </div>

//       {/* Content */}
//       <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-24 sm:py-32 flex items-center'>
//         <div className='max-w-3xl space-y-6 text-white'>
//           <motion.h1
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className='text-4xl sm:text-6xl font-semibold leading-tight tracking-tight'
//           >
//             Feel better, faster.
//           </motion.h1>

//           <p className='text-lg sm:text-xl/relaxed text-white/80 max-w-xl'>
//             24/7 in-home IV therapy, vitamin shots & rapid relief. Licensed
//             nurses come to your villa, hotel, or home.
//           </p>

//           <div className='pt-2'>
//             <a
//               href={buildWALink()}
//               target='_blank'
//               rel='noreferrer'
//               className='inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur px-6 py-3 text-base text-white'
//             >
//               <MessageSquareText className='h-5 w-5' />
//               Book on WhatsApp
//               <ArrowRight className='h-4 w-4' />
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

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
    <header className='relative w-full h-[90vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden text-white'>
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
        className='relative z-10 max-w-3xl mx-auto px-8 flex flex-col items-center gap-6'
      >
        <motion.p
          custom={0}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className='text-sm uppercase tracking-widest text-white/60'
        >
          Your Sanctuary for Wellness
        </motion.p>

        <motion.h1
          custom={1}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className='text-6xl md:text-7xl leading-tight tracking-[0.02em]'
        >
          Feel Better, Faster.
          <br />
          24/7 In‑Home Medical Care.
        </motion.h1>

        <motion.p
          custom={2}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className='text-lg text-white/80 leading-8 max-w-2xl'
        >
          IV therapy, vitamin injections & rapid relief delivered to your villa,
          hotel, or home by licensed nurses.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'
        >
          <motion.a
            href={buildWALink()}
            target='_blank'
            rel='noreferrer'
            whileHover={buttonHover}
            className='inline-flex items-center justify-center gap-2 bg-white/10 text-white rounded-full px-8 py-3 text-base shadow-sm hover:bg-emerald-700/50 transition-colors backdrop-blur hover:backdrop-blur-md'
          >
            <MessageSquareText className='h-5 w-5' />
            Book via WhatsApp
          </motion.a>

          <motion.a
            href='#services'
            whileHover={buttonHover}
            className='inline-flex items-center justify-center gap-2 border border-white/60 text-white/90 rounded-full px-8 py-3 text-base hover:bg-white/5 transition-colors'
          >
            View Services
          </motion.a>
        </motion.div>
      </motion.div>
    </header>
  );
}

/* ---------------------------------- USPs -------------------------------- */
// function USPs() {
//   const items = [
//     {
//       icon: Clock,
//       title: "24/7 Availability",
//       desc: "Anytime, anywhere in Bali — we come to you.",
//     },
//     {
//       icon: ShieldCheck,
//       title: "Licensed Nurses",
//       desc: "STR/SIPP‑verified team with audited SOPs.",
//     },
//     {
//       icon: Stethoscope,
//       title: "Doctor Oversight",
//       desc: "Prescription services require MD approval.",
//     },
//     {
//       icon: Sparkles,
//       title: "Premium & Discreet",
//       desc: "Medical‑grade vitamins, sterile setup, privacy‑first.",
//     },
//   ];
//   return (
//     <section className='border-t border-slate-200'>
//       <div className='max-w-6xl mx-auto px-4 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
//         {items.map((it, i) => (
//           <div
//             key={i}
//             className='flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-200'
//           >
//             <it.icon className='h-5 w-5 text-emerald-600 mt-0.5' />
//             <div>
//               <div className='text-sm font-semibold'>{it.title}</div>
//               <div className='text-sm text-slate-600'>{it.desc}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// Varian animasi untuk elemen yang muncul berurutan (staggered)
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
    <section className='max-w-[1200px] mx-auto px-8 py-24'>
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
// function Optimizer() {
//   const options = [
//     { k: "LETHARGIC", icon: Zap },
//     { k: "NAUSEA", icon: ThermometerSun },
//     { k: "GUT ISSUES", icon: HeartPulse },
//     { k: "STRESSED", icon: HeartPulse },
//     { k: "TIRED", icon: Zap },
//     { k: "SKIN ISSUES", icon: Syringe },
//     { k: "BRAIN FOG", icon: Zap },
//     { k: "INJURED", icon: ThermometerSun },
//     { k: "JET LAG", icon: Clock },
//     { k: "HUNGOVER", icon: ThermometerSun },
//     { k: "DEHYDRATED", icon: ThermometerSun },
//     { k: "INFLAMMATION", icon: ThermometerSun },
//   ];
//   const [selected, setSelected] = useState([]);
//   const [area, setArea] = useState("");
//   const [time, setTime] = useState("");

//   const text = useMemo(() => {
//     const base = `Hi BMC, I need help.\nArea: ${
//       area || "____"
//     }\nPreferred time: ${time || "____"}\nSymptoms/Goals: ${
//       selected.length ? selected.join(", ") : "____"
//     }\nPlease advise the best treatment.`;
//     return base;
//   }, [selected, area, time]);

//   return (
//     <section id='optimize' className='border-t border-slate-200 bg-slate-50'>
//       <div className='max-w-6xl mx-auto px-4 py-10'>
//         <h2 className='text-2xl font-semibold'>
//           How can we optimize you today?
//         </h2>
//         <p className='text-slate-600 mt-1'>
//           Tap any that apply — we’ll tailor your treatment.
//         </p>
//         <div className='mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
//           {options.map(({ k, icon: Icon }) => {
//             const active = selected.includes(k);
//             return (
//               <button
//                 key={k}
//                 onClick={() =>
//                   setSelected((s) =>
//                     s.includes(k) ? s.filter((i) => i !== k) : [...s, k]
//                   )
//                 }
//                 className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${
//                   active
//                     ? "border-emerald-600 bg-emerald-50"
//                     : "border-slate-200 bg-white hover:bg-slate-50"
//                 }`}
//               >
//                 <Icon className='h-4 w-4' /> {k}
//               </button>
//             );
//           })}
//         </div>
//         <div className='mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
//           <div className='flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2'>
//             <MapPin className='h-4 w-4 text-slate-500' />
//             <input
//               placeholder='Area (e.g., Canggu) or paste Google Maps pin'
//               className='w-full outline-none text-sm'
//               value={area}
//               onChange={(e) => setArea(e.target.value)}
//             />
//           </div>
//           <div className='flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2'>
//             <Clock className='h-4 w-4 text-slate-500' />
//             <input
//               placeholder='Preferred time today'
//               className='w-full outline-none text-sm'
//               value={time}
//               onChange={(e) => setTime(e.target.value)}
//             />
//           </div>
//           <a
//             href={buildWALink(text)}
//             target='_blank'
//             rel='noreferrer'
//             className='inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-sm'
//           >
//             Submit via WhatsApp <ArrowRight className='h-4 w-4' />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

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
    return `Hi BMC, I need help.\nArea: ${area || "____"}\nPreferred time: ${
      time || "____"
    }\nSymptoms/Goals: ${
      selected.length ? selected.join(", ") : "____"
    }\nPlease advise the best treatment.`;
  }, [selected, area, time]);

  return (
    <section id='optimize' className='bg-[#dae2cb] border-t border-green-900'>
      <div className='max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* Left Side - Placeholder Image */}
        <motion.div
          custom={0}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className='w-full h-[400px] lg:h-[500px] rounded-2xl bg-green-900/10 border border-green-200 flex items-center justify-center'
        >
          <span className='text-green-700 text-sm tracking-wide'>
            Image Placeholder
          </span>
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
            className='text-3xl md:text-4xl font-semibold text-green-950'
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
              className='inline-flex items-center justify-center gap-2 rounded-lg bg-green-900 hover:bg-green-800 text-white px-5 py-3 text-sm transition-colors'
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
    },
    {
      title: "Super Immune Booster",
      price: 2440000,
      points: ["High‑dose Vitamin C", "Antioxidants", "B‑complex & Zinc"],
      tag: "Immunity",
    },
  ];
  return (
    <section id='packages' className='border-t border-slate-200'>
      <div className='max-w-6xl mx-auto px-4 py-10'>
        <div className='flex items-end justify-between mb-4'>
          <h2 className='text-2xl font-semibold'>Featured Packages</h2>
          <a
            href={buildWALink()}
            target='_blank'
            rel='noreferrer'
            className='hidden sm:inline-flex items-center gap-2 rounded-lg bg-slate-900 hover:bg-black text-white px-4 py-2 text-sm'
          >
            Book via WhatsApp <ArrowRight className='h-4 w-4' />
          </a>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {pkgs.map((p, i) => (
            <div key={i} className='rounded-xl border border-slate-200 p-5'>
              <div className='flex items-baseline justify-between'>
                <div className='font-medium flex items-center gap-2'>
                  <span className='inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 text-[10px] px-2 py-0.5 border border-emerald-100'>
                    {p.tag}
                  </span>
                  {p.title}
                </div>
                <div className='text-slate-900 font-semibold'>
                  {formatIDR(p.price)}
                </div>
              </div>
              <ul className='text-sm text-slate-600 mt-2 list-disc ml-4 space-y-1'>
                {p.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
              <div className='mt-4'>
                <a
                  href={buildWALink(
                    `Hi BMC, I want to book: ${p.title}. My location: ____. Preferred time: ____.`
                  )}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm'
                >
                  Book Now <ArrowRight className='h-4 w-4' />
                </a>
              </div>
            </div>
          ))}
        </div>
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
    <section id='services' className='border-t border-slate-200'>
      <div className='max-w-6xl mx-auto px-4 py-10'>
        <h2 className='text-2xl font-semibold mb-2'>Services & Pricing</h2>
        <p className='text-slate-600 mb-6'>
          Transparent. Mobile. Add boosters during visit.
        </p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {services.map((s, i) => (
            <ServiceRow key={i} title={s.title} price={s.price} desc={s.desc} />
          ))}
        </div>
        <div className='mt-6'>
          <a
            href={buildWALink()}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-2 rounded-lg bg-slate-900 hover:bg-black text-white px-5 py-3'
          >
            Book via WhatsApp <ArrowRight className='h-4 w-4' />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ How it Works ----------------------------- */
function HowItWorks() {
  return (
    <section id='how' className='border-t border-slate-200 bg-slate-50'>
      <div className='max-w-6xl mx-auto px-4 py-10'>
        <h2 className='text-2xl font-semibold mb-4'>60‑Second Booking Flow</h2>
        <ol className='space-y-3 text-slate-700'>
          <li>
            <b>1) Message us on WhatsApp.</b> Send name + location pin +
            service.
          </li>
          <li>
            <b>2) 1‑minute consent form.</b> We confirm price & dispatch a
            nurse.
          </li>
          <li>
            <b>3) Nurse arrives & treats.</b> Sterile setup. Pay cash or
            transfer. Next‑day check‑in.
          </li>
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------- Reviews -------------------------------- */
function Reviews() {
  const items = [
    {
      quote: "Came to my villa and fixed me up — great service!",
      name: "Traveler from LA",
    },
    {
      quote: "Very professional. I felt amazing after.",
      name: "Founder, Singapore",
    },
    { quote: "Fast, discreet, and friendly.", name: "Hotel GM, Canggu" },
  ];
  return (
    <section className='border-t border-slate-200'>
      <div className='max-w-6xl mx-auto px-4 py-10'>
        <h2 className='text-2xl font-semibold mb-4'>What clients say</h2>
        <div className='grid md:grid-cols-3 gap-4'>
          {items.map((t, i) => (
            <figure
              key={i}
              className='rounded-xl border border-slate-200 p-5 bg-white'
            >
              <blockquote className='text-slate-700'>“{t.quote}”</blockquote>
              <figcaption className='mt-2 text-sm text-slate-500'>
                — {t.name}
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
    <section id='faq' className='border-t border-slate-200 bg-slate-50'>
      <div className='max-w-6xl mx-auto px-4 py-10'>
        <h2 className='text-2xl font-semibold mb-4'>FAQ</h2>
        <div className='divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden'>
          {faqs.map((f, i) => (
            <details key={i} className='group'>
              <summary className='flex items-center justify-between cursor-pointer px-4 py-4 bg-white hover:bg-slate-50'>
                <span className='font-medium'>{f.q}</span>
                <ChevronDown className='h-4 w-4 text-slate-500 group-open:rotate-180 transition' />
              </summary>
              <div className='px-4 pb-4 text-slate-600 bg-white'>{f.a}</div>
            </details>
          ))}
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
          <h2 className='text-2xl font-semibold'>Get in touch</h2>
          <p className='text-slate-600 mt-1'>
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
          className="rounded-2xl border border-slate-200 aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"
          aria-label='Calm Bali villa setting'
        />
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
          <div className='font-semibold'>BMC — Bali Medical Concierge</div>
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
    <div className='border border-slate-200 rounded-xl px-4 py-4'>
      <div className='flex items-baseline justify-between'>
        <div className='font-medium'>{title}</div>
        <div className='text-slate-900 font-semibold'>{formatIDR(price)}</div>
      </div>
      <div className='text-sm text-slate-600 mt-1'>{desc}</div>
    </div>
  );
}

/* --------------------------------- Schema -------------------------------- */
function Schema() {
  const json = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "BMC — Bali Medical Concierge",
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
