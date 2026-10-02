import type { NextConfig } from "next";

/**
 * Statischer Export: `npm run build` erzeugt den Ordner `out/`,
 * der direkt auf Netlify hochgeladen werden kann (Drag & Drop oder Git).
 * Sicherheits-Header und Content-Types liegen in public/_headers.
 */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  output: "export",
  // /leistungen -> leistungen/index.html (zuverlässig auf jedem statischen Hosting)
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
