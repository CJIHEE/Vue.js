<template>
  <div class="hello">
   
      <div class="startLine">   
        <span>* 이름 </span>     
        <input type="text" v-model="empName" class="inputName"/> 
        <span>* 부서 </span>  
        <input type="text" v-model="empDept" class="inputDept"/> 
        <span>* 직급 </span>  
        <input type="text" v-model="empPositon" class="inputPosion"/> 
        <span>* 연락처 </span>  
        <input type="text" v-model="empTel" class="inputTel"/> 
        <button @click="addEmp">추가</button>
    </div>
      <table>
          <thead> 
              <tr>
                  <th>이름</th>
                  <th>부서</th>
                  <th>직급</th>
                  <th>연락처</th>
              </tr>   
          </thead>
          <tbody>  
                <tr v-for="emp in orgEmpList" v-bind:key="emp">
                  <td >
                    {{emp.empName}}
                  </td>
                  <td >
                    {{emp.empDept}}
                  </td>
                  <td >
                    {{emp.empPositon}}
                  </td>
                  <td >
                    {{emp.empTel}}
                  </td>
                </tr>  
               <tr v-for="item in empList" v-bind:key="item" class="newRow">
                  <td >
                    {{item.empName}}
                  </td>
                  <td >
                    {{item.empDept}}
                  </td>
                  <td >
                    {{item.empPositon}}
                  </td>
                  <td >
                    {{item.empTel}}
                  </td>
                  </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'RepeatCloRow',
  data (){
    return {
      empName :"",
      empDept : "",
      empPositon : "",
      empTel : "",

      orgEmpList : 
      [{empName:"가나다",empDept:"개발",empPositon:"대리",empTel:"010-1234-5678"},
      {empName:"라마바",empDept:"경영지원",empPositon:"사원",empTel:"010-1234-5678"},
      {empName:"홍길동",empDept:"영업",empPositon:"과장",empTel:"010-1234-5678"},
      {empName:"김길동",empDept:"기술지원",empPositon:"과장",empTel:"010-1234-5678"},
      {empName:"이길동",empDept:"컨설팅",empPositon:"차장",empTel:"010-1234-5678"}
      
      ],
      
      empList : 
      []
     
    }
  },
  methods: {
    addEmp (){
       console.log("this.empName :" + this.empName)
       console.log("this.empDept :" + this.empDept)
      this.empList.push({empName:this.empName, empDept:this.empDept, empPositon:this.empPositon, empTel:this.empTel})
    },
  },
}
</script>

<style scoped>
 input {
  margin: 10px;
 } 
 .newRow{
      background-color: rgba(0,0,255,0.1);
  }
  .hello {
    margin-top: 15px;
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
