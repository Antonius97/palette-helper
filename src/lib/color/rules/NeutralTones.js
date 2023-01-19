import * as Util from '../Util';

export const description = "Neutral Tones";
export const key = description.replace(/ /g, "").toUpperCase();
export const needsSecondRefColor = false;

const MIN_SATURATION = 10;
const MAX_SATURATION = 10;
const MIN_BRIGHTNESS = 70;
const MID_BRIGHTNESS = 85;
const MAX_BRIGHTNESS = 99;

const COLORS_NUM = 30;

const getBrightness = i => i < 10 ? MAX_BRIGHTNESS : (i < 20 ? MID_BRIGHTNESS : MIN_BRIGHTNESS);

const colors = [...Array(COLORS_NUM)].map((base, i) => ({
  h: refColor => Util.normHue(refColor.h + 360 / COLORS_NUM * i * 3),
  s: refColor => i >= (COLORS_NUM / 2) ? MIN_SATURATION : MAX_SATURATION,
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