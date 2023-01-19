import * as ColorUtil from "../Util";

export const description = "Analogous";
export const key = description.replace(/ /g, "").toUpperCase();
export const needsSecondRefColor = false;

const colors = [-60, 0, 60]
  .map(h => ({
    h: refColor => ColorUtil.normHue(refColor.h + h),
    s: refColor => refColor.s,
    l: refColor => refColor.l
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