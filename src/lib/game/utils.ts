// Reference: https://www.trysmudford.com/blog/linear-interpolation-functions/

// Returns the value between two numbers at a specified decimal midpoint
export const lerp = (start: number, end: number, val: number) => start * (1 - val) + end * val;

// Contrains results between a min and max
export const clamp = (val: number, min: number = 0, max: number = 1) => Math.min(max, Math.max(min, val));

// Pass any value, and it’ll return that decimal, wherever it falls on that spectrum (includes clamp)
export const invlerp = (start: number, end: number, val: number) => clamp((val - start) / (end - start));

// Converts a value from one data range to another.
export const range = (x1: number, y1: number, x2: number, y2: number, val: number) => lerp(x2, y2, invlerp(x1, y1, val));