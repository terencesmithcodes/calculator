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

// We are going through the node list and attaching a addEventListener to each node in the list.
for (let i=0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function (event) {
        //console.log(event.target.innerHTML)
        if (operFlag || equalFlag) {
            operFlag = false
            decimalFlag = false
            input.innerHTML = ""
            if (equalFlag) {
                equalFlag = false
                arrNums = []
            }
        }
      if (event.target.innerHTML == "C") {
        arrNums = []
        arrOper = []
        decimalFlag = false
        input.innerHTML = ""
    }
    else{
      if (event.target.innerHTML != "."){
          input.innerHTML += event.target.innerHTML
      }
      else if(!decimalFlag && event.target.innerHTML == "."){
        decimalFlag = true
        input.innerHTML += event.target.innerHTML //concat to the end of the string
      }
    }
  })
}

//operators

for (let i=0; i < operators.length; i++){
  operators[i].addEventListener("click", function(event) {
    //   console.log(event.target.innerHTML)
      
      if (!operFlag && input.innerHTML != "" && input.innerHTML != ".") {
          arrOper.push(operators[i].innerHTML)
          operFlag = true
          if (!equalFlag) {
              let floatNum = parseFloat(input.innerHTML)
              arrNums.push(floatNum)
          }
      }

      if (arrNums.length == 2) {
          //-1 because length is one greater than index
          //-1 because we want to look at the previous opperator not the last opperator pressed
          calculation(arrOper[arrOper.length - 2])
      }
      equalFlag = false
    //    console.log(arrOper)  
  })
}

function equals() {
    if (equalFlag) {
        //if a return is called nothing below the return in function runs
        return 
    }
    if (arrNums.length == 0 && input.innerHTML != "" && input.innerHTML != ".") {
        let floatNum = parseFloat(input.innerHTML)
        arrNums.push(floatNum)
        // console.log(`equals 0 arrNums: ${arrNums}`)
        equalFlag = true
    }
    else if (arrNums.length == 1 && input.innerHTML != "" && input.innerHTML != ".") {
        // console.log(`equals before arrNums: ${arrNums}`)
        let floatNum = parseFloat(input.innerHTML)
        arrNums.push(floatNum)
        // console.log(`equals arrNums ${arrNums}`)
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