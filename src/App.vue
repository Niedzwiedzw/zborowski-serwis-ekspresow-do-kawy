<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="main App"></div>
  <RouterView />
</template>

<style lang="scss">
@import "@/styles/global";
.app {
  @include grid-center;
}
</style>
