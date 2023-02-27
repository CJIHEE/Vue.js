<template>
    <div >

        <div class="Detail">
          <div >
           <span :style="{marginRight: '15px'}">{{ diaryList[idx].subject}}</span> 
           <span>{{ diaryList[idx].date}}</span> 
           <span><button :style="{float : 'right'}" @click="delteList()" class="btn btn-outline-dark">삭제</button></span> 
           <span><button :style="{float : 'right', marginRight:'10px'}" @click="list()" class="btn btn-outline-dark">목록</button></span> 
        
          </div>

          <div>
            {{ diaryList[idx].contents}} 
          </div>
        </div>

    </div>
</template>

<script>

export default{
    name: "DiaryDetail",
    components: {  },
    data() {
      return {
        diaryList : this.$store.state.diaryList,
        idx : this.$route.params.id,
      }
    },
    methods: {
      //인덱스 가져오기
      findIndex(){
        this.idx = this.$store.state.indexid
      },
      //삭제하기
      delteList(){
        this.$store.commit('deleteList',this.idx)   
        this.$store.commit('updateId',0)   
        this.$router.push({name:'list'})   
      },
      //목록가기
      list(){
        this.$router.push({name:'list'})   
      }
    },

    
}
</script>

<style scoped>
.changeDisplay2 {
  display: none;
}

.Detail {
  border-bottom : 1px solid gray;
  height: 50px;
  text-align: left;
  line-height: 50px;
  margin: 20px;
  
}


</style>