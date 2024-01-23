<script setup>
import {ref,watchEffect} from "vue"
import axios from "axios"
import Listitem from "../components/Listitem.vue"
const service = axios.create({
    baseURL:import.meta.env.VITE_APP_BASE_API,
    timeout:3000
})
let list = ref([])
let loaded = ref(false)

watchEffect(async ()=>{
    const response = await service.get('/api/?cat=4&json=1')
    list.value = await response.data.posts
    loaded.value = true
})
</script>

<template>    
    <ul class="list" v-if="loaded">
        <Listitem v-for="(item,index) in list" :item="item" :key="index">
            {{ item.title }}
        </Listitem>
    </ul>
    <p class="loading" v-else>Loading</p>
</template>

<style scoped>
.list {padding: 15px;}
.loading { display: flex; height: calc(100vh - 100px); align-items: center; justify-content: center; color: gray;}
</style>
