'use client';

import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneBasic() {
  return (
    <Card className="relative flex min-h-screen w-full overflow-hidden border-slate-800 bg-black/[0.96] px-6">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="flex min-h-screen h-full flex-col md:flex-row">
        <div className="relative z-10 flex flex-1 flex-col justify-center p-8">
          <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
            Lucas Chaves desenvolvedor full stack
          </h1>
          <p className="mt-4 max-w-lg text-neutral-300">
            Portfolio profissional com foco em performance, escalabilidade e
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
