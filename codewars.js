// 1.
function squareSum(numbers){
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

let result = squareSum([1,2,2]);
console.log(result);
// 2.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  if (distanceToPump <= mpg*fuelLeft){
    return true;
  }else {
    return false;
  }
};
// 3. 
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
// 4. 
function opposite(number) {
  //your code here
  return -number;
}
// 5. 
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

// 6.
function hero(bullets, dragons){
    //Get Coding!
      if (bullets >= dragons*2){
        return true
      } else {
        return false
      }
    }
// 7.
function century(year) {
    // Finish this :)
  
  return Math.ceil(year / 100);
  }
  // 8. 
const rps = (p1, p2) => {
  if (p1 ==="scissors" && p2==="paper" || p1==="rock" && p2==="scissors" || p1==="paper" && p2==="rock") {
      return "Player 1 won!"
      } else if (p2==="scissors" && p1==="paper" || p2==="rock" && p1==="scissors" || p2==="paper" && p1==="rock") {
    return "Player 2 won!"
  } else {
    return "Draw!";
  }
};
// 9.
function bmi(weight, height) {
  var result = weight/Math.pow(height,2) 
  
  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
// 10.
function sumMix(x){
return x.reduce((sum,item)=> sum + Number(item),0)
}
// 11.
function findNeedle(haystack) {
  // your code here
  let needle = haystack.indexOf("needle")
  return `found the needle at position ${needle}`
}
