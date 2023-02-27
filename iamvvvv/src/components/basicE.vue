<template>
  <div class="hello">
    <a href=https://www.naver.com @click="onClickButton">네이버</a>
    
  <br>
    <div id="examplet">
      <div id="outer" @click="outerClick"> 
        Outer
        <div id="firstInner" @click.self="fisrtInnerClick"> 
          first Inner
          <div id="Inner" @click="innerclick"> 
            last Inner
          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: 'basicE',
  methods: {
    onClickButton : function(e) {
      e.preventDefault();     
    },
    outerClick(e) {
      console.log("### OUTER CLICK");
      console.log("Event Phase : ", e.eventPhase);
      console.log("Current Target : ", e.currentTarget);
      console.log("Target : ", e.target);
    },
    firstInnerClick(e) {
      console.log("### firstInnerClick CLICK");
      console.log("Event Phase : ", e.eventPhase);
      console.log("Current Target : ", e.currentTarget);
      console.log("Target : ", e.target);
    },
    innerClick(e) {
      console.log("### INNER CLICK");
      console.log("Event Phase : ", e.eventPhase);
      console.log("Current Target : ", e.currentTarget);
      console.log("Target : ", e.target);
    },

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
