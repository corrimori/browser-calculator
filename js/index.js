// let num = document.querySelector('span')
// num.addEventListener("click", function(){console.log('its working')})
let calculation = 0

const clearInput = () => {
  console.log('clear button pushed ********')
  document.getElementById('screen').innerHTML = ''
  // document.getElementById('screen').innerText = ''
  calculation = 0
  console.log('calc>>', calculation)
}

// create a function to do calculations
// const calculateInput = () => {
//   console.log('calculation of Input ********')
// }

let getAllSpan = document.querySelectorAll('span')
console.log('get all span---->', getAllSpan);
let count = 0

getAllSpan.forEach(element => {
  element.addEventListener("click", () => {

    let displayNumber = document.getElementById('screen').innerHTML
    let inputButton = element.innerHTML

    console.log('displayNumber>>', displayNumber)
    console.log('inputButton>>', inputButton);

    if (inputButton == 'C') {
      clearInput()
    } else {
      // ********* write input number to display on calculator screen
      // displayNumber = displayNumber + inputButton  (not working????)
      document.getElementById('screen').innerText = displayNumber + inputButton

      if (inputButton == '=') {
        console.log('equal button pushed @@@@@@@@@@')
        // operator = displayNumber.match(/[+\-÷x]/)[0]
        operator = displayNumber.match(/[+\-÷x]/)
        if (!operator) {
          document.getElementById('screen').innerText = 'error'
        } else {
          operator = operator[0]
          console.log('operator********>>>>>>>', operator)
          num = displayNumber.split(operator)
          console.log('num>>', num);

          // change operator so can be evaluated, x to *, ÷ to /
          // test num/0 = error
          if (operator === 'x') { operator = '*'}
          if (operator === '÷') {
            operator = '/'
            if (num[1] === '0') { document.getElementById('screen').innerText = 'error' }
          }

          calculation = eval(`${num[0]} ${operator} ${num[1]}`)
          console.log('calculation', calculation)
          document.getElementById('screen').innerText = calculation
          // test / 0 case
          // calculate
        }
      }

    }


  }) // close element.addEventListener loop
}) // getAllSpan for each

console.log('outside forEach>>', document.getElementById('screen').innerHTML);


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
