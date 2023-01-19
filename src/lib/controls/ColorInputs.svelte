<script>
  import { colors } from "../../stores";
  import ColorInput from "./ColorInput.svelte";

  const minS = 60;
  const maxS = 100;
  const minL = 10;
  const maxL = 90;

  const successH = 134;
  const dangerH = 354;
  const warningH = 45;
  const infoH = 188;

  let successColor = { h: 0, s: 0, l: 0 };
  let dangerColor = { h: 0, s: 0, l: 0 };
  let warningColor = { h: 0, s: 0, l: 0 };
  let infoColor = { h: 0, s: 0, l: 0 };

  const blendCoef = 0.1;

  colors.subscribe((colorsObj) => {
    const primary = colorsObj.primary;
    const secondary = colorsObj.secondary;
    const blend = {
      h: Math.round((primary.h + secondary.h) / 2),
      s: Math.round((primary.s + secondary.s) / 2),
      l: Math.round((primary.l + secondary.l) / 2),
    };

    successColor.h = successH + Math.round((blend.h - successH) * blendCoef);
    successColor.s = Math.min(maxS, Math.max(minS, blend.s));
    successColor.l = Math.min(maxL, Math.max(minL, blend.l));

    dangerColor.h = dangerH + Math.round((blend.h - dangerH) * blendCoef);
    dangerColor.s = Math.min(maxS, Math.max(minS, blend.s));
    dangerColor.l = Math.min(maxL, Math.max(minL, blend.l));

    warningColor.h = warningH + Math.round((blend.h - warningH) * blendCoef);
    warningColor.s = Math.min(maxS, Math.max(minS, blend.s));
    warningColor.l = Math.min(maxL, Math.max(minL, blend.l));

    infoColor.h = infoH + Math.round((blend.h - infoH) * blendCoef);
    infoColor.s = Math.min(maxS, Math.max(minS, blend.s));
    infoColor.l = Math.min(maxL, Math.max(minL, blend.l));
  });
</script>

<section class="controls__wrapper color-blocks__wrapper">
  <ColorInput
    description="Primary"
    color={$colors.primary}
    on:change={(event) =>
      colors.update(
        (colorsObj) => ((colorsObj.primary = event.detail.color), colorsObj)
      )}
  />
  <ColorInput
    description="Secondary"
    color={$colors.secondary}
    on:change={(event) =>
      colors.update(
        (colorsObj) => (
          (colorsObj.secondary = event.detail.color), colorsObj
        )
      )}
  />
  <ColorInput
    description="Accent"
    color={$colors.accent}
    on:change={(event) =>
      colors.update(
        (colorsObj) => ((colorsObj.accent = event.detail.color), colorsObj)
      )}
  />
  <ColorInput description="Success" calculated={true} color={successColor} />
  <ColorInput description="Danger" calculated={true} color={dangerColor} />
  <ColorInput description="Warning" calculated={true} color={warningColor} />
  <ColorInput description="Info" calculated={true} color={infoColor} />
  <ColorInput
    description="Light"
    color={$colors.light}
    on:change={(event) =>
      colors.update(
        (colorsObj) => ((colorsObj.light = event.detail.color), colorsObj)
      )}
  />
  <ColorInput
    description="Dark"
    color={$colors.dark}
    on:change={(event) =>
      colors.update(
        (colorsObj) => ((colorsObj.dark = event.detail.color), colorsObj)
      )}
  />
  <ColorInput
    description="White"
    constant={true}
    color={{ h: 0, s: 0, l: 100 }}
  />
</section>

<style>
  .color-blocks__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 2rem 0 0;
  }
</style>
