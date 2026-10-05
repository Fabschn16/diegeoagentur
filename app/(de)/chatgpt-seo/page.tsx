import { PlatformPage } from "@/components/templates/PlatformPage";
import { platformPages } from "@/lib/platforms";
import { pageMeta } from "@/lib/seo";

const data = platformPages["chatgpt-seo"];

export const metadata = pageMeta({ title: data.metaTitle, description: data.metaDescription, path: "/chatgpt-seo" });

export default function Page() {
  return <PlatformPage data={data} />;
}
