let firstName="Riya"
let lastName="Verma"

const name=new String("Naman")
console.log(name)

console.log(firstName + " " + lastName)

console.log(`First name is ${firstName} and last name is ${lastName}`)

//length
console.log(firstName.length)
//uppercase
console.log(firstName.toUpperCase())
//character 
console.log(firstName.charAt(2))
//substring
let str=lastName.substring(0,3)
console.log(str);
//slice ----- can use negative index
let st=name.slice(-3,4)
console.log(st)
//replace
console.log(firstName.replace('R','S'))