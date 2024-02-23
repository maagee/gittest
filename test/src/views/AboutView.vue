<template>
  <div class="about">
    <h1 ref="title" v-if="show">{{str}}</h1>
    <br>
    <input type="text" v-model="list.data">
    <button @click="modify">修改</button>
    <button @click="del">卸载</button>
  </div>
</template>
<script setup>
import { ref,reactive, onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted } from 'vue'
const title = ref()
const str = ref('This is an about page')
const show = ref(true)
let list = reactive({data:[1,2,3,4]})
const modify = ()=>{
  
  setTimeout(()=>{
    str.value = 'modify'
    let arr = [9,8,7,6]
    list.data.push(...arr)
    console.log(list)
  },1000)
  
}
const del = ()=>{
  show.value = false
}
onBeforeMount(()=>{
  console.log('onBeforeMount:'+title.value)
})
onMounted(() => {
  console.log('onMounted:'+title.value.innerText)
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate:'+title.value.innerText)
})
onUpdated(()=>{
  console.log('onUpdated:'+str.value)
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount:'+str.value)
})
onUnmounted(() => {
  console.log('onUnmounted:'+str.value)
})
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
