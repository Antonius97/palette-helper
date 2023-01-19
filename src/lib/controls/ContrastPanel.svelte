<script>
  import { colors } from "../../stores";
  import Color from "../color/Color";

  $: primaryHSL = `hsl(${$colors.primary.h}, ${$colors.primary.s}%, ${$colors.primary.l}%)`;
  $: secondaryHSL = `hsl(${$colors.secondary.h}, ${$colors.secondary.s}%, ${$colors.secondary.l}%)`;
  $: accentHSL = `hsl(${$colors.accent.h}, ${$colors.accent.s}%, ${$colors.accent.l}%)`;
  $: darkHSL = `hsl(${$colors.dark.h}, ${$colors.dark.s}%, ${$colors.dark.l}%)`;
  $: lightHSL = `hsl(${$colors.light.h}, ${$colors.light.s}%, ${$colors.light.l}%)`;

  $: contrasts = [
    {
      a: {
        name: "Primary",
        hsl: primaryHSL,
      },
      b: {
        name: "Secondary",
        hsl: secondaryHSL,
      },
      contrast: Color.Util.contrast($colors.primary, $colors.secondary),
    },
    {
      a: {
        name: "Primary",
        hsl: primaryHSL,
      },
      b: {
        name: "Accent",
        hsl: accentHSL,
      },
      contrast: Color.Util.contrast($colors.primary, $colors.accent),
    },
    {
      a: {
        name: "Primary",
        hsl: primaryHSL,
      },
      b: {
        name: "Dark",
        hsl: darkHSL,
      },
      contrast: Color.Util.contrast($colors.primary, $colors.dark),
    },
    {
      a: {
        name: "Primary",
        hsl: primaryHSL,
      },
      b: {
        name: "Light",
        hsl: lightHSL,
      },
      contrast: Color.Util.contrast($colors.primary, $colors.light),
    },
    {
      a: {
        name: "Secondary",
        hsl: secondaryHSL,
      },
      b: {
        name: "Accent",
        hsl: accentHSL,
      },
      contrast: Color.Util.contrast($colors.secondary, $colors.accent),
    },
    {
      a: {
        name: "Secondary",
        hsl: secondaryHSL,
      },
      b: {
        name: "Dark",
        hsl: darkHSL,
      },
      contrast: Color.Util.contrast($colors.secondary, $colors.dark),
    },
    {
      a: {
        name: "Secondary",
        hsl: secondaryHSL,
      },
      b: {
        name: "Light",
        hsl: lightHSL,
      },
      contrast: Color.Util.contrast($colors.secondary, $colors.light),
    },
    {
      a: {
        name: "Accent",
        hsl: accentHSL,
      },
      b: {
        name: "Dark",
        hsl: darkHSL,
      },
      contrast: Color.Util.contrast($colors.secondary, $colors.accent),
    },
    {
      a: {
        name: "Accent",
        hsl: accentHSL,
      },
      b: {
        name: "Light",
        hsl: lightHSL,
      },
      contrast: Color.Util.contrast($colors.secondary, $colors.accent),
    },
    {
      a: {
        name: "Dark",
        hsl: darkHSL,
      },
      b: {
        name: "Light",
        hsl: lightHSL,
      },
      contrast: Color.Util.contrast($colors.dark, $colors.light),
    },
  ];

  function formatValueClass(contrast) {
    if (contrast < 3) {
      return "bad";
    } else if (contrast < 4.5) {
      return "moderate";
    } else if (contrast < 7) {
      return "good";
    } else {
      return "excellent";
    }
  }
</script>

<section class="contrast">
  {#each contrasts as item, i}
    <p class="contrast__item">
      <span class="contrast__color" style:--color={item.a.hsl}>{item.a.name}</span>
      +
      <span class="contrast__color" style:--color={item.b.hsl}>{item.b.name}</span
      >
      —
      <span class={`contrast__value ${formatValueClass(item.contrast)}`}
        >{item.contrast} : 1</span
      >
    </p>
  {/each}
</section>

<style>
  .contrast {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .contrast__item {
    width: 50%;
    margin-top: 1rem;
    font-size: var(--h5-size);
  }

  .contrast__color::before {
    content: "";
    position: relative;
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
    border: 1px solid hsla(var(--palette-color-1), 20%);
    border-radius: 1rem;
    margin-right: 0.25rem;
    background-color: var(--color);
  }

  .contrast__value.bad {
    color: #ff0f3f;
  }

  .contrast__value.moderate {
    color: #ff9b0f;
  }

  .contrast__value.good {
    color: #3fcf8c;
  }

  .contrast__value.excellent {
    color: #0fb7ff;
  }
</style>
