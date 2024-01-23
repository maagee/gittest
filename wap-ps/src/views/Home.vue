<script setup>
import {ref} from "vue"
</script>

<template>
    <div style="padding-bottom:55px">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        
        <router-view name="about"></router-view>
        <router-view name="list"></router-view>
    </div>

    <footer class="footer">
        <router-link class="footer_router" to="/"><img class="icon" src="../assets/calendar-check.svg" alt="首页">首页</router-link>
        <router-link class="footer_router" to="/about"><img class="icon" src="../assets/file-text.svg" alt="首页">关于</router-link>
        <router-link class="footer_router" to="/pic"><img class="icon" src="../assets/image.svg" alt="首页">图片</router-link>
    </footer>
</template>

<style scoped>
.footer{ position: fixed; bottom:0;width: 100%; height: 55px; display: flex; flex-direction: row; justify-content: space-around; align-items: center;background:linear-gradient(#f4f4f4,#ffffff);border-top: 2px solid #f0f0f0;font-size: 12px;}
.footer_router {display: flex; justify-content: center; align-items: center; flex-direction: column;}
.icon {width: 23px; display: block;}
</style>
