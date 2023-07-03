<script lang="ts">
  import { backwords } from '$scripts/backwords';
  let input = 'Hello!';
  let output = '';
  $: output = backwords(input);

  async function onCopyClick() {
    try {
      await navigator.clipboard.writeText(output);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
</script>
<h2 class="tagline">Backwards your sdrow!</h2>
<main>
  <div class="input-wrapper">
    <label for="text-input" class="h2">Input</label>
    <input
      type="text"
      name="text input"
      id="text-input"
      bind:value={input}
      autocomplete="off" />
  </div>
  <div class="output-wrapper">
    <h2>Output</h2>
    <div id="text-output">
      {output}<button id="copy-button" on:click={onCopyClick}
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          id="copy-icon"
          ><path
            fill="currentColor"
            d="M21 8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19a.32.32 0 0 0-.09 0a.88.88 0 0 0-.33-.11H10a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V8.94Zm-6-3.53L17.59 8H16a1 1 0 0 1-1-1ZM15 19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1v7a3 3 0 0 0 3 3h5Zm4-4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3Z" /></svg
        ></button>
    </div>
  </div>
</main>

<style lang="postcss">
  h2,
  .h2 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    text-wrap: balance;
    text-wrap: pretty;
  }

  main {
    display: grid;
    min-inline-size: 70vw;
    min-block-size: 70vh;
    justify-content: center;
    padding: 2rem;
    gap: 1rem;

    @media (width <= 75ch) {
      grid-template-rows: repeat(2, 1fr);
    }

    @media (width > 75ch) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  main > div {
    display: grid;
    justify-content: center;
    gap: 1em;
    grid-auto-flow: row;
    grid-auto-rows: fit-content(15ch);
    grid-template-columns: 1fr;
  }

  #text-input,
  #text-output {
    --_background: var(--background);
    min-inline-size: 30ch;
    min-block-size: 4ch;
    padding: 0.45rem;
    border: solid 4px oklch(0.8 0.01 77);
    border-color: var(--accent);
    border-radius: 2rem;
    background: var(--_background);
    text-align: start;
    vertical-align: baseline;

    &::selection {
      background: var(--text);
      color: var(--_background);
    }
  }

  #text-input {
    /* why the heck is relative color syntax not part of interop 2023! 😡 😤 */
    --_color-mod: oklch(0.99 0 0);
    transition: border-color 150ms ease-in-out;

    @media (prefers-color-scheme: light) {
      --_color-mod: oklch(0 0 0);
    }

    --_background: color-mix(
      in oklch,
      var(--background) 90%,
      var(--_color-mod)
    );

    &:focus-visible {
      border-color: var(--focus);
      outline: none;
    }
  }

  #copy-button {
    --_button-bg: var(--accent);
    position: absolute;
    inset-block-end: clamp(0.1rem, 10%, 0.45rem);
    inset-inline-end: clamp(0.1rem, 10%, 0.45rem);
    overflow: visible;
    border: none;
    border-radius: 5000px;
    background: var(--_button-bg);
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    visibility: hidden;

    &:hover,
    &:focus-visible {
      opacity: 0.9;
    }
  }

  #copy-icon {
    color: var(--background);

    &:hover,
    &:focus-visible {
      color: var(--text);
    }
  }

  #text-output {
    position: relative;
    overflow: auto;

    &:hover,
    &:focus-visible {
      & #copy-button {
        opacity: 0.8;
        visibility: visible;
      }
    }
  }
</style>
