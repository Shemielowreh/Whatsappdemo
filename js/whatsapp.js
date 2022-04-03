const form = document.querySelector('form');
const add = document.querySelector('.btn1');
const remove = document.querySelector('.btn2');
const msg = document.querySelector('.message')

add.onclick = (e)=> {
    e.preventDefault();
    const html = `<div class="message">
    <input type="text" placeholder="Subject">
    <textarea cols="30" rows="10" placeholder="Message"></textarea>
    </div>`;
    msg.innerHTML += html;    

}

remove.onclick = (e)=> {
    e.preventDefault();
    const info = document.getElementById('info');
    info.removeChild(info.lastElementChild);
}

// let firstName = 'Brandon';
// let lastName = 'Sanderson';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// console.log(fullName[12]);

// console.log(fullName.length);

// console.log(firstName.toUpperCase());

// let radius = 10;
// let result = radius % 2;

// console.log(result);

// let likes = 10;

// likes = 10 + '1';

// console.log(likes);

// // console.log(5*15);

// let i = 0;

// while(i < 5) {
//     console.log('in loop; ', i);
//     i++;

// }


// let age = 30;

// if(true) {
//     console.log('inside code block', age);
// }

// console.log('outside code block', age * 2);

// function greet(name) {
//     console.log(`good day ${name}`);
// }

// greet('Mario');


// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.telegram.com');
// link.innerText = ('Telegram link');

// const mesg = document.querySelector('p');
// mesg.setAttribute('style', 'color: red');
// mesg.style.color = 'blue';


// const article = document.querySelector('article');

// console.log(article.children);
// console.log(Array.from(article.children));

// Array.from(article.children).forEach((child) => {
//     child.classList.add('article-element')
// });

// const title = document.querySelector('h1');
// const items = document.querySelectorAll('li');
// const ul = document.querySelector('ul');
// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'something new to do'
//     ul.append(li);
// });

// ul.addEventListener('click', e => {
//     // console.log('Event in UL');
//     if(e.target.tagName === 'LI'){
//         e.target.remove();
//     }    
// });

const now = new Date();     
console.log(now);