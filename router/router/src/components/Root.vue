<script setup>

</script>
<template>
    <router-link to="pagea">pagea</router-link>
    <router-link style="margin-left: 20px;" to="pageb">pageb</router-link>
    <router-view></router-view>
    <router-view name="bbb"></router-view>
    <router-view name="ccc"></router-view>
</template>