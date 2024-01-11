# test

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# ref 和 reactive 的区别

## vue3 中2种响应式数据的绑定方式：

**ref:** 普通的数据类型、数组、对象 

```
const refData = ref("liu")
```

**reactive:** 数组、对象
```
const reactiveData = reactive("liu")//报错
```
```
const reactiveData = reactive({"name":"liu"})
```

**computed:** 计算属性
```
const computedData = computed(()=>{
    return "liu"
})
```

## 通过使用 Ref 这个类型：
```
import { ref } from 'vue'
import type { Ref } from 'vue'

const year: Ref<string | number> = ref('2020')

year.value = 2020 // 成功！
```
或者
```
const year= ref<string | number>('2020')

year.value = 2020 // 成功！
```