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
  var answer = document.getElementById("answerImput").value;
  answerList.push(answer);
  console.log(answer)
 window.alert("submitted")

}

//checks if user-submitted guess is in answerList
function checkGuess() {

  var guess = document.getElementById("guessImput").value;
  answerList.push(guess);
  console.log(guess)
  var x = answerList.length;
  for(var i = 0; i < x; i++){
    if(guesslist[i] == answerList[i]){
      console.log("correct");
        window.alert("correct")
  
  
  
  
  //var guess = document.getElementByID("aguessImput").value;
  //answerList.push(guess);
  //console.log(guess)
 //window.alert("submitted")
}
