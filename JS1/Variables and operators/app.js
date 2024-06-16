const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const submitBtn1 = document.getElementById('plus')
const submitBtn2 = document.getElementById('minus')
const submitBtn3 = document.getElementById('umn')
const submitBtn4 = document.getElementById('del')
let action = '+'
let dokk = '*'

// Функции для кнопок, нужна для того, чтобы  кнопка реагировала на нажатие
submitBtn1.onclick = function () {
    action = '+'
}

submitBtn2.onclick = function () {
    action = '-'
}

// submitBtn3.onclick = function () {
//     action = '*'
// }

// submitBtn4.onclick = function () {
//     action = '/'
// }

//Функция для вычислений, в ней находятся условия для вычислений 
// function computeWithAction(input1, input2, actionS){
//     num1 = Number(input1)  
//     num2 = Number(input2)
//     if (actionS == '+'){
//        return (num1 + num2)
//     }if(actionS == '-'){
//        return (num1-num2)
//     }
//     // if(actionS == '*'){
//     //     return (num1 * num2)
//     // }if(actionS == "/"){
//     //     return (num1 / num2)
//     // }

// }

//Функция дляотображения результата
submitBtn.onclick = function () {
    //Здесь мы вызываем функцию с вычислениями
    // const result = computeWithAction(input1, input2, action, dokk)
    // printResult(result)
     if (action=='+') {
     const sum = Number(input1.value) + Number(input2.value)
        printResult(sum)
        
        }else{
     const sum = Number(input1.value) - Number(input2.value)
    printResult(sum)
    }
    if (dokk=="*"){
        const sum = Number(input1.value) * Number(input2.value)
        printResult(sum)
    }
    if(dokk=="/"){
        const sum = Number(input1.value) / Number(input2.value)
        printResult(sum)
    }
    
}

//Функция для раскрашивания значения в зависимости от значения
function printResult(result) {
    resultElement.textContent = result
}




 