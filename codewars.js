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
// 12.
function removeChar(str){
  //You got this!
 return  str.slice(1,-1);
 };
//  13. 
function findAverage(array) {
  // your code here
  if (array.length === 0){
    return 0;
  }
  const sum = array.reduce((acc, num) => acc + num, 0);
  return sum / array.length;
}
// 14.
function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, '');;
  }
// 15.
function openOrSenior(members) {
  return members.map(member => {
      const [age, handicap] = member;
      if (age >= 55 && handicap > 7) {
          return "Senior";
      } else {
          return "Open";
      }
  });
}
// 16. 
function XO(str) {
  //code here
let lowerStr = str.toLowerCase();
let x = (lowerStr.match(/x/g) || []).length;
let o= (lowerStr.match(/o/g) || []).length;
return x === o;
}
// 17.
function maps(x){
  return x.map(el=> el*2)
  }
// 18.
function isTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0 &&
      a + b > c && a + c > b && b + c > a) {
    return true;  
  } else {
    return false; 
  }
}
// 19.
const binaryArrayToNumber = arr => {
  // your code
  return parseInt(arr.join(''), 2);;
};
// 20.
function sumTwoSmallestNumbers(numbers) {  
  // Code here
    numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}
// 21.
function countSheeps(sheep) {
  // TODO
  return sheep.filter(sheep => sheep === true).length
}
// 22.
function longest(s1, s2) {
  // your code
  const uniqueLetters = new Set(s1 + s2);
  return [...uniqueLetters].sort().join('');
}
// 23.
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
// 24.function noSpace(x){
return x.replace(/\s+/g, '');
}
// 25.
const stringToNumber = function(str){
  // put your code here
  
  return Number(str);
}
// 26.
function addBinary(a,b) {
  let sum = a + b;
   return sum.toString(2);
 }
//  27.
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.replace(/T/g, 'U');
}
// 28
function findSmallestInt(arr) {
  //your code here
  
return Math.min(...arr);
}