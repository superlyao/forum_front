<template>
  <div id="app">
    <HeaderMenu></HeaderMenu>
    <Container></Container>
  </div>
</template>

<script>
  import HeaderMenu from './model/mainFrame/HeaderMenu.vue'
  import Container from './model/mainFrame/Container.vue'
export default {
  name: 'App',
  components: {HeaderMenu, Container}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
