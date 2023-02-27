<template>
  <div id="app">
    <h2>식단 등록</h2>
    <breakfast @regBreakfast="regBreakfast" class="row"/>
    <lunch @reglunch="reglunch" class="row"/>
    <dinner @regdinner="regdinner" class="row"/>
    
    <h2>오늘의 식단</h2>
    <div class="row">
      아침 : {{ breakfast }}
    </div>
    <div class="row">
      점심 : {{ lunch }}
    </div>
    <div class="row">
      저녁 : {{ dinner }}
    </div>
  </div>
</template>

<script>
import breakfast from './components/breakfast.vue';
import lunch from './components/lunch.vue';
import dinner from './components/dinner.vue'

export default {
  name: 'App',
  components: {
    breakfast,
    lunch,
    dinner
   
  },
  data() {
    return {
      breakfast :"",
      lunch :"",
      dinner :""
    }
  },
  methods: {
    regBreakfast(selectmenu){
      this.breakfast= selectmenu
    },
    reglunch(selectmenu){
      this.lunch= selectmenu
    },
    regdinner(selectmenu){
      this.dinner= selectmenu
    }
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
.row {
  margin-bottom: 10px;
}
</style>
