<script setup>
import {ref} from "vue"
import {useRouter} from "vue-router"

</script>

<template>
  <router-view></router-view>
  <br>
  <div>
    <router-link to="/user">Login</router-link>
    <router-link to="/user/reg">Reg</router-link>
    </div>
</template>


<style scoped>

</style>
