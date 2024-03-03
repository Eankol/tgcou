<template>
  <router-view></router-view>
  <div>test link:
    <el-button v-for="(item, index) in routes" :key="index" type="primary" @click="doLink(item.path)">
    {{ item.meta.title }}
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { RouteLocationRaw } from 'vue-router';
import routes from './router/routes';
</script>

<script lang="ts">
export default {
  mounted() {
      this.$router.push('/')
  },
  methods: {
    doLink(e: RouteLocationRaw) {
      this.$router.push(e)
    }
  }
}
</script>

<style scoped>
</style>
