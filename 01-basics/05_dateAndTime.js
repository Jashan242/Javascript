let date=new Date()
// console.log(date)   //2024-08-31T00:16:01.781Z
// console.log(date.toDateString())    //Sat Aug 31 2024
// console.log(date.toLocaleString())  //8/31/2024, 12:16:01 AM
// console.log(date.toISOString())     //2024-08-31T00:16:01.781Z
// console.log(date.toJSON())          ////2024-08-31T00:16:01.781Z
console.log(date.getMonth())

// console.log(typeof date)    //object

//let create=new Date(2023,1,24)      //    2/24/2023, 12:00:00 AM
//let create=new Date(2023,1,24,5)    //    2/24/2023, 5:00:00 AM
//let create=new Date("2023-02-24")   //    2/24/2023, 12:00:00 AM
//let create=new Date("02-24-2004")   //    2/24/2004, 12:00:00 AM
// console.log(create.toLocaleString())

let timestamp=Date.now()
console.log(timestamp)

//in seconds
console.log(Math.floor(Date.now()/1000))
