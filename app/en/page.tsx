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
import { FaqSection } from "@/components/sections/FaqSection";
import { Insights } from "@/components/sections/Insights";
import { HubTeaser } from "@/components/sections/HubTeaser";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { mainFaq } from "@/lib/en/faq";
import { graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { siteEn } from "@/lib/en/site";
import { pageMeta } from "@/lib/seo";

const HOME_TITLE = "GEO Agency for Generative Engine Optimization | Die GEO Agentur";
const HOME_DESC =
  "Die GEO Agentur optimises websites and brands for ChatGPT, Gemini, Perplexity and Google AI Overviews, with GEO Audits, AI SEO and AI Visibility Monitoring. Free AI visibility check.";

export const metadata = {
  ...pageMeta({
    title: HOME_TITLE,
    description: HOME_DESC,
    path: "/en",
  }),
  title: { absolute: HOME_TITLE },
};

export default function HomePageEn() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/en", title: HOME_TITLE, description: HOME_DESC, about: ["Generative Engine Optimization", "AI search engine optimisation", "AI Visibility"] }),
          serviceSchema({
            name: "Generative Engine Optimization (GEO)",
            serviceType: "AI search engine optimisation",
            description: siteEn.description,
            path: "/en/services",
          }),
        )}
      />
      <Hero locale="en" />
      <PlatformStrip locale="en" />
      <WhatWeDo locale="en" />
      <ShiftSection locale="en" />
      <WhatIsGeo locale="en" />
      <PeopleBand locale="en" />
      <Services locale="en" />
      <Process locale="en" />
      <AuditSection index="05" locale="en" />
      <Team locale="en" />
      <WhyUs locale="en" />
      <Insights locale="en" />
      <FaqSection items={mainFaq} index="09" path="/en" locale="en" />
      <HubTeaser locale="en" />
      <CtaBand locale="en" />
    </>
  );
}
