<script lang="ts">
  import Box from './lib/Box.svelte';

  let answer

  function handleClick() {
    console.log(`Answer accepted: ${answer}`);
  }
</script>

<Box>
  <h2>Загадка Патисона</h2>
  <p>Два кільця, два кінці, посередині цвяшок</p>
  <input bind:value={answer} placeholder="Введіть відповідь">
  <button on:click={handleClick}>
    Відповісти
  </button>
</Box>