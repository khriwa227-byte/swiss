
import React from 'react';

export const Privacybeleid: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black transition-colors mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Zurück zur Startseite
        </a>

        <h1 className="text-4xl lg:text-6xl font-black tracking-tighter mb-4">
          Datenschutzerklärung
        </h1>
        <div className="space-y-12 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">1. Einleitung</h2>
            <p>
              IPTVSchweizer, mit Sitz in der Schweiz, legt großen Wert auf den Schutz Ihrer personenbezogenen Daten. In dieser Datenschutzerklärung erläutern wir, welche Daten wir erheben, warum wir diese erheben, wie wir sie verwenden und welche Rechte Sie haben. Diese Richtlinie gilt für alle Dienste, die von IPTVSchweizer angeboten werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">2. Welche Daten erheben wir?</h2>
            <p className="mb-4">Wir können folgende personenbezogene Daten erheben und verarbeiten:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Kontaktdaten:</strong> Name, E-Mail-Adresse, Telefonnummer und WhatsApp-Nummer.</li>
              <li><strong>Zahlungsdaten:</strong> Informationen bezüglich Ihrer Zahlung (wir speichern keine vollständigen Bankdaten).</li>
              <li><strong>Kontodaten:</strong> Benutzername und verschlüsseltes Passwort für den Zugang zum Dienst.</li>
              <li><strong>Gerätedaten:</strong> Gerätetyp, Betriebssystem und IP-Adresse bei Nutzung des Dienstes.</li>
              <li><strong>Kommunikationsdaten:</strong> Nachrichten, die Sie uns per WhatsApp, E-Mail oder anderen Kanälen senden.</li>
              <li><strong>Website-Daten:</strong> Cookies, Browsing-Verhalten und Interaktionen mit unserer Website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">3. Warum erheben wir diese Daten?</h2>
            <p className="mb-4">Wir verarbeiten Ihre personenbezogenen Daten für folgende Zwecke:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Erstellung und Verwaltung Ihres Abonnements.</li>
              <li>Verarbeitung von Zahlungen und Versand von Bestätigungen.</li>
              <li>Bereitstellung von Kundendienst und Beantwortung Ihrer Fragen per WhatsApp, E-Mail oder Telefon.</li>
              <li>Verbesserung unserer Dienste und Website.</li>
              <li>Betrug und Missbrauch verhindern.</li>
              <li>Erfüllung gesetzlicher Verpflichtungen.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">4. Rechtsgrundlagen der Verarbeitung</h2>
            <p className="mb-4">Wir verarbeiten Ihre Daten auf Basis folgender Rechtsgrundlagen:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Vertragserfüllung:</strong> Die Verarbeitung ist notwendig für die Erbringung des Dienstes, den Sie bei uns abgeschlossen haben.</li>
              <li><strong>Berechtigtes Interesse:</strong> Verarbeitung zur Verbesserung unserer Dienste und zur Betrugsprävention.</li>
              <li><strong>Rechtliche Verpflichtung:</strong> Verarbeitung, die zur Einhaltung gesetzlicher Anforderungen notwendig ist.</li>
              <li><strong>Einwilligung:</strong> Wenn Sie uns ausdrücklich zugestimmt haben, z.B. für den Empfang von Marketingmitteilungen.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">5. Weitergabe von Daten an Dritte</h2>
            <p className="mb-4">IPTVSchweizer gibt Ihre personenbezogenen Daten nicht an Dritte weiter, außer wenn:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dies für die Erfüllung des Vertrags notwendig ist (z.B. Zahlungsdienstleister).</li>
              <li>Wir dazu gesetzlich verpflichtet sind (z.B. auf Anfrage einer zuständigen Behörde).</li>
              <li>Sie ausdrücklich zugestimmt haben.</li>
            </ul>
            <p className="mt-4">Wir verkaufen Ihre personenbezogenen Daten niemals an Dritte.</p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">6. Speicherfristen</h2>
            <p className="mb-4">Wir speichern Ihre personenbezogenen Daten nicht länger als für die Zwecke, für die sie erhoben wurden, erforderlich ist:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Kontodaten:</strong> Während der Laufzeit Ihres Abonnements und bis zu 12 Monate nach dessen Beendigung.</li>
              <li><strong>Zahlungsdaten:</strong> 7 Jahre gemäß steuerlicher Aufbewahrungspflicht.</li>
              <li><strong>Kommunikationsdaten:</strong> Bis zu 24 Monate nach dem letzten Kontakt.</li>
              <li><strong>Website-Daten:</strong> Bis zu 26 Monate (Cookies und Analytics).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">7. Cookies</h2>
            <p className="mb-4">Unsere Website verwendet Cookies, um das Nutzererlebnis zu verbessern. Wir verwenden folgende Cookie-Typen:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Funktionale Cookies:</strong> Notwendig für das Funktionieren der Website.</li>
              <li><strong>Analytische Cookies:</strong> Um die Nutzung der Website zu analysieren und zu verbessern.</li>
            </ul>
            <p className="mt-4">Sie können Cookies über die Einstellungen Ihres Browsers verwalten oder deaktivieren. Das Deaktivieren funktionaler Cookies kann die Funktionsfähigkeit der Website beeinträchtigen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">8. Sicherheit</h2>
            <p>
              IPTVSchweizer ergreift angemessene technische und organisatorische Maßnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Verlust, Zerstörung oder Änderung zu schützen. Trotz unserer Bemühungen kann keine Methode der elektronischen Speicherung oder Übertragung als vollständig sicher garantiert werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">9. Ihre Rechte</h2>
            <p className="mb-4">Gemäß der Datenschutz-Grundverordnung (DSGVO) haben Sie folgende Rechte:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Auskunftsrecht:</strong> Sie können anfragen, welche Daten wir über Sie verarbeiten.</li>
              <li><strong>Recht auf Berichtigung:</strong> Sie können die Korrektur unrichtiger Daten verlangen.</li>
              <li><strong>Recht auf Löschung:</strong> Sie können die Löschung Ihrer Daten beantragen.</li>
              <li><strong>Recht auf Einschränkung:</strong> Sie können die Einschränkung der Verarbeitung Ihrer Daten beantragen.</li>
              <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie können beantragen, Ihre Daten in einem strukturierten Format zu erhalten.</li>
              <li><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung Ihrer Daten widersprechen.</li>
              <li><strong>Recht auf Widerruf der Einwilligung:</strong> Sie können eine früher erteilte Einwilligung jederzeit widerrufen.</li>
            </ul>
            <p className="mt-4">
              Um Ihre Rechte auszuüben, können Sie uns über die unten stehenden Kontaktdaten erreichen. Wir antworten innerhalb von 30 Tagen auf Ihre Anfrage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">10. Beschwerden</h2>
            <p>
              Wenn Sie eine Beschwerde über die Verarbeitung Ihrer personenbezogenen Daten haben, können Sie uns kontaktieren. Darüber hinaus haben Sie das Recht, eine Beschwerde beim Bundesbeauftragten für den Datenschutz und die Informationsfreiheit (BfDI) einzureichen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">11. Änderungen</h2>
            <p>
              IPTVSchweizer behält sich das Recht vor, diese Datenschutzerklärung zu ändern. Änderungen werden auf dieser Seite veröffentlicht. Wir empfehlen Ihnen, diese Richtlinie regelmäßig zu überprüfen. Bei wesentlichen Änderungen werden wir Sie aktiv darüber informieren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">12. Kontakt</h2>
            <p>Für Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung Ihrer personenbezogenen Daten können Sie uns kontaktieren:</p>
            <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <p><strong>IPTVSchweizer</strong></p>
              <p>E-Mail: <a href="mailto:info@iptvschweizer.com" className="font-bold hover:underline" style={{ color: "#D52B1E" }}>info@iptvschweizer.com</a></p>
              <p>Telefon: <a href="tel:+447449708976" className="font-bold hover:underline" style={{ color: "#D52B1E" }}>+44 7449 708976</a></p>
              <p>WhatsApp: <a href="https://api.whatsapp.com/send/?phone=447449708976&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline" style={{ color: "#D52B1E" }}>+44 7449 708976</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
