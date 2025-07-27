const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// Browser ke andar global object is window object , isliye udhar output hoga window , but yaha empty object   {} hai
// console.log(this);

// 'This' object ke andar use karo , function ke andar nahi
// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // returns undefined
// }

// function chai(){
//     let username = "hitesh"
//     console.log(this); // returns a lot of things
// }

// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // returns undefined
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username); // returns undefineds
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); // returns empty paranthesis
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2    // explicit return matlab return likhna padta hai
// }

// const addTwo = (num1, num2) =>  num1 + num2   // This is called implicit return jaha return likhne ki jarurat nahi hai in one line statement

// const addTwo = (num1, num2) => ( num1 + num2 ) // {} me return likhne padega , () me nahi

const addTwo = (num1, num2) => ({username: "hitesh"}) // object return bass paranthesis ke andar hi hoga


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
