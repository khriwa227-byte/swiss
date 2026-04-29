
import React from 'react';

const PayPalIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 21H4a1 1 0 0 1-1-1.1L5.5 3.6A1 1 0 0 1 6.5 3H13c2.5 0 4.5 1.5 4.5 4 0 3.5-3 5-5.5 5H9.5L8.5 18H7z"/>
    <path d="M10 3h4c2.5 0 4.5 1.5 4.5 4 0 3.5-2.5 5-5 5"/>
  </svg>
);

const VisaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"/>
    <path d="M2 10h20"/>
    <path d="M7 15h2"/>
    <path d="M12 15h4"/>
  </svg>
);

const MastercardIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="12" r="6"/>
    <circle cx="15" cy="12" r="6"/>
  </svg>
);

const IdealIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3"/>
    <circle cx="12" cy="9" r="3"/>
    <path d="M9 14h6v4H9z"/>
  </svg>
);

const BankTransferIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18"/>
    <path d="M3 10h18"/>
    <path d="M12 3l9 7H3l9-7z"/>
    <path d="M5 10v8"/>
    <path d="M9 10v8"/>
    <path d="M15 10v8"/>
    <path d="M19 10v8"/>
  </svg>
);

const KlarnaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4v16"/>
    <path d="M14 4c0 3.5-1.5 6.8-4 9l5.5 7"/>
    <circle cx="18" cy="18" r="2"/>
  </svg>
);

const DEVICES = [
  {
    name: 'Smart TV',
    desc: 'Samsung · LG · Sony',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    name: 'Fire Stick',
    desc: 'Amazon Fire TV',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 4-2.5 7.5-6 9.3"/>
        <path d="M12 2a10 10 0 0 0-10 10c0 4 2.5 7.5 6 9.3"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    name: 'Apple TV',
    desc: 'tvOS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3C8 3 5 6 5 9c0 2 1 3.5 2.5 4.5L6 21h12l-1.5-7.5C18 12.5 19 11 19 9c0-3-3-6-7-6z"/>
      </svg>
    ),
  },
  {
    name: 'Android TV',
    desc: 'Android Box',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18L4 6h16l-2 12H6z"/>
        <path d="M9 6V4M15 6V4"/>
        <circle cx="9" cy="10" r="1" fill="currentColor"/>
        <circle cx="15" cy="10" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'iPhone & iPad',
    desc: 'iOS · iPadOS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="2" width="10" height="20" rx="2"/>
        <circle cx="12" cy="17" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Android',
    desc: 'Telefon & Tablet',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="4" width="10" height="16" rx="2"/>
        <path d="M5 8h-.5A1.5 1.5 0 0 0 3 9.5v3A1.5 1.5 0 0 0 4.5 14H5M19 8h.5A1.5 1.5 0 0 1 21 9.5v3a1.5 1.5 0 0 1-1.5 1.5H19"/>
        <circle cx="12" cy="17" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'PC & Mac',
    desc: 'Windows · macOS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="13" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    name: 'MAG Box',
    desc: 'IPTV Set-top Box',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="8" width="20" height="10" rx="2"/>
        <path d="M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/>
        <circle cx="12" cy="13" r="2"/>
      </svg>
    ),
  },
  {
    name: 'Formuler',
    desc: 'Z8 · Z10 · CC · GO',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="11" rx="2"/>
        <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>
        <path d="M8 12h2M12 12h2M8 15h2M12 15h2"/>
        <circle cx="18" cy="18" r="0" fill="currentColor"/>
      </svg>
    ),
  },
];

const PAYMENT_METHODS = [
  { name: 'PayPal', icon: <PayPalIcon /> },
  { name: 'Visa', icon: <VisaIcon /> },
  { name: 'Mastercard', icon: <MastercardIcon /> },
  { name: 'iDEAL', icon: <IdealIcon /> },
  { name: 'Banküberweisung', icon: <BankTransferIcon /> },
  { name: 'Klarna', icon: <KlarnaIcon /> },
];

