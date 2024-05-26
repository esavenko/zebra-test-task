<script setup lang="ts">
import { useNewsStore } from '@/stores/news.store';

const newsStore = useNewsStore();
</script>

<template>
  <div
      v-if="newsStore.hasMoreNews"
      class="more-button"
  >
    <button
        class="more-button__btn"
        @click="newsStore.getMoreNews(2)"
    >
      Загрузить еще
    </button>
  </div>
</template>

<style scoped>
.more-button {
  display: flex;
  justify-content: center;
  margin: 72px auto;
}

.more-button__btn {
  width: 203px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #002DBF;
  padding: 16px 32px;
  border: 1px solid #002DBF;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
