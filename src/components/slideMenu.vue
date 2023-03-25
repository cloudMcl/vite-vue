<template>
  <div :style="menuContainer" class="slide-menu-c" v-if="isLogin">
      <!--      exact精确匹配路径-->
      <div v-for="route in routers"
           class="normal"
           :key="route.path"
           :class="{animation:route.meta.isFold}"
           @click.stop="handleClick(route)"
      >
        <div class="hover">
          <router-link :to="route.path" exact>{{route.meta.title}}</router-link>
        </div>
        <div v-if="route.children && route.meta.isFold">
          <slide-menu :routers="route.children"></slide-menu>
        </div>
      </div>
  </div>
</template>

<script>
export default {
name: "slide-menu",
  props:{
    routers:{
      type:Array,
    },
    menuContainer:{
      type:String,
    },
  },
  data(){
    return {
      currentPath : this.$route.path
    }
  },
  computed:{
    isLogin(){
      return this.currentPath !== '/login'
    },
  },
  methods:{
    handleClick(route){
      this.currentPath = route.path;
      route.meta.isFold = !route.meta.isFold
    }
  }
}
</script>

<style scoped>
  .slide-menu-c{
    width: var(--slide-menu-w);
    background-color: #545c64;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .hover{
    box-sizing: border-box;
    height: 50px;
    line-height: 50px;
    padding: 0 40px;
  }
  .hover:hover{
    background-color: #3B4146;
  }
  .slide-menu-c a{
    color: #bfcbd9;
    text-decoration:none;
  }
  .normal{
    height: fit-content;
    transition: all 0.5s ease;
  }
  .animation{
    transition: all 1s ease;
  }
</style>