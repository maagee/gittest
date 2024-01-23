<script setup>
import {ref} from "vue"
import Header from "../components/Header.vue"
import ButtonCount from "../components/ButtonCount.vue"

</script>

<template>
    <Header>关于</Header>
    <p>About</p>
    <keep-alive>
        <component :is="ButtonCount"></component>
    </keep-alive>
</template>

<style scoped>

</style>
