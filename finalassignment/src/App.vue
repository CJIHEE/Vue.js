<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <router-link to="/news">News</router-link>
    <router-link to="/ask">ASK</router-link>
    <router-link to="/jobs">Jobs</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>

//import {store} from "./store"

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
