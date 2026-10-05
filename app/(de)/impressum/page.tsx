import { LegalPage } from "@/components/ui/LegalPage";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Impressum", description: `Impressum von ${site.name} – ein Angebot der ${site.legalEntity}.`, path: "/impressum", noindex: true });

export default function ImpressumPage() {
  const l = site.legal;
  return (
    <LegalPage title="Impressum" path="/impressum">
      <p>
        {site.name} ist ein Angebot der {site.legalEntity}.
      </p>
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        {site.legalEntity}
        <br />
        {site.address.street}
        <br />
        {site.address.postalCode} {site.address.city}
      </p>
      <p>
        <strong>Vertreten durch die Geschäftsführer:</strong> {l.managingDirectors.join(", ")}
      </p>
      <h2>Registereintrag</h2>
      <p>
        Eintragung im Handelsregister
        <br />
        Registergericht: {l.registerCourt}
        <br />
        Registernummer: {l.registerNumber}
      </p>
      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: {l.vatId}</p>
      <h2>Kontakt</h2>
      <p>
        Telefon: {site.phone}
        <br />
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Erreichbar: {l.hours}
      </p>
      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        {l.contentResponsible}
        <br />
        {site.address.street}, {site.address.postalCode} {site.address.city}
      </p>
      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Die
        Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">
          https://ec.europa.eu/consumers/odr/
        </a>
        .
      </p>
      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht
        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
        rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
        Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten
        Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese Inhalte umgehend.
      </p>
      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
        mögliche Rechtsverstöße überprüft. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer
        Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.
      </p>
      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Sollten Sie
        trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
        Rechtsverletzungen entfernen wir derartige Inhalte umgehend.
      </p>
    </LegalPage>
  );
}
