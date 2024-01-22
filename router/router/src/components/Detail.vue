<script setup>
import {ref} from "vue"
import {useRouter,useRoute} from "vue-router"
import {list} from './list.json'
const router = useRouter()
const route = useRoute()
const back = ()=>{
    router.back()
}
const item = list.find(v => v.id === Number(route.params.id))
</script>

<template>
    <h1>name</h1>
    <h3>{{ item?.id}}</h3>
    <h4>{{ item?.desc }}</h4>
    <div>
        <button @click="back()">Back</button>
    </div>
</template>

<style scoped>

</style>
