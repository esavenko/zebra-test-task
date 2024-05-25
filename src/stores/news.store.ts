import { defineStore } from 'pinia';
import axios from 'axios';
import type { INews } from '@/types/interfaces';

import { ref } from 'vue';

const URL = 'http://flems.github.io/test/api/news/';

export const useNewsStore = defineStore('newsStore', () => {
    const news = ref<INews[]>([]);

    const getAllNews = async () => {
        try {
            const res = await axios.get(URL);
            news.value = res.data.items;
        } catch (error) {
            console.error(error);
        }
    };

    return {
        news,
        getAllNews,
    };
});
