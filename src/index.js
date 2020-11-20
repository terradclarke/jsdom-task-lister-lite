document.addEventListener("DOMContentLoaded", () => {
  handleForm()
});

const handleForm = () => {

const taskForm = document.querySelector('#create-task-form')

taskForm.addEventListener('submit',(event) => {
  event.preventDefault()

  const taskInput = event.target.querySelector('#new-task-description')

    const taskLi = document.createElement('li')

    taskLi.innerText = taskInput.value 

    const tasksParrent = document.querySelector('#list')
    tasksParrent.appendChild(taskLi)

    event.target.reset()
})

}


// const main = document.querySelector('#main-content')
// console.log(main)

// const taskForm = document.querySelector('#create-task-form')
// const tasklist = document.querySelector('#tasks')

// taskForm.addEventListener("submit", function(e) {
//   e.preventDefault()

//   const newTask = document.querySelector('#new-task-description').value 

//   tasklist.innerHTML += 
//     <li> ${newTask}
//       <button> X for delete </button> 
//     </li>

//     taskForm.reset()
// })

// tasklist.addEventListener("click", function(e) {
//   console.log(e.target)
//   if (e.target.database.action === "delete" {
//     e.target.parentElement.remove 
//   }
// }