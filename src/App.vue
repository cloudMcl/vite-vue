<template>
  <div id="container">
    <customMenu/>
    <router-view></router-view>
  </div>
</template>

<script>
import customMenu from './components/customMenu.vue'
export default {
  name: "App",
  components:{customMenu}
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
</style>