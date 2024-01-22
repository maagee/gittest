<script setup>
import {ref} from 'vue'
import Header from './Header.vue'

</script>

<template>
  <div>
    <Header class="header">Header</Header>
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