## 用vite构建vue2项目

####1. *yarn create vite 命令开始快速创建vue2项目*
>选择vanilla(即原生的意思),剩余的自行选择
___
####2. *安装vite对vue2支持的插件*
>2.1   *yarn add vite-plugin-vue2 -D*
> 
>2.2   *根目录创建vite.config.js文件*
> 
>2.3   *vite.config.js文件输入以下代码*
>```
>import { createVuePlugin } from 'vite-plugin-vue2'
>export default {
>   plugins: [createVuePlugin()]
>}
>
####3. *安装vue依赖*
>3.1   *yarn add vue -S*
> 
>3.2   *yarn add vue-template-compiler -S*
> 
> 3.3  *特别注意，vue要和vue-template-compiler的版本号要一致,可以使用命令*
>
####4. *修改项目文件依赖关系*
>4.1   *检查main.ts文件是否在src下*
> 
>4.2   *检查index.html中的main.ts文件引用路径是否正确*
> 
####5. *安装vue-router*
>5.1   *yarn add vue-router@3 -D (vue2只能和vue-router 3.x使用,vue3和vue-router 4.x使用)*
> 
>5.2   *yarn list vue-router(或是npm list vue-router) 会显示出vue-router的版本号,然后安装此版本的vue-router*
> 
####6. *安装vuex*
>6.1   *yarn add vuex@3 -D (vue2只能和vuex 3.x使用,vue3和vuex 4.x使用)*
> 
> 6.2  *yarn list vuex(或是npm list vuex) 会显示出vuex的版本号,然后安装此版本的vuex*