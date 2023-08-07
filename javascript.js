let standard_toppings = ["tomato", "mushrooms", "onions", "black olives", "green olives", "red peppers", "jalepeno", "pineapple", "anchovies", "bacon", "ham", "chicken", "pepperoni", "sausage"]

let veggie_toppings = ["tomato", "mushrooms", "onions", "black olives", "green olives", "red peppers", "jalepeno", "pineapple"]

let meat_toppings = ["anchovies", "bacon", "ham", "chicken", "pepperoni", "sausage"]

function pizza() {
    let final_toppings = Math.floor(Math.random() * (standard_toppings.length));
    document.getElementById('toppings').innerHTML = standard_toppings[final_toppings];
}



// function moarToppings (num) {
//     let copy_toppings = [];
//     console.log(copy_toppings)
//     for(let i = 0; i <= num; i++)  {
//         let index = Math.floor(Math.random() * standard_toppings.length);
//         copy_toppings.push(standard_toppings.splice(index, 1)[0]);
//         return copy_toppings
        
//     }
// }

// console.log(moarToppings(3));

function moarToppings(arr, num) {
    let shuffled = [...arr].sort(() => 0.5 - Math.random());
    // console.log(shuffled)
    return shuffled.slice(0, num);
}

console.log(moarToppings(standard_toppings,3))
console.log(moarToppings(veggie_toppings, 5))
console.log(moarToppings(meat_toppings, 2))