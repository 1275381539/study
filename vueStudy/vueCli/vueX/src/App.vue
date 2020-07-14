<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <h2>getters方法的演示{{$store.getters.power}}</h2>
    <h2>getters方法的演示{{$store.getters.powers(12)}}</h2>
    <button @click="jia">+</button>
    <button @click="jian">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <h2>{{$store.state.info}}</h2>
    <button @click="info">修改info的属性</button>
    <button @click="infos">给info添加属性</button>


    <h2>------modules里面的属性----------</h2>
    <h2>{{$store.state.c.name}}</h2>
    <vuex></vuex>
  </div>
</template>

<script>
import vuex from './components/vuex'
export default {
  name: 'App',
  components:{
    vuex
  },
  data(){
    return {

    }
  },
  methods:{
    jia(){
      this.$store.commit('add')
    },
    jian(){
       this.$store.commit('rem')
    },
    addCount(count){
      // 1. 普通的提交方式
      this.$store.commit('addCo',count)

      // 2. 特殊的提交方式
      this.$store.commit({
        type:'addCo',
        count
      })
    },
    info(){
      // this.$store.commit('updataInfo')
      // console.log('修改属性成功，因为这个属性是初始化的所以页面会同步刷新')
      
      // 异步操作
      // this.$store.dispatch('aup',{   // 这种写法是可以实现传递参数，并获取回调的，只是写法不太好
      //   payload:'这是传递的参数',
      //   success:()=>{
      //     console.log('修改完成了')
      //   }
      // })

      this.$store.dispatch('aup','这是另外一种写法').then(res=>{
        console.log(res,'此时以修改完成并调用回调函数')
      })

    },
    infos(){
      this.$store.commit('updataInfos')
      console.log('添加属性成功，因为这个属性是没有初始化的所以页面不会同步刷新。现在看到刷新时因为用了Vue.set（）方法。普通的给对象添加属性方法不会同步刷新')
    },
  }
}
</script>

<style>

</style>
