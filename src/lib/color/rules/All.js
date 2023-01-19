import * as Gradient from "./Gradient";
import * as Monochrome from "./Monochrome";
import * as Analogous from "./Analogous";
import * as Complementary from "./Complementary";
import * as SplitComplementary from "./SplitComplementary";
import * as Triadic from "./Triadic";
import * as Tetradic from "./Tetradic";
import * as MonochromeShift from "./MonochromeShift";
import * as JewelTones from "./JewelTones";
import * as PastelTones from "./PastelTones";
import * as EarthTones from "./EarthTones";
import * as NeutralTones from "./NeutralTones";
import * as FluorescentTones from "./FluorescentTones";
import * as Futur from "./Futur";

const rules = [Gradient, Monochrome, MonochromeShift, Analogous, Complementary,
  SplitComplementary, Triadic, Tetradic, JewelTones, PastelTones, EarthTones,
  NeutralTones, FluorescentTones, Futur];

const rulesMap = rules.reduce((map, rule) => (map[rule.key] = rule, map), {});

export default rulesMap;