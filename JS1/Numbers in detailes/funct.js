// function declaration
// function greet(name){
//     console.log('hello -', name) // => эту функцию можно вызвать до самого ее написания
// }

// function expression
// const greet2 = function(name){
//     console.log('2hello -', name) // => эту нельзя
// }

// greet2('goga')
// greet('hells')
//console.log(typeof greet2)

// setTimeout(function(){
//     //console.log('333')
//     greet('333')
// }, 1500)

// let count = 0
// const interval = setInterval(function(){
//     // if (count === 10){
//     //     clearInterval(interval)
//     // }else{
//     //     console.log(count++)
//     // }
//     console.log(count++)
// }, 100)

// Arrow Function


function greet(name){
    console.log('hello -', name)
}

const arrow = (name) => {
    console.log('hello -', name)
}



const arrow2 = (name) => console.log('hello -', name)

function pow(num, exp){
    return Math.pow(num, exp)
}

const pow2 = (num, exp) => Math.pow(num, exp)

////console.log(pow(3, 6))

// ========= Default parameters

const sum = (a, b = 9) => a + b

////console.log(sum(20))

function sumAll(...numbers){
    let res = 0
    for (let num of numbers){
         res += num
     }
     return res
    // return numbers.reduce((acc, cur) => (acc += cur), 0)
}
console.log(sumAll(1,2,3,4,5,6,7))

// Clousers

function createPerson(name){
    return function(lastName){
        console.log(name + ' ' + lastName)
    }
}

const addLast = createPerson('vlad2009')
addLast('Minin')
addLast('Petronenko')
