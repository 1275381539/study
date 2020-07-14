export default {
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
}