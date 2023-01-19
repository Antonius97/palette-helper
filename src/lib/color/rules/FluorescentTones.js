import * as Util from '../Util';

export const description = "Fluorescent Tones";
export const key = description.replace(/ /g, "").toUpperCase();
export const needsSecondRefColor = false;

const MIN_SATURATION = 63;
const MAX_SATURATION = 100;
const MIN_BRIGHTNESS = 70;
const MAX_BRIGHTNESS = 95;

const COLORS_NUM = 40;

const getSaturation = i => i < 10 || (i > 19 && i < 30) ? MIN_SATURATION : MAX_SATURATION;
const getBrightness = i => i < 20 ? MAX_BRIGHTNESS : MIN_BRIGHTNESS;

const colors = [...Array(COLORS_NUM)].map((base, i) => ({
  h: refColor => Util.normHue(refColor.h + 360 / COLORS_NUM * i * (COLORS_NUM / 10)),
  s: refColor => getSaturation(i),
  l: refColor => getBrightness(i)
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