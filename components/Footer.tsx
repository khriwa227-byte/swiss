
import React from 'react';

export const Footer: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=447449708976&text&type=phone_number&app_absent=0";

  return (
    <footer className="py-32 px-6 text-white" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-end">
          <div className="space-y-12 text-center lg:text-left">
            <h2 className="text-4xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
              Entdecke ob IPTVSchweizer perfekt für dich ist <span className="text-italics">(das ist es sicher)</span>
            </h2>
            <p className="text-xl text-white/60 max-w-md mx-auto lg:mx-0">
              Starte jetzt ein WhatsApp-Gespräch über IPTVSchweizer und entdecke alle Möglichkeiten.
            </p>
            <div className="space-y-4">
              <div className="text-sm font-bold uppercase tracking-widest text-white/40">Ansässig in</div>
              <div className="text-2xl font-bold flex items-center gap-3">
                <svg viewBox="0 0 20 20" className="w-8 h-8 rounded-sm flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" fill="#D52B1E"/>
                  <rect x="8.5" y="2" width="3" height="16" fill="white"/>
                  <rect x="2" y="8.5" width="16" height="3" fill="white"/>
                </svg>
                der Schweiz
              </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[48px] text-black">
            <div className="space-y-8">
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <p className="text-sm font-medium leading-relaxed">
                  IPTVSchweizer hilft tausenden Kunden mit Premium-IPTV. Für schnellen Service, WhatsApp uns für eine Antwort innerhalb von 5 Minuten, ruf an <a href="tel:+447449708976" className="font-bold hover:underline" style={{ color: '#D52B1E' }}>+44 7449 708976</a> oder schreib an <a href="mailto:info@iptvschweizer.com" className="font-bold hover:underline" style={{ color: '#D52B1E' }}>info@iptvschweizer.com</a>.
                </p>
              </div>
              
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-8 text-white rounded-[32px] font-black text-2xl hover:scale-[1.02] transition-transform block text-center"
              style={{ backgroundColor: '#1C1C1C' }}
              >
                WhatsApp uns jetzt
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/10">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-white/40 mb-8">Nutze deine Lieblingsapp</p>
          <div className="flex flex-wrap justify-center items-center gap-6">

            {/* VLC */}
            <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity" title="VLC">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#FF7A00' }}>
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <polygon points="12,4 21,19 3,19" fill="white"/>
                  <rect x="9.5" y="13" width="5" height="1.5" fill="#FF7A00"/>
                  <rect x="8" y="16" width="8" height="1.5" fill="#FF7A00"/>
                </svg>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">VLC</span>
            </div>

            {/* Kodi */}
            <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity" title="Kodi">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#17B2E7' }}>
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <circle cx="12" cy="12" r="9" fill="white" fillOpacity="0.15"/>
                  <path d="M8 7v10M8 12l5-5M8 12l5 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">Kodi</span>
            </div>

            {/* TiviMate */}
            <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity" title="TiviMate">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#2ECC71' }}>
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <rect x="3" y="5" width="18" height="12" rx="2" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
                  <polygon points="10,9 10,15 16,12" fill="white"/>
                  <line x1="8" y1="20" x2="16" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="12" y1="17" x2="12" y2="20" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">TiviMate</span>
            </div>

            {/* IPTV Smarters Pro */}
            <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity" title="IPTV Smarters Pro">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#6C3EE8' }}>
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.5"/>
                  <polygon points="10,8.5 10,15.5 17,12" fill="white"/>
                  <path d="M5 5l1.5 1.5M19 5l-1.5 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">Smarters Pro</span>
            </div>

            {/* IPTV Smarters */}
            <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity" title="IPTV Smarters">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#E8743E' }}>
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.5"/>
                  <polygon points="10,8.5 10,15.5 17,12" fill="white"/>
                </svg>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">Smarters</span>
            </div>

            {/* Smart IPTV */}
            <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity" title="Smart IPTV">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1565C0' }}>
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <rect x="3" y="6" width="18" height="12" rx="2" stroke="white" strokeWidth="1.5"/>
                  <path d="M8 10h8M8 14h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">Smart IPTV</span>
            </div>

            {/* SE Smart IPTV */}
            <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity" title="SE Smart IPTV">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#00796B' }}>
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <rect x="3" y="6" width="18" height="12" rx="2" stroke="white" strokeWidth="1.5"/>
                  <text x="7" y="15" fontSize="7" fontWeight="bold" fill="white">SE</text>
                </svg>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">SE Smart IPTV</span>
            </div>

            {/* IBO Player Pro */}
            <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity" title="IBO Player Pro">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#D52B1E' }}>
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <rect x="4" y="4" width="16" height="16" rx="3" stroke="white" strokeWidth="1.5"/>
                  <polygon points="10,8 10,16 17,12" fill="white"/>
                </svg>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">IBO Player</span>
            </div>

            {/* Hot Player */}
            <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity" title="Hot Player">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#E64A19' }}>
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <path d="M12 3c0 4-4 5-4 9a4 4 0 008 0c0-4-4-5-4-9z" fill="white" fillOpacity="0.9"/>
                  <path d="M12 10c0 2-2 2.5-2 4.5a2 2 0 004 0C14 12.5 12 12 12 10z" fill="#E64A19"/>
                </svg>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">Hot Player</span>
            </div>

            {/* BOB Player */}
            <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity" title="BOB Player">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#4527A0' }}>
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <circle cx="12" cy="12" r="8" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.5"/>
                  <rect x="9" y="9" width="2" height="6" rx="1" fill="white"/>
                  <rect x="13" y="9" width="2" height="6" rx="1" fill="white"/>
                </svg>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">BOB Player</span>
            </div>

            {/* TV Online */}
            <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity" title="TV Online">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#283593' }}>
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.5"/>
                  <path d="M12 4c-2 2-3 5-3 8s1 6 3 8M12 4c2 2 3 5 3 8s-1 6-3 8M4 12h16" stroke="white" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">TV Online</span>
            </div>

          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 20 20" className="w-8 h-8 rounded-sm flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="20" fill="#D52B1E"/>
              <rect x="8.5" y="2" width="3" height="16" fill="white"/>
              <rect x="2" y="8.5" width="16" height="3" fill="white"/>
            </svg>
            <span className="text-xl font-extrabold tracking-tighter">IPTVSchweizer</span>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-8 text-sm font-bold opacity-60">
            <a href="/algemene-voorwaarden" className="hover:opacity-100 transition-opacity">AGB</a>
            <a href="/privacybeleid" className="hover:opacity-100 transition-opacity">Datenschutz</a>
            <a href="mailto:info@iptvschweizer.com" className="hover:opacity-100 transition-opacity">info@iptvschweizer.com</a>
            <a href="tel:+447449708976" className="hover:opacity-100 transition-opacity">+44 7449 708976</a>
          </div>
          
          <div className="text-sm opacity-40">
            © 2026 IPTVSchweizer. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
};
