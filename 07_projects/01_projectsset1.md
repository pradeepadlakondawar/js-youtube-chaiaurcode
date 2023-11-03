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
## project 2

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

## Project 3

```javascript

const clock = document.getElementById('clock');

setInterval(function(){
  const date = new Date()
  clock.innerHTML=date.toLocaleTimeString()
},1000)

```