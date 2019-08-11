<template>
  <div>
    用户列表
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    async getUserList() {
      let res = await this.axios.get('users')
      console.log(res)
    }
  },
  created() {
    // 进入页面,发送请求,获取数据
    this.getUserList()
  }
}
</script>

<style lang="less" scoped>
</style>
