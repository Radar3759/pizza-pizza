let standard_toppings = ["tomato", "mushrooms", "onions", "black olives", "green olives", "red peppers", "jalepeno", "anchovies", "bacon", "ham", "chicken", "pepperoni", "sausage"]

let veggie_toppings = ["tomato", "mushrooms", "onions", "black olives", "green olives", "red peppers", "jalepeno"]

let meat_toppings = ["anchovies", "bacon", "ham", "chicken", "pepperoni", "sausage"]

function pizza() {
    let final_toppings = Math.floor(Math.random() * (standard_toppings.length));
    document.getElementById('toppings').innerHTML = standard_toppings[final_toppings];
}