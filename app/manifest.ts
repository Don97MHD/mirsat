import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mirsat TV",
    short_name: "Mirsat TV",
    description: "اشتراك IPTV عربي للعرب في أوروبا",
    start_url: "/",
    display: "standalone",
    background_color: "#05040a",
    theme_color: "#ff983d",
    lang: "ar",
    dir: "rtl",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
