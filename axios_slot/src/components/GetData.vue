<template>
    <div >
        Axios Test
        <SlotText>
            <p slot="colorName" :style="{ color: colorName}">{{colorText}}</p>
        </SlotText>
        <div style=" ">
        <color-box :data="result" @colorIndex="bindingColor"></color-box>
        </div>
        
        
    </div>
    
    
</template>

<script>
import {fetchBoxList} from '../api/index'
import ColorBox from './ColorBox.vue'
import SlotText from './SlotText.vue'

export default {
    name : "GetData",
    components: { ColorBox, SlotText },
    data() {
        return {
            result : [],
            colorText : "",
            colorName : "",

        }
    },
    created() {
       // this.fetchData()
       fetchBoxList()
        .then((response) => (console.log(response) , this.result = response.data))
        .catch((error)=>console.log(error))
    },
    methods : {
      // fetchData(){
      // return this.$axios // 주입시킬 필요없이 this를 사용
      //     .get('api/eventlevel') // 요청보낼 URL(GET,POST,PUT,DELETE 사용)
      //     .then((response) => {
      //       // 성공적으로 응답을 받는 경우
      //       console.log(response);
      //       this.result = response.data;
      //     })
      //     .catch((ex) => {
      //       console.log(ex);
      //     });
      //   }
      bindingColor(colorText,colorName){
        this.colorText = colorText
        this.colorName = colorName
        console.log("colorName : " +colorName)
    

      }
      },

      
    }

</script>

<style scoped>

</style>


