
const toDoBlock = document.getElementById('to-do-block')
let idCount = 1
const toDoDragStart = (event) => {
    // console.log(event.target.id)
     let toDoCardIdBeingDraged = event.target.id 
     event.dataTransfer.setData('ToDoCard',toDoCardIdBeingDraged)
   //  console.log(event.dataTransfer.getData('ToDoCard'))
 }

 const allowDrop = (event) => {
    event.preventDefault()
    // console.log(event.preventDefault())
}
const toDoDrop = (event) => {
    let toDoCardIdBeingDraged = event.dataTransfer.getData('ToDoCard')
    let toDoCardBeingDroped = document.getElementById(toDoCardIdBeingDraged)
    let parentElement = event.target
    parentElement.appendChild(toDoCardBeingDroped)
}

let toDo = (todoInput,todoPriorityInput,endDate) => {

    const cardDiv = document.createElement('div')
    const cardHeaderDiv = document.createElement('div')
    const cardHeaderSpan1= document.createElement('span')
    const cardHeaderSpan2= document.createElement('span')
    const cardBodyDiv = document.createElement('div')
    const cardBodyP= document.createElement('p')
    const cardBodyA= document.createElement('a')

    cardDiv.id = `to-do-card-${idCount}`

    cardHeaderSpan1.innerText = todoPriorityInput + ' Priority'
    cardHeaderSpan2.innerText = endDate
    cardBodyA.innerText = "Delete"
    cardBodyP.innerText = todoInput

    cardDiv.classList = "card m-3"
    cardHeaderDiv.classList = "card-header"

    if(todoPriorityInput == 'Low'){
        cardHeaderSpan1.classList = "badge bg-info text-dark span1"
    }else if(todoPriorityInput == 'Medium')
    {
        cardHeaderSpan1.classList = "badge bg-warning text-dark span1"
    }else {
        cardHeaderSpan1.classList = "badge bg-danger  span1"
    }


    cardDiv.draggable = 'true'
    cardDiv.addEventListener('dragstart',toDoDragStart)
    cardBodyA.addEventListener('click',() => {
        cardDiv.style.display = 'none'
    })
    cardHeaderSpan2.classList = "span2"
    cardBodyDiv.classList = "card-body"
    cardBodyP.classList = "card-text"
    cardBodyA.classList = "btn btn-danger"

    cardDiv.appendChild(cardHeaderDiv)
    cardHeaderDiv.appendChild(cardHeaderSpan1)
    cardHeaderDiv.appendChild(cardHeaderSpan2)
    cardDiv.appendChild(cardBodyDiv)
    cardBodyDiv.appendChild(cardBodyP)
    cardBodyDiv.appendChild(cardBodyA)

    toDoBlock.appendChild(cardDiv)

    idCount++
}

const createToDo = () => {
    
    const todoInput = document.getElementById('todo-input').value
    const todoPriorityInput = document.getElementById('todo-priority-input').value
    const endDate  = document.getElementById('end-date').value
    toDo(todoInput,todoPriorityInput,endDate)
}


// const toDoDrag = (event) => {
//     // console.log(event)
// }

/*    
        <div class="card m-3">
            <div class="card-header badge bg-info text-dark"><span>low priority</span><span></span></div>
            <div class="card-body">
                <p class="card-text">With supporting text below as a natural lead-in to additional content.
                </p>
                <a href="#" class="btn btn-danger">Delete</a>
            </div>
        </div>    
*/
/* <div  class="todo-section" id="to-do-block"  ondragover="allowDrop(event)"
                ondrop="toDoDrop(event)">
                    <h1 class="display-4">To-Do</h1> 
                    <div class="card m-3" id="test-id" 
                    draggable="true" ondragstart="toDoDragStart(event)"
                    >
                        <div class="card-header" ><span class=" badge bg-info text-dark ">low priority</span ><span class="span2">27 may 2022 5:17 PM</span></div>
                        <div class="card-body">
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                            <a href="#" class="btn btn-danger">Delete</a>
                        </div>
                    </div>
                </div>
            </div> */