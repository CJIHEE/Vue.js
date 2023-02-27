//난수 추출 모듈
export function randomNumber(){
    var rndNum=[]

   for(var i=0; i <10 ; i++) {
    let rnd = Math.random() * 11
    rndNum[i] = Math.floor(rnd)
   }
   console.log("배열 : " + rndNum)
   return rndNum
}

//덧셈 모듈
export function totalSum(rndNum) {
        let totalSum = 0

       //foreach문 
      //  rndNum.forEach( (item) => {
      //      totalSum += item;
       //   }
       //   )
       
   for(var i=0; i < rndNum.length; i++) {
            totalSum += rndNum[i]
   } 
   
    console.log("합계 : " +totalSum )
    return totalSum   
}

//곱셈 모듈
export function multiplication(rndNum) {
    let totalmul = 1
    rndNum.forEach( (item) => {
        totalmul *= item;
      }
      )
console.log("곱셈 : " +totalmul )
}




