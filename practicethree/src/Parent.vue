<template>
  <div id="app">
    
     <child msg ="출력될 문구3(parent에서 바인딩)" />
      <!-- <LalaLand message=" 여기에 마우스를 호버하면 뭐나온다" />  -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
     <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>  -->
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LalaLand from './components/LalaLand.vue'
import child from './components/child.vue'

export default {
  name: 'ParnetGo',
  components: {
  //  HelloWorld,
  //  LalaLand
    child
    

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
  margin-top: 60px;
}
</style>
