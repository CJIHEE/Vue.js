<template>
  <div id="app">
  </div>
</template>

<script>
import { randomNumber } from './module/calculrate';
import { totalSum } from './module/calculrate';
import { multiplication } from './module/calculrate';

export default {
  name: 'App',
}

let rndnum = randomNumber()
let sum = totalSum(rndnum)
multiplication (rndnum)

  //화살표 함수와 this 관계파악을 위한 평균 함수
  const useThis = {
    sumNum : `${sum}`,
    getAverage: function() {
      //console.log("sumNum2 :" + this.sumNum) // this를 빼면 
     const average = () => {
      console.log("평균 : " + this.sumNum/10) // 화살표 함수를 사용하지않으면 this.sumNum이 전역변수를 잡게되서 오류가 난다.
      }
      average();
    }
  }

useThis.getAverage()
</script>