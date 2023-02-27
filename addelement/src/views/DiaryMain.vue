<template>
    <div >
      <div :style="{display :'none'}"> <DiaryList></DiaryList></div>
      <Header></Header>
        <div  :class="main">
          <div >
           <span :style="{marginRight: '15px'}">{{ diaryList[idx].subject}}</span> 
           <span>{{ diaryList[idx].date}}</span> 
           <span><button :style="{float : 'right'}" @click="delteList()">삭제</button></span> 
          </div>

          <div>
            {{ diaryList[idx].contents}}
          </div>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
import Header from './Header.vue';
import DiaryList from './DiaryList.vue';

export default{
    name: "DiaryMain",
    components: { Header ,DiaryList },
    data() {
      return {
        diaryList : this.$store.state.diaryList,
        idx : 0,
      }
    },
    watch: {
    // 라우트가 변경되면 findindex 메소드 다시호출
    '$route': 'findIndex'
     },
     computed  : {
      main : function(){
         if(this.$route.path == "/diary" ){
          return {changeDisplay:false, main:true}
         }
         else{
          return{changeDisplay:true,main:false }
         }
       }
     }, 
    methods: {
      //인덱스 가져오기
      findIndex(){
        this.idx = this.$store.state.indexid
      },
      //삭제하기
      delteList(){
        console.log("삭제할 idx: " +this.idx)
        this.$store.commit('deleteList',this.idx)   
        this.$store.commit('updateId',0)   
        this.$router.push('/diary/list')   
        
      }
    },

    
}
</script>

<style scoped>
.changeDisplay {
  display: none;
}
.main {
  border-bottom : 1px solid gray;
  height: 50px;
  text-align: left;
  line-height: 50px;
  margin: 20px;
  
}
</style>