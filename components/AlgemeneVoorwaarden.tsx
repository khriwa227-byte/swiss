
import React from 'react';

export const AlgemeneVoorwaarden: React.FC = () => {
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
          Allgemeine Geschäftsbedingungen
        </h1>
        <div className="space-y-12 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">1. Definitionen</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>IPTVSchweizer</strong>: der Anbieter von IPTV-Diensten, mit Sitz in der Schweiz.</li>
              <li><strong>Kunde</strong>: die natürliche oder juristische Person, die ein Abonnement bei IPTVSchweizer abschließt.</li>
              <li><strong>Dienst</strong>: das IPTV-Abonnement und alle zugehörigen Dienste, die von IPTVSchweizer angeboten werden.</li>
              <li><strong>Abonnement</strong>: die Vereinbarung zwischen IPTVSchweizer und dem Kunden zur Nutzung des Dienstes für einen bestimmten Zeitraum.</li>
              <li><strong>Gerät</strong>: jedes Gerät (Smart TV, Smartphone, Tablet, Laptop oder anderes kompatibles Gerät), auf dem der Dienst genutzt wird.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">2. Anwendbarkeit</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Diese AGB gelten für alle Angebote, Vereinbarungen und Dienstleistungen von IPTVSchweizer.</li>
              <li>Durch den Abschluss eines Abonnements stimmt der Kunde diesen Bedingungen zu.</li>
              <li>IPTVSchweizer behält sich das Recht vor, diese Bedingungen zu ändern. Änderungen werden mindestens 30 Tage im Voraus angekündigt.</li>
              <li>Abweichungen von diesen Bedingungen sind nur gültig, wenn sie schriftlich vereinbart wurden.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">3. Abonnements und Preise</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>IPTVSchweizer bietet verschiedene Abonnementformen an, darunter Prime (12 Monate), Popular (6 Monate) und Basic (1 Monat).</li>
              <li>Die aktuellen Preise sind auf der Website aufgeführt und können je nach Abonnementform und Anzahl der Geräte variieren.</li>
              <li>Preise verstehen sich inklusive Mehrwertsteuer, sofern nicht anders angegeben.</li>
              <li>IPTVSchweizer behält sich das Recht vor, Preise anzupassen. Bestehende Abonnements werden erst bei Verlängerung angepasst.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">4. Bestellung und Zahlung</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Bestellungen werden über WhatsApp oder andere von IPTVSchweizer angebotene Kanäle aufgegeben.</li>
              <li>Nach Zahlungseingang wird das Abonnement aktiviert und der Kunde erhält die erforderlichen Zugangsdaten.</li>
              <li>IPTVSchweizer akzeptiert die auf der Website aufgeführten Zahlungsmethoden.</li>
              <li>Alle Zahlungen sind endgültig. Rückerstattungen werden ausschließlich gemäß Artikel 8 dieser Bedingungen gewährt.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">5. Nutzung des Dienstes</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Der Kunde darf den Dienst ausschließlich auf der Anzahl von Geräten nutzen, die zum gewählten Abonnement gehören.</li>
              <li>Es ist nicht gestattet, Zugangsdaten mit Dritten außerhalb des eigenen Haushalts zu teilen.</li>
              <li>Die Nutzung des Dienstes für kommerzielle Zwecke ist verboten, sofern nicht schriftlich vereinbart.</li>
              <li>Der Kunde ist für die Sicherung seiner Zugangsdaten verantwortlich.</li>
              <li>Bei Missbrauch oder Verstoß gegen diese Bedingungen kann IPTVSchweizer das Abonnement sofort ohne Rückerstattung beenden.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">6. Verfügbarkeit und Qualität</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>IPTVSchweizer strebt eine Verfügbarkeit von 99,9 % an, kann jedoch keine ununterbrochene Dienstleistung garantieren.</li>
              <li>Geplante Wartungsarbeiten werden, wo möglich, im Voraus angekündigt.</li>
              <li>IPTVSchweizer haftet nicht für Unterbrechungen, die durch Umstände außerhalb ihrer Kontrolle verursacht werden, einschließlich Störungen bei Dritten, Internetproblemen oder höherer Gewalt.</li>
              <li>Das Senderangebot kann ohne vorherige Ankündigung geändert werden.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">7. Laufzeit und Kündigung</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Das Abonnement hat die beim Abschluss gewählte Laufzeit (1, 6 oder 12 Monate).</li>
              <li>Das Abonnement verlängert sich nicht automatisch. Der Kunde muss nach Ablauf selbst ein neues Abonnement abschließen.</li>
              <li>IPTVSchweizer kann das Abonnement bei Verstoß gegen diese Bedingungen durch den Kunden sofort beenden.</li>
              <li>Der Kunde kann das Abonnement jederzeit kündigen, hat jedoch keinen Anspruch auf Rückerstattung bereits bezahlter Beträge, sofern in Artikel 8 nicht anders geregelt.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">8. Widerrufsrecht und Rückerstattung</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Der Kunde hat das Recht, das Abonnement innerhalb von 14 Tagen nach Aktivierung ohne Angabe von Gründen zu widerrufen.</li>
              <li>Um das Widerrufsrecht auszuüben, muss der Kunde IPTVSchweizer per WhatsApp oder E-Mail kontaktieren.</li>
              <li>Bei Widerruf innerhalb der genannten Frist wird der gesamte Betrag erstattet.</li>
              <li>Nach Ablauf der Widerrufsfrist ist eine Rückerstattung nicht mehr möglich.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">9. Haftung</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>IPTVSchweizer haftet nicht für indirekte Schäden, Folgeschäden oder entgangene Gewinne.</li>
              <li>Die Gesamthaftung von IPTVSchweizer ist auf den Betrag begrenzt, den der Kunde für das laufende Abonnement bezahlt hat.</li>
              <li>IPTVSchweizer haftet nicht für Schäden, die durch die Nutzung des Dienstes auf nicht kompatiblen Geräten entstehen.</li>
              <li>Der Kunde stellt IPTVSchweizer von Ansprüchen Dritter frei, die im Zusammenhang mit der Nutzung des Dienstes stehen.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">10. Datenschutz</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>IPTVSchweizer verarbeitet personenbezogene Daten gemäß der Datenschutz-Grundverordnung (DSGVO).</li>
              <li>Personenbezogene Daten werden ausschließlich für die Erbringung des Dienstes und die Kommunikation mit dem Kunden verwendet.</li>
              <li>IPTVSchweizer gibt keine personenbezogenen Daten an Dritte weiter, sofern dies nicht für die Durchführung des Dienstes erforderlich oder gesetzlich vorgeschrieben ist.</li>
              <li>Weitere Informationen finden Sie in unserer Datenschutzerklärung.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">11. Geistiges Eigentum</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Alle Rechte an geistigem Eigentum in Bezug auf die Website, die Marke und den Dienst liegen bei IPTVSchweizer.</li>
              <li>Es ist dem Kunden nicht gestattet, Materialien von IPTVSchweizer ohne schriftliche Genehmigung zu kopieren, zu verbreiten oder anderweitig zu nutzen.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">12. Beschwerden und Streitigkeiten</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Beschwerden können per WhatsApp oder E-Mail an <a href="mailto:info@iptvschweizer.com" className="font-bold hover:underline" style={{ color: "#D52B1E" }}>info@iptvschweizer.com</a> eingereicht werden.</li>
              <li>IPTVSchweizer ist bestrebt, Beschwerden innerhalb von 7 Werktagen zu bearbeiten.</li>
              <li>Auf diese Bedingungen findet niederländisches Recht Anwendung.</li>
              <li>Streitigkeiten werden dem zuständigen Gericht in der Schweiz vorgelegt.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">13. Kontakt</h2>
            <p>Für Fragen zu diesen AGB können Sie uns kontaktieren:</p>
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
