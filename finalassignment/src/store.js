import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentUserid: '',
    userList : [ ],
    diaryList : [  {id:1, name:'',  date :'기본값', contents:'기본값', subject:'기본값', emotion:'기본값', weather:'기본값'},
                ],     
    indexid : 0,               
  },
  getters:{
    getUserInfo(state) {
        let userInfo = [{userid : state.userid},{userpw : state.userpw}]
        return userInfo
    },
    //user에 맞는 list 반환 함수
    getDiaryList : state =>(searchWord) =>{
         return state.diaryList.filter(diary => diary.name === state.currentUserid && diary.subject.includes(searchWord)); 
     },
     //고유값으로 해당배열 인덱스 추출하기
    findIndex : state => (id) =>{
        let index = state.diaryList.findIndex(function(item){
            return item.id === id
        });
        return index
     },
     //리스트 id 최대값 반환
    getMaxId : state => {
        let array = [];
        state.diaryList.forEach((diary) => {
          const id = diary.id
          array.push(id)
        });
        const maxId = Math.max.apply(null, array)
      return maxId
    }
   },
  mutations:{
    //로그인한 현재 사용자 정보 저장(로그인 처리)
    setUserid(state,userid) {
      state.currentUserid = userid;
    },
    ///로그인한 사용자 == 가입사용자 누적 시키기
    setUserList(state,userid) {
      state.userList.push(userid);
    },
    //글 작성
    setdiaryList(state,payload) {
      state.diaryList.push(payload);
    },
    //글 상세,작성,선택시 인덱스 스토어에 저장해놓기
    updateId(state,id){
      state.indexid = id;
    },
    //글 삭제
    deleteList(state,idx){
      state.diaryList.splice(idx , 1);
    },
    //글 수정하기
    modifyList(state,payload){
      state.diaryList[payload.index].subject= payload.subject;
      state.diaryList[payload.index].contents= payload.contents;
      state.diaryList[payload.index].weather= payload.weather;
      state.diaryList[payload.index].emotion =payload.emotion;
    }
  },
    actions : {}
    });


