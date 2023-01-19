<script>
  import ColorInput from "./ColorInput.svelte";
  import Color from "../color/Color";

  let libColors = Color.Library.ALL;
</script>

<section class="controls__wrapper color-library">
  <div class="palette-colors">
    {#each libColors as color}
      <ColorInput
        description={color.description}
        additionalDescriptions={color.additional}
        color={color.hsl}
        constant={true}
      />
    {/each}
  </div>
</section>

<style>
  .palette-colors {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 2rem 0 0;
  }
</style>