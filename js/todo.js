names = ['Welcome' + ',' + ' ' + 'Mr.' + ' ' + 'Michael'];
alert(names); 


const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// Add Todos

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length>2) {
        addTodo(todo);
        addForm.reset();
    }
});

const addTodo = (todo) => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fa fa-trash delete"></i>
        </li>`;

    list.innerHTML += html;
};


//delete todos

list.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// Filtering Methods
const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        // .filter((todo) => !todo.textContent.toLowerCase().includes(term)) means filtering each item in the array of list which is  each "li"
        .forEach((todo) => todo.classList.add('filtered'))    

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'))    
};


//Key Up Event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});

