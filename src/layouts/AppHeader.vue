<script setup lang="ts">
import MainLogo from '../../public/logos/MainLogo.vue';
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__wrap">
        <div class="header__logo">
          <main-logo
              :width="152"
              :height="48"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header__container {
  max-width: var(--container-val);
  margin: 0 auto;
  padding: 0 20px;
}

.header__wrap {
  display: flex;
  align-items: center;
  height: 123px;
}
</style>
