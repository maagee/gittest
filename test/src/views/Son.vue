<script setup>
import {ref,watch} from "vue"
let count = ref(0)
const stop = watch(count,(val,oldval,onCleanup)=>{
    const timer = setInterval(()=>{
        document.title = count.value++
    },1000)
    console.log('val:'+val+'|oldval:'+oldval)
    onCleanup(()=>{
        clearInterval(timer)
    })
})
const startWatch = ()=>{
    document.title = count.value++
}
const stopEffect = ()=>{
    stop()
}
</script>

<template>
<h3 class="red">
    <slot></slot>
    <button @click="startWatch">start</button>
    <button @click="stopEffect">stop</button>
</h3>
</template>

<style scoped>
.red{color:red}
</style>
