"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiplication = multiplication;
exports.randomNumber = randomNumber;
exports.totalSum = totalSum;
//난수 추출 모듈
function randomNumber() {
  var rndNum = [];
  for (var i = 0; i < 10; i++) {
    let rnd = Math.random() * 11;
    rndNum[i] = Math.floor(rnd);
  }
  console.log("배열 : " + rndNum);
  return rndNum;
}

//덧셈 모듈
function totalSum(rndNum) {
  let totalSum = 0;
  rndNum.forEach(item => {
    totalSum += item;
  });
  console.log("합계 : " + totalSum);
  return totalSum;
}

//곱셈 모듈
function multiplication(rndNum) {
  let totalmul = 1;
  rndNum.forEach(item => {
    totalmul *= item;
  });
  console.log("곱셈 : " + totalmul);
}