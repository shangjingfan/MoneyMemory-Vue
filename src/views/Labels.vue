<template>
    <Layout>
      <p>Labels</p>
    </Layout>
</template>

<script lang="ts">
  export default {
    name: 'Labels'
  };
</script>

<style scoped lang="scss">
  .nav-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .content {
    flex-grow: 1;
    overflow: auto;
  }
</style>