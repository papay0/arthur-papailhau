import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arthur Papailhau | ArthurGPT Portfolio",
    short_name: "ArthurGPT",
    description:
      "Senior Software Engineer & Founder. Previously Tech Lead at Meta AI and Uber.",
    start_url: "/",
    display: "standalone",
    background_color: "#212121",
    theme_color: "#2563eb",
    orientation: "portrait-primary",
    categories: ["portfolio", "technology", "business"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
