
import React from 'react';

export const SeoContent: React.FC = () => {
  return (
    <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(28,28,28,0.1)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="glass-card rounded-3xl p-10 lg:p-16 space-y-8">

          <div className="space-y-3">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tighter" style={{ color: '#111111' }}>
              Was ist IPTVSchweizer?
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(17,17,17,0.75)' }}>
              <strong>IPTVSchweizer</strong> ist der führende IPTV-Anbieter in der Schweiz. Mit mehr als 65.000 Sendern aus über 70 Ländern und 175.000+ Filmen &amp; Serien bietet IPTVSchweizer das vollständigste IPTV-Paket auf dem Markt. Von Live-Super League bis Champions League, von SRF bis zu internationalen Sendern — alles in kristallklarem 4K.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <h3 className="text-xl font-black" style={{ color: '#111111' }}>
                Warum IPTVSchweizer wählen?
              </h3>
              <ul className="space-y-2 text-base" style={{ color: 'rgba(17,17,17,0.75)' }}>
                <li className="flex items-start gap-2"><span style={{ color: '#D52B1E' }}>✓</span> <span><strong>65.000+ Sender</strong> aus mehr als 70 Ländern</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#D52B1E' }}>✓</span> <span><strong>Alle Schweizer Sender</strong> — SRF 1, SRF 2, RTS 1, RSI La 1, 3+ und mehr</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#D52B1E' }}>✓</span> <span><strong>4K Qualität</strong> ohne Buffering oder Unterbrechungen</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#D52B1E' }}>✓</span> <span><strong>Aktivierung in 5 Minuten</strong> per WhatsApp</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#D52B1E' }}>✓</span> <span><strong>15 Tage Geld-zurück-Garantie</strong> — kein Risiko</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#D52B1E' }}>✓</span> <span><strong>Funktioniert auf allen Geräten</strong> — Smart TV, Telefon, Tablet, PC</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-black" style={{ color: '#111111' }}>
                IPTVSchweizer vs. traditionelles TV
              </h3>
              <ul className="space-y-2 text-base" style={{ color: 'rgba(17,17,17,0.75)' }}>
                <li className="flex items-start gap-2"><span style={{ color: '#D52B1E' }}>✓</span> <span><strong>Bis zu 80% günstiger</strong> als Swisscom TV oder UPC</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#D52B1E' }}>✓</span> <span><strong>Keine langen Verträge</strong> — monatlich kündbar</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#D52B1E' }}>✓</span> <span><strong>Mehr Sender</strong> als jedes Kabelabo</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#D52B1E' }}>✓</span> <span><strong>Kein Techniker nötig</strong> — in 5 Minuten selbst eingerichtet</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#D52B1E' }}>✓</span> <span><strong>24/7 WhatsApp Support</strong> — immer erreichbar</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#D52B1E' }}>✓</span> <span><strong>Pausiere jederzeit</strong> — vollständige Flexibilität</span></li>
              </ul>
            </div>
          </div>

          <div className="space-y-3 pt-4" style={{ borderTop: '1px solid rgba(28,28,28,0.1)' }}>
            <h3 className="text-xl font-black" style={{ color: '#111111' }}>
              IPTVSchweizer — Die #1 Wahl in der Schweiz
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(17,17,17,0.75)' }}>
              Tausende zufriedene Kunden in der ganzen Schweiz wählen täglich IPTVSchweizer als ihren IPTV-Anbieter. Ob du in Zürich, Bern, Basel, Genf oder anderswo in der Schweiz wohnst — mit IPTVSchweizer genießt du überall Premium-Fernsehen. Bestelle noch heute dein IPTVSchweizer Abonnement und erhalte <strong>3 Monate gratis</strong> bei jedem Paket.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
