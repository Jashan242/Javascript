//for loop 
//while loop
//do-while loop

//for of loop
const arr=["shinchan","doraemon","ninja hattori"]
for(const cartoon of arr){
    // console.log(cartoon)
}

///Map - contain unique values
const map=new Map()
map.set(1,"one")
map.set(2,"two")
map.set(3,"three")

for(const [key,value] of map){
    // console.log(`${key} : ${value}`)
}

//for in loop
for(const key in arr){
    // console.log(key)    //output - 0 1 2
    // console.log(arr[key])
}

//for each loop
arr.forEach(function(item){
    console.log(item)
})

function print(val){
    console.log(val)
}
arr.forEach(print)  //pass function as reference

//FILTER
const nums=[1,2,3,4,5,6,7,8,9,10]
const ans=nums.filter((num) => (num>5))   //filter returns a value
// console.log(ans)

const newNums=nums.map((num) => num*10).filter((num) => nums>50)
// console.log(newNums)

//REDUCE
const array=[1,2,3]
// const sum=array.reduce( function(acc, cur){     //accumulator, currentvalue
//     return acc+cur
// },0)                                            //here, 0 is initial value
// console.log(sum)

const sum=array.reduce( (acc,cur) => acc+cur, 0)
console.log(sum)

const shoppingCart=[
    {
        course:"java",
        price:15000
    },

    {
        course:"python",
        price:13000
    }
]

const bill=shoppingCart.reduce((acc,item) => acc+item.price, 0)
console.log(bill)