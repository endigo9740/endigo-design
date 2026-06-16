// Via: https://shaders.paper.design/warp

import { Warp } from "@paper-design/shaders-react";
import type { ReactNode } from "react";

// SVG fractal-noise texture used as a film-grain overlay on top of the shader.
// Warp has no built-in grain param, so we composite this layer with a blend mode.
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
  /** Blend point between colors, 0.5 = equal distribution. 0–1. */
  proportion?: number;
  /** Color transition sharpness, 0 = hard edge, 1 = smooth gradient. 0–1. */
  softness?: number;
  /** Base pattern the warp flows over. */
  shape?: "checks" | "stripes" | "edge";
  /** Zoom level of the base pattern, 0–1. */
  shapeScale?: number;
  /** Strength of noise-based distortion, 0–1. */
  distortion?: number;
  /** Strength of the swirl distortion, 0–1. */
  swirl?: number;
  /** Number of layered swirl passes (more = more intricate ribbons), 0–20. */
  swirlIterations?: number;
  /** Film-grain overlay intensity, 0 = off. 0–1. */
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
  proportion = 0.5,
  softness = 1,
  shape = "checks",
  shapeScale = 0.1,
  distortion = 0.25,
  swirl = 0.8,
  swirlIterations = 10,
  grain = 1,
  speed = 0.3,
  frame = 0,
  fit = "cover",
  scale = 2.5,
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
    <header className="relative bg-surface-black p-4 py-20 md:p-20 overflow-hidden">
      <Warp
        colors={colors}
        proportion={proportion}
        softness={softness}
        shape={shape}
        shapeScale={shapeScale}
        distortion={distortion}
        swirl={swirl}
        swirlIterations={swirlIterations}
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
