// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let myFavoritePizza : string[] = ['Cheese Lover','Fajita','Pepperoni'];

for(let pizzas of myFavoritePizza){
    console.log(`${pizzas}`);
    console.log(`I like ${pizzas} Pizza` );
    
    
}

console.log('Cheese Pizza I like the most.The combination of melted cheese and perfectly baked crust is simply irresistable!!!...Each bite delivers a delightful blend of RICH,SAVOURY flavors and comforting textures.I really love pizza. ');



