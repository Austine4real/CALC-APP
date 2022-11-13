// select all the buttons

// const buttons = document.querySelectorAll('button');

// select the <input type=”text” class=”display” disabled> element

// const display = document.querySelector('.display');

// add eventListener to each button

// buttons.forEach(function(button) {

//   button.addEventListener('click', calculate);

// });

// calculate function

// function calculate(event) {

  // current clicked buttons value

  // const clickedButtonValue = event.target.value;

  // if (clickedButtonValue === '=') {

    // check if the display is not empty then only do the calculation

    // if (display.value !== '') {

      // calculate and show the answer to display

  //     display.value = eval(display.value);

  //   }

  // } else if (clickedButtonValue === 'C') {

    // clear everything on display

  //   display.value = '';

  // } else {

    // otherwise concatenate it to the display

//     display.value += clickedButtonValue;
//   }
// }

let screen = document.getElementById("screen")
let buttons = document.querySelectorAll("button")
let screenValue = '';
for(item of buttons){
  item.addEventListener('click',(e)=>{
    buttonText = e.target.innerText
    // console.log('button text is', buttonText);
    // if(buttonText == 'X'){
    //   buttonText = '*';
    //   screenValue += buttonText;
    //   screen.value = screenValue;
    // }
    // else if(buttonText == 'C'){
    //   screenValue = "";
    //   screen.value = screenValue;
    // }
    // else if(buttonText == '='){
    //   screen.value = eval(screenValue);
    // }
    // else{
    //   screenValue += buttonText;
    //   screen.value = screenValue;
    // }

    
    if(buttonText == 'X'){
      buttonText = '*';
      screen.value += buttonText;
    }else if (buttonText === '=') {
  
      //  if (screen.value !== '') {
  
         screen.value = eval(screen.value);
  
      //  }
  
     } else if (buttonText === 'C') {
       screen.value = '';
  
     } 
     else {
  
       screen.value += buttonText;
     }
  })
}