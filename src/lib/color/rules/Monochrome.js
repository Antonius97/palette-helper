export const description = "Monochrome";
export const key = description.replace(/ /g, "").toUpperCase();
export const needsSecondRefColor = false;

const MIN_L = 8;
const MAX_L = 98;

const COLORS_NUM = 10;

const colors = [...Array(COLORS_NUM)].map((base, i) => ({
  h: refColor => refColor.h,
  s: refColor => refColor.s,
  l: refColor => Math.round(MIN_L + (MAX_L - MIN_L) / Math.max(0, COLORS_NUM - 1) * i)
}));

export function generateColors(refColor) {
  const outColors = colors.map((color, i) => {
    return {
      description: `#${i + 1}`,
      hsl: {
        h: color.h(refColor),
        s: color.s(refColor),
        l: color.l(refColor),
      }
    };
  });

  return outColors
}