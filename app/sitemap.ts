import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = ["", "/work", "/work/lattice-log", "/services", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: path ? `${site.url}${path}` : site.url,
    lastModified: "2026-09-28",
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
