// Dates

let myDate = new Date()
// console.log(myDate) // 2025-07-26T17:36:09.965Z
// console.log(myDate.toString()) // Sat Jul 26 2025 23:06:09 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()) // Sat Jul 26 2025
// console.log(myDate.toISOString()) // 2025-07-26T17:36:09.965Z
// console.log(myDate.toJSON()) // 2025-07-26T17:36:09.965Z
// console.log(myDate.toLocaleDateString()) // 26/7/2025
// console.log(myDate.toLocaleString()) // 26/7/2025, 11:06:09 pm
// console.log(myDate.toLocaleTimeString()) //11:06:09 pm

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // returns time from 1 jan 1970 in ms

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // returns time in ms
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

