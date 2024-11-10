/* eslint-disable max-len */
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

//const answer = prompt('Please, give me a number between 1 and 10: ');
//console.log(`Your number is: ${answer}`);

/* const easywords = ["fapfle","fanfna","fafz"];

const mediumwords = ["faszkalap", "köcsög", "hülye"] ;

const hardwords = ["kisköcsög", "nagyköcsög", "hülyekötsög"];


let word =''
let hp = 0



function choose(){
    const answer = prompt('Welcome to Hangman! Please select a lvl: easy/medium/hard ')
    if (answer === "easy"){
        word = easywords[Math.floor(Math.random() * easywords.length)];
        hp = 6
        
    }
    else if ( answer === "medium"){
        word = mediumwords[Math.floor(Math.random() * mediumwords.length)];
    }
    else if (answer === "hard" ){
        word = hardwords[Math.floor(Math.random() * hardwords.length)];
    }

    let wordArray = Array(word.length).fill('_')

    console.log(`Your word is: ${wordArray}`)
    console.log(`Your hp is: ${hp}`)

    while(wordArray.includes('_')){
        const guess = prompt('Guess any letter of the alphabet! ').toLowerCase()
        if (wordArray.includes(guess)){
            console.log('VÓTMÁ XDD')
            continue;
        }

        if (word.includes(guess)) {
            for (let i = 0; i < word.length; i++) {
                if (guess === word[i]) {
            
                    if (i === 0) {
                        wordArray[i] = guess.toUpperCase(); 
                    }  else {
                        wordArray[i] = guess; 
                    }
                }
            }
        }

    console.log(wordArray)
    }
}

choose()



const gekko = `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡿⣻⣿⣿⣿⣿⣿⣦⣤⡀⠈⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠀⠹⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⢀⣾⣿⣿⣿⣿⣿⡛⠿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣦⠀⠀⠉⠛⠛⠛⠋⠁⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⡄⠈⠻⣿⣿⣿
⣿⣿⣿⣿⣿⣷⡀⠀⠀⣠⣴⡶⠶⠶⠦⠀⠈⠛⠁⢿⣿⣿⣿⣿⠇⠀⠀⠙⣿⣿
⣿⣿⡟⢻⣿⣿⠇⢀⣾⡿⠋⠀⠀⢀⡀⣀⠀⠀⠀⠈⠿⠿⠿⠋⠀⠀⠀⠀⢹⣿
⣿⣿⡇⠀⠈⠁⠀⢸⣿⣇⠀⠀⠀⢸⠿⣯⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿
⣿⣿⡇⠀⠀⠀⠀⠀⢿⣿⣦⣀⠀⠀⠀⣿⡇⠀⠀⠀⠀⢶⣤⡄⠀⠀⠀⠀⠀⣿
⣿⣿⣷⠀⠀⠀⠀⠀⠈⠻⣿⣿⣷⣶⣾⣿⣧⣤⣀⣀⡶⠋⠛⠀⠀⠀⠀⠀⢀⣿
⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠈⠙⢿⣿⣿⣿⣿⣿⣿⣿⣧⣀⣾⣷⣦⣤⡀⠀⣼⣿
⣿⣿⣿⣿⣆⠀⠀⠀⠀⢠⡄⣠⣾⠟⠙⠛⢿⣿⠿⠿⠿⢿⣿⣿⣿⡿⠁⣰⣿⣿
⣿⣿⣿⣿⣿⣷⣄⠀⠘⢻⡟⠋⠁⠀⠀⠀⢻⣅⡀⠀⠀⠀⠉⠻⠋⢀⣼⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⣀⠀⠀⠀⠀⠐⠛⠿⠀⠀⠀⠀⢀⣠⣶⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣤⣤⣤⣤⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿`

console.log(gekko)


function pattern(n) {
    let output = '1';
    for (let i=2;i<=n;i++){
    output +='\n' + '1' + '*'.repeat(i-1)+i 
    }
    return output
}

console.log(pattern(10))

*/

