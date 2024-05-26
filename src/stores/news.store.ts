import { defineStore } from 'pinia';
import axios from 'axios';
import type { INews } from '@/types/interfaces';

import { ref } from 'vue';

const URL = 'https://flems.github.io/test/api/news/';

export const useNewsStore = defineStore('newsStore', () => {
    const news = ref<INews[]>([]);
    const hasMoreNews = ref(true);
    const isLoading = ref(false);

    const getAllNews = async () => {
        try {
            isLoading.value = true;
            const res = await axios.get(URL);
            news.value = res.data.items;
            isLoading.value = false;
        } catch (error) {
            console.error(error);
        }
    };

    const getMoreNews = async (page: number) => {
        try {
            isLoading.value = true;
            const res = await axios.get(`${URL}/${page}`);
            news.value.push(...res.data.items);
            hasMoreNews.value = false;
            isLoading.value = false;
        } catch (error) {
            console.error(error);
            hasMoreNews.value = false;
        }
    };

    return {
        news,
        hasMoreNews,
        isLoading,
        getAllNews,
        getMoreNews,
    };
});
