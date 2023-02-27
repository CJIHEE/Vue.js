<template>
    <div >
        <img alt="Vue logo" src="../assets/logo.png">
        <!-- {{ $store.state.userid }} -->
        <div>
            <span>아이디 </span>
            <input type="text" v-model="userid" @keyup.enter="setUserInfo" placeholder="아이디를 입력하세요"/>
        </div>
        <div>
            <button v-on:click="setUserInfo" class="btn btn-outline-dark">로그인</button>
        </div>
    </div>
</template>

<script>

export default {
    name :'LoginPage',
    data() {
        return {
            userid : "",
            userpw : ""
        }
    },
    methods: {
        setUserInfo(){
            //아이디 중복검사
            let checkId = false
             this.$store.state.userList.forEach((userinList) => {
              if(this.userid === userinList) {checkId = true} 
            })
            if(this.userid.match(/\s/g) || this.userid == "") {
                alert("아이디를 입력해주세요")
            }
            else if (checkId) { //기존 회원 로그인
                this.$store.commit("setUserid",this.userid) // 로그인 처리
                this.$router.push({name:'list'}) 
            }
            else { //신규회원 로그인
             this.$store.commit("setUserid",this.userid) // 로그인 처리
             this.$store.commit("setUserList", this.userid) // 가입자 누적
             this.$router.push({name:'list'})
            //                   // this.$store.commit('LoginPage/setUserInfo')
             }

            
        },

    },


}
</script>

<style scoped>
div {
    margin-top: 20px;
}

</style>
