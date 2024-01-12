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

# v-if 与 v-for 一起使用的问题

[参考链接](https://blog.csdn.net/xia_tian666/article/details/119109373)

## **永远不要把 v-if 和 v-for 同时用在同一个元素上。**
## vue2.x
在vue2.x中，v-for的优先级大于v-if，这意味着 v-if 将分别重复运行于每个 v-for 循环中，消耗不必要的性能。

## vue3.x
在vue3.x中，v-if的优先级大于v-for，这意味着 v-if 将没有权限访问 v-for 里的变量。这将抛出一个错误，因为 v-if 指令将首先被使用，而迭代的变量 user 此时不存在。

**解决方法1**》
为了过滤一个列表中的项目 (比如 v-for="user in users" v-if="user.isActive")。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。

**解决方法2**》
1.为了避免渲染本应该被隐藏的列表 (比如 v-for="user in users" v-if="shouldShowUsers")。这种情形下，请将 v-if 移动至容器元素上 (比如 ul、ol)

2.也可以使用 template 标签和 v-for 来包装 li 元素