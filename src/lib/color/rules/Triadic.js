import * as ColorUtil from "../Util";

export const description = "Triadic";
export const key = description.replace(/ /g, "").toUpperCase();
export const needsSecondRefColor = false;

const DARK_L = 30;

const colors = [{
  h: refColor => ColorUtil.normHue(refColor.h - 150),
  s: refColor => refColor.s,
  l: refColor => refColor.l,
}, {
  h: refColor => refColor.h,
  s: refColor => refColor.s,
  l: refColor => refColor.l,
}, {
  h: refColor => ColorUtil.normHue(refColor.h + 150),
  s: refColor => refColor.s,
  l: refColor => refColor.l,
},{
  h: refColor => ColorUtil.normHue(refColor.h - 150),
  s: refColor => refColor.s,
  l: refColor => DARK_L,
}, {
  h: refColor => refColor.h,
  s: refColor => refColor.s,
  l: refColor => DARK_L,
}, {
  h: refColor => ColorUtil.normHue(refColor.h + 150),
  s: refColor => refColor.s,
  l: refColor => DARK_L,
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