<script setup>
import {ref} from 'vue'
import Header from './Header.vue'
import Son from './Son.vue'
const flag = ref(true)

</script>

<template>
  <div>
    <Header class="header">Header</Header>
    <button @click="flag = !flag">moutend</button>
    <Son v-if="flag"> I'm son component</Son>
  </div>
</template>
<style>
*{margin:0;}
.header{
  height: 50px;
  background-color:cadetblue;
  color:white;
  font-size: 20px;
}

</style>