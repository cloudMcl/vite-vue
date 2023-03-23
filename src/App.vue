<template>
  <div>
    <div class="flex" >
<!--      exact精确匹配路径-->
      <router-link v-for="route in routers" :to="route.path" exact>{{route.meta.title}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      routers:this.$router.options.routes
    }
  },
}
</script>

<style scoped>
  .flex{
    display: flex;
    justify-content: center;
  }
  .flex a{
    display: block;
    margin-right: 20px;
  }
</style>