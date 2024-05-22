//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function sandwiches(items:string[]) {
    console.log('\nMaking your ordered sandwich with : ');

    items.forEach(element =>{
        console.log(element);
        
    })
}
sandwiches(['Ham','Cheese','Lettuce']);
sandwiches(['Turkey','Bacon','Tomato']);
sandwiches(['Chicken','Avacado','Mustard']);




