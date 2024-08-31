let arr=[1,2,3,4,5]
// console.log(arr)
// console.log(arr[4])

//push - used to insert an element
// arr.push(10)
// console.log(arr)    //[1,2,3,4,5,10]

//pop - to remove an element
// console.log(arr.pop())  //10

//unshift - insert element at starting
// arr.unshift(90)
// console.log(arr)    //[90,1,2,3,4,5]

//shift - remove first element
// arr.shift()
// console.log(arr)    //[1,2,3,4,5]

//slice and splice

// console.log(`original array "A" ${arr}`)
// const arr1=arr.slice(1,3)
// console.log(`Using slice ${arr1}`)          //includes elements from startingIndex to endingIndex-1
// console.log(`original array "A" after using slice ${arr}`)     //no modification in original array

// const arr2=arr.splice(1,3)
// console.log(`Using splice ${arr2}`)         //includes elements from startingIndex to endingIndex
// console.log(`original array "A" after using splice ${arr}`)   //remaining elements are in original array

const arr1=["apple","orange","banana"]
const arr2=["potato","okra","brinjal"]

// arr1.push(arr2)
// console.log(arr1)   // ["apple","orange","banana", ["potato","okra","brinjal"]]

const array=arr2.concat(arr1);  // [ 'potato', 'okra', 'brinjal', 'apple', 'orange', 'banana' ] returns a new array
// console.log(array)

//spread
const all=[...arr1, ...arr2]
// console.log(all)            // [ 'apple', 'orange', 'banana', 'potato', 'okra', 'brinjal' ]

//flat
const many=[1,2,3,[4,5],[6,7]]
const new_many=many.flat(Infinity)
// console.log(new_many)   //[1, 2, 3, 4, 5, 6, 7]

//Array.from
// console.log(Array.from("abcde"))    //[ 'a', 'b', 'c', 'd', 'e' ]

//Arrray.of
let n1=100
let n2=200
let n3=300
console.log(Array.of(n1,n2,n3))     //[ 100, 200, 300 ]