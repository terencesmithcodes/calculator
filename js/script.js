/*
https://digitalcrafts.instructure.com/courses/190/pages/group-in-class-activity-calculator?module_item_id=27454
*/
const numbers = document.querySelectorAll(".numbers div");
const operations = document.querySelectorAll(".operators div");
const input = document.getElementById("input");
const equal = document.getElementById("result");

let decimalFlag = false;
let operandFlag = false;

let numbersToCalculate = [];
let arrayOfNumbers = [];
let arrayOfOperations = [];

for (let i = 0; i < numbers.length; i++) {
  // Add an event listener to all divs/button
  numbers[i].addEventListener("click", (e) => {
    if (numbers[i].innerHTML != "C" && numbers[i].innerHTML != ".") {
      arrayOfNumbers.push(numbers[i].innerHTML);
      operandFlag = false;
    //   console.log(arrayOfNumbers);
    //   console.log(operandFlag);
      input.innerHTML += e.target.innerHTML;
    }

    if (e.target.innerHTML == "C") {
    //   console.log(e.target.innerHTML);
      decimalFlag = false;
      operandFlag = false;
      input.innerHTML = "";
      arrayOfNumbers = [];
      arrayOfOperations = [];
      numbersToCalculate = [];
    //   console.log("Array of Operations", arrayOfOperations);
    //   console.log("Array of Operations", arrayOfOperations);
    }

    if (!decimalFlag && e.target.innerHTML == ".") {
      input.innerHTML += e.target.innerHTML;
      decimalFlag = true;
    //   console.log("Decimal?", decimalFlag);
      arrayOfNumbers.push(e.target.innerHTML);
    }
  });
}

for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", (e) => {
    // operandFlag = true;
    if (operandFlag == false && input.innerHTML != "") {
      if(e.target.innerHTML == "+"){
        decimalFlag = false;
        combineArrayNumbers();
        arrayOfOperations.push(operations[i].innerHTML);
        operandFlag = true;
        console.log("Array of Operations", arrayOfOperations); //same thing as console.log("Array of Operations", arrayOfOperations)
        console.log("Operations?", operandFlag);
        addOp();
      }     
    }
  });
}

equal.addEventListener("click", (e) =>{
  combineArrayNumbers();
})

function addOp(){
  console.log("Num1: ", numbersToCalculate[0], "Num2: ", numbersToCalculate[1]);
  var sum = numbersToCalculate[0] + numbersToCalculate[1];
  console.log(sum);
  input.innerHTML = sum;
}

function combineArrayNumbers() {
  // get the numbers array;
  // slice array and then combine
  numbersToCalculate.push(Number(arrayOfNumbers.join("")));
  input.innerHTML = "";
  arrayOfNumbers = [];
  console.log("Concat string: ", numbersToCalculate);
}





// // Created a variable numbers that is holding on to the nodes that are a part of the numbers class and have a div EventTarget.

// var numbers = document.querySelectorAll('.numbers div')
// var operations = document.querySelectorAll('.operators div')

// var input = document.getElementById('input')
// var decimalFlag = false
// let operandFlag = false

// let arrNums = []
// let arrOps = []

// //We are going through the node list and attaching a addEventListener to each node in the list.
// for (var i = 0; i < numbers.length; i++) {
//     arrNums.push(numbers[i].innerHTML)
//     numbers[i].addEventListener("click", function (event) {
//         // console.log(event.target.innerHTML)
//         //Checking if the clear is 
//         if (event.target.innerHTML == "C"){
//             decimalFlag = false
//             input.innerHTML = ""
//         }
//         else {
//             if (event.target.innerHTML != ".") {
//                 input.innerHTML += event.target.innerHTML
//             }
//             else if (!decimalFlag) {
//                 decimalFlag = true
//                 input.innerHTML += event.target.innerHTML
//             }     
//         }
//     })
// }

// for (var x = 0; x < operations.length; x++) {
//     operations[x].addEventListener("click", function (event) {
//         if (operandFlag == false && input.innerHTML != "") {
//             arrOps.push(operations[i].innerHTML)
//             operandFlag = true
//         }
//         else {
//            alert("operations cannot be used first") 
//         }
//             console.log(event.target.innerHTML)
//         }

        
//     }
// }    
//     })
// }   

// function runOperations() {

// }

// function loopAndConvertNums() {

// }

// function updateCalculator() {
    
// }
// console.log(numbers)
// console.logs(operations)