<template>
  <Header></Header>
  <router-view/>
  <FooterComponent></FooterComponent>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
}
</style>

<script>
import Header from "@/components/Header.vue";
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {Header, FooterComponent}
}
</script>

