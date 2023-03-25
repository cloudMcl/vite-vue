<template>
  <div class="container">
    <div class="form">
      <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
        <el-form-item prop="name">
          <el-input v-model="loginForm.name" placeholder="用户名"/>
        </el-form-item>

        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="密码"/>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="login()">登录</el-button>
        </el-form-item>

        <el-form-item>
          <div class="prompt">
            <span>温馨提示：</span>
            <span>未登录过的新用户，自动注册</span>
            <span>注册过的用户可凭账号密码登录</span>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {loginPassWordRe} from '../../utils/regexp'
export default {
  data() {
    return {
      loginForm: {
        name: '',
        password: '',
      },
      rules: {
        password: [
          { required: true, validator:loginPassWordRe, trigger: 'blur'}
        ],
      }
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$router.replace({path:"/"})
        } else {
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>
  .container{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #324057
  }

  .form{
    box-sizing: border-box;
    width: 370px;
    height:260px;
    padding: 25px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }

  /deep/.el-button{
    width: 100%;
    margin-top: 10px;
  }

  .prompt{
    font-size: 12px;
    color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
</style>