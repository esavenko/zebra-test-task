import { defineStore } from 'pinia';
import axios from "axios";

import { ref } from 'vue';

const URL = 'http://flems.github.io/test/api/news/';

export const useNewsStore = defineStore('newsStore', () => {
    const news = ref([]);

    const getAllNews = async () => {
        const res = await axios.get(URL)
        news.value = res.data.items
    };

    return {
        news,
        getAllNews,
    }
});
