<template>
  <div class='login'>
    <!-- 登录框 -->
    <el-form
      :model="loginForm"
      label-width="70px"
      :rules="rules"
    >
      <!-- 登录头像 -->
      <img
        src="../assets/images/诗乃.jpg"
        alt=""
      >
      <!-- 用户名 -->
      <el-form-item
        label="用户名"
        prop="username"
      >
        <el-input v-model='loginForm.username'></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-form-item>
        <el-button type="primary">登录</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'change' },
          { min: 3, max: 9, message: '必须是在 3 - 9 位字符', trigger: 'change' }
        ]
      }
    }
  }
}
</script>

<style lang="less" spaced>
.login {
  height: 100%;
  background-color: #2d434c;
  overflow: hidden;
  .el-form {
    width: 400px;
    margin: 250px auto;
    background-color: #fff;
    padding: 75px 40px 15px 40px;
    border-radius: 20px;
    position: relative;
    img {
      width: 140px;
      height: 140px;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -90px);
      border-radius: 50%;
      border: 10px solid #fff;
    }
    .el-button + .el-button {
      margin-left: 100px;
    }
  }
}
</style>
