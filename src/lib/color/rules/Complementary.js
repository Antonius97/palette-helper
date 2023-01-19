import * as ColorUtil from "../Util";

export const description = "Complementary";
export const key = description.replace(/ /g, "").toUpperCase();
export const needsSecondRefColor = false;

const colors = [{
  h: refColor => refColor.h,
  s: refColor => refColor.s,
  l: refColor => 30,
}, {
  h: refColor => refColor.h,
  s: refColor => refColor.s,
  l: refColor => refColor.l,
}, {
  h: refColor => refColor.h,
  s: refColor => refColor.s,
  l: refColor => 90,
}, {
  h: refColor => ColorUtil.normHue(refColor.h + 180),
  s: refColor => refColor.s,
  l: refColor => 30,
}, {
  h: refColor => ColorUtil.normHue(refColor.h + 180),
  s: refColor => refColor.s,
  l: refColor => refColor.l,
}, {
  h: refColor => ColorUtil.normHue(refColor.h + 180),
  s: refColor => refColor.s,
  l: refColor => 90,
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