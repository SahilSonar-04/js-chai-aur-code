//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++



//Function Hoisting
//In JavaScript, function declarations are hoisted to the top of their scope during compilation phase. That means:
//The entire function definition is moved to the top internally before the code runs.
//So, even though the function is written after the call, it’s already known to the interpreter.
console.log(addone(5))

// this is a function , y
function addone(num){
    return num + 1
}


//function hoisting not valid for expression
addTwo(5)

// this is an expression
const addTwo = function(num){
    return num + 2
}
