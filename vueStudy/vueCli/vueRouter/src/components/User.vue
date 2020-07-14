<template>
    <div>
        <h2>我是User</h2>
        <h2>{{id}}</h2>
    </div>
</template>
<script>
export default {
    name:'user',
    computed:{
        id(){
            return this.$route.params.userId
        }
    }
}
</script>
<style scoped>

</style>