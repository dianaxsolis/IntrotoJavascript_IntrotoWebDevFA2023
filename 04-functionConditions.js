// Create function that takes in one argument that is passed through a conditional statement. 
// Return the result as an alert or console.log. 
// Test all of your conditions to make sure you can receive all of your results back. 

function sonnyAngelBlindBox (pick) 
{
	if (pick === "Bunny") {
		console.log ("You got a duplicate.")
	}

	else if (pick === "Giraffe") {
		console.log ("New Sonny Angel!")
	}

	else if (pick === "Robby") {
		console.log ("Sorry...")
	}

}

sonnyAngelBlindBox("Bunny");
sonnyAngelBlindBox("Giraffe");
sonnyAngelBlindBox ("Robby");