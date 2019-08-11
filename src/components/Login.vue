<template>
  <div class='login'>
    <!-- 登录框 -->
    <el-form
      :model="loginForm"
      label-width="70px"
      :rules="rules"
      status-icon
      ref="loginForm"
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
        <el-input
          v-model="loginForm.password"
          type="password"
          @keyup.native.enter="login"
        ></el-input>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-form-item>
        <el-button
          type="primary"
          @click="login"
        >登录</el-button>
        <el-button @click='resetForm'>重置</el-button>
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
        ],
        password: [
          { required: true, message: '用户名不能为空', trigger: 'change' },
          { min: 6, max: 12, message: '必须是在 6 - 12 位字符', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    // 登录
    login() {
      // 1.点击登录后,触发表单校验
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          // 校验成功
          // 发送请求,获取提交的用户名和密码是否正确
          let res = await this.axios.post('login', this.loginForm)
          // 结构数据对象
          let { meta: { status }, data: { token } } = res.data
          if (status === 200) {
            this.$message.success('登录成功')
            // 保存token
            localStorage.setItem('mytoken', token)
            // 跳转页面,修改锚点
            this.$router.push('/home')
          } else if (status === 400) {
            this.$message.error('用户名或密码错误')
            // 清除表单数据,防止重复提交
            this.$refs.loginForm.resetFields()
          }
        } else {
          // 校验失败
          return false
        }
      })
    },
    // 重置
    resetForm() {
      // 1.点击重置按钮,清空表单信息
      this.$refs.loginForm.resetFields()
    }

  }
}
</script>

<style lang="less" scoped>
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
