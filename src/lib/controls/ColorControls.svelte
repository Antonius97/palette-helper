<script>
  import ControlsBase from "./ControlsBase.svelte";
  import ColorInputs from "./ColorInputs.svelte";
  import ColorModelSwitcher from "./ColorModelSwitcher.svelte";
  import PaletteColors from "./PaletteColors.svelte";
  import ColorLibrary from "./ColorLibrary.svelte";
  import PalettePercentage from "./PalettePercentage.svelte";
  import ContrastPanel from './ContrastPanel.svelte';
</script>

<ControlsBase>
  <div class="header-wrapper">
    <p class="controls__title">Color Controls</p>
    <ColorModelSwitcher />
  </div>

  <PalettePercentage />

  <p class="controls-section-title">Colors Contrast</p>
  <ContrastPanel />

  <br>

  <p class="controls-section-title">Document Color Palette</p>
  <p class="note__text">
    You can drag'n'drop circles with colors or select colors manually by
    clicking on them.
  </p>
  <ColorInputs />

  <p class="controls-section-title">Palettes With Color Rules</p>
  <PaletteColors />

  <p class="controls-section-title">Predefined Colors</p>
  <ColorLibrary />
</ControlsBase>

<style>
  .header-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  .controls-section-title {
    margin-top: 3rem;
  }
</style>
