<script setup>
import {ref,reactive,computed} from 'vue'
import Header from './Header.vue'
const isActive = true
const head = [{'active':isActive},'topbar']
const header = ref('header')
</script>

<template>
  <div>
    <p :class="head"></p>
    <Header :class="header"></Header>
  </div>
</template>
<style>
*{margin:0;}
.active{
  background-color: black;
}
.header{
  background-color:cadetblue;
}
.topbar{
  height: 30px;
}
</style>