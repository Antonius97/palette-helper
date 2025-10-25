<script>
  import PreviewControls from "./lib/controls/PreviewControls.svelte";
  import { activeControlTab, colors, TABS } from "./stores";
  import ColorControls from "./lib/controls/ColorControls.svelte";
  import TypographyControls from "./lib/controls/TypographyControls.svelte";
  import ExampleControls from "./lib/controls/ExampleControls.svelte";
  import Color from "./lib/color/Color";
    import DefaultPreviewContent from './lib/controls/DefaultPreviewContent.svelte';

  let primaryHSL = { h: 0, s: 0, l: 0 };
  let secondaryHSL = {h: 0,s: 0,l: 0};
  let accentHSL = { h: 0, s: 0, l: 0 };
  let lightHSL = { h: 0, s: 0, l: 0 };
  let darkHSL = { h: 0, s: 0, l: 0 };
  let successHSL = { h: 0, s: 0, l: 0 };
  let dangerHSL = { h: 0, s: 0, l: 0 };
  let warningHSL = { h: 0, s: 0, l: 0 };
  let infoHSL = { h: 0, s: 0, l: 0 };
  let textSuccessHSL = { h: 0, s: 0, l: 0 };
  let textDangerHSL = { h: 0, s: 0, l: 0 };
  let textWarningHSL = { h: 0, s: 0, l: 0 };
  let textInfoHSL = { h: 0, s: 0, l: 0 };

  // Semantic hues and bounds mirrored from ColorInputs.svelte
  const minS = 60;
  const maxS = 100;
  const minL = 10;
  const maxL = 90;

  $: textColorHSL = Color.Util.getTextColorFor(primaryHSL);

  colors.subscribe((colorsObj) => {
    primaryHSL = colorsObj.primary;
    secondaryHSL = colorsObj.secondary;
    accentHSL = colorsObj.accent;
    lightHSL = colorsObj.light;
    darkHSL = colorsObj.dark;
    successHSL = colorsObj.success;
    dangerHSL = colorsObj.danger;
    warningHSL = colorsObj.warning;
    infoHSL = colorsObj.info;
    
    textSuccessHSL = Color.Util.getTextColorFor(successHSL, 35);
    textDangerHSL = Color.Util.getTextColorFor(dangerHSL, 35);
    textWarningHSL = Color.Util.getTextColorFor(warningHSL, 35);
    textInfoHSL = Color.Util.getTextColorFor(infoHSL, 35);
  });
</script>

<main
  id="content"
  style:--palette-color-4={`${primaryHSL.h}, ${primaryHSL.s}%, ${primaryHSL.l}%`}
  style:--primary-color={`hsl(${primaryHSL.h}, ${primaryHSL.s}%, ${primaryHSL.l}%)`}
  style:--palette-color-1={`${secondaryHSL.h}, ${secondaryHSL.s}%, ${secondaryHSL.l}%`}
  style:--secondary-color={`hsl(${secondaryHSL.h}, ${secondaryHSL.s}%, ${secondaryHSL.l}%)`}
  style:--accent-color={`hsl(${accentHSL.h}, ${accentHSL.s}%, ${accentHSL.l}%)`}
  style:--light-color={`hsl(${lightHSL.h}, ${lightHSL.s}%, ${lightHSL.l}%)`}
  style:--dark-color={`hsl(${darkHSL.h}, ${darkHSL.s}%, ${darkHSL.l}%)`}
  style:--success-color={`hsl(${successHSL.h}, ${successHSL.s}%, ${successHSL.l}%)`}
  style:--danger-color={`hsl(${dangerHSL.h}, ${dangerHSL.s}%, ${dangerHSL.l}%)`}
  style:--warning-color={`hsl(${warningHSL.h}, ${warningHSL.s}%, ${warningHSL.l}%)`}
  style:--info-color={`hsl(${infoHSL.h}, ${infoHSL.s}%, ${infoHSL.l}%)`}
  style:--text-success-color={`hsl(${textSuccessHSL.h}, ${textSuccessHSL.s}%, ${textSuccessHSL.l}%)`}
  style:--text-danger-color={`hsl(${textDangerHSL.h}, ${textDangerHSL.s}%, ${textDangerHSL.l}%)`}
  style:--text-warning-color={`hsl(${textWarningHSL.h}, ${textWarningHSL.s}%, ${textWarningHSL.l}%)`}
  style:--text-info-color={`hsl(${textInfoHSL.h}, ${textInfoHSL.s}%, ${textInfoHSL.l}%)`}
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
    <PreviewControls>
      <DefaultPreviewContent slot="preview-content" />
    </PreviewControls>
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
