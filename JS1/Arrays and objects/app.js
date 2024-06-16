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

const notes = ['Первый заезд', 'Второй заезд']

function render(){
    listElement.insertAdjacentHTML('beforeend',
        getNoteTemplate(notes[0])
    )
    listElement.insertAdjacentHTML('beforeend',
        getNoteTemplate(notes[1])
    )
}
render()

createBtn.onclick = function(){
    if(inputElement.value.length === 0){
        return
    }
    //listElement.innerHTML = ` 
        

    listElement.insertAdjacentHTML('beforeend',
        getNoteTemplate(inputElement.value)
    )
    inputElement.value = ''   
}

function getNoteTemplate(title){
    return`
        <li
            class="list-group-item d-flex justify-content-between align-items-center"
            >
            <span>${title}</span>
            <span>
                <span class="btn btn-small btn-success">&check;</span>
                <span class="btn btn-small btn-danger">&times;</span>
            </span>
            </li> 
        ` 
}
