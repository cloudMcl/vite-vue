<template>
  <div class="container">
    <div class="flex" v-if="isLogin">
      <!--      exact精确匹配路径-->
      <router-link v-for="route in routers" :to="route.path" exact>{{route.meta.title}}</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
name: "menu",
  data() {
    return {
      routers:this.$router.options.routes
    }
  },
  computed:{
    isLogin(){
      return this.$route.path !== '/login'
    }
  }
}
</script>

<style scoped>
  .container{
    width: 100vw;
    height: 100vh;
  }
  .flex{
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    justify-content: center;
  }
  .flex a{
    display: block;
    margin-right: 20px;
  }
</style>