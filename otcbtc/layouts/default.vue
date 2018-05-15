

<template>
  <div>
    <top-navbar></top-navbar>
    <nuxt/>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
import TopNavbar from '~/components/topNavbar'
import BottomInfo from '~/components/bottomInfo'

export default {
  components: {
    TopNavbar,
    BottomInfo
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f8f9fa;
}
html{
  font-size: 12px;
}
</style>

