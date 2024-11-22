<template>
  <div id="root">
    <button @click="back2Home">Home</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    back2Home() {
      this.$router.push("/")
    }
  },
  beforeCreate() {}
};
</script>
