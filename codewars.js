1.
function squareSum(numbers){
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

let result = squareSum([1,2,2]);
console.log(result);
2.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  if (distanceToPump <= mpg*fuelLeft){
    return true;
  }else {
    return false;
  }
};
3. 
function past(h, m, s){
  //#Happy Coding! ^_^
  let sum = 0;
  if (0 <= h && h <= 23 && 0 <= m && m <= 59 && 0 <= s && s <= 59){
    return sum = (h*3600 + m*60 + s)*1000;
  } else {
    return 'error'
  }
}
past(1,2,3);
4. 
function opposite(number) {
  //your code here
  return -number;
}
5. 
function basicOp(operation, value1, value2){
  //Code
  if (operation === '+'){
      return value1 + value2;
      }
  else if (operation === "-" ){
    return value1 - value2;
  }
  else if (operation === '*'){
    return value1*value2;
  }
  else if (operation === '/') {
    return value1/value2;
  }
 else {
   return 'operation not found'
 }
}
console.log(basicOp('+', 4, 7));

6.
