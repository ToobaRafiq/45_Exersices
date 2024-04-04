//Turn your if-else chain from Exercise 5-4 into an if-else chain.

let alienColors : string ="green";

//If the alien is green, print a message that the player earned 5 points.
//if the alien is yellow, print a massage that the player earned 10 points.
//If the alien is red, print a message that the player earned 15 points.
//version 1
if (alienColors === "green"){
    console.log("player earned 5 points.");
}
else if(alienColors === "yellow"){
    console.log("player earned 10 points.");
}
else if(alienColors === "red"){
    console.log(" player earned 15 points.");
}
else { 
    console.log("Please select right color")
}
//version 2.
alienColors  ="yellow";
if (alienColors === "green"){
    console.log("player earned 5 points.");
}
else if(alienColors === "yellow"){
    console.log("player earned 10 points.");
}
else if(alienColors === "red"){
    console.log(" player earned 15 points.");
}
else { 
    console.log("Please select right color")
}
//version 3
alienColors ="red"
if (alienColors === "green"){
    console.log("player earned 5 points.");
}
else if(alienColors === "yellow"){
    console.log("player earned 10 points.");
}
else if(alienColors === "red"){
    console.log(" player earned 15 points.");
}
else { 
    console.log("Please select right color")
}


// Write three versions of this program, making sure each message is printed for the appropriate color alien.