function maxTriSum(numbers){
    let biggest = 0;
    let numbers2 = []
    let sum = 0
    while (numbers2.length<3){
      for (let element of numbers){
        if (element>biggest){
          biggest = element
        }
      }
      numbers2.push(biggest)
      let index = numbers.indexOf(biggest)
      numbers.splice(index)
      biggest = 0
    }
    console.log(numbers)
    console.log(numbers2)
    for (let num of numbers2){
      sum += num
    }
    return sum
  }

//console.log(maxTriSum([13,9,2]))


const questions = [
    {
      text: "What is the capital of France?",
      answers: [
        { text: "Paris", isCorrect: true },
        { text: "London", isCorrect: false },
        { text: "Berlin", isCorrect: false },
        { text: "Madrid", isCorrect: false }
      ]
    },
    {
      text: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", isCorrect: false },
        { text: "Mars", isCorrect: true },
        { text: "Venus", isCorrect: false },
        { text: "Jupiter", isCorrect: false }
      ]
    },
    {
      text: "What is the largest mammal?",
      answers: [
        { text: "Elephant", isCorrect: false },
        { text: "Blue Whale", isCorrect: true },
        { text: "Giraffe", isCorrect: false },
        { text: "Shark", isCorrect: false }
      ]
    }
  ];



let x = 0
let segitsegek = []
function play(){

  while(true){
    
    console.log(`Your question is:  ${questions[x].text}`);
    console.log("Answers: " + questions[x].answers
        .map((y, index) => String.fromCharCode(65 + index)+':' + ' ' + y.text)
        .join(", "));
    //console.log(questions[x].answers.map(istrueornot =>istrueornot.isCorrect))

    let input = String(prompt('Choose your answer:')).toUpperCase();

    
    
    while (input!=='A'&& input!=='B'&& input!== 'C' && input!=='D' && input!=='C HELP' ){
        input = String(prompt(console.log('incorrect guess, guess again'))).toUpperCase()
        
    }

    if (segitsegek.includes('C HELP') && input === 'C HELP'){
      console.log('You already used up your computer help!')
      continue
    }

    if(input==='C HELP'){
      segitsegek.push(input)  
      computerHelp()
      break;
  }
    let index = input.charCodeAt(0) - 65;
    
    if (questions[x].answers[index].isCorrect){
        console.log('YEEEEESSSSSS')
        x++
    }
    else {
        console.log(`The correct answer was ${String.fromCharCode(65 + questions[x].answers.findIndex(answer => answer.isCorrect))}: ${questions[x].answers.find(answer => answer.isCorrect).text}`)
        console.log('Game over bozo')
    break;
    }
    
    
}

}





function computerHelp() {
    
    let correctIndex = questions[x].answers.findIndex(answer => answer.isCorrect);

    
    let incorrectIndices = questions[x].answers
        .map((answer, index) => index) // 
        .filter(index => index !== correctIndex); 

    
    let randomIncorrectIndex = incorrectIndices[Math.floor(Math.random() * incorrectIndices.length)];

    
    let helpIndices = [correctIndex, randomIncorrectIndex].sort(); 

    
    
    console.log(`Computer help activated! Two choices remain:`);
    console.log(helpIndices
        .map(y => `${String.fromCharCode(65 + y)}: ${questions[x].answers[y].text}`)
        .join(", ")
    );
    console.log(helpIndices)
    let input = String(prompt('ANSWER!!!')).toUpperCase()
  
    while (
        input !== String.fromCharCode(65 + helpIndices[0]) && 
        input !== String.fromCharCode(65 + helpIndices[1])
    ) {
        input = prompt('Invalid guess! Guess again').toUpperCase();
    }
    let index = input.charCodeAt(0) - 65;
    
    if (questions[x].answers[index].isCorrect){
        console.log('YEEEEESSSSSS')
        x++
        play()
    }
    else {
        console.log(`The correct answer was ${String.fromCharCode(65 + questions[x].answers.findIndex(answer => answer.isCorrect))}: ${questions[x].answers.find(answer => answer.isCorrect).text}`)
        console.log('Game over bozo')
   
    }
    
    
    

    
    //return helpIndices; 
}


play()


