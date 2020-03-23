// The array of words for game
    var words = ["cough", "headache","sneeze", "fever","chills",];
//The underscores length should match the word
let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

//create an array of words
var word = words[Math.floor(Math.random() * words.length)];
//sets up the answers to show how many letters there are
// using underscores
var answerArray =[];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

// how many guesses do you have left
var remainingLetters = word.length;

while(remainingLetters > 0) {
    //what letters they have left
    alert(answerArray.join(" ")) ;

    var guess = prompt(" Guess a letter or click cancel")
    if(guess == null) {
        break;
 
//if you put in a number
    }else if (guess.length !== 1) {
        alert("That is not a letter")
    
    }else{
        for (var j = 0; j < word.length; j++ ) {
            if (word[j] === guess) {
                //update the list with the right letter
                answerArray[j] = guess;
                //remove the leftover letters
                remainingLetters--;
            }
        }
    }

    }

        //congratulate them word is corret
        alert(answerArray.join(" "));
        alert("Good JOb! The word was " + word);
        window.onload = init;