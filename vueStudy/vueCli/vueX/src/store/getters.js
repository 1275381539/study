export default{
    power(state){
        return state.counter * state.counter  
    },
    powers(state,getters){ // 第一个参数就是state ，第二个参数是getters 如果需要传参，必须返回一个函数，给这个函数内部传参
        
        return age=>{
            return age
        } 
    },
}