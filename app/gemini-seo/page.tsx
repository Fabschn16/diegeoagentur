import { PlatformPage } from "@/components/templates/PlatformPage";
import { platformPages } from "@/lib/platforms";
import { pageMeta } from "@/lib/seo";

const data = platformPages["gemini-seo"];

export const metadata = pageMeta({ title: data.metaTitle, description: data.metaDescription, path: "/gemini-seo" });

export default function Page() {
  return <PlatformPage data={data} />;
}
