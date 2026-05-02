'use client';

import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneBasic() {
  return (
    <Card className="relative flex min-h-screen max-h-screen w-full overflow-hidden border-[rgb(var(--portfolio-border))] bg-black/[0.96] px-6">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgb(var(--portfolio-accent))" />

      <div className="flex min-h-screen h-full flex-col md:flex-row">
        <div className="relative z-10 flex flex-1 flex-col justify-center p-8">
          <h2 className="bg-gradient-to-b from-[rgb(var(--portfolio-fg))] to-[rgb(var(--portfolio-muted))] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">desenvolvedor full stack</h2>
          <h1 className="bg-gradient-to-b from-[rgb(var(--portfolio-fg))] to-[rgb(var(--portfolio-muted))] bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
            Lucas Chaves 
          </h1>
          <p className="mt-4 max-w-lg text-[rgb(var(--portfolio-muted))]">
            Portifolio profissional com foco em performance, escalabilidade e
            produtos digitais bem construidos.
          </p>
        </div>

        <div className="relative flex-1">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </div>
    </Card>
  );
}
