<template>
  <div id="app">
    <div>
      <todoListArea></todoListArea> 
     
      <!-- <router-link to="/">라우터 테스트</router-link> |
      <router-link to="/final">파이널 라우터 테스트</router-link> -->

    </div>
    <!-- <router-link to="/router">routerest</router-link>
    <router-link to="/final">final</router-link>
    <router-view></router-view>
   <router-view></router-view> -->

  </div>
</template>

<script>

import todoListArea from './components/todoListArea.vue';



export default {
  name: 'App',
  components: { todoListArea}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
