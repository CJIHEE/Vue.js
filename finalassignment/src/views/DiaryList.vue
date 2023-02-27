<template>
  <div class="scroll">
    <div 
      class="parent header">
        <div class="child-one">
          <el-button-group style="float: left;">
            <el-button 
              type="primary" plain icon="el-icon-tickets"
              @click="showTimeLine"
              :autofocus="true">
            </el-button>
            <el-button type="primary" plain
              @click="showcardList">
                <i class="el-icon-menu">
                </i>
            </el-button>
          </el-button-group>
            <el-button
              icon="el-icon-edit" 
              circle
              class="modify-btn"
              @click="write">
            </el-button>
        </div>
        <div>
          <el-input
            placeholder="검색"
            v-model="searchWord"
            @change='serachList'>
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
    </div>
    <!-- 타임라인 -->
    <div class="block filterList" :class="timeLine">
      <el-timeline>
        <el-timeline-item 
        v-for="(item,index) in DiaryList(this.searchText)" 
        :key="index" 
        :timestamp="item.date" placement="top"
        >
          <el-card >
            <div 
            class="parent" 
            @click="goDiary(item.id)"
            @mouseover="showBtn(index)"
            @mouseleave="hideBtn()"
            >
              <div class="child-one">
                <h4>
                  {{item.subject}}
                </h4>
                <p style="color: #8f61ca;">
                  {{item.date}} 작성
                </p>
              </div>
              <div>
                <el-button plain 
                @click.stop="deleteList(item.id)"
                :class="{show:index === checkBtn, hide : index != checkBtn}"
                >
                X
                </el-button>
            </div>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <!-- 카드 -->
    <div class="filterList" :class="cardList">
      <el-row :gutter="12">
        <el-col :span="8"  
          v-for="(item,index) in DiaryList(this.searchText)" 
          :key="index" 
           style="margin-bottom: 20px;"
            >
            <el-card shadow="always">
            <div 
            class="parent" 
            @click="goDiary(item.id)"
            @mouseover="showBtn(index)"
            @mouseleave="hideBtn()"
            >
              <div class="child-one" style="width: 100%;">
                <h5 style="color: #8f61ca;">
                  {{item.date}}
                </h5>
                <h5 style="">
                  {{item.subject}}
                </h5>
                <div class="card-contents">
                  {{ item.contents }}
                </div>
              </div>
              <div>
                <el-button type="info" 
                icon="el-icon-close" 
                circle size="mini"
                @click.stop="deleteList(item.id)"
                :class="{show:index === checkBtn, hide : index != checkBtn}"               
                >
                </el-button>
              </div>
            </div>     
            </el-card>
        </el-col>
      </el-row>
    </div> 
   </div>
</template>

<script>
export default{
    name: 'DiaryList',
    computed : {
      timeLine : function(){
        const checkTimeLine = this.clickTimeLine
        return checkTimeLine=='click'?{hideDispaly:false}:{hideDispaly:true};
      },
      cardList : function(){  
        const checkCardList = this.clickCardList
        return checkCardList=='click'?{hideDispaly:false}:{hideDispaly:true};
      },
      index : function(){
        if(this.checkBtn == this.index){
          return {hide:false}
        } 
        return {hide:false}
      }
    },
    data() {
      return {
        searchWord:'',
        DiaryList : this.$store.getters.getDiaryList,
        searchText: '',
        tabPosition: 'left',
        idx : this.$route.params.id,
        clickTimeLine:'click',
        clickCardList:'',
        checkBtn :'',
      }
    },
    methods: {
      //글작성
      write(){
        this.$router.push({name:'write',params:{id :-1}});
      }, 
      //제목으로 글 찾기
      serachList(){
        this.searchText = this.searchWord;
        this.$store.getters.getDiaryList(this.searchText);
      },
      //검색어 초기화
      resetWord(){
        this.searchWord='';
        this.searchText='';
      },
      //삭제하기
      deleteList(id){
      //인덱스 추출
       const index = this.$store.getters.findIndex(id);
       //삭제
         this.$store.commit('deleteList',index);   
         this.$store.commit('updateId',0);      
         this.deleteMessage();
      },
      //다이어리 상세보기
      goDiary(id){
        //인덱스 추출
        let index = this.$store.getters.findIndex(id);
        //해당 인덱스 스토어에 저장
        this.$store.commit('updateId',index);
        //라우터 변경
        this.$router.push({name:'detail',params:{id :index}});
      },
      deleteMessage() {
            this.$message('삭제하였습니다');
        },
      showTimeLine(){ 
        this.clickTimeLine ='click';
        this.clickCardList ='';
      },
      showcardList(){ 
        this.clickCardList ='click';
        this.clickTimeLine ='';
      },
      showBtn(index){
        this.checkBtn = index;
      },
      hideBtn(){
        this.checkBtn = -1;
      }
    },
}
</script>

<style scoped>
.header {
  padding-bottom: 3%; 
  width: 80%; 
  border-bottom: 1px solid rgb(219, 219, 219);
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;
}
.display {
  display: inline;
  margin: 5px;
}
.filterList {
  margin : auto;
  width: 80%;
  margin-top: 10px;
  text-align: left;
  padding: 10px;
  overflow-y: auto;
  height: 500px;
}
.filterList ::-webkit-scrollbar {
  width: 10px;
}
.filterList ::-webkit-scrollbar-thumb {
  background-color: #d9d9d9;
  border-radius: 10px;
}
.filterList ::-webkit-scrollbar-track {
  background-color: #f2f2f2;
  border-radius: 10px;
}
.parent{
  display: flex;
  cursor : pointer
}
.child-one{
  flex: 1.5;
}
.child-two{
  flex: 0.5;
}
.card-contents{
  margin-top: 20px; 
  height: 100px;
  white-space:pre-line;
  word-break:break-all;
}
.hideDispaly{
  display: none;
}
.modify-btn{
  color: white;
  background-color: #8f61ca;
  border: 1px solid #8f61ca;
  margin-left: 20px;
  float: left;
}
.show{
  display: inline;
}
.hide{
  display: none;
}
</style>