// questions to be randomly asked on page load
var questionsList = ["What are your/your friend's favorite foods?", "What are your/your friend's favorite animals?"];


//randomly chooses a question to display
function init() {
  var randomIndex = Math.floor(Math.random() * questionsList.length);
  document.getElementById("question").innerHTML = questionsList[randomIndex];
}

window.onload = init;

var answerList = []; //initialize answerList to be empty

/* ADD YOUR CODE BELOW */

//adds user-submitted answer to answerList
function submitAnswer() {
  var answer = document.getElementById("answerInput").value;
  answerList.push(answer);
  window.alert("submitted");
}

//checks if user-submitted guess is in answerList
function checkGuess() {
  var guess = document.getElementById("guessInput").value;
  for(var i = 0; i<answerList.length;i++){
    if (answerList[i] == guess){
      window.alert("that was amazeballs!")
    }
  }
}
