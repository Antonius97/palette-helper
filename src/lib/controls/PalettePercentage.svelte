<script>
  import { colors } from "../../stores";
  import Color from "../color/Color";

  let primaryHEX = "#000000";
  let primaryTextHEX = "#000000";
  let secondaryHEX = "#000000";
  let secondaryTextHEX = "#000000";
  let accentHEX = "#000000";
  let accentTextHEX = "#000000";

  colors.subscribe(colorsObj => {
    const primary = colorsObj.primary;
    const primaryText = Color.Util.getTextColorFor(primary);
    const secondary = colorsObj.secondary;
    const secondaryText = Color.Util.getTextColorFor(secondary);
    const accent = colorsObj.accent;
    const accentText = Color.Util.getTextColorFor(accent);

    primaryHEX = Color.Converter.HSL2HEX(primary.h, primary.s, primary.l);
    secondaryHEX = Color.Converter.HSL2HEX(secondary.h, secondary.s, secondary.l);
    accentHEX = Color.Converter.HSL2HEX(accent.h, accent.s, accent.l);

    primaryTextHEX = Color.Converter.HSL2HEX(primaryText.h, primaryText.s, primaryText.l);
    secondaryTextHEX = Color.Converter.HSL2HEX(secondaryText.h, secondaryText.s, secondaryText.l);
    accentTextHEX = Color.Converter.HSL2HEX(accentText.h, accentText.s, accentText.l);
  })
</script>

<section>
  <p class="note__text">
    It is recommended to use colors in proportion 60/30/10
    (primary/secondary/accent accordingly)
  </p>

  <div class="palette-percentage">
    <div
      class="palette-percentage__item"
      style={`background-color: ${primaryHEX}; color: ${primaryTextHEX}; width: 60%;`}
    >
      Primary
    </div>
    <div
      class="palette-percentage__item"
      style={`background-color: ${secondaryHEX}; color: ${secondaryTextHEX}; width: 30%;`}
    >
      Secondary
    </div>
    <div
      class="palette-percentage__item"
      style={`background-color: ${accentHEX}; color: ${accentTextHEX}; width: 10%;`}
    >
      Accent
    </div>
  </div>
</section>

<style>
  .palette-percentage {
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-top: 1rem;
    margin-bottom: 3rem;
    box-shadow: 0 0.5rem 1rem 0 hsla(var(--palette-color-1), 10%);
  }

  .palette-percentage__item {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: var(--h5-size);
  }
</style>
