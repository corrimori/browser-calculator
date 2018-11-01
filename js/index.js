// let num = document.querySelector('span')
// num.addEventListener("click", function(){console.log('its working')})
let calculation = 0

const clearInput = () => {
  console.log('clear button pushed ********')
  document.getElementById('screen').innerHTML = 'cleared'
}

const calculateInput = () => {
  console.log('calculation of Input ********')
  // (inputButton.match(/[+\-÷x]/))
  // calculate equation
  // split string
  // test / 0 case
  // calculate

}

let getAllSpan = document.querySelectorAll('span')
console.log('get all span---->', getAllSpan);
let count = 0

getAllSpan.forEach(element => {

  element.addEventListener("click", () => {
    let displayNumber = document.getElementById('screen').innerHTML
    // get number to calculate
    let inputButton = element.innerHTML



    if (inputButton == 'C') {
      clearInput()
      // console.log('clear button pushed ********')
      // // clear screen
      // document.getElementById('screen').innerHTML = 'cleared'
      // let calculation = 0
    }

    // ********* write input number to display on calculator screen
    // displayNumber = displayNumber + inputButton
    document.getElementById('screen').innerText = displayNumber + inputButton

    console.log('displayNumber>>', displayNumber)
    console.log('inputButton>>', inputButton);

    if (inputButton == '=') {
      console.log('equal button pushed @@@@@@@@@@')
      operator = displayNumber.match(/[+\-÷x]/)[0]
      console.log('operator', operator)
      num = displayNumber.split(operator)
      console.log('eval', eval);

      // change operator so can be evaluated, x to *, ÷ to /
      // test num/0 = error
      if (operator === 'x') { operator = '*'}
      if (operator === '÷') {
        operator = '/'
        if (num[1] === '0') { document.getElementById('screen').innerText = 'error' }
      }

      calculation = eval(`${num[0]} ${operator} ${num[1]}`)
      console.log('calculation', calculation)
      // test / 0 case
      // calculate
    }

    // if (inputButton == "=") {
      // console.log('inside if ======')
      // If ( operator === '/' && num2 === '0') {
      //   document.getElementById('screen').innerHTML = 'Error'
      // } else {
    // }
    // let equalInput = document.querySelector('#equals')
    // if (equalInput) {
    //   console.log('equalInput---->>', equalInput);
    //   let equation = displayNumber.split('')
    //   console.log('equation--->>', equation);



    // if (document.getElementsByClassName('equals')) {
    //   If ( operator === '/' && num2 === '0') {
    //     document.getElementById('screen').innerHTML = 'Error'
    //   } else {
    // }

  }) // close element.addEventListener loop
}) // getAllSpan for each

  // console.log('done with forEach');
  console.log('outside forEach>>', document.getElementById('screen').innerHTML);

    // take displayNumber split apart and calculate equation

  // }

  // console.log('element by class>>', document.getElementsByClassName('operator'));
  // if (element = document.getElementByClass('operator'))


// test if num =
//




// ===============================================================
// click on number + cat until operator is clicked
// when "=" is clicked, test if valid
// if expression is format 'num (+|-|x|/) num' calculate expressions
//     - update screen with result
//     ELSE  if num / 0
//          'Error'
//     ELSE  'Error'
// when "C" is clicked, screen = null

// 14 spaces MAX for screen display
// str.slice(14)

// ===============================================================

// More specifically, the app should allow a user to do the following.
//
// - Click an operand or operator button to append its corresponding text to the screen.
//   - If the screen displays the message `Error`, don't append anything.
// - Click the `clear` button to remove all the text from the screen.
// - Click the `equals` button to evaluate the arithmetic expression shown in the screen.
//   - If the expression is in format `operand(+|-|x|÷)operand`, evaluate the expression and update the screen with the result.
//   - If the expression isn't in the correct format or when attempting to divide by zero, update the screen with the message `Error`.


// -Try to evaluate the expression without using the `eval()` function.
//
// ### Bonus 3
//
// Enhance the calculator so users can input arithmetic expressions using their keyboard. More specifically, the app should allow a user to do the following.
//
// - Type an arithmetic expression directly to the `screen`.
// - Press the `Enter` key to evaluate the screen's expression.
// - Press the `Escape` key to clear the screen.
//
// **TIP:** You'll have to change the `screen` to an `<input>` tag.
