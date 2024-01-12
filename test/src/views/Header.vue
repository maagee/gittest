<script setup>
import {ref,reactive,computed} from "vue"

const count = ref(0)
const fontStyle = ref('italic')
const bindClick = (()=>{
    count.value++
})
const fontStyle2 = reactive({
    fontSize:'30px',
    color:'lightgray'
})
const fontSize = ref(50)
const myFontSize = computed(()=>{
    let btnStyle = ref(20)
    if(count.value>3){
        btnStyle = ref(20+count.value)
    }
    console.log(btnStyle)
    return btnStyle.value
})
const btn = ref('btn')

const list = reactive(['1','2','3','4'])
const _list = computed(()=>{
    return list.filter(list=>list%2==0)
})
const plusClick = ()=>{
    let index = list.length+1
    list.push(index)
    return list
}
</script>

<template>
    <header class="bold f30" :style="fontStyle2" :class="$attrs.class" >Header</header>
    <button @click="bindClick" :style="{fontSize:myFontSize+'px'}">点击我+1放大：{{ count }}</button>
    <ul>
        <template v-for="item in _list">
            <li>{{ item }}</li>
        </template>
    </ul>
    <button style="font-size:20px" @click="plusClick">增加li偶数行</button>
</template>

<style>
header{color: white;height: 60px;}
.bold {font-weight:lighter;display: flex;justify-content: center;align-items: center;}
.f30{ font-size: 30px;}
.btn{font-size: 20px;}
</style>