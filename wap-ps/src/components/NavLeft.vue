<script setup>
import {ref,defineProps} from "vue"
const props = defineProps(['id'])
</script>

<template>
    <li @click="$emit('show-brand',props.id)">
        <em class="nav_li" >
            <slot></slot>
            <slot name="li" title="T"></slot>
        </em>
    </li>
</template>

<style scoped>
.nav_li { display: flex; justify-content: center; align-items: center;font-size: 12px; width: 60px; height: 50px; border-bottom: 1px solid #ccc; color: darkolivegreen; }
</style>
