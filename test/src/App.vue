<script setup>
import HomeView from './views/HomeView.vue';
</script>

<template>
  <div class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
    </div>
    
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>
