<template>
    <div class="search">
        <div>
            <h3 :style="{ color: <any>color }">{{ title }}</h3>
        </div>
        <input type="text" class="search-input-box" placeholder="请输入搜索内容&nbsp;🔍" @keyup="search" v-model="s_data">
        <!-- <button class="search-btn">搜索&nbsp;🔍</button> -->
        <div style="clear: both;"></div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
    title: String,
    color: String
}>()

const s_data = ref("");

const search = (e: any) => {
    if (e.code === 'Enter') {
        location.replace(
            "https://www.bing.com/search?q=" + s_data.value
        )
    }
}
</script>
<style scoped>
.search {
    text-align: center;
    overflow: hidden;
}

.search-input-box {
    width: 420px;
    height: 28px;
    padding: 2px;
    font-size: 18px;
    border-radius: 5px;
    color: #333333;
    border: 2px solid rgb(161, 205, 235);
}

.search-input-box::placeholder {
    color: #ccc;
}
</style>