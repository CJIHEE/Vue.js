<template>
  <div>
  
    <event @goEvent2="goParent"></event>
    <h1>첫번재 컴포넌트 결과  : </h1>
    <h2 class="fistResult"> {{ result }}</h2>
    
    <hr/>  

  </div>
</template>

<script>

import event from './event.vue';

export default({
  name : 'CheckParent',
  components : {
    event
  },
  data() {
    return {
      result : ""
    }
  },

  methods: {
    goParent(result){
      this.$emit('goParent2', result, "[두번째 컴포넌트 성공]");
      this.result = result

    }
      
  },

})
</script>


<style scoped>

</style>