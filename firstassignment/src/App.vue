<template>
  <div id="app">
    <!-- <CheckParent @goParent2="finalCheck"/> -->
    <h2> 1번 과제 row 반복  </h2>
    <RepeatRows/> 

    <div style="margin-top: 5%;">
    <h2 > 2번 과제 cloume, row 반복  </h2>
    <RepeatCloRow/>
   </div>

    <h1>난수 생성</h1>

    
    </div>

</template>

<script>

import RepeatRows from './components/RepeatRows.vue';
import RepeatCloRow from './components/RepeatCloRow.vue';


export default {
  name: 'App',
  num2 : 4,
  num3 : 3,
  components: {
  
    RepeatRows,
    RepeatCloRow
    
    
  },

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
