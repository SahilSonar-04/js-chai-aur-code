const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// concat returns new array and agar ek array me dusra array concat kara toh har ek element individually join hota hai
// but push se new array nahi banta , original change hota hai and nested array push hota hai rather than all elements individually
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// this is spread operator , eg. kaach ka glass niche giraya , sab spread hoga (sab tutega) so har ek element tutke add hoga isme rather than nested
// concat jaisa hi hai bass used more commonly and saathme 2 se jyaada bhi join kar sakte hai aise
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// from converts anything to array , but if key , pair need to mention what to convert else empty array created
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
// of keeps nested structure when joining
console.log(Array.of(score1, score2, score3));
