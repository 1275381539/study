export default{
    // aup(context,mes){ // 可以实现修改并回调
    //    setTimeout(()=>{
    //     context.commit('updataInfo')
    //     console.log(mes.payload)
    //     mes.success()
    //    },1000) 
    // }
    aup(context,mes){ // 可以实现修改并回调
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                context.commit('updataInfo')
                console.log(mes)
                resolve('随便传点参数0000000')
               },1000) 
        })
     }
}