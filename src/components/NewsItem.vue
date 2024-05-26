<script setup lang="ts">
import { computed } from 'vue';
import type { INews } from '@/types/interfaces';

const props = defineProps<{ news: INews }>();

const formattedDate = computed(() => {
  const date = new Date(props.news.date * 1000);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
});
</script>

<template>
  <div class="news-item">

    <div
        v-if="news.image"
        class="news-item__bg"
    >
      <img
          :src="news.image"
          :alt="news.name"
          class="news-item__img"
      />
    </div>
    <div class="news-item__wrap">
      <div class="news-item__date">{{ formattedDate }}</div>
      <div class="news-item__title">{{ news.name }}</div>
      <div class="news-item__desc">{{ news.previewText }}</div>
      <div class="news-item__type">{{ news?.type?.value }}</div>
    </div>
  </div>
</template>

<style scoped>
.news-item {
  position: relative;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 535px;
  height: 650px;
}

.news-item__wrap {
  padding: 32px;
}

.news-item__bg {
  width: 100%;
  height: 250px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.news-item__img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
}

.news-item__date {
  color: #A1A7B5;
  font-size: 18px;
  align-self: flex-start;
}

.news-item__title {
  margin: 16px 0;
  font-size: clamp(1rem, 0.925rem + 0.38vw, 1.375rem);
  color: var(--title-color);
}

.news-item__desc {
  font-size: clamp(0.875rem, 0.8rem + 0.38vw, 1.25rem);
  letter-spacing: -1px;
  color: var(--text-color);
}

.news-item__type {
  position: absolute;
  bottom: 32px;
  left: 32px;
  font-size: 14px;
  color: var(--type-color);
  background-color: #F0F6FE;
  padding: 4px 16px;
  border-radius: 30px;
  align-self: flex-start;
}
</style>
