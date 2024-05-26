<script setup lang="ts">
import MainLogo from '../../public/logos/MainLogo.vue';
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__wrap">
        <div class="footer__logo">
          <main-logo
              :width="114"
              :height="36"
          />
        </div>
        <div class="footer__copy">© alpha, 2023</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--footer-color);
}

.footer__container {
  max-width: var(--container-val);
  margin: 0 auto;
  padding: 0 20px;
}

.footer__wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 202px;
  gap: 15px;
}

.footer__logo {
  max-width: 114px;
  max-height: 36px;
}

.footer__copy {
  color: var(--text-primary-color);
  font-size: 16px;
  font-weight: 400;
}
</style>
