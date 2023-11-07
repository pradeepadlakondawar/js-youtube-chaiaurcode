# projects releated to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```
## project 2 solution code

```javascript

const form = document.querySelector('form');

// generally form works on get or post, as we have submit button in form it will update the data in url which is to posted/traversed. as we have to stop this action, for this we have some property in events

// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height.value'));

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'please give a valid weight';
  } else {
    const bmi = ((weight / (height * height)) * 10000).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span> : Under Weight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi}</span> : Normal Range`;
    } else {
      results.innerHTML = `<span>${bmi}</span> : Overweight`;
    }
    // results.innerHTML = `<span>${bmi}</span>`;
  }
});

// const guide = document.querySelector('#weight-guide');

// if (bmi < 18.6) {
//   guide.children[1].style.color = 'red';
//   guide.children[1].style.fontSize = '20px';
// }else if(bmi >=18.6 && bmi<=24.9){
//   guide.children[2].style.color = 'green';
//   guide.children[2].style.fontSize = '20px';
// }else{
//   guide.children[3].style.color = 'red';
//   guide.children[3].style.fontSize = '20px';
// }


```

## Project 3 solution code

```javascript

const clock = document.getElementById('clock');

setInterval(function(){
  const date = new Date()
  clock.innerHTML=date.toLocaleTimeString()
},1000)

```

## project 4 solution code

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // we are using this because, we are in form element where submit will trigger values to post in url
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // in this section we will check the value entered is ok or not
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a valid number more than 1');
  } else if (guess > 100) {
    alert('please enter a valid number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // we will check user value with aur random ans number
  if (guess === randomNumber) {
    displayMessage('you guessed it write');
    endGame();
  } else if (guess <= randomNumber) {
    displayMessage('number is too low');
  } else if (guess >= randomNumber) {
    displayMessage('number is too high');
    // console.log(randomNumber);
  }
}

function displayGuess(guess) {
  // clean values for netx entrty,we display the guess update the dom accordingly

  userinput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // lowOrHi me msg print krva denge

  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  console.log(startOver)
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener("click", function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess=[];
    numGuess=1
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11 - numGuess}`;
    userinput.removeAttribute('disabled','')
    startOver.removeChild(p);
    displayMessage('')

    playGame=true;

  })

}

```

## Project 5 solution code - Asysnc -BGcolorChanger

```javascript

//  generate a random color

const randomColor = function () {
  let hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalID;
const startChangingColor = function () {
  // intervalID = setInterval(changeBgColor,1000)

  if (!intervalID) {
    // ye if condtion check hamne intervalId null kiya ta isliye liya h
    intervalID = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null; // optimisied code , ham ye memory free krne k liye use kre h, kam hojaye to memory free krdo aise
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```