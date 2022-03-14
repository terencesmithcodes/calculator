// Created a variable numbers that is holding on to the nodes that are a part of the numbers class and have a div tag.
const numbers = document.querySelectorAll('.numbers div')
const operators = document.querySelectorAll('.operators div')
const input = document.getElementById('input')
const result = document.getElementById('result')

let decimalFlag = false
let operFlag = false
let equalFlag = false

arrNums = []
arrOper = []

result.addEventListener('click', equals)

//numbers loop
// We are going through the node list and attaching a addEventListener to each node in the list.
for (let i=0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function (event) {
        //if operator or equal is clicked first we want to ensure input field is empty
        if (operFlag || equalFlag) {
            operFlag = false
            decimalFlag = false
            input.innerHTML = ""
            if (equalFlag) {
                equalFlag = false
                arrNums = []
            }
        }
        //if clear is clicked clear input field and empty arrays and ensure a decimal can't be entered
      if (event.target.innerHTML == "C") {
        arrNums = []
        arrOper = []
        decimalFlag = false
        input.innerHTML = ""
      }
      //if there is not a decimal click then concat (add) the following string click  
      else{
      if (event.target.innerHTML != "."){
          input.innerHTML += event.target.innerHTML
      }
      //if there is a decimal click then concat (add) the decimal to the end of the string    
      else if(!decimalFlag && event.target.innerHTML == "."){
        decimalFlag = true
        input.innerHTML += event.target.innerHTML 
      }
    }
  })
}

//operators loop

for (let i=0; i < operators.length; i++){
  operators[i].addEventListener("click", function(event) {
      if (!operFlag && input.innerHTML != "" && input.innerHTML != ".") {
          arrOper.push(operators[i].innerHTML)
          operFlag = true
          if (!equalFlag) {
              //parseFloat changes the data type from string to a float
              let floatNum = parseFloat(input.innerHTML)
              //pushes that float into the arrNums
              arrNums.push(floatNum)
          }
      }

      if (arrNums.length == 2) {
          //-1 because length is one greater than index
          //-1 because we want to look at the previous opperator not the last opperator pressed
          calculation(arrOper[arrOper.length - 2])
      }
      equalFlag = false
 
  })
}

//equal loop

function equals() {
    if (equalFlag) {
        //if a return is called nothing below the return in function runs
        return 
    }
    if (arrNums.length == 0 && input.innerHTML != "" && input.innerHTML != ".") {
        let floatNum = parseFloat(input.innerHTML)
        arrNums.push(floatNum)
 
        equalFlag = true
    }
    else if (arrNums.length == 1 && input.innerHTML != "" && input.innerHTML != ".") {
        let floatNum = parseFloat(input.innerHTML)
        arrNums.push(floatNum)
        equalFlag = true
        operFlag = false
        //-1 because length is one greater than index
        calculation(arrOper[arrOper.length - 1]) 
    }
}



function calculation(operator) {
    if (operator == "+") {
        total = arrNums[0] + arrNums[1]
    }
    else if (operator == "-") {
        total = arrNums[0] - arrNums[1]
    }
    else if (operator == "*") {
        total = arrNums[0] * arrNums[1]
    }
    else if (operator == "/") {
        total = arrNums[0] / arrNums[1]
    }
    input.innerHTML = total
    arrNums = [total]
}



// console.log(numbers)