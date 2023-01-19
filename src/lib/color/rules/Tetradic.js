import * as ColorUtil from "../Util";

export const description = "Tetradic";
export const key = description.replace(/ /g, "").toUpperCase();
export const needsSecondRefColor = false;

const colors = [{
  h: refColor => refColor.h,
  s: refColor => refColor.s,
  l: refColor => refColor.l,
}, {
  h: refColor => ColorUtil.normHue(refColor.h + 30),
  s: refColor => refColor.s,
  l: refColor => refColor.l,
}, {
  h: refColor => ColorUtil.normHue(refColor.h + 180),
  s: refColor => refColor.s,
  l: refColor => refColor.l,
}, {
  h: refColor => ColorUtil.normHue(refColor.h + 210),
  s: refColor => refColor.s,
  l: refColor => refColor.l,
}]

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