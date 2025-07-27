// Immediately Invoked Function Expressions (IIFE)

// We may face problems due to pollution in global scope , so to solve this we use iife end me and function ke around () laga do bass
// IIFE use karke function immediately execute ho jae

// iife use karne ke baadcontext kab end hota hai yeh code ko pata nahi so use semicolon at end warna aage error aaega
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

