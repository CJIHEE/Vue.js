<template>
    <div >
          <div class="d-flex justify-content-between widthMargin" >
            <div class="display" :style="{textAlign : 'center', }"><button @click="write">쓰기</button></div>
            <div>
              <div class="display" ><input type="text" v-model="searchWord" @keyup.enter="serachSubject"></div>
              <div class="display" ><button @click="resetWord" >초기화</button></div>
            </div>
          </div>

          <div class="widthMargin filterList" >
            <el-table
            :data="DiaryList"
            style="width: 100%"
            @row-click="goDiary">
            <el-table-column
              label="Date"
              width="180">
              <template slot-scope="scope" >
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="subject"
              width="180">
              <template slot-scope="scope">
                <!-- <el-popover trigger="hover" placement="top">
                  <p>Name: {{ scope.row.subject }}</p>
                  <p>Addr: {{ scope.row.contents }}</p> -->
                  <div slot="reference" class="name-wrapper">
                    <span>{{ scope.row.subject }}</span>
                    <!-- <el-tag size="medium">{{ scope.row.subject }}</el-tag> -->
                  </div>
                <!-- </el-popover> -->
              </template>
            </el-table-column>
            <el-table-column
                label="Operations" align="right">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="goDiary(scope.row.id)">edit</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click.stop="deleteVue(scope.row.id)">Delete</el-button>
                </template>

            </el-table-column>
            </el-table>
          </div>

          <div>
            <el-tree
              :data="data"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[2]"
              :default-checked-keys="[5]"
              :props="defaultProps">
            </el-tree>
          </div>


          <div>
           <pagenation :currentPage="currentPage" :totalPages="totalPages" @currentpage="test2()"></pagenation>
          </div>

  </div>

    
    
</template>

<script>
//import Header from './Header.vue';
import pagenation from './pagenation,.vue'


export default{
    name: "DiaryList",
    components : {pagenation},
    data() {
      return {
        searchWord:"",
        searchText:"",
        DiaryList : this.$store.getters.getDiaryList(""), 
        totalPages :0,
        currentPage :0,

        data: [{
          id: 1,
          label: 'Level one 1',
          children: [{
            id: 4,
            label: 'Level two 1-1',
            children: [{
              id: 9,
              label: 'Level three 1-1-1'
            }, {
              id: 10,
              label: 'Level three 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: 'Level one 2',
          children: [{
            id: 5,
            label: 'Level two 2-1'
          }, {
            id: 6,
            label: 'Level two 2-2'
          }]
        }, {
          id: 3,
          label: 'Level one 3',
          children: [{
            id: 7,
            label: 'Level two 3-1'
          }, {
            id: 8,
            label: 'Level two 3-2'
          }]
        }],
      }
    },    
    defaultProps: {
          children: 'children',
          label: 'label'
        },
    watch :{
      currentPage(){
        console.log("부모와치 :" + this.currentPage)
        this.test2()
      }
    },
    methods: {
      test2(currentPage){
        this.currentPage = currentPage
      },
      //글작성
      write(){
        this.$router.push({name:'write'})
      }, 
      //제목으로 글 찾기
      serachSubject(){
        this.searchText = this.searchWord
        this.DiaryList = this.$store.getters.getDiaryList(this.searchText) 
        console.log("currentpage2 :" + this.currentPage)
      },
      //검색어 초기화
      resetWord(){
        this.searchWord=""
        this.searchText=""
      },
      //삭제하기
      deleteVue(id){
      //인덱스 추출
       let index = this.$store.getters.findIndex(id)
       //삭제
         this.$store.commit('deleteList',index)   
         this.$store.commit('updateId',0)   
         this.serachSubject() 
      },
      //다이어리 상세보기
      goDiary(row){
        //인덱스 추출
        let index = this.$store.getters.findIndex(row.id)
        //해당 인덱스 스토어에 저장
        this.$store.commit('updateId',index)
        //라우터 변경
        this.$router.push({name:'detail',params:{id :index}})
      },
    },
   
    

}
</script>

<style scoped>
.display {
  display: inline;
  margin: 5px;
}
.widthMargin {
  width : 80%;
  margin:auto; 
  margin-bottom: 20px;
}
.filterList {
  cursor : pointer;
}

.buttonHover {
display: none;
}
.buttonShow {
display: block;
}
</style>