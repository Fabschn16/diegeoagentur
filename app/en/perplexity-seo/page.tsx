import { PlatformPage } from "@/components/templates/PlatformPage";
import { platformPagesEn } from "@/lib/en/platforms";
import { pageMeta } from "@/lib/seo";

const data = platformPagesEn["perplexity-seo"];

export const metadata = pageMeta({ title: data.metaTitle, description: data.metaDescription, path: "/en/perplexity-seo" });

export default function Page() {
  return <PlatformPage data={data} locale="en" />;
}
