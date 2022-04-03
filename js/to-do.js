const form = document.querySelector('form');
const addForm = document.querySelector('.add');
const list = document.querySelector('ul');
const remove = document.querySelectorAll('.delete');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const todo = form.querySelector('input').value.trim();
    const html = `<li>${todo}<i class="fas fa-trash delete"></i></li>`;
    addForm.reset();


    if (todo.length>=3){
        list.innerHTML += html;

    }
});


remove.forEach(button => {
    button.onclick = (e) => {
        e.target.parentElement.remove();
    }
});




// ${} recall a variable: line 7,8 for reference
// `` Template String
// e.preventDefault to prevent page from refreshing.