export const PaymentMethods: React.FC = () => {
  return (
    <section id="payment-methods" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 glass-card rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          Zahlungsmethoden
        </div>
        <h2 className="text-3xl lg:text-4xl font-black tracking-tighter mb-12" style={{ color: '#111111' }}>
          Bezahle wie du möchtest
        </h2>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {PAYMENT_METHODS.map((method) => (
            <div
              key={method.name}
              className="glass-card rounded-[28px] py-6 flex flex-col items-center gap-4 hover:bg-white transition-all duration-500 group cursor-default aspect-square max-h-[160px]"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-xl flex-shrink-0" style={{ backgroundColor: '#1C1C1C' }}>
                {method.icon}
              </div>
              <span className="text-xs font-bold tracking-tight text-center" style={{ color: '#111111' }}>{method.name}</span>
            </div>
          ))}
        </div>

        {/* Compatible Devices */}
        <div className="mt-20">
          <div className="inline-block px-4 py-1.5 glass-card rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Kompatible Geräte
          </div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter mb-12" style={{ color: '#111111' }}>
            Funktioniert auf all deinen Geräten
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {DEVICES.map((device) => (
              <div
                key={device.name}
                className="glass-card rounded-[28px] p-5 flex flex-col items-center gap-3 hover:bg-white transition-all duration-500 group cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-xl flex-shrink-0" style={{ backgroundColor: '#111111' }}>
                  {device.icon}
                </div>
                <div className="text-center">
                  <div className="text-xs font-black tracking-tight" style={{ color: '#111111' }}>{device.name}</div>
                  <div className="text-[10px] font-medium mt-0.5" style={{ color: 'rgba(17,17,17,0.5)' }}>{device.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compatible Apps */}
        <div className="mt-20">
          <div className="inline-block px-4 py-1.5 glass-card rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Kompatible Apps
          </div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter mb-12" style={{ color: '#111111' }}>
            Nutze deine Lieblingsapp
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              {
                name: 'IPTV Smarters Pro', desc: 'iOS · Android · Smart TV', bg: '#6C3EE8',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none"><circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.5"/><polygon points="10,8.5 10,15.5 17,12" fill="white"/><path d="M5 5l1.5 1.5M19 5l-1.5 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
              },
              {
                name: 'IPTV Smarters', desc: 'iOS · Android · Smart TV', bg: '#E8743E',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none"><circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.5"/><polygon points="10,8.5 10,15.5 17,12" fill="white"/></svg>
              },
              {
                name: 'TiviMate', desc: 'Android TV · Fire Stick', bg: '#2ECC71',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none"><rect x="3" y="5" width="18" height="12" rx="2" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.15"/><polygon points="10,9 10,15 16,12" fill="white"/><line x1="8" y1="20" x2="16" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round"/><line x1="12" y1="17" x2="12" y2="20" stroke="white" strokeWidth="2"/></svg>
              },
              {
                name: 'SE Smart IPTV', desc: 'iOS · Android · macOS', bg: '#00796B',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="white" strokeWidth="1.5"/><text x="7" y="15" fontSize="7" fontWeight="bold" fill="white">SE</text></svg>
              },
              {
                name: 'Smart IPTV', desc: 'Samsung · LG Smart TV', bg: '#1565C0',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="white" strokeWidth="1.5"/><path d="M8 10h8M8 14h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
              },
              {
                name: 'VLC', desc: 'Windows · Mac · Linux', bg: '#FF7A00',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none"><polygon points="12,4 21,19 3,19" fill="white"/><rect x="9.5" y="13" width="5" height="1.5" fill="#FF7A00"/><rect x="8" y="16" width="8" height="1.5" fill="#FF7A00"/></svg>
              },
              {
                name: 'Kodi', desc: 'Alle Plattformen', bg: '#17B2E7',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none"><circle cx="12" cy="12" r="8" fill="white" fillOpacity="0.15"/><path d="M8 7v10M8 12l5-5M8 12l5 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              },
              {
                name: 'IBO Player Pro', desc: 'iOS · Android · Smart TV', bg: '#D52B1E',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none"><rect x="4" y="4" width="16" height="16" rx="3" stroke="white" strokeWidth="1.5"/><polygon points="10,8 10,16 17,12" fill="white"/></svg>
              },
              {
                name: 'Hot Player', desc: 'Android · Smart TV', bg: '#E64A19',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none"><path d="M12 3c0 4-4 5-4 9a4 4 0 008 0c0-4-4-5-4-9z" fill="white" fillOpacity="0.9"/><path d="M12 10c0 2-2 2.5-2 4.5a2 2 0 004 0C14 12.5 12 12 12 10z" fill="#E64A19"/></svg>
              },
              {
                name: 'BOB Player', desc: 'Android · Smart TV', bg: '#4527A0',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none"><circle cx="12" cy="12" r="8" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.5"/><rect x="9" y="9" width="2" height="6" rx="1" fill="white"/><rect x="13" y="9" width="2" height="6" rx="1" fill="white"/></svg>
              },
              {
                name: 'TV Online', desc: 'Android · Smart TV', bg: '#283593',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none"><circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.5"/><path d="M12 4c-2 2-3 5-3 8s1 6 3 8M12 4c2 2 3 5 3 8s-1 6-3 8M4 12h16" stroke="white" strokeWidth="1.5"/></svg>
              },
            ].map((app) => (
              <div
                key={app.name}
                className="glass-card rounded-3xl p-6 flex flex-col items-center gap-3 hover:bg-white transition-all duration-500 group cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl flex-shrink-0" style={{ backgroundColor: app.bg }}>
                  {app.icon}
                </div>
                <div className="text-center">
                  <div className="text-xs font-black tracking-tight leading-tight" style={{ color: '#111111' }}>{app.name}</div>
                  <div className="text-[10px] font-medium mt-1" style={{ color: 'rgba(17,17,17,0.5)' }}>{app.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
