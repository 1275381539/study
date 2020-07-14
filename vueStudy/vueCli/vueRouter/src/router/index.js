// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

// 配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'

// 设置懒加载以后不需要这样引入
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = ()=>import('../components/Home')

const HomeMes = ()=>import('../components/HomeMes')
const HomeNews = ()=>import('../components/HomeNews')

const About = ()=>import('../components/About')
const User = ()=>import('../components/User')
const Profile = ()=>import('../components/Profile')

// 1. 通过Vue.use(插件)  安装插件
Vue.use(VueRouter)


// 2. 创建vueRouter对象
const routes = [
  {
    path:'',
    // redirect  重定向
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'Home'
    },
    children:[
      // 实现keep-alive  时注释掉的   如果要取消注释，请注释掉 ../components/Home 中的 activated 和 beforeRouteLeave 函数
      // {
      //   path:'',
      //   // redirect  重定向
      //   redirect:'news'
      // },
      {
        path:'news',// 可以不加 '/'
        component:HomeNews
      },
      {
        path:'mes',
        component:HomeMes
      }
    ]
  },
  {
    path:'/about',
    component:About,
    meta:{
      title:'About'
    },
  },
  {
    path:'/user/:userId',
    component:User,
    meta:{
      title:'User'
    },
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'Profile'
    },
  }
]
const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'active' // active-class  另一种写法
})

// 前置钩子函数
router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title
  next()
})
// 后置钩子
router.afterEach((to,from)=>{

})
// 3. 将router对象传入到vue实例中

export default router