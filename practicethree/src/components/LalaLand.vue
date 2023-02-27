<template>
  <div>
    <span v-bind:title="message2" id="msg">
      여기에하면 나오나?<BR></BR>
      {{message}} 
    </span>  
    <br/>

    <div>
      <span>하루 용돈이 얼마입니까?</span>
      <input type="number" v-model="money"/>
    </div>

    <div>
      <button @click="check"> 눌러봐</button>
       <span v-if="money < 30000" v-bind:style="display"> {{ mme1 }}</span>
      <span v-if="money < 10000"  v-bind:style="display"> {{ mme2 }}</span>
      <span v-if="money < 20000" v-bind:style="display"> {{ mme3 }}</span>
      <span v-else v-bind:style="display">{{ mme4 }}</span> 

    </div>

  </div>
  
</template>

<script>

export default {
    name: 'LalaLand',
    data() {
        return {
           message2 : "나오니이이", //message2 데이터 바인딩
           display : { display : "none"},
           money : 0 ,
           mme1 : "오늘 점심은 샤브샤브도 가능" ,
           mme2 : "하루 버티기 힘들겠어요" ,
           mme3 : "점심먹고 커피도 못마시겠네요" ,
           mme4 : "헐 부자이신가 봐요"
      }
    },
    methods : {
      check() {
        var money2
        money2 = this.money
        this.money = money2
        this.display =  { display : "block"};
        console.log(money2);
     

      },
      inputEvent(){
        if(event.keyCode === 13) {
          this.display = { display : "none"};
          console.log('나온다');
        }
        }
        
    },
      
    props : {
      message : String //message 바인딩 props으로 부모로 보낸다 app2.vue로
  
    }
   
  
      
    

  }

</script>

<style scoped>
 #msg {
  margin-top: 5%;
 }


</style>
