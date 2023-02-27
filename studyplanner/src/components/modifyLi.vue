<template>
    <div style="margin-top: 20px;">

        <div >
        <span>날짜 </span>
        <input type="date" v-model="modifyDate" />
        <span >할 일 </span>
        <input type="text" v-model="modifyData" class="inputtext" />
        <button @click="push">수정</button>
        <button @click="save">저장</button>
        <button @click="cancel">취소</button>
    </div>

    </div>
    
</template>

<script>



export default {

    name : "modifyLi",
    props : 
        ["pData", "pDate","index" ],
    data() {
        return {
            modifyDate: "",
            idx:"",
            }
     },    
     computed : {
        modifyData : {
            setData(){
                console.log("수정 : " +this.modifyData)
                return this.pData;
            }
        }
    },    
   methods: {

    push(){
            this.modifyData =this.pData,
            this.modifyDate =this.pDate
            this.idx= this.index
            console.log("수정 : " +this.modifyData)
    },
    save(){
        if(this.idx < 0 || this.idx == "") {
            alert("수정하기 선택후 저장하시기 바랍니다")
        }
        else {
        this.$emit('modify',this.modifyDate, this.modifyData,this.idx)
        this.modifyData = "",
        this.modifyDate = "",
        this.idx = -1
        }
    },
    cancel(){
        this.modifyData = "",
        this.modifyDate = "",
        this.idx = -1
        this.$emit('cancel',this.idx)
        
    }

    }
}  

</script>

<style scoped>
span {
    margin-left: 20px;
}
input {
    margin-left: 5px;
    margin-right : 20px;

}
.inputtext {
    width: 35%;
}
</style>
