<template>
  <div class="hello">

      <input type="text" v-model="empName" class="inputEmp"/> 
    <button @click="addEmp">추가</button>
      <table>
          <thead> 
              <th>
                  이름
              </th>   
          </thead>
          <tbody>
                <tr v-for="item in empArray" v-bind:key="item">
                {{ item }}
              </tr>   
          </tbody>

      </table>
      <div style="margin-top: 10px;">
      {{ empString }}
      </div>
   
  </div>
</template>

<script>
export default {
  name: 'RepeatRows',
  data (){
    return {
      empName : "",
      empArray : ["가나다", "라마바","홍길동","김길동","이길동"],
      empString : "가나다 / 라마바/ 홍길동/ 김길동/ 이길동"
    }
  },
  methods: {
    addEmp (){
       this.empArray.push(this.empName)
       this.empString = this.empArray.join("/")
    }

  },

  component (){
        
  }


}
</script>

<style scoped>
 .inputEmp {
  width: 30%;
  margin: 10px;
 } 
 table tr:nth-of-type(even){
      background-color :rgba(0,0,255,0.1);
  }

  
  table {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  table, th, td {
    border: 1px solid #444444;
    border-collapse: collapse;
  }

</style>
