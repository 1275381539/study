<template>
    <div>
        <h2>我是Home</h2>
        
        <router-link to='/home/news'>新闻</router-link>
        <router-link to='/home/mes'>消息</router-link>
        
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return {
            path:'/home/news'
        }
    },
    // 这两个函数，只有在keep-alive组件中才有效
    activated(){
        this.$router.push(this.path)
    },
    beforeRouteLeave(to,from,next){
        console.log(this.$route.path)
        this.path = this.$route.path
        next()
    }
}
</script>
<style scoped>

</style>