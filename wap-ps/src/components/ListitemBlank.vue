<script setup>
import {ref} from "vue"
</script>

<template>
 <li>
        <span class="pic">
            <i></i>
        </span>
        <em class="item_title">
            <b></b>
        </em>
    </li> 
</template>

<style scoped>
li{list-style: none; display: flex; position: relative; margin-bottom: 15px;}
li::after{ display: block; position: absolute; bottom:-7px; content: ""; width: 100%; height: 2px;background:linear-gradient(to right,transparent,#f4f4f4 20%,#f4f4f4 80%,transparent);}
.item_title { display: flex; justify-content: center; font-style: normal; font-size: 14px;font-weight: bold; line-height: 35px;}
.item_title b{ width: 200px; height: 20px; background: linear-gradient(to right,#f0f0f0,transparent);}
.pic { display: flex; justify-content: center; margin-right: 20px;}
.pic i { display: inline-block; width: 70px; height: 70px; padding: 5px; border: 1px solid #f4f4f4;}
</style>
