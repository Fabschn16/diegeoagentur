import { Hero } from "@/components/sections/Hero";
import { PlatformStrip } from "@/components/sections/PlatformStrip";
import { ShiftSection } from "@/components/sections/ShiftSection";
import { WhatIsGeo } from "@/components/sections/WhatIsGeo";
import { PeopleBand } from "@/components/sections/PeopleBand";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { AuditSection } from "@/components/sections/AuditSection";
import { Team } from "@/components/sections/Team";
import { WhyUs } from "@/components/sections/WhyUs";
import { Insights } from "@/components/sections/Insights";
import { FaqSection } from "@/components/sections/FaqSection";
import { HubTeaser } from "@/components/sections/HubTeaser";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { mainFaq } from "@/lib/faq";
import { graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

const HOME_TITLE = "GEO Agentur für Generative Engine Optimization | Die GEO Agentur";
const HOME_DESC =
  "Die GEO Agentur aus Passau optimiert Websites und Marken für ChatGPT, Gemini, Perplexity und Google AI Overviews – mit GEO Audit, KI-SEO und AI Visibility Monitoring. Kostenloser KI-Sichtbarkeits-Check.";

export const metadata = {
  ...pageMeta({
    title: HOME_TITLE,
    description: HOME_DESC,
    path: "/",
  }),
  title: { absolute: HOME_TITLE },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/", title: HOME_TITLE, description: HOME_DESC, about: ["Generative Engine Optimization", "KI-Suchmaschinenoptimierung", "AI Visibility"] }),
          serviceSchema({
            name: "Generative Engine Optimization (GEO)",
            serviceType: "KI-Suchmaschinenoptimierung",
            description: site.description,
            path: "/leistungen",
          }),
        )}
      />
      <Hero />
      <PlatformStrip />
      <WhatWeDo />
      <ShiftSection />
      <WhatIsGeo />
      <PeopleBand />
      <Services />
      <Process />
      <AuditSection index="05" />
      <Team />
      <WhyUs />
      <Insights />
      <FaqSection items={mainFaq} index="09" path="/" />
      <HubTeaser />
      <CtaBand />
    </>
  );
}
