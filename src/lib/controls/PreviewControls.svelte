<script>
  import { TABS, activeControlTab } from "../../stores";
  import { PaletteIcon, TypographyIcon, ExampleIcon } from '../IconService';
</script>

<div id="preview__controls">
  <button
    class="preview__control color-preview-control"
    class:active={$activeControlTab === TABS.COLOR}
    on:click={() => $activeControlTab = TABS.COLOR}
  >
  {@html PaletteIcon}
  </button>
  <button
    class="preview__control typography-preview-control"
    class:active={$activeControlTab === TABS.TYPOGRAPHY}
    on:click={() => $activeControlTab = TABS.TYPOGRAPHY}
  >
  {@html TypographyIcon}
  </button>
  <button
    class="preview__control example-preview-control"
    class:active={$activeControlTab === TABS.EXAMPLE}
    on:click={() => $activeControlTab = TABS.EXAMPLE}
  >
  {@html ExampleIcon}
  </button>
</div>

<style>
  #preview__controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 6rem;
    padding: var(--outer-padding);
    border-top-width: 0;
    border-bottom-width: 0.125rem;
    border-left-width: 0;
    border-right-width: 0;
    border-color: var(--secondary-color);
    border-style: solid;
    background-color: var(--secondary-color);
  }

  .preview__control {
    cursor: pointer;
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin-right: 1.5rem;
    padding: 0.8rem;
    border:  none;
    outline: none;
    color: var(--background-color);
    background-color: var(--secondary-color);
    transition: background-color 0.15s, color 0.15s;
  }

  .preview__control.active {
    background-color: var(--background-color);
    color: var(--secondary-color);
  }
</style>
