<template>
  <div>
  <button v-on:click="result += 1">더하기</button> 
  <button @click="onMinusValue">빼기</button> 

  <h1>result : {{ result }}</h1>

  <button @click="goEvent"> 부모에게 이벤트 발신</button>
  <hr/>
  </div>
</template>

<script>

export default({
  name : 'eventChild',
  data() {
    return {
      result : ""
    }
  },
  methods: {
    onMinusValue () {
      let result = this.result
      if(result <= -10) {
        alert('-10이하로는 지양해 주십시오')
      }else {
        this.result = result -1
      }
      console.log(this.result);
    
    },
    goEvent(){
        this.$emit('goEvent2', this.result)
      }
  },

})
</script>
<style scoped>
</style>