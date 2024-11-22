<template>
  <div class="home">
    <h2>home Page</h2>
    <p>this is home page</p>
    <button @click="navigateToHello">欢迎您</button>
    <button @click="navigateToContact">联系我们</button>
  </div>
</template>

<script>
export default {
  name: "Home",

  methods: {
    navigateToHello() {
      this.$router.push("/hello")
    },
    navigateToContact() {
      this.$router.push("/contact")
    }
  }
}
</script>
