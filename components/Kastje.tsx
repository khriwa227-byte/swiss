
import React from 'react';
import { Pricing } from './Pricing';

const compat = [
  {
    name: 'MAG Box',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="10" rx="2"/>
        <circle cx="17" cy="12" r="1.5"/>
        <line x1="6" y1="12" x2="10" y2="12"/>
      </svg>
    ),
  },
  {
    name: 'Android Box',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 10a8 8 0 0116 0v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7z"/>
        <line x1="8" y1="2" x2="5" y2="6"/>
        <line x1="16" y1="2" x2="19" y2="6"/>
        <circle cx="9" cy="12" r="0.5" fill="currentColor"/>
        <circle cx="15" cy="12" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Fire Stick',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="9" width="18" height="8" rx="3"/>
        <circle cx="12" cy="4" r="2"/>
        <line x1="12" y1="6" x2="12" y2="9"/>
      </svg>
    ),
  },
  {
    name: 'Smart TV',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    name: 'Apple TV',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="12" rx="3"/>
        <line x1="9" y1="20" x2="15" y2="20"/>
        <line x1="12" y1="17" x2="12" y2="20"/>
      </svg>
    ),
  },
  {
    name: 'Formuler',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="22" height="12" rx="2"/>
        <circle cx="18" cy="12" r="2"/>
        <line x1="5" y1="9" x2="12" y2="9"/>
        <line x1="5" y1="12" x2="10" y2="12"/>
        <line x1="5" y1="15" x2="12" y2="15"/>
      </svg>
    ),
  },
];

const steps = [
  { step: '1', title: 'Kies je abonnement', desc: 'Selecteer het pakket en looptijd die bij jou past. Basis of Premium VIP — voor 1 tot 4 apparaten.' },
  { step: '2', title: 'Ontvang je gegevens', desc: 'Binnen 5 minuten ontvang je via WhatsApp de inloggegevens voor jouw kastje of apparaat.' },
  { step: '3', title: 'App installeren', desc: 'Installeer de IPTV-app op je kastje (bijv. IPTV Smarters of TiviMate) en voer je gegevens in.' },
  { step: '4', title: 'Kijken maar!', desc: 'Geniet van 80.000+ zenders, films en series in 4K kwaliteit — direct op je kastje.' },
];

