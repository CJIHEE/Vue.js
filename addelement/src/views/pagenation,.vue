<template>
    <div>
        <el-pagination 
              background
              layout="prev, pager, next"
              :total="21"
              :current-page="1"
              @current-change="test()">
            </el-pagination>
    </div>
</template>
<script>
export default{

    name : 'pagenationPa',
    props :["currentPage"],
    watch : {
        currentPage(){
            console.log("μμ μμΉ :" + this.currentPage)
            this.test()
        }    
    },
    methods: {
        test(){
            Number(this.currentPage) + 1
            this.$emit('currentpage',this.currentPage)
            console.log("test :" + this.currentPage)
        },
       
        
    },

}
</script>




