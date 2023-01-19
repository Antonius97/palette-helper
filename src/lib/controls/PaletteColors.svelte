<script>
  import ColorInput from "./ColorInput.svelte";
  import {
    activePalleteRule,
    paletteRefColor,
    paletteSecondRefColor,
    showSecondRefColor,
  } from "../../stores";
  import Color from "../color/Color";
  import PaletteRuleSwitcher from "./PaletteRuleSwitcher.svelte";

  let colors = [];

  function updateColors() {
    const currentRule = $activePalleteRule;
    const Ruler = Color.Rules[currentRule];

    $showSecondRefColor = Ruler.needsSecondRefColor;

    const refColor = $paletteRefColor;
    const secondRefColor = $paletteSecondRefColor;
    colors = Ruler.generateColors(refColor, secondRefColor);
  }

  function onRefColorChange(event) {
    const refColor = event.detail.color;
    $paletteRefColor = refColor;

    updateColors();
  }

  function onSecondRefColorChange(event) {
    const secondRefColor = event.detail.color;
    $paletteSecondRefColor = secondRefColor;

    updateColors();
  }

  updateColors();

  activePalleteRule.subscribe(() => updateColors());
</script>

<section class="controls__wrapper palette-color-blocks__wrapper">
  <div class="palette-controls">
    <PaletteRuleSwitcher />

    <ColorInput
      description="Reference"
      color={$paletteRefColor}
      on:change={(event) => onRefColorChange(event)}
    />

    {#if $showSecondRefColor}
      <ColorInput
        description="Reference #2"
        color={$paletteSecondRefColor}
        on:change={(event) => onSecondRefColorChange(event)}
      />
    {/if}
  </div>

  <div class="palette-colors">
    {#each colors as color}
      <ColorInput
        description={color.description}
        color={color.hsl}
        calculated={true}
      />
    {/each}
  </div>
</section>

<style>
  .palette-color-blocks__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2rem 0 0;
  }

  .palette-colors {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .palette-controls {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;

    margin-bottom: 1rem;
  }

  :global(.palette-controls > *) {
    margin-right: 2rem;
  }
</style>
