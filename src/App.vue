<template>
  <div id="container">
    <div class="slide-menu">
      <slide-menu :routers="routers" :menuContainer="'height:100vh'"></slide-menu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import slideMenu from './components/slideMenu.vue'
export default {
  name: "App",
  components:{slideMenu},
  data() {
    return {
      routers:this.$router.options.routes,
    }
  },
}
</script>

<style>
  @import "style/globleStyle.css";
  #container{
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    padding: 20px 0 0 var(--slide-menu-w);
  }
  .slide-menu{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
  }
</style>