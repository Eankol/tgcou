<script lang="ts" setup>
import SearchBox from '../components/SearchBox.vue';
import locations from '../assets/locations'

const locationInfo = locations

const link2 = (e: any) => {
    location.replace(e)
}
</script>
<template>
    <div>
        <SearchBox title="搜索(Bing)" color="#bbb"></SearchBox>
    </div>
    <div style="clear: both;"></div>
    <div class="box">
        <div v-for="(item, index) in locationInfo" :key="index">
            <h3>{{ item.class }}</h3>

            <span v-for="c_item in item.info" :key="1" @click="link2(c_item.href)" :tag="[c_item.tag]">
                {{ c_item.name }}
            </span>

        </div>
    </div>
</template>
<style scoped>
.box {
    text-align: left;
    margin: 0 auto;
    max-width: 800px;
    border-top: 2px solid #eee;
    margin-top: 20px;
}

.box span {
    display: inline_block;
    margin: 0px 0.5em;
    color:#463daa;
    cursor:pointer;
}
</style>