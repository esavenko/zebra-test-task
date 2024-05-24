<script setup lang="ts">
import AppHeader from '@/layouts/AppHeader.vue';
import AppFooter from '@/layouts/AppFooter.vue';
</script>

<template>
  <app-header />
  <slot />
  <app-footer />
</template>

<style scoped>

</style>
