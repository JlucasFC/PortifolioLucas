import { GlassmorphismPortfolioBlock } from "@/components/ui/glassmorphism-portfolio-block-shadcnui";
import type { SiteLinks } from "@/types/site-links";

type AboutSectionProps = {
  siteLinks: SiteLinks;
};

export function AboutSection({ siteLinks }: AboutSectionProps) {
  return <GlassmorphismPortfolioBlock siteLinks={siteLinks} />;
}
