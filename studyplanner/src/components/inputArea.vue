<template>
    <div class="box">
    <!-- <span>
      <section>
        <p>날짜를 선택하세요</p>
        <date-picker v-model="inpuutDate" type="date" placeholder="Select date range"></date-picker>
      </section>
    </span>
    <span>
        {{ inpuutDate }}
    </span> -->
    
    <div>
        <span>날짜 </span>
        <input type="date" v-model="inputDate" />
        <span >할 일 </span>
        <input type="text" v-model="inputList" class="inputtext"/>
        <button @click="submit">할 일 등록하기</button>

    </div>

    </div>
  </template>
  
  <script>
   // import DatePicker from 'vue2-datepicker';
   // import 'vue2-datepicker/index.css';

    export default {
        name: "inputArea",
      components: { //DatePicker 

        },
      data() {
        return {
            //inpuutDate: [new Date(2019, 9, 8)],
            inputDate : "",
            inputList : "",
            
        };
      },
      methods: {
        submit (){
            this.$emit('submit',this.inputDate, this.inputList)
           // console.log(" inputeDate :" +this.inputDate)
           // console.log(" todoList:" + this.inputList )
        }
      },
    };
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

