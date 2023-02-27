<template>
    <div>
        <inputArea @submit="submitList" ></inputArea>
        <div style="margin-top: 20px; " >
            <table>
                <thead>
                    <tr>
                    <th>
                       수정
                    </th>
                    <th>
                        날짜
                    </th>
                    <th>
                        할일
                    </th> 
                    <th>
                        삭제하기
                    </th> 
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in todoList" v-bind:key="index">
                       <td> <input type="radio" name="check" @change="modify(todoList.indexOf(item),todoList)" > </td>
                       <td> {{ item.planDate }}</td>
                       <td> {{ item.planList }}</td> 
                       <td><button @click="deleteList(todoList.indexOf(item))">삭제</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <component v-bind:is="comp"></component> 
            <div>
                <modifyLi :pData="this.propsData" :pDate="this.propsDate" :index="this.index" @modify="modifyList" @cancel="cancelList" v-bind:style="display">
                </modifyLi>  
            </div>
        </div>
    
</template>

<script>
import inputArea from './inputArea.vue';
import modifyLi from './modifyLi.vue';

export default {
    name : "todoListArea",
    components : { inputArea ,modifyLi },
    data () {
        return{
            planDate :"",
            planList : "",
            todoList : [],
            index : 0,
            comp : "",
            propsData :"",
            propsDate: "",
            pData :"",
            pDate :"",
            display : { display : "none"},


        }
    },

    methods: {
        submitList(inputDate,inputList){
            this.planDate = inputDate
            this.planList = inputList
            this.todoList.push({planDate:this.planDate, planList:this.planList})
            //console.log("List1 : " + this.todoList.planDate)
        },
        modify(index,inputList){
            this.index = index
            this.propsData = inputList[index].planList
            this.propsDate = inputList[index].planDate
            this.display =  { display : "block"};

            console.log("props :"+ this.propsData)
            console.log("props :"+ this.propsDate)
            
            //this.$emit('modify',this.todoList,this.index)
           // console.log("index :" +index)
           // console.log("배열 : " + this.todoList[index])
             // this.comp = compoName
          //  this.todoList.splice(index,1)
     
     },
        deleteList(index){

          this.todoList.splice(index,1)
    },
    modifyList(date,data,index){
        console.log("index :" + index )
        this.index = index
        console.log("date :" + date ) 
        this.todoList[index].planDate = date
        this.todoList[index].planList = data
        this.display =  { display : "none"}
    },
    cancelList(index){
        this.index = index
        this.display =  { display : "none"}
    }
   
    }
}
</script>

<style scoped>
 table {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
  table, th, td {
    border: 1px solid #444444;
    border-collapse: collapse;
  }
</style>
