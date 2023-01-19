import * as Util from '../Util';
import * as Converter from '../Converter';

export const description = "Futur";
export const key = description.replace(/ /g, "").toUpperCase();
export const needsSecondRefColor = true;

const HUE_RANGE = 70;
const MID_COLORS_NUM = 10;

const LIGHT_HUE_DELTA = -10;
const LIGHT_SATURATION_DELTA = -17;
const LIGHT_BRIGHTNESS_COEF = 0.3;

const DARK_HUE_DELTA = 12;
const DARK_SATURATION_DELTA = 17;
const DARK_BRIGHTNESS_COEF = 0.3;

const OVERLAY_COEF = 0.7;

const coefToRad = coef => (20 + coef * 70) * (Math.PI / 180);

const coefToHue = coef => HUE_RANGE - coef * HUE_RANGE * 2;
const coefToSaturation = coef => Math.round(Math.sin(coefToRad(coef)) * 100);
const coefToBrightness = coef => Math.round(Math.cos(coefToRad(coef)) * 100);

const hueToLight = hue => hue + LIGHT_HUE_DELTA;
const saturationToLight = saturation => Math.max(0, saturation + LIGHT_SATURATION_DELTA);
const brightnessToLight = brightness => brightness + (100 - brightness) * LIGHT_BRIGHTNESS_COEF;

const hueToDark = hue => hue + DARK_HUE_DELTA;
const saturationToDark = saturation => Math.min(100, saturation + DARK_SATURATION_DELTA);
const brightnessToDark = brightness => brightness - brightness * DARK_BRIGHTNESS_COEF;


const getMiddleValue = (a, b, coef) => Math.round(a + (b - a) * coef);
const channelToPerc = val => val / 255;
const percToChannel = val => val * 255;


const mergeChannel = (baseValue, refValue) => {
  const baseP = channelToPerc(baseValue);
  const refP = channelToPerc(refValue);

  const resP = baseP < 0.5 ? 2 * baseP * refP : 1 - (2 * (1 - baseP) * (1 - refP));
  return Math.round(percToChannel(resP));
};

const overlayColor = (baseColor, refColor) => {
  const baseRGBO = Converter.HSL2RGBO(baseColor.h, baseColor.s, baseColor.l);
  const refRGBO = Converter.HSL2RGBO(refColor.h, refColor.s, refColor.l);

  const blendRGBO = {
    r: getMiddleValue(baseRGBO.r, refRGBO.r, OVERLAY_COEF),
    g: getMiddleValue(baseRGBO.g, refRGBO.g, OVERLAY_COEF),
    b: getMiddleValue(baseRGBO.b, refRGBO.b, OVERLAY_COEF),
  };

  const resultRGBO = {
    r: mergeChannel(baseRGBO.r, blendRGBO.r),
    g: mergeChannel(baseRGBO.g, blendRGBO.g),
    b: mergeChannel(baseRGBO.b, blendRGBO.b),
  };

  const resultHEX = Converter.RGBO2HEX(resultRGBO.r, resultRGBO.g, resultRGBO.b);
  const resultHSL = Converter.HEX2HSL(resultHEX);

  return resultHSL;
};


export function generateColors(refColor, secondaryColor) {
  const basicPalette = [...Array(MID_COLORS_NUM)].map((base, i) => ({
    h: Util.normHue(refColor.h + coefToHue(i / MID_COLORS_NUM)),
    s: coefToSaturation(i / MID_COLORS_NUM),
    l: coefToBrightness(i / MID_COLORS_NUM)
  }));

  const lightPalette = basicPalette.map(color => ({
    h: Util.normHue(hueToLight(color.h)),
    s: saturationToLight(color.s),
    l: brightnessToLight(color.l)
  }));

  const darkPalette = basicPalette.map(color => ({
    h: Util.normHue(hueToDark(color.h)),
    s: saturationToDark(color.s),
    l: brightnessToDark(color.l)
  }));

  const colors = lightPalette.concat(basicPalette, darkPalette)
    .map(color => Util.normHSL(color));

  const colorsWithOverlay = colors.map(color => overlayColor(color, secondaryColor));

  const outColors = colorsWithOverlay.map((color, i) => {
    return {
      description: `#${i + 1}`,
      hsl: color
    };
  });

  return outColors
}