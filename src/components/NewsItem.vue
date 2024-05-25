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
    <div class="news-item__date">{{ formattedDate }}</div>
    <div class="news-item__title">{{ news.name }}</div>
    <div class="news-item__desc">{{ news.previewText }}</div>
    <div class="news-item__type">{{ news.type.value }}</div>
  </div>
</template>

<style scoped>
.news-item {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
}

.news-item__bg {
  width: 100%;
  height: 200px;
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
  margin-top: 16px;
  color: #888888;
  font-size: 14px;
  align-self: flex-start;
}

.news-item__title {
  margin-top: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  text-align: center;
}

.news-item__desc {
  margin-top: 8px;
  font-size: 16px;
  color: #666666;
  text-align: center;
}

.news-item__type {
  font-size: 14px;
  font-weight: bold;
  color: #007bff;
  background-color: #e0f7ff;
  padding: 4px 8px;
  border-radius: 4px;
  align-self: flex-start;
}
</style>
