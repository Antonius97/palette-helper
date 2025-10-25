<script>
  import { activePalleteRule, PALLETE_RULES } from "../../stores";
  import Color from "../color/Color";

  const rules = Object.keys(PALLETE_RULES).map(
    (ruleKey) => Color.Rules[ruleKey]
  );
</script>

<section class="palette-rules">
  {#each rules as rule}
    <button
      class="palette-rules__item"
      class:active={rule.key === $activePalleteRule}
      on:click={() => ($activePalleteRule = rule.key)}
    >
      {rule.description}
    </button>
  {/each}
</section>

<style>
  .palette-rules {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 34rem;
    height: 13.11rem;
  }

  .palette-rules__item {
    cursor: pointer;
    display: block;
    width: 17rem;
    height: 1.872rem;
    border-radius: 0;
    outline: none;
    font-size: var(--h5-size);
    font-weight: 400;
    border: 2px solid hsla(var(--palette-color-1), 10%);
    color: var(--secondary-color);
    background-color: hsl(0, 0%, 97%);
    box-shadow: 0 0.5rem 1rem 0 hsla(var(--palette-color-1), 5%);
    transition: color 0.15s, background-color 0.15s;
  }

  .palette-rules__item.active {
    background-color: hsla(var(--palette-color-1), 20%);
  }
</style>
