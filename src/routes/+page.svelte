<script lang="ts">
  import {backwords} from '$scripts/backwords'
  let input = '';
  let output = '';
  $: output = backwords(input);
</script>

<main>
  <div class="input-wrapper">
    <label for="text-input">Input</label>
    <input type="text" name="text input" id="text-input" bind:value={input}>
  </div>
  <div class="output-wrapper"><h2>Output</h2><span id="text-output">{output}</span></div>
</main>

<style>
  main {
    display: grid;
    padding: 2rem;
    gap: 1rem;
    grid-auto-columns: fit-content(15ch);
    grid-auto-flow: column;
  }

  main > div {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: fit-content(35ch);
    grid-template-columns: fit-content(15ch);
  }
</style>