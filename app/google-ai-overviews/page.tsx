import { PlatformPage } from "@/components/templates/PlatformPage";
import { platformPages } from "@/lib/platforms";
import { pageMeta } from "@/lib/seo";

const data = platformPages["google-ai-overviews"];

export const metadata = pageMeta({ title: data.metaTitle, description: data.metaDescription, path: "/google-ai-overviews" });

export default function Page() {
  return <PlatformPage data={data} />;
}
