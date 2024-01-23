<script setup>
import {ref,defineProps} from "vue"
const props = defineProps(['item'])
const src = ref(props.item.thumbnail)
</script>

<template>
    <li>
        <span v-if="src" class="pic">
            <img :src="src" alt="">
        </span>
        <em class="item_title"><slot></slot></em>
    </li>    
</template>

<style scoped>
li{list-style: none; display: flex; position: relative; margin-bottom: 15px;}
li::after{ display: block; position: absolute; bottom:-7px; content: ""; width: 100%; height: 2px;background:linear-gradient(to right,transparent,#f4f4f4 20%,#f4f4f4 80%,transparent);}
.item_title { display: flex; justify-content: center; font-style: normal; font-size: 14px;font-weight: bold; line-height: 35px;}
.pic { display: flex; justify-content: center; margin-right: 20px;}
.pic img { width: 70px; height: 70px; padding: 5px; border: 1px solid #f4f4f4;}
</style>
