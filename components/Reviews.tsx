
import React, { useEffect, useRef, useState } from 'react';

const REVIEWS = [
  {
    name: 'Lukas M.',
    initials: 'LM',
    color: 'from-[#1C1C1C] to-[#2a2a2a]',
    text: 'Setup hat ca. 5 Minuten gedauert. Kein Ärger mit Technikern 👍',
    time: '12:34',
  },
  {
    name: 'Anna B.',
    initials: 'AB',
    color: 'from-[#D52B1E] to-rose-700',
    text: 'Seit 3 Monaten keine einzige Störung. Besser als jeder Kabelanbieter',
    time: '14:02',
  },
  {
    name: 'Felix K.',
    initials: 'FK',
    color: 'from-[#1C1C1C] to-[#D52B1E]',
    text: '4K Qualität ist wirklich next level. Champions League ist fantastisch',
    time: '18:47',
  },
  {
    name: 'Sophie R.',
    initials: 'SR',
    color: 'from-amber-500 to-orange-500',
    text: 'Bestes Geld, das ich dieses Jahr ausgegeben habe. Im Ernst.',
    time: '09:15',
  },
  {
    name: 'Markus W.',
    initials: 'MW',
    color: 'from-emerald-500 to-teal-500',
    text: 'Support antwortet innerhalb 2 Min auf WhatsApp. Respekt! 🙏',
    time: '21:33',
  },
  {
    name: 'Julia H.',
    initials: 'JH',
    color: 'from-[#111111] to-[#1C1C1C]',
    text: 'Freunde fragen immer, was ich nutze. Werde sie weiterempfehlen! 😄',
    time: '16:58',
  },
];

const CheckMarks = () => (
  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" className="inline-block ml-1">
    <path d="M1 6.5L4.5 10L11 3" stroke="#53bdeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 6.5L8.5 10L15 3" stroke="#53bdeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChatBubble: React.FC<{
  review: typeof REVIEWS[0];
  index: number;
  visible: boolean;
}> = ({ review, index, visible }) => {
  const isRight = index % 2 === 1;

  return (
    <div
      className={`flex gap-3 max-w-[85%] lg:max-w-[70%] transition-all duration-500 ${
        isRight ? 'ml-auto flex-row-reverse' : ''
      }`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1) translateY(0)' : 'scale(0) translateY(20px)',
        transitionDelay: `${index * 150}ms`,
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
        <span className="text-white text-xs font-black">{review.initials}</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className={`text-xs font-bold ${isRight ? 'text-right' : ''}`} style={{ color: '#111111' }}>
          {review.name}
        </span>
        <div
          className={`relative px-4 py-3 shadow-xl ${isRight ? 'rounded-2xl rounded-tr-sm' : 'rounded-2xl rounded-tl-sm'}`}
          style={{ backgroundColor: '#1C1C1C' }}
        >
          <div className="absolute top-0 w-3 h-3" style={{
            backgroundColor: '#1C1C1C',
            clipPath: isRight ? 'polygon(0 0, 100% 0, 100% 100%)' : 'polygon(100% 0, 0 0, 0 100%)',
            left: isRight ? 'auto' : '-6px',
            right: isRight ? '-6px' : 'auto',
          }}></div>
          <p className="text-white text-sm lg:text-base font-medium leading-relaxed">
            {review.text}
          </p>
          <div className={`flex items-center gap-1 mt-1 ${isRight ? 'justify-start' : 'justify-end'}`}>
            <span className="text-[10px] text-white/40 font-medium">{review.time}</span>
            <CheckMarks />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Reviews: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 px-6">
      <div className="max-w-2xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 glass-card rounded-full text-xs font-bold uppercase tracking-widest">
            23000+ zufriedene Kunden
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter" style={{ color: '#111111' }}>
            #1 IPTV in der Schweiz laut unseren Kunden
          </h2>
        </div>

        <div className="space-y-6">
          {REVIEWS.map((review, i) => (
            <ChatBubble key={i} review={review} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};
