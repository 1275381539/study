import axios from 'axios'

// export function request(config,success,failure){  // 这是第一种方法
//     // 创建axios实例
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000,
//     })

//     instance(config)
//         .then(res=>{
//             success(res)
//         })
//         .catch(err=>{
//             failure(err)
//         })
// }

// export function request(config){  // 这是第二种方法
//     // 创建axios实例
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000,
//     })

//     instance(config.baseConfig)
//         .then(res=>{
//             config.success(res)
//         })
//         .catch(err=>{
//             config.failure(err)
//         })
// }


// export function request(config){  // 这是第三种方法
//    return new Promise((resvole,reject) =>{
//     // 创建axios实例
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000,
//     })

//     instance(config)
//         .then(res=>{
//             resvole(res)
//         })
//         .catch(err=>{
//             reject(err)
//         })
//    })
// }


export function request(config){  // 这是第三种方法的简写
     // 1. 创建axios实例
     const instance = axios.create({
         baseURL:'http://123.207.32.32:8000',
         timeout:5000,
         headers:{} // 对headers 进行一些设置
     })

     // 2. axios的拦截器

     // 请求拦截; 
     instance.interceptors.request.use(config =>{
        console.log(config)

        // 为什么要拦截请求，拦截以后可以做些什么？以下是举例说明

        // 1. 也可以对headers进行一些设置

        // 2. 每次发送请求时可以，添加加载中动画

        // 3. 某些请求，比如登录（token），必须携带一些特殊的信息

        return config
     }, err => {
        console.log(err)
     }) 

     // 响应拦截
     instance.interceptors.response.use(res =>{
         console.log(res)
         return res.data
     },err=>{
         console.log(err)
     }); 


     // 3. 发送请求
    return instance(config)
 }

export function request1(){
    
}