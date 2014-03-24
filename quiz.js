if(jQuery) {
  var checkAnswers = function(){
    var checked = $(":checked");
	
	// Make sure all the questions are answered.
	if(checked.length != 3) {
	  return
	}
	
    // Check each item.
	var correctSoFar = true;
	
	//// Check the first question.
	if(checked[0].name == "question1") {
	  if(checked[0].value == "b") {
	    correctSoFar = correctSoFar && true;
	  } else {
		correctSoFar = false;
		alert("Wrong answer, ya dingus!");
	  }
	}
	
	//// Check the second question.
	if(checked[1].name == "question2") {
	  if(checked[1].value == "c") {
	    correctSoFar = correctSoFar && true;
	  } else {
		correctSoFar = false;
		alert("Wrong answer, ya dingus!");
	  }
	}
	
	//// Check the third question.
	if(checked[2].name == "question3") {
	  if(checked[2].value == "c") {
	    correctSoFar = correctSoFar && true;
	  } else {
		correctSoFar = false;
		alert("Wrong answer, ya dingus!");
	  }
	}
	
	
	// If each item is correct:
	if(correctSoFar) {
	  // Display "You Win!"
	  displayCorrect();
	}
	
	
  };
  
  var displayCorrect = function() {
      $("body").addClass("correct");
      $("h1").text("You Win!");
      $("canvas").show();
  }

  $("#question1").show();
};

if (impress){
  $("#question2").show();
};

if (atom){
  $("#question3").show();
};
