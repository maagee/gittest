<script setup>
import {ref} from "vue"
import {useRouter} from 'vue-router'
const router = useRouter()
const toDetail = (url,item)=>{
  router.push({
    name:url,
    params:{id:item.id}
  })
}
const list = ref([
  {
    id:1001,
    title:'title1',
    desc:'this is desc 1'
  },
  {
    id:1002,
    title:'title2',
    desc:'this is desc 2'
  },
  {
    id:1003,
    title:'title3',
    desc:'this is desc 3'
  },
])
</script>

<template>
<h3>List</h3>
<template v-for="(item,index) in list" :key="index">
<button @click="toDetail('detail',item)">view{{ item.title }}</button>
</template>
</template>

<style scoped>
button{margin-left:20px}
</style>
