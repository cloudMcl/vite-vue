<template>
  <el-menu
      default-active="/"
      class="slide-menu"
      @open="handleOpen"
      @close="handleClose"
      @select="selectMenu"
      background-color="#2C3A4C"
      text-color="#FFFFFF"
      active-text-color="#ffd04b"
      :router="true"
  >
    <menu-item :routers="routers"/>
  </el-menu>
</template>

<script>
import menuItem from './menuItem.vue'
export default {
  name: "customMenu",
  components:{menuItem},
  data(){
    return {
      routers:this.$router.options.routes,
    }
  },
 methods:{
   handleOpen(key, keyPath) {
     //console.log('handleOpen',key, keyPath);
   },
   handleClose(key, keyPath) {
     //console.log('handleClose',key, keyPath);
   },
   selectMenu(key, keyPath){
     //console.log('selectMenu',key, keyPath);
   }
 }
}
</script>

<style scoped>
  .slide-menu{
    width: var(--slide-menu-w);
    height: 100vh;
    position: absolute !important;
    left: 0;
    top: 0;
    z-index: 99;
  }
</style>