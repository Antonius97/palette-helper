import * as Converter from '../Converter';

export const description = "Gradient";
export const key = description.replace(/ /g, "").toUpperCase();
export const needsSecondRefColor = true;

const COLORS_NUM = 10;

const NUM_COEF = 1 / (COLORS_NUM - 1);

function getMiddleValue(a, b, coef) {
  const diff = b - a;
  return Math.round(a + diff * coef);
}

function getMiddleColor(a, b, coef) {
  return {
    r: getMiddleValue(a.r, b.r, coef),
    g: getMiddleValue(a.g, b.g, coef),
    b: getMiddleValue(a.b, b.b, coef)
  }
}

export function generateColors(refColor, secondRefColor) {
  const refRGBO = Converter.HSL2RGBO(refColor.h, refColor.s, refColor.l);
  const secondRefRGBO = Converter.HSL2RGBO(secondRefColor.h, secondRefColor.s, secondRefColor.l);

  const outColors = [...Array(COLORS_NUM)].map((base, i) => {
    const colorRGBO = getMiddleColor(refRGBO, secondRefRGBO, i * NUM_COEF);
    const colorHEX = Converter.RGBO2HEX(colorRGBO.r, colorRGBO.g, colorRGBO.b);
    const colorHSL = Converter.HEX2HSL(colorHEX);

    return {
      description: `#${i + 1}`,
      hsl: colorHSL
    };
  });

  return outColors
}