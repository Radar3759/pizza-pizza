document.querySelector('#single').addEventListener('click', pizza)
document.querySelector('#all').addEventListener('click', allToppings)
document.querySelector('#veggie').addEventListener('click', veggieToppings)
document.querySelector('#meat').addEventListener('click', meatToppings)
// const num = document.querySelector('#number').value
let allTop = ["Tomato", "Mushrooms", "Onions", "Black Olives", "Green Olives", "Red Peppers", "Jalapeno", "Pineapple", "Basil", "Anchovies", "Bacon", "Ham", "Chicken", "Pepperoni", "Italian Sausage", "Canadian Bacon", "Pulled Pork", "Salami", "Ground Beef"]

let veggieTop = ["Tomato", "Mushrooms", "Onions", "Black Olives", "Green Olives", "Red Peppers", "Jalapeno", "Pineapple", "Basil"]

let meatTop = ["Anchovies", "Bacon", "Ham", "Chicken", "Pepperoni", "Italian Sausage", "Canadian Bacon", "Pulled Pork", "Salami", "Ground Beef"]

function pizza() {
    let final_toppings = Math.floor(Math.random() * (allTop.length));
    document.getElementById('toppings').innerHTML = allTop[final_toppings];
}

// function moarToppings(arr, num) {
//     let shuffled = [...arr].sort(() => 0.5 - Math.random());
//     // console.log(shuffled)
//     return shuffled.slice(0, num);
// }
function allToppings() {

    let numToppings = Number(document.querySelector('input').value)
      
    let shuffled = [...allTop].sort(() => 0.5 - Math.random());
    // clears the single topping
    document.querySelector('#toppings').innerText = ""
    let finalTops = shuffled.slice(0, numToppings)
    
    document.getElementById('toppings').innerHTML = finalTops

    let finalTopsPretty = finalTops.join(', ')
    
    document.getElementById('toppings').innerHTML = finalTopsPretty
}

function veggieToppings() {

    let numToppings = Number(document.querySelector('input').value)
        
    let shuffled = [...veggieTop].sort(() => 0.5 - Math.random());
    // clears the single topping
    document.querySelector('#toppings').innerText = ""
    let finalTops = shuffled.slice(0, numToppings)
    
    document.getElementById('toppings').innerHTML = finalTops

    let finalTopsPretty = finalTops.join(', ')
    
    document.getElementById('toppings').innerHTML = finalTopsPretty
}

function meatToppings() {

    let numToppings = Number(document.querySelector('input').value)
        
    let shuffled = [...meatTop].sort(() => 0.5 - Math.random());
    // clears the single topping
    document.querySelector('#toppings').innerText = ""
    let finalTops = shuffled.slice(0, numToppings)

    let finalTopsPretty = finalTops.join(', ')
    
    document.getElementById('toppings').innerHTML = finalTopsPretty
}


// TEST f(x) WORKS

// function moarToppings(arr, num) {
//     let shuffled = [...arr].sort(() => 0.5 - Math.random());
//     console.log(shuffled)
//     return shuffled.slice(0, num);
// }

// console.log(moarToppings(allTop,3))
// console.log(moarToppings(veggieTop, 5))
// console.log(moarToppings(meatTop, 2))
