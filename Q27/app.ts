// Alien Colors #3: Turn your if-else chain from Exercise 25-26 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alien_colors : string = "Green";
if(alien_colors === "Green"){
    console.log("Version 1: The player earned 5 points...!");
}else if(alien_colors === "Yellow"){
    console.log("The player earned 10 points...!");
    
}else if(alien_colors === "Red"){

    console.log("The player earned 15 points...!");
    
}else{console.log("Please enter valid color...");
}

alien_colors = "Yellow";
if(alien_colors === "Green"){
    console.log(": The player earned 5 points...!");
}else if(alien_colors === "Yellow"){
    console.log("Version 2 : The player earned 10 points...!");
    
}else if(alien_colors === "Red"){

    console.log("Version 2 : The player earned 15 points...!");
    
}else{console.log("Please enter valid color...");
}

alien_colors = "Red";
if(alien_colors === "Green"){
    console.log(": The player earned 5 points...!");
}else if(alien_colors === "Yellow"){
    console.log("The player earned 10 points...!");
    
}else if(alien_colors === "Red"){

    console.log("Version 3 : The player earned 15 points...!");
    
}else{console.log("Please enter valid color...");
}





