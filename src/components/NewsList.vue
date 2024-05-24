<script setup lang="ts">
import NewsItem from "@/components/NewsItem.vue";

import {useNewsStore} from '@/stores/news.store';
import {onMounted} from "vue";

const newsStore = useNewsStore();

onMounted(() => {
  newsStore.getAllNews()
});

console.log(newsStore.news)
</script>

<template>
  <div class="news-list">
    <div class="news-list__container">
      <div class="news-list__wrap">
        <news-item
            v-for="news of newsStore.news"
            :key="news.code"
            :news="news"
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
  gap: 50px;
}
</style>
