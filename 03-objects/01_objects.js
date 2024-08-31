//Object Literal

const user={
    name : "Jas",
    course : "B.Tech",
    branch : "CSE",
    greeting : function(){console.log("Hello")}
}

console.log(user)

// console.log(user.name)
// console.log(user.course)
// console.log(user.branch)

// console.log(user["name"])
// console.log(user["course"])
// console.log(user["branch"])

//to modify values
// user["branch"]="EE"
// console.log(user)

//Freeze
// Object.freeze(user);
// user["branch"]="EE"
// console.log(user)   //{ name: 'Jas', course: 'B.Tech', branch: 'CSE' }

console.log(user.greeting())

//use sumbol ----> syntax is [sym] 
const sym=Symbol("Key 1")
const newUser={
    name : "Jas",
    course : "B.Tech",
    branch : "CSE",
    [sym] : "myKey",
    greeting : function(){console.log("Hello")}
}

console.log(newUser)