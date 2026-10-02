import { LegalPage } from "@/components/ui/LegalPage";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Datenschutz", description: `Datenschutzerklärung von ${site.name} – ${site.legalEntity}.`, path: "/datenschutz", noindex: true });

/**
 * Übernommen von dailyrocket.de/datenschutz (Stand Juni 2026), angepasst auf diegeoagentur.de.
 * Bei Livegang prüfen, ob die genannten Dienste (Hosting, Cookie-Banner, Analyse, Formular) auf dieser Website identisch eingesetzt werden.
 */
export default function DatenschutzPage() {
  const l = site.legal;
  return (
    <LegalPage title="Datenschutz" path="/datenschutz">
      <p>
        Diese Datenschutzerklärung gilt für die Website {site.url.replace("https://", "")} ({site.name}), ein Angebot der {site.legalEntity}.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        {site.legalEntity}
        <br />
        {site.address.street}, {site.address.postalCode} {site.address.city}
        <br />
        Telefon: {site.phone}
        <br />
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Erreichbar: {l.hours}
        <br />
        Geschäftsführer: {l.managingDirectors.join(", ")}
      </p>

      <h2>2. Übersicht der Verarbeitungen</h2>
      <p>Wir verarbeiten folgende Arten personenbezogener Daten:</p>
      <ul>
        <li>Kontaktdaten (z. B. Name, E-Mail-Adresse, Telefonnummer)</li>
        <li>Nutzungsdaten (z. B. IP-Adressen, besuchte Seiten, Zugriffszeiten, Klickverhalten)</li>
        <li>Kommunikationsdaten (Inhalte von Anfragen und Nachrichten)</li>
        <li>Vertragsdaten (z. B. Vertragsgegenstand, Laufzeit, Rechnungsdaten)</li>
        <li>Technische Daten (z. B. Browsertyp, Betriebssystem, Geräteinformationen)</li>
      </ul>
      <p>
        Die Verarbeitung erfolgt zur Bereitstellung der Website, zur Bearbeitung von Anfragen, zur Erbringung unserer Agenturleistungen, zur
        Webanalyse und zur Erfüllung rechtlicher Verpflichtungen.
      </p>

      <h2>3. Rechtsgrundlagen</h2>
      <ul>
        <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung</li>
        <li>Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung und vorvertragliche Maßnahmen</li>
        <li>Art. 6 Abs. 1 lit. c DSGVO – rechtliche Verpflichtungen, insbesondere Aufbewahrungspflichten</li>
        <li>Art. 6 Abs. 1 lit. f DSGVO – berechtigte Interessen</li>
      </ul>

      <h2>4. Sicherheitsmaßnahmen</h2>
      <p>
        Wir treffen geeignete technische und organisatorische Maßnahmen, um personenbezogene Daten zu schützen. Die Website wird verschlüsselt
        über HTTPS/TLS ausgeliefert. Intern gelten Zugriffskontrollen, regelmäßige Sicherheitsupdates und Vertraulichkeitsverpflichtungen.
      </p>

      <h2>5. Übermittlung in Drittländer</h2>
      <p>
        Einige der eingesetzten Dienste übermitteln Daten in Drittländer, insbesondere in die USA. Grundlage sind die
        EU-Standardvertragsklauseln gemäß Art. 46 DSGVO sowie – soweit der Anbieter zertifiziert ist – das EU-US Data Privacy Framework.
      </p>

      <h2>6. Cookies und Einwilligungsverwaltung</h2>
      <p>
        Wir verwenden ein Consent-Management-Tool (Real Cookie Banner, devowl.io GmbH), um Einwilligungen datenschutzkonform einzuholen und zu
        verwalten. Session-Cookies werden nach dem Schließen des Browsers gelöscht, dauerhafte Cookies bleiben für den jeweils angegebenen
        Zeitraum gespeichert. Einwilligungen können jederzeit über die Cookie-Einstellungen widerrufen werden. Der Nutzung zu Zwecken
        interessenbezogener Werbung können Sie zudem unter{" "}
        <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">
          youronlinechoices.eu
        </a>{" "}
        und{" "}
        <a href="https://optout.aboutads.info" target="_blank" rel="noopener">
          optout.aboutads.info
        </a>{" "}
        widersprechen.
      </p>

      <h2>7. Kontaktformulare</h2>
      <p>
        Wenn Sie uns über ein Formular kontaktieren oder einen KI-Sichtbarkeits-Check anfragen, verarbeiten wir Ihre Angaben (Name,
        Unternehmen, Website, E-Mail-Adresse, optional Telefonnummer und Nachricht) zur Bearbeitung Ihrer Anfrage. Die Formulardaten werden
        über Netlify Forms (Netlify, Inc., USA; zertifiziert nach dem EU-US Data Privacy Framework) entgegengenommen, gespeichert und per
        E-Mail an uns weitergeleitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bzw. unser berechtigtes Interesse an der Beantwortung von
        Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Wir löschen die Daten, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine
        gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>8. Geschäftliche Leistungen</h2>
      <p>
        Daten unserer Auftraggeber verarbeiten wir zur Erfüllung unserer vertraglichen Pflichten und gesetzlicher Vorgaben.
        Handelsrelevante Unterlagen bewahren wir sechs Jahre (§ 257 HGB), steuerrelevante Unterlagen zehn Jahre (§ 147 AO) auf.
      </p>

      <h2>9. Newsletter</h2>
      <p>
        Sofern Sie sich für einen Newsletter anmelden, erfolgt der Versand über Mailchimp (The Rocket Science Group LLC, USA; zertifiziert
        nach dem EU-US Data Privacy Framework) im Double-Opt-In-Verfahren. Sie können sich jederzeit abmelden. Den Nachweis Ihrer Einwilligung
        speichern wir für drei Jahre.
      </p>

      <h2>10. Webanalyse mit Google Analytics 4 und Google Tag Manager</h2>
      <p>
        Mit Ihrer Einwilligung setzen wir Google Analytics 4 und den Google Tag Manager (Google Ireland Limited) ein. IP-Adressen werden
        gekürzt, die Auswertung erfolgt pseudonymisiert. Sie können die Erfassung zusätzlich über das Browser-Add-on unter{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">
          tools.google.com/dlpage/gaoptout
        </a>{" "}
        verhindern.
      </p>

      <h2>11. Onlinemarketing</h2>
      <ul>
        <li>
          <strong>Google Ads:</strong> Conversion-Tracking mit Ihrer Einwilligung.
        </li>
        <li>
          <strong>LinkedIn Insight Tag:</strong> Analyse und Retargeting mit Ihrer Einwilligung. Widerspruch unter{" "}
          <a href="https://www.linkedin.com/psettings/guest-controls" target="_blank" rel="noopener">
            linkedin.com/psettings/guest-controls
          </a>
          .
        </li>
        <li>
          <strong>Meta Pixel:</strong> Mit Ihrer Einwilligung; gemeinsame Verantwortlichkeit mit Meta gemäß Art. 26 DSGVO. Speicherdauer
          höchstens zwei Jahre.
        </li>
      </ul>

      <h2>12. Social-Media-Präsenzen</h2>
      <p>
        Wir unterhalten Profile auf LinkedIn, Instagram/Facebook und YouTube. Die Betreiber der Plattformen verarbeiten die Daten der Besucher
        nach ihren eigenen Datenschutzbestimmungen.
      </p>

      <h2>13. Dienste von Drittanbietern</h2>
      <ul>
        <li>
          <strong>Schriftarten:</strong> Die Schriften dieser Website werden lokal ausgeliefert; es findet keine Verbindung zu Google Fonts statt.
        </li>
        <li>
          <strong>Calendly:</strong> Für Terminbuchungen (Calendly LLC, USA; abgesichert durch EU-Standardvertragsklauseln).
        </li>
        <li>
          <strong>Google Maps und YouTube:</strong> Bei Einbindung werden Daten erst nach Ihrer Einwilligung an Google übertragen.
        </li>
      </ul>

      <h2>14. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung
        (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Erteilte Einwilligungen können Sie jederzeit mit Wirkung für die
        Zukunft widerrufen. Zudem haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Zuständig ist das Bayerische Landesamt
        für Datenschutzaufsicht (BayLDA), Ansbach.
      </p>

      <h2>15. Hosting</h2>
      <p>
        Die Website wird bei Netlify, Inc. (USA; zertifiziert nach dem EU-US Data Privacy Framework) gehostet. Dabei werden Server-Logfiles
        (IP-Adresse, Zeitpunkt, aufgerufene URL, Browser) für höchstens 30 Tage gespeichert.
      </p>

      <p>
        <em>Stand: September 2026</em>
      </p>
    </LegalPage>
  );
}
