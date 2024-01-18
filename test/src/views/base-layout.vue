<script setup>
import {ref} from "vue"
</script>

<template>
    <header>
        <h1>标题</h1>
        <slot name = "header">

        </slot>
    </header>
    <main>
        <p>main</p>
        <slot></slot>
    </main>
    <footer>
        <p>footer</p>
        <slot name="footer">

        </slot>
    </footer>

</template>

<style scoped>

</style>
