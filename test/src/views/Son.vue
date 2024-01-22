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
<div class="container">
    <p class="box">
        <button>我是一个按钮</button>
    </p>
    <p class="box2">
        <span>文字</span>
    </p>
</div>
</template>

<style scoped>
.red{color:red}
.container {position: relative; width: 200px;height: 200px; display: flex;}
.box { background-color: blue;}
.box2{background-color: gray;}
</style>
