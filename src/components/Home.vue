<template>
  <el-container class="home">
    <el-header>
      <div class="logo"></div>
      <div class="logout"><span>欢迎光临</span><a
          href="javascript:;"
          @click="logout"
        >退出</a></div>
      <div class="title">
        <h1>电商后端管理系统</h1>
      </div>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="users"><i class="el-icon-menu"></i><span>用户列表</span></el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1"><i class="el-icon-menu"></i><span>角色列表</span></el-menu-item>
            <el-menu-item index="2-2"><i class="el-icon-menu"></i><span>权限列表</span></el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    // 退出功能
    logout() {
      // 1.点击退出按钮，弹出确认框
      this.$confirm('您确定要退出当前用户吗?', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message.success('成功退出')
        // 2.删除本地存储的token数据
        localStorage.removeItem('mytoken')
        // 3.跳转到登录页
        this.$router.push('/login')
      }).catch(() => {
        this.$message.info('取消退出')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .el-header {
    background-color: #b3c1cd;
    .logo,
    .logout,
    .title {
      height: 60px;
      line-height: 60px;
    }
    .logo {
      width: 180px;
      float: left;
      background: url("../assets/images/logo.png") no-repeat center center;
      background-size: contain;
    }
    .logout {
      width: 180px;
      float: right;
      text-align: right;
      font-weight: bold;
      span {
        font-size: 18px;
      }
      a {
        color: red;
        margin-left: 5px;
      }
    }
    .title {
      overflow: hidden;
      text-align: center;
      color: #fff;
    }
  }
  .el-aside {
    background-color: #545c64;
    .el-menu {
      width: 200px;
    }
  }
  .el-main {
    background-color: #d4dfe4;
  }
}
</style>
