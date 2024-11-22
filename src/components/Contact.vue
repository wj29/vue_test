<template>
  <h2>联系我们</h2>
  <p>您可以通过下列方式联系我们：</p>
  <ol>
    <li><a href="https://www.baidu.com">百度</a></li>
    <li><a href="https://www.google.com">谷歌</a></li>
  </ol>
  <button @click="welcome">展示欢迎您</button>
  <router-view></router-view>
</template>

<script>
  export default {
    name: "Contact",
    methods: {
      welcome() {
        this.$router.push("/ip")
      }
    }
  }
</script>
