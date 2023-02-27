<template>
  <div >
    <div class="write-header">
      <div>
        <i 
        class="el-icon-back" 
        style="font-size: 25pt; margin-right: 10px; cursor: pointer;"
        @click="cancle"
        >
        </i>
      </div>
      <div style="font-size: 13pt; padding-top: 1%;">
        일기 작성
      </div>
    </div>


    <div class="write-body">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="제목" prop="subject" style="text-align: left;">
          <el-input 
            placeholder="제목을 입력하세요" 
            v-model="subject" 
            style="width: 800px">
          </el-input>
        </el-form-item>
        <el-form-item label="날씨" prop="weather" style="text-align: left;">
          <el-radio-group v-model="weather">
            <el-radio-button label="el-icon-sunny">
              <i class="el-icon-sunny"></i>
            </el-radio-button>
            <el-radio-button label="el-icon-cloudy">
              <i class="el-icon-cloudy"></i>
            </el-radio-button>
            <el-radio-button label="el-icon-heavy-rain">
              <i class="el-icon-heavy-rain"></i>
            </el-radio-button>
            <el-radio-button label="el-icon-light-rain">
              <i class="el-icon-light-rain"></i>
            </el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="기분" prop="emotion" style="text-align: left;">
          <el-select v-model="value" filterable placeholder="Select">
            <el-option
              v-for="item in emotionOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="내용" prop="contents" style="text-align: left;">
          <el-input 
            type="textarea"
            :rows="10"
            placeholder="내용을 입력하세요" 
            v-model="contents" 
            style="width: 800px; margin-top:10px; ">
          </el-input>
        </el-form-item>
        <div>
          <el-form-item>
            <el-button 
            type="primary" plain
            :style="{marginRight:'10px'}"
             @click="writeORmodify('ruleForm')"
            >
            저장
            </el-button>
            <el-button 
              type="primary" plain
              @click="cancle">
              취소
            </el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>

export default{
  name: "writeDiary",
  data() {
    return {
      ruleForm:{
        subject:'',
        contents:'',
      },
      setSubject : '',
      setContents: '',
      idx : this.$route.params.id,
      weather: 'el-icon-sunny',
      value :'기쁨',
      checkRuleForm : true,
      emotionOptions : [{
        value : '기쁨',
        label : '기쁨',
        }, {
        value : '우울',
        label : '우울',
        },
        {
        value : '화남',
        label : '화남',
        },
      ],
      rules : {
        subject :[
          { required:true, message : '제목을 입력해주세요',trigger: 'blur' }
        ],
        contents :[
          {required:true, message :'내용을 입력해주세요', trigger:'blur'}
        ]
      }
    }
  },
  //수정으로 들어왔을 경우 데이터 출력
  created(){
     if(this.idx != -1){
       this.setSubject =  this.$store.state.diaryList[this.idx].subject
       this.subject =  this.$store.state.diaryList[this.idx].subject
       this.setContents =  this.$store.state.diaryList[this.idx].contents
       this.contents =  this.$store.state.diaryList[this.idx].contents
       this.weather = this.$store.state.diaryList[this.idx].weather
       this.value = this.$store.state.diaryList[this.idx].emotion
     }
   },
  computed:{
      //리스트 id 최대값 알아오기
      maxId : function(){
        return this.$store.getters.getMaxId;
      },
      //현재 로그인한 사용자
      userName : function(){
        return this.$store.state.currentUserid;
      },
      //현재시간
      nowDate : function(){
        let date = new Date();
        return date.getFullYear()+'년'+date.getMonth()+'월'+date.getDate()+'일';
      },
      //v-model 바인딩
       subject :{
          get() {
            return this.setSubject
          },
          set(value){
              this.setSubject = value
              this.ruleForm.subject = value
           }
       },
       contents :{
          get() {
            return this.setContents
          },
          set(value){
              this.setContents = value
              this.ruleForm.contents = value
           }
       },
       //수정버튼
       modifyBtn(){
        const index = this.idx
        return index == -1?{showBtn:true}:{showBtn:false}
       }
  },
  methods: {
    writeORmodify(formName){
      this.checkRule(formName);
      if(this.idx == -1 && this.checkRuleForm == true){
        this.write();
        this.cancle();
      }
      else if(this.idx != -1 && this.checkRuleForm== true){
        this.modifyList();
        this.cancle();
      }
    },
    //글 작성하기
    write(){
        this.$store.commit('setdiaryList',
        { id : this.maxId+1 , 
          name : this.userName, 
          date:this.nowDate, 
          subject: this.subject , 
          contents : this.contents,
          weather : this.weather,
          emotion : this.value}
        );
      },
      //글 수정하기
      modifyList(){
        this.$store.commit('modifyList', 
         {
           index : Number(this.idx),
           subject : this.setSubject,
           contents : this.setContents,
           emotion : this.value,
           weather: this.weather
         });
      },
      //목록으로 돌아가기(취소)
      cancle(){
        this.$router.push({name:'list'});
      },
      checkRule(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.checkRuleForm=true
           this.printMessage();
          } else {
            this.checkRuleForm=false
            return false;
          }
        });
      },
      printMessage() {
        if(this.idx == -1){
          this.$message('일기를 작성하였습니다');
        }
        else{
          this.$message('일기를 수정하였습니다');
        }
      },

  },

}
</script>

<style scoped>
.write-body{
  width: 70%;
  margin: auto;
}
.subject-text {
  width: 80%;
  height: 30px;
  margin: auto;
  margin-bottom: 20px;
}
.contents {
  width: 80%;
  height: 500px;
  margin: auto;
}
.showBtn{
  display: none;
  margin-right: 10px;
}
.write-header{
  padding-bottom: 1.5%; 
  width: 80%; 
  border-bottom: 1px solid rgb(219, 219, 219);
  margin: auto;
  margin-top: 1.5%;
  margin-bottom: 2%;
  text-align: left;
  line-height: 1;
  display: flex;
  color: rgb(122, 120, 120);
  
}
.first-td {
  padding: 20px 10px 20px 0px;
}
table{
  margin: auto;
}


</style>