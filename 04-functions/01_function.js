
function add(a,b){      // a & b ----> parameters
    console.log(a+b)
}

add(6,7)        // 6 & 7 ----> arguments

function print(username){       //we can also pass default parameter : username="Ria"
    return `Welcome ${username}`
}
// console.log(print("jas"))    //welcome jas
console.log(print())    // welcome undefined

//when we dont't know th number of items use REST operator
// function cartPrice(num){
//     return num;
// }
// console.log(cartPrice(100,200,300)) //output - 100

// function cartPrice(...num){
//     return num;
// }
// console.log(cartPrice(100,200,300))     //output - [ 100, 200, 300 ]

function cartPrice(val,...num){
    return num;
}
console.log(cartPrice(100,200,300))         //output - [ 200, 300 ]

//passing object to function
const obj={
    name:"Ria",
    class:12
}

function detail(object){
    return `Name is ${object.name} and she studies in ${object.class} grade`
}
console.log(detail(obj))

//Arrowhead function
// const addTwo = (u,v) => {
//     return u+v
// }
// console.log(addTwo(7,7))

const addTwo = (u,v) => (u+v)   //No need to write return when using this way
    
console.log(addTwo(7,7))


/* ----------------Immediately Invoked Function Expressions (IIFE)---------------- */

// (Function definition)(Execution call)
(function happy(){
    console.log(`I'm happy`);
})();