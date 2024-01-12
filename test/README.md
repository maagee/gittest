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

# 绑定内联样式
尽管推荐使用 camelCase，但 :style 也支持 kebab-cased 形式的 CSS 属性 key (对应其 CSS 中的实际名称)，例如：
```
const activeColor = ref('red')
const fontSize = ref(30)

//camelCase
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

//kebab-cased
<div :style="{ 'font-size': fontSize + 'px' }"></div>

//直接绑定一个样式对象
const fontStyle = {
    fontSize:ref(30),
    activeColor:ref('red')
}
<div :style = fontStyle></div>
```
