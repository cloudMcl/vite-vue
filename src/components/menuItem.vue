<template>
  <div>
    <div v-for="(route,i) in routers"
         :key="route.path"
    >
        <div v-if="route.children">
          <el-submenu :index="route.path.toString()">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{ route.meta.title }}</span>
            </template>
            <menu-item :routers="route.children"></menu-item>
          </el-submenu>
        </div>
        <div v-else>
          <el-menu-item :index="route.path.toString()">
            <i class="el-icon-menu"></i>
            <span slot="title">{{route.meta.title}}</span>
          </el-menu-item>
        </div>
    </div>
  </div>
</template>


<script>
export default {
name: "menu-item",
  props:{
    routers:{
      type:Array,
    },
  },
}
</script>
<style scoped>
</style>