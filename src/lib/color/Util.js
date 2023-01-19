import * as Converter from "./Converter";

export function normHue(hue) {
  while (hue < 0) {
    hue += 360;
  }

  return Math.round(hue % 360);
}

export function normSaturation(saturation) {
  return Math.max(0, Math.min(100, Math.round(saturation * 100) / 100));
}

export function normBrightness(brightness) {
  return Math.max(0, Math.min(100, Math.round(brightness * 100) / 100));
}

export function normHSL(color) {
  return {
    h: normHue(color.h),
    s: normSaturation(color.s),
    l: normBrightness(color.l),
  };
}

export function getTextColorFor(color) {
  return {
    h: color.h,
    s: (color.s && Math.min(color.s + 35, 100)) || 0,
    l: color.l < 50 ? Math.min(color.l + 45, 100) : Math.max(color.l - 55, 0)
  }
}

function luminanceRGB(r, g, b) {
  var a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ?
      v / 12.92 :
      Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrastRGB(rgb1, rgb2) {
  var lum1 = luminanceRGB(rgb1[0], rgb1[1], rgb1[2]);
  var lum2 = luminanceRGB(rgb2[0], rgb2[1], rgb2[2]);

  var brightest = Math.max(lum1, lum2);
  var darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) /
    (darkest + 0.05);
}

function RGBTextToArray(rgb) {
  rgb = rgb.replace(/^\#/, "");

  const r = parseInt(rgb.slice(0, 2), 16);
  const g = parseInt(rgb.slice(2, 4), 16);
  const b = parseInt(rgb.slice(4, 6), 16);

  return [r, g, b]
}

export function contrast(colorA, colorB) {
  const colorARGB = RGBTextToArray(Converter.HSL2HEX(colorA.h, colorA.s, colorA.l));
  const colorBRGB = RGBTextToArray(Converter.HSL2HEX(colorB.h, colorB.s, colorB.l));

  return Math.round(contrastRGB(colorARGB, colorBRGB) * 100) / 100;
}