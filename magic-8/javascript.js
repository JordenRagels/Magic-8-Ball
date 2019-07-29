
// Our variables
var answersList = [
    "Sure",
    "Most definitely",
    "No, bitch stop asking",
    "Get a life",
    "Definitely not",
    "Hard pass",
    "If you will it, it will be",
];
var submitButton = document.getElementById("button");
var responseArea = document.getElementById("response");

//helper functions
function getRandNumber(arrLength){
console.log('getting num');
return Math.floor(Math.random() * arrLength);
};

function getRandAnswer(answerIndex){
console.log('getting answer');
return answersList[answerIndex];
}

//Listeners
submitButton.addEventListener("click", function() {
console.log('button clicked');
var answerIndex = getRandNumber(answersList.length);
responseArea.innerHTML = getRandAnswer(answerIndex);
});