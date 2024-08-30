console.log(1 + 2)         //3
console.log("1" + 2)       //12
console.log(1 + "2")       //12
console.log("1" + 2 + 2)   //122
console.log(1 + 2  + "2")  //32


console.log(+true)  //1
console.log(+"")    //0

// **********************COMPARISON**********************

console.log(null>0)    //false
console.log(null==0)   //false
console.log(null>=0)   //true

//NOTE : equality check == and comparisons >= <= work differently, comparisons convert null to a number, treating it as 0 

console.log(undefined > 0)    //false
console.log(undefined == 0)   //false
console.log(undefined < 0)    //false