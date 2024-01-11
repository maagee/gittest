<script setup>
import {ref} from "vue"

const count = ref(0)
const bindClick = (()=>{
    count.value++
})

</script>

<template>
    <header class="bold f30" :class="$attrs.class" style="font-style: italic;">Header</header>
    <button @click="bindClick">点击我+1：{{ count }}</button>
</template>

<style>
header{color: white;}
.bold {font-weight: bold;}
.f30{ font-size: 30px;}
</style>