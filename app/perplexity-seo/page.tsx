import { PlatformPage } from "@/components/templates/PlatformPage";
import { platformPages } from "@/lib/platforms";
import { pageMeta } from "@/lib/seo";

const data = platformPages["perplexity-seo"];

export const metadata = pageMeta({ title: data.metaTitle, description: data.metaDescription, path: "/perplexity-seo" });

export default function Page() {
  return <PlatformPage data={data} />;
}
