<script setup>
import {ref} from "vue"
</script>

<template>
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot ></slot>
    </main>
</template>

<style scoped>
header { background-color: red;}
main { background-color: gray; width: 100%;}
</style>
