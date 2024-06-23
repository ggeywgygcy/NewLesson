/*// // Theory of arrays


// const array = [1, 2, 3, 87, 0]
// // const arrayStr = ['a', 'g', 'y', null, 12]
// //const array = new Array(1, 2, 3)

// //console.log(array.length) -> вычисление длины массива
// console.log(array[0])
// console.log(array[array.length - 1]) 
// //console.log(array[20])
// array[5] = 'a'
// console.log(array)*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

/*// const notes = ['Первый заезд', 'Второй заезд']

// // функция, которая выводит значения из массива notes
// function render(){
//     // for (let i = 0; i < notes.length; i++) {
//     //     listElement.insertAdjacentHTML('beforeend',
//     //         getNoteTemplate(notes[i])
//     //         )
//     // }

//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend',
//             getNoteTemplate(notes[note])
//             )
//     }

//      listElement.insertAdjacentHTML('beforeend',
//     //     getNoteTemplate(notes[0])
//     // )
//     // listElement.insertAdjacentHTML('beforeend',
//     //     getNoteTemplate(notes[1])
//     // )*/

// }
// render()

// // функция, которая присваивает событие кнопке, выводящей значение из inputElement
// createBtn.onclick = function(){
//     if(inputElement.value.length === 0){
//         return
//     }
//     //listElement.innerHTML = ` 
        

//     listElement.insertAdjacentHTML('beforeend',
//         getNoteTemplate(inputElement.value)
//     )
//     inputElement.value = ''   
// }

// // функция, которая выводит значение из inputElement, используя сам элемент из HTML
// function getNoteTemplate(title){
//     return`
//         <li
//             class="list-group-item d-flex justify-content-between align-items-center"
//             >
//             <span>${title}</span>
//             <span>
//                 <span class="btn btn-small btn-success">&check;</span>
//                 <span class="btn btn-small btn-danger">&times;</span>
//             </span>
//             </li> 
//         ` 
// }*/

const notes = [{
        title: 'Первый заезд',
        completed: false
    }, 
    {
        title: 'Второй заезд',
        completed: false
    }, 
]

// функция, которая выводит значения из массива notes
function render(){
    listElement.innerHTML = ''
    // if (notes.length === 0){
    //     listElement.innerHtml = `<p> Elements is hasnt </p>`
    // }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend',
        getNoteTemplate(notes[i], i)
        )
    }

    // for (let note of notes) {
    //     listElement.insertAdjacentHTML('beforeend',
    //         getNoteTemplate(note)
    //         )
    // }

    /*// listElement.insertAdjacentHTML('beforeend',
    //     getNoteTemplate(notes[0])
    // )
    // listElement.insertAdjacentHTML('beforeend',
    //     getNoteTemplate(notes[1])
    // )*/

}
render()

// функция, которая присваивает событие кнопке, выводящей значение из inputElement
createBtn.onclick = function(){
    if(inputElement.value.length === 0){
        return
    } 
     
    const newNote = {
        title: inputElement.value, // -> title совпадает с inputElement.value
        completed: false
    }
    
    notes.push(newNote)
    render() 

    inputElement.value = ''   
}

listElement.onclick = function(event){
    if (event.target.dataset.index) {
        const  index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if(type === 'red' ) {
            notes[index].completed =  !notes[index].completed
        } else if (type === 'blue'){
            notes.splice(index, 1)
        }
        render()
    }
}


// функция, которая выводит значение из inputElement, используя сам элемент из HTML
function getNoteTemplate(note, index){
    return`
        <li
            class="list-group-item d-flex justify-content-between align-items-center"
            >
            <span class="${note.completed ? 'text-decoration-line-through' : ''}" >${note.title}</span>
            <span>



                <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="red" >&check;</span>
                <span class="btn btn-small btn-danger" data-type="blue" data-index="${index}" >&times;</span>
            </span>
            </li> 
        ` 
}


/*// theory of objects


const values = {
    one: '1',
    two: '2',
    three: '3',
    bool: false,
    arr: ['a', 'b', 'c'],
    num: 23,
    function: function(){
        console.log(values.one)
    }
}
console.log(values.two)
console.log(values['three'])
const key = 'bool'
console.log(values[key])
values.bool = true
console.log(values[key])
*/