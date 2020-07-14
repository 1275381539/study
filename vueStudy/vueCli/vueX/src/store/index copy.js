import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2. 创建对象

const modeleC = {
    state:{
        name:'这是modeleC种的name'
    }, 
    mutations:{},
    actions:{},
    getters:{
        full(state,getters,rootState){ // 前两个参数和下面的一样，第三个参数是跟目录

        }
    }
}
// 这个文件里面的函数的形参，一般不要随便改名字，基本都是固定名字（除了下面的mes）
const store = new Vuex.Store({
    // 保存的状态
    state:{
        // 属性初始化后，所有的数据都是响应式
        counter:10,  
        info:{
            name:'aaaa',
            age:18
        }
    },
    // 一些方法 必须是同步的
    mutations:{
        add(state){
            state.counter++
        },
        rem(state){
            state.counter--
        },
        addCo(state,n){
            // 普通提交方式
            state.counter += n
            // 特殊提交方式  n是对象
        },
        updataInfo(state){
            state.info.name = 'bbbbb'
        },
        updataInfos(state){
            // 普通的对象添加属性
            // state.info[address] = '北京'

            // vue添加属性
            Vue.set(state.info,'address','北京')

            // 普通的删除属性   不是响应式
            // delete state.info.age

            // vue 删除属性
           //  Vue.delete(state.info,'age')
        }
    },
    //  异步方法
    actions:{
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
    },
    // state 里面的数据变化以后使用  类似于vue中的computed
    getters:{
        power(state){
            return state.counter * state.counter  
        },
        powers(state,getters){ // 第一个参数就是state ，第二个参数是getters 如果需要传参，必须返回一个函数，给这个函数内部传参
            
            return age=>{
                return age
            } 
        },
    },
    //
    modules:{
        c:modeleC,
        a:{
            state:{}, 
            mutations:{},
            actions:{},
            getters:{}
            // 理论上这里也可以有modules 并且进行下一层的嵌套，但是这样嵌套更复杂了。所以一般只嵌套一层
        },
        b:{
            state:{}, 
            mutations:{},
            actions:{},
            getters:{}
        }
    }
})

export default store