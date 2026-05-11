import { promises as fs } from "node:fs";
import path from "node:path";
import type { SiteLinks, SiteLinksInput } from "@/types/site-links";

const siteLinksFilePath = path.join(process.cwd(), "src/data/site-links.json");

const defaultSiteLinks: SiteLinks = {
  linkedinUrl: "https://www.linkedin.com/in/lucas-chaves-2a9260254/",
  whatsappUrl: "https://dribbble.com/caspermotion",
  contactUrl: "mailto:contato@jlucas.dev",
  contactLabel: "contato@jlucas.dev",
};

async function ensureSiteLinksFile() {
  try {
    await fs.access(siteLinksFilePath);
  } catch {
    await fs.writeFile(siteLinksFilePath, JSON.stringify(defaultSiteLinks, null, 2), "utf-8");
  }
}

export async function getSiteLinks(): Promise<SiteLinks> {
  await ensureSiteLinksFile();
  const data = await fs.readFile(siteLinksFilePath, "utf-8");
  return {
    ...defaultSiteLinks,
    ...(JSON.parse(data) as Partial<SiteLinks>),
  };
}

export async function updateSiteLinks(input: SiteLinksInput) {
  await fs.writeFile(siteLinksFilePath, JSON.stringify(input, null, 2), "utf-8");
}
