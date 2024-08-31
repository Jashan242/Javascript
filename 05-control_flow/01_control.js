//if-else

if(2==='2') console.log("Matched datatype")
else console.log("Mismatched datatype")

//switch 

const mon="jan"
switch(mon){
    case "jan" :
        console.log("January")
        break
    case "feb" :
        console.log("February")
        break
    case "mar" :
        console.log("March")
        break
    case "apr" :
        console.log("April")
        break
    default :
        console.log("default")
        break
}


//falsy values - false, 0, -1, bigInt, 0n, "", null, undefined, NaN

//truthy values - 'false', "0", " ", [], {}, function(){}

let arr=[]
if(arr){
    console.log("true")
}
else{
    console.log("false")
}

//Nullish Coalescing Operator (??) : null undefined
let val = 5 ?? 10
let val1 = null ?? 10
let val2 = undefined ?? 10
console.log(val)        //5
console.log(val1)       //10
console.log(val2)       //10

//Ternary Operator
let score=100
score>100 ? console.log("Excellent") : console.log("Fair")