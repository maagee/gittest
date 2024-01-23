<script setup>
import {ref} from "vue"
import {useRoute,useRouter} from "vue-router"
const route = useRoute()
const router = useRouter()
const id = route.params.id;
const back = ()=> router.back()
</script>

<template>
    <p>
        show {{ id }}
    </p>
    <button @click="back"> back</button>
</template>

<style scoped>

</style>
