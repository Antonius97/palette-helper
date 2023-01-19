/**
 * It takes in a hue, saturation, and lightness value and returns a string of the rgb value
 * @param {number} h - Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, 240 is blue.
 * @param {number} s - saturation (0-100)
 * @param {number} l - lightness
 * @returns A string of rgb values
 */
export function HSL2RGB(h, s, l) {
  // Must be fractions of 1
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return `rgb(${r}, ${g}, ${b})`;
};


/**
 * It takes in three numbers, representing the hue, saturation, and lightness of a color, and returns a
 * string representing the hexadecimal value of that color
 * @param {number} h - The hue of the color. This is a number between 0 and 360.
 * @param {number} s - saturation (0-100)
 * @param {number} l - lightness
 * @returns the hexadecimal value of the color.
 */
export function HSL2HEX(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  // Having obtained RGB, convert channels to hex
  let rS = Math.round((r + m) * 255).toString(16);
  let gS = Math.round((g + m) * 255).toString(16);
  let bS = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (rS.length === 1)
    rS = "0" + rS;
  if (gS.length === 1)
    gS = "0" + gS;
  if (bS.length === 1)
    bS = "0" + bS;

  return ("#" + r + g + b).toUpperCase();
}

/**
 * Convert HSL to RGB, then convert RGB to object.
 * 
 * The first part of the function is the HSL to RGB conversion. The second part is the RGB to
 * object conversion
 * @param {number} h - Hue (0-360)
 * @param {number} s - saturation (0-100)
 * @param {number} l - lightness
 * @returns An object with the properties r, g, and b.
 */
export function HSL2RGBO(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return {
    r,
    g,
    b
  };
}



/**
 * It takes a hex color and returns an object with the hue, saturation, and lightness values
 * @param H - The hexadecimal color value.
 * @returns An object with the properties h, s, and l.
 */
export function HEX2HSL(H) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(H);

  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);

  r /= 255, g /= 255, b /= 255;

  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }
  return {
    h,
    s,
    l
  }
}


/**
 * It takes three numbers, converts them to hexadecimal, and returns the result
 * @param r - The red value of the color, from 0 to 255.
 * @param g - The green value of the color.
 * @param b - The blue value of the color, from 0 to 255.
 * @returns A hexadecimal color code.
 */
export function RGBO2HEX(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  // Prepend 0s, if necessary
  if (r.length === 1)
    r = "0" + r;
  if (g.length === 1)
    g = "0" + g;
  if (b.length === 1)
    b = "0" + b;

  return ("#" + r + g + b).toUpperCase();
}