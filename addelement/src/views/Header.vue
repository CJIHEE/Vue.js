<template>
    <div class="header">
        <div class="headerLeft"> vue-diary</div>
        <div class="headerRight">
            <button v-on:click="logOut" class="btn btn-outline-dark">로그아웃</button>
        </div>
        <div  class="headerRight">{{this.$store.state.currentUserid}}</div>
        
    </div>
</template>

<script>

export default{
    name : 'HeaderVue',
    methods: {
        logOut(){
            this.$store.commit("setUserid","")
            this.$router.push("/")
        }
    },
}
</script>
<style scoped>
.header {
    height: 70px;
    margin-bottom: 20px;
    border-bottom: 2px solid black ;
    text-align: center;
    line-height: 70px;  
}
.headerLeft {
    display: inline;
    margin-left: 20px;
    float: left;
}
.headerRight {
    float: right;
    display: inline;
    margin-right: 20px;
}

</style>