export const Kastje: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-6 overflow-hidden">

        {/* Background depth — matches site hero */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <div className="absolute top-0 right-0 w-[55%] h-full opacity-[0.04]" style={{ background: 'radial-gradient(ellipse at 80% 40%, #21468B 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-[40%] h-[60%] opacity-[0.03]" style={{ background: 'radial-gradient(ellipse at 20% 80%, #AE1C28 0%, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage: 'radial-gradient(circle, #21468B 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 flex flex-col items-center sm:items-start gap-8 lg:gap-10 w-[88%] sm:w-full mx-auto sm:mx-0">

          {/* Promo pill — 12+3 offer */}
          <div className="flex justify-center sm:justify-start w-full">
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 pl-2.5 pr-5 py-2 rounded-full backdrop-blur-md border hover:brightness-110 hover:scale-[1.03] transition-all duration-300 shadow-[0_4px_16px_rgba(33,70,139,0.2)]"
              style={{ background: 'linear-gradient(135deg, #21468B, #1a3a7a, #21468B)', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <span className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #AE1C28, #c0392b)' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>
              </span>
              <span className="text-sm sm:text-base font-bold text-white">Kies 12 maanden en ontvang</span>
              <span className="text-sm sm:text-base font-black uppercase tracking-wide text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.5)]">3 MAANDEN GRATIS</span>
            </a>
          </div>

          {/* Heading */}
          <h1
            className="font-extrabold leading-[1.03] tracking-tighter text-center sm:text-left w-full"
            style={{ color: '#0D1B3E', fontSize: 'clamp(3rem, 6vw, 6.5rem)' }}
          >
            Jouw kastje.<br />
            <span className="text-italics">Onze content.</span>
          </h1>

          {/* Sub-copy */}
          <p className="text-base lg:text-xl font-medium leading-relaxed text-center sm:text-left max-w-xl" style={{ color: 'rgba(13,27,62,0.65)' }}>
            Heb je al een IPTV kastje, MAG box, Fire Stick of Android box? Kies een abonnement en kijk direct 80.000+ zenders in 4K kwaliteit.
          </p>

          {/* Stats row */}
          <div className="hidden lg:flex items-stretch gap-0 divide-x rounded-2xl overflow-hidden border w-auto" style={{ borderColor: 'rgba(33,70,139,0.12)' }}>
            {[
              { value: '80.000+', label: 'Zenders' },
              { value: '175.000+', label: 'Films & Series' },
              { value: '70+', label: 'Landen' },
              { value: '4K UHD', label: 'Kwaliteit' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1 px-6 py-4" style={{ background: 'rgba(33,70,139,0.04)', borderColor: 'rgba(33,70,139,0.1)' }}>
                <span className="text-2xl font-black leading-none tabular-nums" style={{ color: '#21468B' }}>{stat.value}</span>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(13,27,62,0.4)' }}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 w-full sm:flex-row sm:w-auto sm:justify-start">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-10 py-4 text-white text-base font-black rounded-full hover:scale-[1.02] hover:brightness-110 transition-all shadow-[0_8px_32px_rgba(33,70,139,0.35)] text-center"
              style={{ background: 'linear-gradient(135deg, #21468B, #1a3a7a)' }}
            >
              Bekijk abonnementen
            </a>
            <a
              href="#pricing"
              className="btn-claim w-full sm:w-auto px-8 py-4 text-white text-base font-black rounded-full flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer"
            >
              <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/20 shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>
              </span>
              Claim het aanbod nu
              <svg className="w-5 h-5 animate-[bounceX_1s_ease-in-out_infinite]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-3 w-full">
            <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 backdrop-blur-md rounded-full shadow-[0_4px_12px_rgba(33,70,139,0.15)] border hover:scale-105 transition-all duration-300" style={{ background: 'rgba(33,70,139,0.1)', borderColor: 'rgba(33,70,139,0.25)' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ color: '#21468B' }}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap" style={{ color: '#0D1B3E' }}>Instant Activering</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 backdrop-blur-md rounded-full shadow-[0_4px_12px_rgba(33,70,139,0.15)] border hover:scale-105 transition-all duration-300" style={{ background: 'rgba(33,70,139,0.1)', borderColor: 'rgba(33,70,139,0.25)' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ color: '#21468B' }}><path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0"/></svg>
              <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap" style={{ color: '#0D1B3E' }}>Geen Buffering</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 backdrop-blur-md rounded-full shadow-[0_4px_12px_rgba(33,70,139,0.15)] border hover:scale-105 transition-all duration-300" style={{ background: 'rgba(33,70,139,0.1)', borderColor: 'rgba(33,70,139,0.25)' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ color: '#21468B' }}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap" style={{ color: '#0D1B3E' }}>15 Dagen Garantie</span>
            </div>
          </div>

          {/* Compatible devices strip */}
          <div className="w-full pt-4 pb-8">
            <p className="text-xs font-black uppercase tracking-widest mb-6 text-center sm:text-left" style={{ color: 'rgba(13,27,62,0.35)' }}>Werkt op al deze apparaten</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8">
              {compat.map((d) => (
                <div key={d.name} className="flex flex-col items-center gap-2 group">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-md" style={{ background: 'rgba(33,70,139,0.07)', color: '#21468B' }}>
                    {d.icon}
                  </div>
                  <span className="text-[11px] font-bold" style={{ color: 'rgba(13,27,62,0.45)' }}>{d.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-block px-4 py-1.5 glass-card rounded-full text-xs font-bold uppercase tracking-widest">
              Hoe werkt het?
            </div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter" style={{ color: '#0D1B3E' }}>
              In 4 stappen klaar
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto shadow-xl" style={{ backgroundColor: '#21468B' }}>
                  {step}
                </div>
                <h3 className="text-lg font-black tracking-tighter" style={{ color: '#0D1B3E' }}>{title}</h3>
                <p className="text-sm font-medium leading-relaxed" style={{ color: 'rgba(13,27,62,0.65)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Pricing />
    </div>
  );
};
