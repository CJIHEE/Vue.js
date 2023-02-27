<template>
    <div class='navigation-bar'>
        <div class='nav-left'> 
            vue-diary
        </div>
        <div class='nav-right'>
            <el-button plain @click="logOut" style="color:#8f61ca">
                Sign out
            </el-button>
        </div>
        <div class='nav-right'>
            {{this.$store.state.currentUserid}}
        </div>
    
    </div>
</template>

<script>

export default{
    name : 'HeaderVue',
    methods: {
        logOut(){
            this.$store.commit('setUserid','');
            this.$router.push('/');
        }
    },
}
</script>
<style scoped>
.navigation-bar {
    height: 70px;
    margin-bottom: 20px;
    border-bottom: 2px solid white; ;
    text-align: center;
    line-height: 70px;  
    background: linear-gradient( to left , #c295fd,#829fff )
}
.nav-left {
    display: inline;
    margin-left: 20px;
    float: left;
    color : white;
}
.nav-right {
    float: right;
    display: inline;
    margin-right: 20px;
    color :white
}

</style>
