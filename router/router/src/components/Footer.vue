<script setup>
import {ref} from "vue"
import {useRouter} from "vue-router"

</script>

<template>
    <h3>router default</h3>
  <router-view></router-view>
  <br>
  <router-view name="listone"></router-view>
  <router-view name="listtwo"></router-view>
  
  <div>
    <router-link to="/">Login</router-link>
    <router-link style="margin-left:20px;" to="/login">List 1|2</router-link>
    </div>
</template>


<style scoped>

</style>
