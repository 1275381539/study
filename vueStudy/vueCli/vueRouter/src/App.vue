<template>
  <div id="app">
    <!-- active-class  有多个选项的时候，每个都写很不方便，所以有另外一种写法，请查看  ./router/index.js-->
    <!-- to后面写路径的时候要写成 '/xx' ,必须加上前面的 '/' 这样写是绝对路径，不写的话即为相对路径 -->
    <!-- <router-link to='/home' tag='button' replace active-class='active'>home</router-link>
    <router-link to='/about' replace active-class='active'>about</router-link> -->

    <!-- <router-link to='/home' tag='button' replace >home(router-link标签跳转)</router-link>
    <router-link to='/about' replace>about(router-link标签跳转)</router-link>
    <router-link :to="'/user/'+userId" replace>user(router-link标签跳转)</router-link>
    <router-link :to="{path:'/profile',query:{name:'why',age:18,height:1.7}}" replace>profile(router-link标签跳转)</router-link> -->

    <button @click="homeClick">home(js跳转)</button>
    <button @click="aboutClick">about(js跳转)</button>
    <button @click="userClick">user(js跳转)</button>
    <button @click="profileClick">profile(js跳转)</button>

    <keep-alive exclude="Profile,user">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:'lisi'
    }
  },
  methods:{
    homeClick(){
    //  this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick(){
     // this.$router.push('/about')
      this.$router.replace('/about')
    },
    userClick(){
      this.$router.replace('/user/'+ this.userId)
    },
    profileClick(){
      this.$router.replace({
        path:'/profile',
        query:{
          name:'这是js跳转传的name参数',
          age:'这是js跳转传的age参数',
          height:'这是js跳转传的height参数',
        }
      })
    },
  }
}
</script>

<style>
.active{
  color: red
}
</style>
