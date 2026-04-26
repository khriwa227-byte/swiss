
import React from 'react';

export const Footer: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=447449708976&text&type=phone_number&app_absent=0";

  return (
    <footer className="py-32 px-6 text-white" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-end">
          <div className="space-y-12 text-center lg:text-left">
            <h2 className="text-4xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
              Entdecke ob IPTVDeutschland perfekt für dich ist <span className="text-italics">(das ist es sicher)</span>
            </h2>
            <p className="text-xl text-white/60 max-w-md mx-auto lg:mx-0">
              Starte jetzt ein WhatsApp-Gespräch über IPTVDeutschland und entdecke alle Möglichkeiten.
            </p>
            <div className="space-y-4">
              <div className="text-sm font-bold uppercase tracking-widest text-white/40">Ansässig in</div>
              <div className="text-2xl font-bold">den Niederlanden</div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[48px] text-black">
            <div className="space-y-8">
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <p className="text-sm font-medium leading-relaxed">
                  IPTVDeutschland hilft tausenden Kunden mit Premium-IPTV. Für schnellen Service, WhatsApp uns für eine Antwort innerhalb von 5 Minuten, ruf an <a href="tel:+447449708976" className="font-bold hover:underline" style={{ color: '#DD0000' }}>+44 7449 708976</a> oder schreib an <a href="mailto:info@iptvnederland.digital" className="font-bold hover:underline" style={{ color: '#DD0000' }}>info@iptvnederland.digital</a>.
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
          <p className="text-center text-sm font-bold uppercase tracking-widest text-white/40 mb-8">Kompatible Apps</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {[
              { src: '/assets/apps/vlc.png', alt: 'VLC' },
              { src: '/assets/apps/kodi.png', alt: 'Kodi' },
              { src: '/assets/apps/tivimate.png', alt: 'TiviMate' },
              { src: '/assets/apps/iptv-smarters-pro.png', alt: 'IPTV Smarters Pro' },
              { src: '/assets/apps/iptv-smarters.png', alt: 'IPTV Smarters' },
              { src: '/assets/apps/smart-iptv.png', alt: 'Smart IPTV' },
              { src: '/assets/apps/se-smart-iptv.png', alt: 'SE Smart IPTV' },
              { src: '/assets/apps/iboplayer-pro.png', alt: 'IBO Player Pro' },
              { src: '/assets/apps/hotplayer.png', alt: 'Hot Player' },
              { src: '/assets/apps/bob-player.png', alt: 'BOB Player' },
              { src: '/assets/apps/tvonline1.png', alt: 'TV Online' },
            ].map((app) => (
              <img key={app.alt} src={app.src} alt={app.alt} title={app.alt} className="h-12 w-12 object-contain rounded-xl opacity-70 hover:opacity-100 transition-opacity" />
            ))}
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ backgroundColor: '#DD0000' }}>
              <div className="w-4 h-4 bg-white rotate-45"></div>
            </div>
            <span className="text-xl font-extrabold tracking-tighter">IPTVDeutschland</span>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-8 text-sm font-bold opacity-60">
            <a href="/algemene-voorwaarden" className="hover:opacity-100 transition-opacity">AGB</a>
            <a href="/privacybeleid" className="hover:opacity-100 transition-opacity">Datenschutz</a>
            <a href="mailto:info@iptvnederland.digital" className="hover:opacity-100 transition-opacity">info@iptvnederland.digital</a>
            <a href="tel:+447449708976" className="hover:opacity-100 transition-opacity">+44 7449 708976</a>
          </div>
          
          <div className="text-sm opacity-40">
            © 2026 IPTVDeutschland. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
};
