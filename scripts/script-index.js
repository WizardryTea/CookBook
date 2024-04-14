/*-------------------------------------------------*/
/*              СПИСОК В ДЕРЕВО РЕЦЕПТОВ           */
/*-------------------------------------------------*/
//Функция для создания дерева из списка элементов <h3>
function createTreeFromH3() {
  //Получаем все элементы <h3>
  const h3Elements = document.querySelectorAll('h3');
  //Создаем корневой элемент <ul> для дерева
  const tree = document.createElement('ul');
  //Функция для рекурсивного добавления элементов <h3> в дерево
  
  function addToTree(h3Elements, parent) {
     let currentLevel = parent;
     h3Elements.forEach((h3, index) => {
        //Создаем элемент <li> для каждого <h3>
        const li = document.createElement('li');
         //Создаем элемент <a> для каждого <h3>
        const link = document.createElement('a');
        //Устанавливаем href, ссылаясь на id элемента <h3>
        link.href = `#${h3.id}`;
        //Устанавливаем текст ссылки
        link.textContent = h3.textContent;
        //Устанавливаем текст элемента <li> - Не интересует в данный момент, оставляем только ссылки
        //li.textContent = h3.textContent; 
        //Добавляем ссылку в <li>
        li.appendChild(link);
        //Если это не последний элемент, создаем дочерний <ul>
        if (index < h3Elements.length - 1) {
          const ul = document.createElement('ul');
          li.appendChild(ul);
          currentLevel = ul;
        }
        //Добавляем <li> в текущий уровень дерева
        parent.appendChild(li);
     });
  }
  //Добавляем все элементы <h3> в дерево
  addToTree(h3Elements, tree);
  //Находим элемент с классом .content H3 и вставляем в него дерево
  const contentElement = document.querySelector('.content H3');
  contentElement.innerHTML = ''; //Очищаем содержимое
  contentElement.appendChild(tree); //Вставляем дерево в .content H3
}
//Вызываем функцию для создания дерева из элементов <h3>
createTreeFromH3();