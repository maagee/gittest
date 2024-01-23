<script setup>
import {ref,computed} from "vue"
import Header from "../components/Header.vue"
import NavLeft from "../components/NavLeft.vue"
const brandId = ref('brandId')
const navList = computed(()=>{
    const brand = ['Rolex','Mido','Cartier','Rado','Tidor','Blancpain','Breguet','PIAGET','IWC','ZENITH','Chopard','BVLGARI']
    return brand
})
const showBrand = (id)=>{
    console.log(id)
    brandId.value = id
}
</script>

<template>
    
    <Header>首页</Header>

    <nav class="left_nav">
        <ul>
            <NavLeft @show-brand="showBrand" :id="item" v-for="item in navList">{{ item }}</NavLeft>
        </ul>
    </nav>
    <section class="right_section">
        <p>{{ brandId }}</p>
    </section>
</template>

<style scoped>
.left_nav { position: fixed; left:0;top:45px; height: calc(100vh - 100px); background-color: azure; overflow-y: scroll; }
.left_nav::-webkit-scrollbar {width:2px; height:0;background-color: white;}
.left_nav::-webkit-scrollbar-thumb{
  background-color:darkgray;
}
.left_nav ul { display: flex; flex-direction: column;}
.right_section { margin-left:65px; background-color: white; display: flex; align-items: center;}
</style>
