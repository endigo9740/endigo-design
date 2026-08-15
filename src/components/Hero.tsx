// Via: https://shaders.paper.design/mesh-gradient

import { MeshGradient } from "@paper-design/shaders-react";
import type { ReactNode } from "react";

// SVG fractal-noise texture used as a film-grain overlay on top of the shader,
// independent from the shader's own grainMixer/grainOverlay uniforms.
const NOISE_SVG = encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>" +
    "<filter id='n'>" +
    "<feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/>" +
    "</filter>" +
    "<rect width='100%' height='100%' filter='url(#n)'/>" +
    "</svg>",
);
const NOISE_URL = `url("data:image/svg+xml,${NOISE_SVG}")`;

// Full-spectrum iridescent "oil-slick" palette, all drawn from the Concord theme.
const THEME_COLORS = [
  "#0a0a0f", // near-black void (surface-950-ish)
  "#5865f2", // primary-500 (violet-blue)
  "#44a3f5", // tertiary-500 (cyan-blue)
  "#53f286", // success-500 (green)
  "#ffe758", // warning-500 (yellow)
  "#ee4044", // error-500 (red/orange)
  "#ec439e", // secondary-500 (magenta)
  "#0a0a0f", // near-black void
];

export interface HeroProps {
  /** Override the color stops (up to 10). Defaults to the theme palette. */
  colors?: string[];
  /** Power of organic noise distortion, 0–1. */
  distortion?: number;
  /** Power of vortex distortion, 0–1. */
  swirl?: number;
  /** Strength of grain distortion applied to shape edges, 0–1. */
  grainMixer?: number;
  /** Post-processing black/white grain overlay from the shader itself, 0–1. */
  grainOverlay?: number;
  /** Film-grain overlay intensity (separate CSS blend layer), 0 = off. 0–1. */
  grain?: number;
  /** Animation speed (0 = static). */
  speed?: number;
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
  swirl = 1,
  grainMixer = 0,
  grainOverlay = 0,
  grain = 1,
  speed = 0.2,
  frame = 0,
  fit = "cover",
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
    <header className="relative bg-surface-black p-4 py-16 md:p-20 overflow-hidden">
      <MeshGradient
        colors={colors}
        distortion={distortion}
        swirl={swirl}
        grainMixer={grainMixer}
        grainOverlay={grainOverlay}
        speed={speed}
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
      {grain > 0 && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: NOISE_URL,
            backgroundRepeat: "repeat",
            opacity: grain,
            mixBlendMode: "overlay",
            pointerEvents: "none",
          }}
        />
      )}
      <div className="relative flex flex-col items-center justify-center">
        {children}
      </div>
    </header>
  );
}
