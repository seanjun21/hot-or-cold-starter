
$(document).ready(function(){
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
    var newGame = function() {
        //Computer generates random number (1 - 100)
    	var randomNumber = Math.floor((Math.random() * 100) + 1);
        return randomNumber;
    }

    newGame();


    //The Game
    var theGuess = function() {
        var userNumber = $("#userGuess").val();	
        var distance = Math.abs(userNumber - randomNumber);

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





