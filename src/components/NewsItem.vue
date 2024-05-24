<script setup lang="ts">
interface INews {
  news: object
}

defineProps<INews>()
</script>

<template>
  <div class="news-item">
    <div class="news-item__bg">
      <img
          :src="news.image"
          :alt="news.name"
          class="news-item__img"
      >
    </div>
    <div class="news-item__date">{{ news.date }}</div>
    <div class="news-item__title">{{ news.name }}</div>
    <div class="news-item__desc">{{ news.previewText }}</div>
  </div>
</template>

<style scoped>
.news-item {
  display: flex;
  flex-direction: column;
  max-width: 536px;
  max-height: 554px;
}

.news-item__img {
  width: 536px;
  height: 554px;
}
</style>
