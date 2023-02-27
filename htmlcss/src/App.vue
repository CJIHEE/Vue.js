<template>
  <div id="app">
    <!-- <SecondLayout></SecondLayout> -->
    <FirstLayout></FirstLayout>
    </div>

</template>

<script>
//import SecondLayout from './components/SecondLayout.vue'
import FirstLayout from './components/FirstLayout.vue'

export default {
  name: 'App',
  components: {
   // SecondLayout,
   FirstLayout
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
