const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// Output: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);
// Output: flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// Output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
// Output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// Output: [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Hitesh")) //-->
console.log(Array.from("Hitesh"))    // Output: [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting
//Output: [ <1 empty item> ]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))