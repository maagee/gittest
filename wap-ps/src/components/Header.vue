<script setup>
import {ref} from "vue"
</script>

<template>
    <header class="header">
        <slot>Home</slot>
    </header>
</template>

<style scoped>
.header { width: 100vw; height: 45px; background-color: darkslategray; display: flex; justify-content: center; align-items: center; font-size: 22px; color:white;}
</style>
