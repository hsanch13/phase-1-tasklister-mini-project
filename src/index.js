document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleTask(event.target['new-task-description'].value)
    form.reset()
  })
});

function handleTask(newTaskDescription){
let p = document.createElement('p')
let btn = document.createElement('button')
btn.addEventListener('click', handleDelete)
btn.textContent = 'x'
p.textContent = `${newTaskDescription} `
p.appendChild(btn)
document.querySelector("#tasks").appendChild(p)
}

function handleDelete(event){
  event.target.parentNode.remove()
}