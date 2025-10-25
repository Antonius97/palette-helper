<script>
  import { colors } from "../../stores";
  import Color from "../color/Color";

  let primaryHEX = "#000000";
  let primaryTextHEX = "#FFFFFF";
  let secondaryHEX = "#000000";
  let secondaryTextHEX = "#FFFFFF";
  let accentHEX = "#000000";
  let accentTextHEX = "#FFFFFF";

  colors.subscribe(colorsObj => {
    primaryHEX = Color.Converter.HSL2HEX(colorsObj.primary);
    secondaryHEX = Color.Converter.HSL2HEX(colorsObj.secondary);
    accentHEX = Color.Converter.HSL2HEX(colorsObj.accent);

    primaryTextHEX = Color.Converter.HSL2HEX(Color.Util.getTextColorFor(colorsObj.primary));
    secondaryTextHEX = Color.Converter.HSL2HEX(Color.Util.getTextColorFor(colorsObj.secondary));
    accentTextHEX = Color.Converter.HSL2HEX(Color.Util.getTextColorFor(colorsObj.accent));
  })
</script>

<section>
  <p class="note__text">
    It is recommended to use colors in proportion <a href="https://medium.com/design-bootcamp/60-30-10-rule-how-to-choose-colors-for-your-ui-design-713b3d4c1445">60/30/10</a>
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
