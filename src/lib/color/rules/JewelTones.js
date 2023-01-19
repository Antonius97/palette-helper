import * as Util from '../Util';

export const description = "Jewel Tones";
export const key = description.replace(/ /g, "").toUpperCase();
export const needsSecondRefColor = false;

const MIN_SATURATION = 73;
const MAX_SATURATION = 83;
const MIN_BRIGHTNESS = 56;
const MAX_BRIGHTNESS = 76;

const COLORS_NUM = 20;

const colors = [...Array(COLORS_NUM)].map((base, i) => ({
  h: refColor => Util.normHue(refColor.h + 360 / COLORS_NUM * i * 2),
  s: refColor => i >= (COLORS_NUM / 2) ? MIN_SATURATION : MAX_SATURATION,
  l: refColor => i >= (COLORS_NUM / 2) ? MIN_BRIGHTNESS : MAX_BRIGHTNESS
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