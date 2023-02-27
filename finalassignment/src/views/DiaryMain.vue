<template>
    <div class="top">
      <Header></Header>

      <router-view></router-view>
    </div>
</template>

<script>
import Header from './Header.vue';

export default{
    name: 'DiaryMain',
    components: { Header },
    data() {
      return {
      }
    },
    // idx,diaryList를 computed를 통해 불러오는 것으로 변경해서
    //계속 데이터가 바뀌는 것이 감지되기 때문에 watch를 사용할 필요가 없어져서 삭제했습니다
    computed  : {
      main : function(){
        let router = this.$route.path;
        return router=="/diary"?{changeDisplay:false, main:true}:{changeDisplay:true,main:false };
        
      },
    }, 
    methods: {
      //삭제하기
      delteList(){
        this.$store.commit('deleteList',this.idx) ;  
        this.$store.commit('updateId',0);   
        this.$router.push('/diary/list');   
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
.top{
  overflow: hidden;
  line-height: 1;
  height: 100%;
}
</style>