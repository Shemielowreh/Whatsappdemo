const box = document.querySelectorAll('.line1');
const expname = document.querySelector('#expanded-name');
const expmsg = document.querySelector('#expanded-message');

box.forEach(box => {
    box.onclick = () => {
        let senderName = box.querySelector('h2').textContent;
        let senderMessage = box.querySelector('p').textContent;
        expname.textContent = `${senderName}`;
        expmsg.textContent = `${senderMessage}`;
    }
});