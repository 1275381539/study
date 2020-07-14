import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 基本使用
// axios({ // 默认是get方法
//   url:'http://123.207.32.32:8000/home/multidata'
// }).then(res=>{
//   console.log(res)
// })

// axios({ // post
//   url:'http://123.207.32.32:8000/home/multidata', // 这个接口不支持post请求
//   // method:'post'
// }).then(res=>{
//   console.log(res)
// })

// axios({ // get传参1
//   url:'http://123.207.32.32:8000/home/data?type=pop&page=1'
// }).then(res=>{
//   console.log(res)
// })

// axios({ // get传参2
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
//   console.log(res)
// })

// 2. axios发送并发请求
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata',
// }),axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// })])
//   .then(results => {
//     console.log(results)
//   })


// 3. axios 的配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000' // 公共前缀
// axios.defaults.timeout = 5000 //超时相应

// axios.all([axios({
//   url:'/home/multidata',
// }),axios({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// })])
//   .then(results => {
//     console.log(results)
//   })


// 4. 多个ip地址时的请求

// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000,
//   headers:{}
// })

// instance1({
//   url:'/home/multidata',
// }).then(res=>{
//   console.log(res)
// })

// const instance2 = axios.create({
//   baseURL:'http://127.0.0.1:8000', // 这个ip不存在 是个假设ip
//   timeout:5000,
//   headers:{}
// })

// instance2({
//   url:'/home/multidata',
// }).then(res=>{
//   console.log(res)
// })


// 5.封装以后的axios的使用

import {request} from './network/request'


// request({  // 第一种封装的调用
//   url:'/home/multidata',
// },res => {
//   console.log(res);
// },err => {
//   console.log(err)
// })


// request({  // 第二种封装的调用
//   baseConfig:{

//   },
//   success:function(res){

//   },
//   failure:function(err){

//   }
// })


request({  // 第三种封装的调用
  url:'/home/multidata',
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})