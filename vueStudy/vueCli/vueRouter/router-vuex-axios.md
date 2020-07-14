# Router
* 路由的配置具体查看  ./src/router/index.js
### router-link 
* 该标签是vue-router内置组件，它会被渲染成a标签
#### router-link的其他属性 （具体用法查看 ./src/app.vue）
+ tag  默认是渲染为a标签，该属性可以渲染为别的标签  比如：tag='button' 会渲染为button
+ replace 不会留下痕迹，浏览器中的后退键不能使用
+ active-class 激活时的样式  （有两种写法）

---
### router-view
* 该标签会根据当前路由，动态渲染不同的组件

## 动态路由
* 具体用法和使用查看   ./src/app.vue  ./src/router/index.js  ./src/components/User.vue

## 路由懒加载
* 原理:将每一个组件的js代码分别打包为每一个代码块，这样请求的时候只需要请求对应的代码块即可，不用请求全部的js代码
* 用法：./src/router/index.js

## 嵌套路由
1. 创建子组件
2. 配置路由，具体写法查看 ./src/router/index.js  home组件路由下的chaildren
3. 引用，具体写法查看  ./src/components/Home.vue

## 传递参数
### 一种发法就是动态路由，具体用法查看动态路由
###  query类型
* 用法查看 ./src/app.vue   ./src/components/profile.vue

## $router 和 $route的区别
* $router 全局路由对象
* $route 当前激活的路由对象

## keep-alive和vue-router 
* 作用：缓存组件的状态；（比如跳转之前选中的时消息列表，跳转回来以后依然是消息列表）     具体用法查看  ./src/components/Home.vue   
* 属性  exclude  属性是字符串或者正则，用法查看  ./src/app.vue   作用：排除当前组件  
* 属性  include  属性是字符串或者正则，   作用：只有当前组件会被缓存，不写就是全部组件  
