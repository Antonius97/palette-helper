<script>
  import { activeColorModel, COLOR_MODELS } from "../../stores";

  const colorModels = Object.keys(COLOR_MODELS).map((colorModel) =>
    colorModel.toUpperCase()
  );
</script>

<div class="color-model-switch">
  {#each colorModels as colorModel}
    <button
      class="color-model-switch__button"
      on:click={() => $activeColorModel = colorModel}
      class:active={$activeColorModel === colorModel}
      >{colorModel}</button
    >
  {/each}
</div>

<style>
  .color-model-switch {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  .color-model-switch__button {
    cursor: pointer;
    width: 5.5rem;
    height: 3.5rem;
    border-radius: 0;
    outline: none;
    font-size: var(--h3-size);
    font-weight: 400;
    border: 2px solid var(--secondary-color);
    color: var(--secondary-color);
    background-color: var(--background-color);
    transition: color 0.15s, background-color 0.15s;
  }

  .color-model-switch__button:not(:last-child) {
    border-right-width: 0;
  }

  .color-model-switch__button.active {
    color: var(--background-color);
    background-color: var(--secondary-color);
  }
</style>
