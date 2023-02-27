<template>
    <div >
      <div><input type="text" v-model="subject" class="subject"/></div>
      <div ><textarea v-model="contents" class="contents" ></textarea></div>
      <div :style="{marginTop: '15px'}">
        <button :style="{marginRight:'10px'}" @click="submit">저장</button>
        <button @click="cancle">취소</button>
      </div>
      

    </div>
    
</template>

<script>

export default{
    name: "DiaryList",
    data() {
      return {
        subject : "",
        contents : "",
        now : "",
        maxId : "",
      }
    },
    methods: {
      submit(){
        //리스트 id 최대값 알아오기
       let maxId = this.$store.getters.getMaxId
        //현재 로그인한 사용자
        let userName = this.$store.state.currentUserid
        //현재시간
        let date = new Date();
        this.now = date.getFullYear()+"년"+date.getMonth()+"월"+date.getDate()+"일";
        //글 작성하기
        this.$store.commit('setdiaryList',{id : maxId+1 , name : userName, date:this.now, subject: this.subject , contents : this.contents})
        this.$router.push({name:'list'})
      },
      cancle(){
        this.$router.push({name:'list'})
      }
    },

}
</script>

<style scoped>
.subject {
  width: 90%;
  height: 30px;
  margin: auto;
  margin-bottom: 20px;
}
.contents {
  width: 90%;
  height: 500px;
  margin: auto;
}

</style>