const user=new Object()         //SINGLETON OBJECT

const user1={}      //NON-SINGLETON OBJECT

// console.log(user)
// console.log(user1)

const student={
    name : {
        firstName : "Yashi",
        lastName : "Gautam"
    },
    email : "yashi@gmail.com"
}
// console.log(student)
// console.log(student.name.firstName)

//get all keys
// console.log(Object.keys(student))
// //get all values
// console.log(Object.values(student))
// //entries
// console.log(Object.entries(student))    //[[ 'name', { firstName: 'Yashi', lastName: 'Gautam' } ], [ 'email', 'yashi@gmail.com' ]]

// console.log(student.hasOwnProperty("name")) //true

//Merge two objects
ob1={a:"1", b:"2"}
ob2={c:"3", d:"4"}
ob3={e:"5", f:"6"}
// ob4=Object.assign({},ob1,ob2,ob3)   //{ a: '1', b: '2', c: '3', d: '4' }
ob4={...ob1, ...ob2, ...ob3}
// console.log(ob4)


// ****************Destructuring****************
const course={
    name:"Java Fullstack",
    price:999,
    faculty:"Manoj Agarwal"
}

// console.log(course)
const {faculty : f}=course
console.log(f)