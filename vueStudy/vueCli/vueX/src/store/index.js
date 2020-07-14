// 重构后的代码，为重构的查看 index copy.js
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modeleC from './modules/modeleC'
// 1.安装插件
Vue.use(Vuex)

// 2. 创建对象
const state = {
                    // 属性初始化后，所有的数据都是响应式
                    counter:10,  
                    info:{
                        name:'aaaa',
                        age:18
                    }
                }
// 这个文件里面的函数的形参，一般不要随便改名字，基本都是固定名字（除了下面的mes）
const store = new Vuex.Store({
    // 保存的状态
    state,
    // 一些方法 必须是同步的
    mutations,
    //  异步方法
    actions,
    // state 里面的数据变化以后使用  类似于vue中的computed
    getters,
    //
    modules:{
        c:modeleC
    }
})

export default store