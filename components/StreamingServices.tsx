
import React from 'react';
import { STREAMING_SERVICES } from '../constants';

const ServiceLogo: React.FC<{ name: string; logo: string }> = ({ name, logo }) => (
  <div className="flex-shrink-0 mx-8 flex flex-col items-center justify-center gap-2 group">
    <div className="w-28 h-28 rounded-3xl flex items-center justify-center bg-white transition-all duration-300">
      <img
        src={logo}
        alt={name}
        title={name}
        className="w-20 h-20 object-contain"
        onError={(e) => {
          (e.currentTarget.parentElement as HTMLElement).style.display = 'none';
        }}
      />
    </div>
    <span className="text-[10px] font-bold text-white/40 group-hover:text-white/70 transition-colors duration-300 whitespace-nowrap">
      {name}
    </span>
  </div>
);

export const StreamingServices: React.FC = () => (
  <div>
    <div className="max-w-7xl mx-auto px-6 py-10 text-center">
      <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#DD0000' }}>
        Alles auf einer Plattform
      </div>
      <h2 className="text-2xl lg:text-3xl font-black tracking-tighter" style={{ color: '#111111' }}>
        Alle Streaming-Dienste inklusive
      </h2>
    </div>

    <section className="py-6 overflow-hidden" style={{ backgroundColor: '#111111' }}>
      <div className="relative -mx-6">
        <div className="marquee-container overflow-hidden">
          <div className="marquee-content py-2" style={{ animationDuration: '40s' }}>
            {STREAMING_SERVICES.map((service, i) => (
              <ServiceLogo key={i} name={service.name} logo={service.logo} />
            ))}
          </div>
          <div className="marquee-content py-2" style={{ animationDuration: '40s' }}>
            {STREAMING_SERVICES.map((service, i) => (
              <ServiceLogo key={`dup-${i}`} name={service.name} logo={service.logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);
