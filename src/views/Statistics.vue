<template>
  <div class="nav-wrapper">
    <div class="content">
      <p>Statistics</p>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Statistics'
  };
</script>

<style scoped lang="scss">
  .nav-wrapper {
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .content {
    border: 1px solid green;
    flex-grow: 1;
    overflow: auto;
  }
</style>