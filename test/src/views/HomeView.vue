<script setup>
import {ref,reactive,computed} from 'vue'

const computedData = computed(()=>{
    return "liu"
})

</script>

<template>
  <h1>{{ computedData }}</h1>
</template>