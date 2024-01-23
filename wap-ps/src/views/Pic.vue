<script setup>
import {ref,watchEffect} from "vue"
import {useRouter} from "vue-router"
import Header from "../components/Header.vue"
import axios from "axios"
import Listitem from "../components/Listitem.vue"
import ListitemBlank from "../components/ListitemBlank.vue"
const service = axios.create({
    baseURL:import.meta.env.VITE_APP_BASE_API,
    timeout:3000
})
let list = ref([])
let loaded = ref(false)

watchEffect(async ()=>{
    const response = await service.get('/api/?cat=3&json=1')
    list.value = await response.data.posts
    loaded.value = true
})
const router = useRouter()
const shopPic = (url,_id)=>{
    router.push({
        name:url,
        params:{id:_id}
    });
}

</script>

<template>
    <Header>图片</Header>
    <ul class="list" v-if="loaded">
        <Listitem v-for="(item,index) in list" :item="item" :key="index" @click="shopPic('Show',item.id)">
            {{ item.title }}
        </Listitem>
    </ul>
    
    <ul class="list" else>
        <ListitemBlank v-for="count in 6"></ListitemBlank>
    </ul>
</template>

<style scoped>
.list {padding: 15px;}
.loading { display: flex; height: calc(100vh - 100px); align-items: center; justify-content: center; color: gray;}
</style>
