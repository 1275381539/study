import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Home = ()=>import('../views/home/Home')
const List = ()=>import('../views/list/List')
const Car = ()=>import('../views/car/Car')
const User = ()=>import('../views/user/User')

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home,
    },
    {
      path:'/list',
      component:List,
    },
    {
      path:'/car',
      component:Car,
    },
    {
      path:'/user',
      component:User,
    },
  ],
  mode:'history'
})
