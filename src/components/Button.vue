<template>
  <button class="button" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Button extends Vue {}
</script>

<style scoped lang="scss">
.button {
  background: #658aa5;
  color: white;
  border-right: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>