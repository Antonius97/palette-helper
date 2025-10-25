import { writable } from 'svelte/store';
import Color from './lib/color/Color';

export const TABS = {
  COLOR: "color",
  TYPOGRAPHY: "typography",
  EXAMPLE: "example"
};

export const COLOR_MODELS = {
  RGB: "RGB",
  HEX: "HEX",
  HSL: "HSL"
};

export const dragged = writable(false);

export const PALLETE_RULES = Object.keys(Color.Rules)
  .reduce((map, key) => (map[key] = key, map), {});

export const activeControlTab = writable(TABS.COLOR);

export const activeColorModel = writable(COLOR_MODELS.HEX);

// @ts-ignore
export const activePalleteRule = writable(PALLETE_RULES?.GRADIENT);

export const colors = writable({
  primary: {h: 0, s: 0, l: 97},
  secondary: {h: 244, s: 100, l: 62},
  accent: {h: 6, s: 98.6, l: 71},
  light: {h: 0, s: 0, l: 97},
  dark: {h: 0, s: 0, l: 10},
  success: {h: 133, s: 60, l: 80},
  danger: {h: 331, s: 60, l: 80},
  warning: {h: 53, s: 60, l: 80},
  info: {h: 181, s: 60, l: 80}
});

export const paletteRefColor = writable({h: 248, s: 83, l: 46});

export const showSecondRefColor = writable(false);
export const paletteSecondRefColor = writable({h: 35, s: 100, l: 52.9});

export const fonts = writable({
  main: "sans-serif",
  heading: "serif"
});

export const preview = writable("photo-portfolio");