<template>
  <nav>
    <router-link to="/">Početna</router-link>
    <router-link to="/galerija">Galerija</router-link>
    <router-link to="/jelovnik">Jelovnik</router-link>
    <router-link to="/moj_nalog">Moj nalog</router-link>
    <router-link to="/o_nama">O nama</router-link>
  </nav>
</template>

<style scoped>
nav {
  position: relative;
  width: 100%;
  height: 80px;
  padding: 0;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-evenly;
  border-top: 1px solid gray;
  /* background-color: #E5E4E2; */
}

a {
  flex-basis: 100px;
  flex-grow: 1;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-sizing: border-box;
}

a:hover {
  color: #FF7F50;
}

a.router-link-exact-active {
  background-color: #FF7F50;
  color: white;
}

</style>

<script>

</script>