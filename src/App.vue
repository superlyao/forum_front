<template>
  <div style="margin: 0">
    <NavMenu></NavMenu>
    <Container></Container>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
  import NavMenu from './components/mainFramework/NavMenu.vue'
  import Container from './components/mainFramework/Container.vue'
  import FooterPage from './components/mainFramework/Footer.vue'
  export default {
    components: {NavMenu, Container, FooterPage}
  }
</script>

<style>

</style>
