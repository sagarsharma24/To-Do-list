const form=document.body.querySelector('#form')
const input=document.body.querySelector('#input')
const todoUl=document.body.querySelector('#todos')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addTodo();
})
function addTodo(todo){
    let todotext=input.value;
    if(todo){
        todotext=todo.text
    }
    
    if(todotext){
        const todoEl=document.createElement('li');
        if(todo && todo.completed){
            todoEl.classList.add('completed')

        }
        todoEl.innerText=todotext

        todoEl.addEventListener('click',()=>todoEl.classList.toggle('completed'))

        todoEl.addEventListener('dblclick',(e)=>{
            e.preventDefault();
            todoEl.remove();
        })
        todoUl.appendChild(todoEl)
        input.value=''
    }
}