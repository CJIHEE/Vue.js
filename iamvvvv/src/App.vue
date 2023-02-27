<template>
  <div id="app">
    <!-- <event/> -->
    <!-- <basicE/> -->
   <!-- <cardHeader @checked="onchecked"/>  -->
   <CheckParent @goParent2="finalCheck"/>
   <h2>두번째 컴포넌트 결과 {{ checkEmit }} {{ result }}</h2>
   <h2 @goParent2="finalCheck" :class="change"> 5이상이면 색깔 바뀌어야함</h2>
    
  </div>
</template>

<script>
//import basicE from './components/basicE.vue';
//import event from './components/event.vue';
//import cardHeader from './components/cardHeader.vue';
 import CheckParent from './components/CheckParent.vue';

export default {
  name: 'App',
  components: {
    //event,
    //basicE,
    //cardHeader
    CheckParent
  },
  data () {
    return {
      checkEmit : "",
      checkComponent : "",
      result : "0"
      
    }
  },

  methods: {
    finalCheck : function(result ,checkEmit){
      console.log("result : " + result)
      console.log("this.result : " + this.result)
      this.result = result
      this.checkEmit = checkEmit 
      
      console.log("this.checkEmit : " + this.checkEmit)
      console.log("checkEmit : " + checkEmit)
      
  
    this.checkComponent = console.log("컴포넌트 임포트 성공")
    

    },
   
    },

    computed : {
      change : function(){
        if(this.result > 5 ) {
          console.log(this.checkEmit)
          return {changeColor:true}
        }
        else {
          console.log(this.checkEmit)
          return {changeColor:false}
        }
      }
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
.changeColor {
  color : red
} 
</style>
