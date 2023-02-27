<template>
    <div class="login-main">
        <div class="login-body">
            vue-diary
            <div style="margin-bottom: 10px;">
                <el-input 
                placeholder="사용자 이름" 
                v-model="userid" 
                style="width: 80%;"
                ></el-input>
            </div>
            <div>
                <el-button 
                type="primary"
                v-on:click='setUserInfo'
                style="width: 80%; background-color: #c295fd; border : 1px solid #c295fd;"
                >
                    Sign in
                </el-button>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    name :'LoginPage',
    data() {
        return {
            userid : '',
            userpw : '',
            checkId : ''
        }
    },
    methods: {
        setUserInfo(){
            if(this.userid.match(/\s/g) || this.userid == "") {
                alert('아이디를 입력해주세요')
            }
            else{
                this.registerUser();
                this.login();
                this.loginMessage();
                this.changeRouter();
            }
        },
        //아이디 중복 검사
        duplicateInspectionId(){
            this.checkId = false;
            this.$store.state.userList.forEach((userinList) => {
                if(this.userid === userinList){this.checkId = true}
            });
        },
        //유저정보 등록
        registerUser(){
            this.duplicateInspectionId();
            if(!this.checkId){
                this.$store.commit("setUserList", this.userid)
            }
        },
        //로그인 
        login(){
            this.$store.commit("setUserid",this.userid);
        },
        //라우터 변경
        changeRouter(){
            return this.$router.push({name:'list',params:{id:-1}},)
        },
        //로그인 메세지
        loginMessage() {
            this.$message(`${this.userid}님 반갑습니다`);
        },
    
    },


}
</script>

<style scoped>
div {
}
.login-main{
    height: 640px;
    background: linear-gradient( to left , #c295fd,#829fff );
    display: flex;
    align-items: center;
}
.login-body{
    margin: auto;
    position: relative;
    width: 300px;
    height: 150px;
    border: 1px solid white;
    border-radius: 10px;
    padding: 15px;
    background-color: white;
    color: #c295fd;
}
</style>
