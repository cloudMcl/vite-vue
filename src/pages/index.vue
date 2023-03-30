<template>
  <div class="container">
    首页
    <el-button size="mini" type="primary" @click="clearLogin">清除登录信息</el-button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods:{
    clearLogin(){
      window.localStorage.setItem('GET_LOGIN_INFO',JSON.stringify(false))
    }
  }
}
</script>

<style scoped>

</style>