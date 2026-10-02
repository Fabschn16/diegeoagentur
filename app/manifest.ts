export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} – Generative Engine Optimization`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "browser",
    lang: "de-DE",
    background_color: "#f4f2ed",
    theme_color: "#10110f",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
