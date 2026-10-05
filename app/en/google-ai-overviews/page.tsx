import { PlatformPage } from "@/components/templates/PlatformPage";
import { platformPagesEn } from "@/lib/en/platforms";
import { pageMeta } from "@/lib/seo";

const data = platformPagesEn["google-ai-overviews"];

export const metadata = pageMeta({ title: data.metaTitle, description: data.metaDescription, path: "/en/google-ai-overviews" });

export default function Page() {
  return <PlatformPage data={data} locale="en" />;
}
