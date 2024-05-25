<script setup lang="ts">
import { useNewsStore } from '@/stores/news.store';
import { onMounted } from 'vue';

import NewsItem from '@/components/NewsItem.vue';

const newsStore = useNewsStore();

onMounted(() => {
  newsStore.getAllNews();
});
</script>

<template>
  <div class="news-list">
    <div class="news-list__container">
      <div class="news-list__wrap">
        <news-item
            v-for="news of newsStore.news"
            :key="news.code"
            :news="news"
            class="news-list__item"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.news-list__container {
  max-width: var(--container-val);
  margin: 0 auto;
}

.news-list__wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
}

.news-list__item {
  cursor: pointer;
}
</style>
