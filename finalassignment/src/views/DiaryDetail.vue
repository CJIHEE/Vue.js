<template>
    <div >
      <div class="detail-header">
        <p>
          {{ diaryList[idx].date}}
        </p>
        <div style="display: flex;">
          <div class="subject">
            <span>
              {{ diaryList[idx].subject}}
            </span>
            <span style="font-size: 13pt;" >
              (<i :class="[diaryList[idx].weather]"></i> ){{ diaryList[idx].emotion }}
            </span>
          </div>

            <div class="button">
              <el-button
                  icon="el-icon-delete"
                  @click="delteList()" 
                  circle
                  type="info"
                  style="float:right; margin : 0px 10px"
                  >
                </el-button>
                <el-button
                  icon="el-icon-back"
                  @click="goBackList()" 
                  circle
                  style="float:right; margin-right: 10px;"
                  >
                </el-button>
              <el-button
                  icon="el-icon-edit" 
                  circle
                  @click="modifyContents()"
                  class="modify-btn"
                  >
                </el-button>

            </div>
        </div>
      </div>
      <div class="contents">
          {{ diaryList[idx].contents }}
      </div>
    </div>
</template>

<script>

export default{
    name: 'DiaryDetail',
    components: {  },
    data() {
      return {
        idx : this.$route.params.id,
      }
    },
    computed : {
      diaryList : function(){
        return this.$store.state.diaryList
      }
    },
    methods: {
      //삭제하기
      delteList(){
        this.$store.commit('deleteList',this.idx);   
        this.$store.commit('updateId',0);   
        this.goBackList();  
      },
      //목록가기
      goBackList(){
        this.$router.push({name:'list'});   
      },
      modifyContents(){
        this.$router.push({name:'write',params:{id :this.idx}});
      }
    },
}
</script>

<style scoped>
.diary-detail {
  border-bottom : 1px solid gray;
  height: 50px;
  text-align: left;
  line-height: 50px;
  margin: 20px;
  
}
.modify-btn{
  color: white;
  background-color: #8f61ca;
  border: 1px solid #8f61ca;
  float: right;
  margin-right: 10px;
}
.detail-header{
  padding-bottom: 1.5%; 
  width: 80%; 
  border-bottom: 1px solid rgb(219, 219, 219);
  margin: auto;
  margin-top: 1.5%;
  margin-bottom: 2%;
  text-align: left;
  line-height: 1;
  color: rgb(122, 120, 120);

}
.subject{
  font-size: 20pt;
  margin-right: 10px;
  flex : 1;
  float: left;
}
.weather-emotion{
  vertical-align: middle;
  padding: 1%;
  float: left;
  flex : 1;
}
.contents{
  width: 80%;
  text-align: left;
  margin: auto;
}
.button{
  flex: 1;
  float: right;
}
</style>