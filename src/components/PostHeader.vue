<script setup lang="ts">

</script>

<template>
  <section class="post-header__wrapper">
    <div class="post-header__container">
      <div class="post-header__title-block">
        <div class="title-block__title">Новости</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.post-header__wrapper {
  position: relative;
  background: linear-gradient(to bottom, rgba(238, 243, 250, 0.5), rgba(238, 242, 248, 0.5)), url("../../public/images/post-header-background.png") no-repeat center center;
  background-size: cover;
  height: 320px;
  overflow: hidden;
}

.post-header__container {
  max-width: var(--container-val);
  margin: 0 auto;
  height: 100%;
  position: relative;
}

.post-header__title-block {
  position: absolute;
  bottom: 50px;
}

.title-block__title {
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -1px;
}
</style>
