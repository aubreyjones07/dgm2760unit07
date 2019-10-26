/*jslint node:true*/
"use strict";

/*global alert*/



function loadImage() {
    
}



var companyTitle = "Pizza Emporium";
document.getElementById("company").innerHTML = companyTitle;


var companySlogan = "Literal Objects";
document.getElementById("slogan").innerHTML = companySlogan;



let message


const pizza = {
crust: 'thin' || 'thick' ,  
size: 'small' || 'large' ,
topping: 'sausage' || 'pepperoni' , 
buildPizza: function () {
console.log('buildPizza method has been called')
message = `Baking a pizza on a ${pizza.crust} crust with a ${pizza.topping} and cheese just for you. `
document.querySelector('#feedback').textContent = message; 
}, 

shoppingList: () => {
    let flour = 1
    if (pizza.crust === 'thick') flour *= 2
    else if (pizza.crust === 'thin') flour *= 1
    message = `You will need to purchase ${flour} cups of flour and 1 lb of ${pizza.topping}.`
    document.querySelector('#feedback').textContent = message; 

}


}


document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')



// same thing for toppings and size



document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')


document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')
document.querySelector('#pepporoni').addEventListener('click', () => pizza.topping = 'pepperoni')


document.querySelector('#build').addEventListener('click', pizza.buildPizza) 


// hook up the shoppList method call here


 
document.querySelector('#shopping').addEventListener('click', pizza.shoppingList) 

























