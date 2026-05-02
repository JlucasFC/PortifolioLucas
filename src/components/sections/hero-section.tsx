import { SplineSceneBasic } from "@/components/ui/demo";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[rgb(var(--portfolio-bg))] to-[rgb(var(--portfolio-accent-deep))/35]">
      <div className="h-full min-h-screen">
        <SplineSceneBasic />
      </div>
    </section>
  );
}
