<script setup>
import {ref} from "vue"
</script>

<template>
<button class="success">
   √ <slot>提交</slot>
</button>
<h3></h3>

</template>
<style scoped>
.success{ width: 100px; height: 30px; border: 1px solid darkgreen; border-radius: 5px; display: flex; justify-content: center; align-items: center; opacity: .9;font-size: 18px; background-color: darkcyan;color: white;font-weight: bold;}
</style>
