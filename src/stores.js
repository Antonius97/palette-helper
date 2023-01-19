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
  secondary: {h: 248, s: 83, l: 46},
  accent: {h: 348, s: 100, l: 53},
  light: {h: 0, s: 0, l: 97},
  dark: {h: 0, s: 0, l: 10}
});

export const paletteRefColor = writable({h: 248, s: 83, l: 46});

export const showSecondRefColor = writable(false);
export const paletteSecondRefColor = writable({h: 35, s: 100, l: 52.9});

export const fonts = writable({
  main: "sans-serif",
  heading: "serif"
});

export const preview = writable("photo-portfolio");