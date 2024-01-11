<script setup>
import {ref,reactive,computed} from 'vue'
import Header from './Header.vue'
const isActive = true
const head = [{'active':isActive},'back']
const header = ref('header')
</script>

<template>
  <div>
    <p :class="head"></p>
    <Header :class="header"></Header>
  </div>
</template>
<style>
.active{
  width: 100px;height: 100px;background-color: gray;
}
.header{
  background-color: black;
}
</style>