<template>
    <div>
        <div class="check">
            <div v-for="(item,index) in data" :key="index" class="box" :style="{ color: item.eventlevelColorText, backgroundColor : item.eventlevelColorBg }" @click="submitText(item.eventlevelName,item.eventlevelColorBg)">
                {{ item.eventlevelName }}
            </div>
           
        </div>
    </div>

</template>

<script>



export default {
    name : "ColorBox",
    props : ["data"],
    methods: {
        submitText(colorText,colorName){
            this.$emit('colorIndex',colorText,colorName)
            console.log("index L " + colorText)
        }
    },


}

</script>

<style scoped>
.box {
  margin : 20px;
  padding : 30px;
  border : none;
  width: 80px;
  height: 80px;
  display: inline;
 
}

.check {
    justify-content: center;
    margin-top : 100px
}
</style>