<script setup>
import {ref} from "vue"
let count = ref(0)
</script>

<template>
    <button @click="count++">点我 {{ count }}</button>
</template>

<style scoped>

</style>
