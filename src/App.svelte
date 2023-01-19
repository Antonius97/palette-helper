<script>
  import PreviewControls from "./lib/controls/PreviewControls.svelte";
  import { activeControlTab, colors, TABS } from "./stores";
  import ColorControls from "./lib/controls/ColorControls.svelte";
  import TypographyControls from "./lib/controls/TypographyControls.svelte";
  import ExampleControls from "./lib/controls/ExampleControls.svelte";
  import Color from "./lib/color/Color";

  let primaryHSL = {
    h: 0,
    s: 0,
    l: 0,
  };
  let secondaryHSL = {
    h: 0,
    s: 0,
    l: 0,
  };
  $: textColorHSL = Color.Util.getTextColorFor(primaryHSL);

  colors.subscribe((colorsObj) => {
    const primary = colorsObj.primary;
    primaryHSL = primary;

    const secondary = colorsObj.secondary;
    secondaryHSL = secondary;
  });
</script>

<main
  id="content"
  style:--palette-color-4={`${primaryHSL.h}, ${primaryHSL.s}%, ${primaryHSL.l}%`}
  style:--primary-color={`hsl(${primaryHSL.h}, ${primaryHSL.s}%, ${primaryHSL.l}%)`}
  style:--palette-color-1={`${secondaryHSL.h}, ${secondaryHSL.s}%, ${secondaryHSL.l}%`}
  style:--secondary-color={`hsl(${secondaryHSL.h}, ${secondaryHSL.s}%, ${secondaryHSL.l}%)`}
  style:--background-color={`hsl(${primaryHSL.h}, ${primaryHSL.s}%, ${primaryHSL.l}%)`}
  style:--text-color={`hsl(${textColorHSL.h}, ${textColorHSL.s}%, ${textColorHSL.l}%)`}
>
  <section id="controls">
    {#if $activeControlTab === TABS.COLOR}
      <ColorControls />
    {:else if $activeControlTab === TABS.TYPOGRAPHY}
      <TypographyControls />
    {:else if $activeControlTab === TABS.EXAMPLE}
      <ExampleControls />
    {/if}
  </section>
  <section id="preview">
    <PreviewControls />
    <div id="preview__content" />
  </section>
</main>

<style>
  #content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    min-height: 100%;
    background-color: var(--background-color);
    color: var(--text-color);
  }

  #controls,
  #preview {
    min-height: 100%;
  }

  #controls {
    flex: 0 0 65rem;
    border-top-width: 0;
    border-bottom-width: 0;
    border-left-width: 0;
    border-right-width: 0.125rem;
    border-color: var(--secondary-color);
    border-style: solid;
  }

  #preview {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    flex: 1 1 50%;
  }

  #preview__content {
    height: calc(100% - 6.125rem);
  }
</style>
