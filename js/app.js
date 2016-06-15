function random() {
    var value = 5;

    function set(newValue) {
        value = newValue;
    }

    return {
        value: value,
        set: set
    };

}

var value = 10;

console.log(random().value)) // == 5
console.log(value) // == 10

$(document).ready(function(){
    var rory;
    var randomNumber;
    newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $("#guessButton").on('click', function(event) {
        event.preventDefault();
        theGuess();
    })

    //New Game
    function newGame() {
        randomNumber = Math.floor((Math.random() * 100) + 1);

    }

    //The Game
    var theGuess = function() {
        var userNumber = $("#userGuess").val();	
        var distance = Math.abs(userNumber - randomNumber);

        console.log(rory)

        console.log(distance);

    	if (userNumber <= 100 && userNumber >= 1) {
    		if (distance === 0) {
    			console.log("You got it!");
    		} else if (distance <= 5) {
                console.log("Burning");
            } else if (distance <= 15) {
                console.log("Hot");
            } else if (distance <= 25) {
                console.log("Warm");
            } else if (distance <= 50) {
                console.log("Cold");
            } else if (distance <= 99) {
                console.log("Freezing");
            }
	    }
    }


});





