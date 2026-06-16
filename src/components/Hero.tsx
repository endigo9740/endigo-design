// Via: https://shaders.paper.design/mesh-gradient

import { MeshGradient } from "@paper-design/shaders-react";
import type { ReactNode } from "react";

const THEME_COLORS = [
  "#5865f2", // primary-500
  "#ec439e", // secondary-500
  "#44a3f5", // tertiary-500
  "#53f286", // success-500
  // "#ffe758", // warning-500
  // "#ee4044", // error-500
];

export interface HeroProps {
  /** Override the color stops (up to 10). Defaults to the theme palette. */
  colors?: string[];
  /** Organic noise strength, 0–1. */
  distortion?: number;
  /** Vortex distortion power, 0–1. */
  swirl?: number;
  /** Animation speed (0 = static). */
  speed?: number;
  /** Strength of grain distortion applied to shape edges, 0–1. */
  grainMixer?: number;
  /** Post-processing grain intensity, 0–1. */
  grainOverlay?: number;
  /** Starting frame offset for deterministic results. */
  frame?: number;
  /** How the graphic fits the canvas. */
  fit?: "none" | "contain" | "cover";
  /** Overall zoom level, 0.01–4. */
  scale?: number;
  /** Overall rotation angle in degrees, 0–360. */
  rotation?: number;
  /** Horizontal reference point for positioning, 0–1. */
  originX?: number;
  /** Vertical reference point for positioning, 0–1. */
  originY?: number;
  /** Horizontal offset of the graphic center, -1 to 1. */
  offsetX?: number;
  /** Vertical offset of the graphic center, -1 to 1. */
  offsetY?: number;
  /** Virtual width before scaling to fit the canvas (0 = auto). */
  worldWidth?: number;
  /** Virtual height before scaling to fit the canvas (0 = auto). */
  worldHeight?: number;
  /** Content rendered above the gradient. */
  children?: ReactNode;
}

export default function Hero({
  colors = THEME_COLORS,
  distortion = 0.8,
  swirl = 0.9,
  speed = 0.5,
  grainMixer = 0,
  grainOverlay = 0.25,
  frame = 0,
  fit = "contain",
  scale = 1,
  rotation = 0,
  originX = 0.5,
  originY = 0.5,
  offsetX = 0,
  offsetY = 0,
  worldWidth = 0,
  worldHeight = 0,
  children,
}: HeroProps) {
  return (
    <header className="relative bg-surface-black p-4 py-20 md:p-20  overflow-hidden">
      <MeshGradient
        colors={colors}
        distortion={distortion}
        swirl={swirl}
        speed={speed}
        grainMixer={grainMixer}
        grainOverlay={grainOverlay}
        frame={frame}
        fit={fit}
        scale={scale}
        rotation={rotation}
        originX={originX}
        originY={originY}
        offsetX={offsetX}
        offsetY={offsetY}
        worldWidth={worldWidth}
        worldHeight={worldHeight}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <div className="relative flex min-h-56 flex-col items-center justify-center">
        {children}
      </div>
    </header>
  );
}
