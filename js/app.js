
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});




  	var newGame = function() {
  	//Computer generates random number (1 - 100)
  		var randomNumber = Math.floor((Math.random() * 100) + 1);

  	//Users input
  		var userGuess = function() {
			var userNumber = $("#userGuess").val();	

			if (userNumber <= 100 && userNumber >= 1) {
				if (userNumber == randomNumber) {
					console.log("You got it!");
				}
			}
		}
  	}
});

newGame();



