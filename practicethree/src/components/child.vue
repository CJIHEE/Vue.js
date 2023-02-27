<template>
  <div class="hello">
    출력될 문구 1
    <h1>{{ message2 }}</h1>
    <h1>{{ msg }}</h1>
    
</div>
</template>

<script>
export default {
  name: 'childGo',

    data() {
        return {
           message2 : "출력될 문구2(child에서 data로 바인딩)" //message2 데이터 바인딩
        
      }
    },
  props: {
    msg: String //pros 으로 부모에게 보내준다 (String,object 같은 형식 쓰기)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>