function makeChatsList(chats) {
    const ul = document.createElement('ul');

    ul.innerHTML = chats
        .map(item => {
            return `<li>${item.title} ${item.lastMessage}</li>`;
        })
        .join('');

    return ul;
}

//Mine
function makeChatsList(chats) {

    const chatlist = document.createElement("ul");
    chats.forEach(chat => {
        const list = document.createElement("li");
        for (let prop in chat) {
            const sp = document.createElement("p");
            sp.innerText = chat[prop];
            list.appendChild(sp);
        }
        chatlist.appendChild(list);
    });
    console.log(chatlist);
    return chatlist;


}

/**
 * Метод устанавливает необходимые по условию атрибуты таблице
 * @param {Element} table
 Напишите функцию highlight, которая для каждой строки tr таблицы пользователей чатов:

    Проставит класс regular или admin, в зависимости от значения атрибута data-role у ячейки Role. Если такого атрибута нет, функция должна добавить атрибут hidden;
    Проставит класс male или female в зависимости от содержимого ячейки Gender;
    Установит inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18.

Условие должны выполнятся, даже если у элемента стоит атрибут hidden.
 */

function highlight(table) {
    const actions = {
        3: (root, td) => {
            if (td.dataset.role === 'regular') {
                root.classList.toggle('regular', true);
            } else if (td.dataset.role === 'admin') {
                root.classList.toggle('admin', true);
            } else if (!td.hasAttribute('data-role')) {
                root.hidden = true;
            }
        },
        2: (root, td) => {
            if (td.textContent === 'm') {
                root.classList.toggle('male', true);
            } else if (td.textContent === 'f') {
                root.classList.toggle('female', true);
            }
        },
        1: (root, td) => {
            const age = parseInt(td.textContent, 10);
 
            if (age < 18) {
                root.style.textDecoration = 'line-through';
            }
 
        }
    };
 
    for (let tr of table.rows) {
        Array.from(tr.cells).forEach((td, index) => {
            const fn = actions[index];
 
            if (typeof fn === 'function') {
                fn(tr, td);
            }
        });
    }
 
}

//Mine
function highlight(table) {
  const rows = document.querySelectorAll("tr");
  
  for(let row of rows) {
    const cells = row.children;
   
    for(let cell of cells) {
     
     if (cell.dataset.role === "admin") {cell.parentNode.classList.add("admin");
     } else if (cell.dataset.role === "regular") {cell.parentNode.classList.add("regular");
    }else if (cell.textContent === "Admin" && !cell.dataset.role){
       cell.parentNode.setAttribute("hidden","true");
     }
      if(cell.textContent === "m") {cell.parentNode.classList.add("male");}
      if(cell.textContent === "f") {cell.parentNode.classList.add("female");}
      if(cell.textContent < 18) {cell.parentNode.setAttribute("style","text-decoration: line-through");}
    }
    } 
}