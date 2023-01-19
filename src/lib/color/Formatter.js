export function formatRGB(color) {
  return `rgb(${color?.h}, ${color?.s}%, ${color?.l}%)`;
}

export function formatHSL(color) {
  return `hsl(${color?.h}, ${color?.s}%, ${color?.l}%)`;
}

export function formatHEX(color) {
  return `#${color?.r?.toString(16)}${color?.g?.toString(16)}${color?.b?.toString(16)}`.toUpperCase();
}