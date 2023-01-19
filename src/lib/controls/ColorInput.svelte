<script>
  // @ts-nocheck

  import { createEventDispatcher } from "svelte";
  import { COLOR_MODELS, activeColorModel, dragged } from "../../stores";
  import Color from "../color/Color";
  import { FormulaIcon, LockIcon } from "../IconService";

  export let color = { h: 0, s: 0, l: 100 };
  export let constant = false;
  export let calculated = false;
  export let description = "";
  export let additionalDescriptions = [];

  $: colorHEX = Color.Converter.HSL2HEX(color.h, color.s, color.l);
  $: textColor = Color.Util.getTextColorFor(color);
  $: textColorHEX = Color.Converter.HSL2HEX(textColor.h, textColor.s, textColor.l);

  let copied = false;

  function onColorValueClick(event) {
    const colorText = event.target.innerText;

    navigator.clipboard.writeText(colorText);

    copied = true;
    setTimeout(() => {
      copied = false;
    }, 700);
  }

  const dispatch = createEventDispatcher();
  function onColorChange(event) {
    const colorHEXText = event.target.value;
    color = Color.Converter.HEX2HSL(colorHEXText);

    dispatch("change", {
      color,
    });
  }

  function formatAdditionalDescriptions(descriptions) {
    return descriptions?.join(", ");
  }
</script>

<div class="color-block">
  <p class="color-block__label">
    {description}{#if additionalDescriptions.length}
      <span
        class="color-block__additional-descriptions"
        title={formatAdditionalDescriptions(additionalDescriptions)}
        >+{additionalDescriptions.length}</span
      >
    {/if}
  </p>

  <label class="color-block__input-container">
    <div
      draggable="true"
      class="color-block__circle"
      class:droppable={$dragged && !constant && !calculated}
      on:dragstart={(event) => (
        ($dragged = true),
        event.dataTransfer.setData("color", JSON.stringify(color)),
        event.target.classList.add("dragged")
      )}
      on:dragend={(event) => (
        ($dragged = false), event.target.classList.remove("dragged")
      )}
      on:dragover={(event) =>
        $dragged && !constant && !calculated && event.preventDefault()}
      on:drop={(event) => (
        event.preventDefault(),
        (color = JSON.parse(event.dataTransfer.getData("color"))),
        dispatch("change", {
          color,
        })
      )}
      style={`background-color: ${Color.Converter.HSL2HEX(
        color.h,
        color.s,
        color.l
      )}; box-shadow: 0 0.125rem 0.5rem ${Color.Converter.HSL2HEX(
        color.h,
        color.s,
        50
      )}22;`}
    >
      <span class="color-block__icon" style:--icon-color={textColorHEX}>
        {#if calculated}
          {@html FormulaIcon}
        {:else if constant}
          {@html LockIcon}
        {/if}
      </span>
    </div>

    <input
      type="color"
      value={colorHEX}
      on:change={onColorChange}
      class="color-block__input"
      disabled={constant || calculated}
    />
  </label>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <p class="color-block__value" class:copied on:click={onColorValueClick}>
    {#if copied}
      Copied!
    {:else if $activeColorModel === COLOR_MODELS.HEX}
      {Color.Converter.HSL2HEX(color.h, color.s, color.l)}
    {:else if $activeColorModel === COLOR_MODELS.HSL}
      {Color.Formatter.formatHSL(color)}
    {:else if $activeColorModel === COLOR_MODELS.RGB}
      {Color.Converter.HSL2RGB(color.h, color.s, color.l)}
    {/if}
  </p>
</div>

<style>
  .color-block {
    --circle-size: 5rem;

    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: calc(var(--circle-size) + 5rem);
    margin-right: 2rem;
    margin-bottom: 2rem;
    border: 2px solid hsla(var(--palette-color-1), 10%);
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem 0 hsla(var(--palette-color-1), 5%);
  }

  .color-block__label {
    font-size: var(--h4-size);
    font-weight: 100;
    letter-spacing: 0.3px;
    color: var(--text-color);
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .color-block__additional-descriptions {
    cursor: pointer;
    user-select: none;
    height: 1.5rem;
    font-size: var(--text-size);
    font-weight: 100;
    letter-spacing: 0.3px;
    color: var(--background-color);
    background-color: var(--secondary-color);
    margin-left: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 2rem;
  }

  .color-block__circle {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--circle-size);
    height: var(--circle-size);
    border-radius: 50%;
    box-shadow: 0 0.5rem 1rem 0 hsla(var(--palette-color-1), 10%);
    transition: opacity 0.15s;
  }

  :global(.color-block__circle.dragged) {
    opacity: 0.3;
  }

  :global(.color-block__circle.droppable) {
    opacity: 0.7;
    border: 0.125rem dashed var(--secondary-color);
  }

  :global(.color-block__circle.dragged .color-block__icon) {
    opacity: 0;
  }

  .color-block__value {
    display: block;
    padding: 0.25rem 0.5rem;
    margin-top: -0.25rem;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: calc(var(--text-size) * 0.9);
    font-weight: 100;
    letter-spacing: 0.3px;
    color: var(--text-color);
    background-color: var(--background-color);
    transition: background-color 0.15s, color 0.15s;
  }

  .color-block__value.copied {
    pointer-events: none;
  }

  .color-block__input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .color-block__icon {
    display: block;
    transition: opacity 0.15s;
  }

  :global(.color-block__icon > svg) {
    --icon-size: 1.5rem;

    width: var(--icon-size);
    height: var(--icon-size);

    color: var(--icon-color);
  }
</style>
