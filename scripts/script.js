/*-------------------------------------------------*/
/*             Соотношение продуктов               */
/*-------------------------------------------------*/
/*
Все меры: штук, грамм, мл, стакан, чайная ложка, столовая ложка
1 яйцо = 60 грамм
1 мл = 1 грамм
1 ч.л. = 5 грамм
1 ст.л. = 15 грамм
1 стакан = 200 грамм (граненый стакан)
*/

/*-------------------------------------------------*/
/* Все рецепты в формате название, ингредиенты, тип*/
/*-------------------------------------------------*/

/*
- Название
- Имя картинки
- Ингредиенты (из чего, сколько (грамм), мера измерения) 
- Тип (
  Первое блюдо,
  Второе блюдо,
  Закуски,
  Приправы (аджика),
  Напитки, 
  Соусы)
*/

const recipes = [
  {
    name: 'ванильный коктель',
    imgName: 'img-food/vanila-coctail.png',
    ingredients: [
      { name: 'ваниль', quantity: 1, unit: 'ложка' },
      { name: 'молоко', quantity: 1, unit: 'шт' },
      { name: 'мука', quantity: 1, unit: 'шт' }
    ],
    type: 'завтрак'
  },
  {
    name: 'лимонный торт',
    imgName: 'img-food/cake.png',
    ingredients: [
      { name: 'лимон', quantity: 1, unit: 'шт' },
      { name: 'мука', quantity: 3, unit: 'ложки' },
      { name: 'сахар', quantity: 3, unit: 'ложки' }
    ],
    type: 'десерт'
  },
  {
    name: 'кислый лимонный торт',
    imgName: 'img-food/lemon-cake.png',
    ingredients: [
      { name: 'лимон', quantity: 2, unit: 'шт' },
      { name: 'мука', quantity: 3, unit: 'ложки' },
      { name: 'без сахара', quantity: 0, unit: 'грамм' }
    ],
    type: 'десерт'
  },
  {
    name: 'шоколадное печенье',
    imgName: 'img-food/cookie.png',
    ingredients: [
      { name: 'шоколад', quantity: 1, unit: 'шт' },
      { name: 'молоко', quantity: 1, unit: 'шт' },
      { name: 'мука', quantity: 1, unit: 'шт' },
      { name: 'соль', quantity: 1, unit: 'ложка' },
      { name: 'сахар', quantity: 1, unit: 'ложка' }
    ],
    type: 'десерт'
  }
]; 
/*-------------------------------------------------*/
/*ОСНОВНАЯ ФУНКЦИЯ ДЛЯ ОТОБРАЖЕНИЯ РЕЦЕПТОВ(начало)*/
/*-------------------------------------------------*/
//Принимаем массив recipes и отображает его в элементе с идентификатором recipe-list
function displayRecipes(recipes) {
  //Очищаем содержимое recipe-list перед добавлением новых элементов
  const recipeList = document.getElementById('recipe-list');
  recipeList.innerHTML = '';
  
  //ОПИСАНИЕ (<h3>${recipe.name}</h3> - имя с маленькой буквы; .toUpperCase() - Все буквы становятся большими)
  recipes.forEach(recipe => {
    //Создаем новый элемент div для каждого рецепта,
    //Добавляем в него информацию о рецепте и добавляем его в recipe-list
    const recipeEl = document.createElement('div');
    //Создание элемента изображения
    const img = document.createElement('img');    
    //!Устанавливаем src перед добавлением в DOM
    img.src = recipe.imgName;
    //Добавление атрибута alt для доступности
    img.alt = recipe.name;


    //Добавление элемента изображения в recipeEl
    recipeEl.appendChild(img);

    recipeEl.innerHTML = `
      <div class = "name-and-img">
        <h3>${recipe.name.toUpperCase()}</h3>
        <img src="${recipe.imgName}" alt="Изображение рецепта"/>
      </div>
      <p><strong>Тип:</strong> ${recipe.type}</p>
      <p><strong>Ингредиенты:</strong></p>
      <ul>
        ${recipe.ingredients.map(ingr => `<li>${ingr.name}  —  ${ingr.quantity} ${ingr.unit} </li>`).join('')}
      </ul>
      </div>
    `;
    recipeEl.classList.add('recipe');
    recipeList.appendChild(recipeEl);
  });
}
/*-------------------------------------------------*/
/*ОСНОВНАЯ ФУНКЦИЯ ДЛЯ ОТОБРАЖЕНИЯ РЕЦЕПТОВ(конец) */
/*-------------------------------------------------*/

























































/*-------------------------------------------------*/
/*                  ПОИСК ПО ТИПУ                  */
/*-------------------------------------------------*/
//Выпадающий список создан в html части документа - recipe-type-filter

//Добавим уникальные типы рецептов в выпадающий список
const recipeTypeFilter = document.getElementById('recipe-type-filter');
const types = [...new Set(recipes.map(recipe => recipe.type))];

types.forEach(type => {
  const option = document.createElement('option');
  option.value = type;
  option.textContent = type;
  recipeTypeFilter.appendChild(option);
});
/*-------------------------------------------------*/
/*            ПОИСК ПО ИНГРЕДИЕНТАМ                */
/*-------------------------------------------------*/
const recipeIngredientsFilter = document.getElementById('recipe-ingredients-filter');

//извлекаем имена всех ингредиентов из всех рецептов
const allIngredients = recipes.flatMap(recipe => recipe.ingredients.map(ingredient => ingredient.name));

//создаем уникальный список ингредиентов
const uniqueIngredients = [...new Set(allIngredients)];

//добавляем каждый уникальный ингредиент как опцию в выпадающий список

/*Пояснение: строка <select id="recipe-ingredients-filter" multiple> - в HTML
Отображать объекты JavaScript напрямую в HTML без преобразования нельзя
так как браузер автоматически преобразует объекты в строки и получается [object Object]

Для исправления вместо того чтобы пытаться использовать массив объектов recipe.ingredients напрямую,
1. Извлекаем имена ингредиентов из каждого объекта с помощью метода map()
2. Создаем уникальный список этих имен.
3. Используем этот список используется для создания опций в выпадающем списке,
что позволяет избежать ошибки с отображением [object Object][object Object] в HTML.
*/
uniqueIngredients.forEach(ingredient => {
  const option = document.createElement('option');
  option.value = ingredient;
  option.textContent = ingredient;
  recipeIngredientsFilter.appendChild(option);
});
/*-------------------------------------------------*/
/*     ОБЩИЙ Обработчик для поиска и фильтров      */
/*-------------------------------------------------*/
//Функция для фильтрации рецептов
function filterRecipes() {
  const searchTerm = document.getElementById('search-box').value.toLowerCase();
  const selectedType = document.getElementById('recipe-type-filter').value;
  const selectedIngredients = Array.from(document.getElementById('recipe-ingredients-filter').selectedOptions).map(option => option.value);
 
  let filteredRecipes = recipes.filter(recipe => {
    //Фильтрация по названию и ингредиентам
    const nameMatches = recipe.name.toLowerCase().includes(searchTerm);
    const ingredientsMatch = selectedIngredients.every(ingredient => recipe.ingredients.some(recipeIngredient => recipeIngredient.name === ingredient));
    //Фильтрация по типу рецепта
    const typeMatches = !selectedType || recipe.type === selectedType;
    return nameMatches && ingredientsMatch && typeMatches;
  });
 displayRecipes(filteredRecipes);
}
 
 //Обработчик событий для всех полей фильтрации
 function addFilterEventListeners() {
  const filterElements = document.querySelectorAll('#search-box, #recipe-type-filter, #recipe-ingredients-filter');
  filterElements.forEach(element => {
     element.addEventListener('input', filterRecipes);
     element.addEventListener('change', filterRecipes);
  });
 }
/*-------------------------------------------------*/
/*      Инициализация при загрузке страницы        */
/*-------------------------------------------------*/ 
 //функция чтобы при первом открытии страницы отображались все рецепты из доступных
 //т.е инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', (event) => {
  addFilterEventListeners();
  //вызываем функцию displayRecipes с массивом всех рецептов сразу после загрузки страницы
  displayRecipes(recipes); //определена displayRecipes ранее
});
 











































/*-------------------------------------------------*/
/*          Первая буква слова заглавная           */
/*-------------------------------------------------*/
/*В списке рецептов все названия с маленькой буквы. 
Чтобы сделать первую букву слова заглавной в JavaScript для красивого вывода создадим специальную функцию.
Принцип работы:
1.Метод slice режет строку по словам
2.Метод charAt() для получения первой буквы слова
3.Метод toUpperCase() для преобразования этой буквы в верхний регистр
4.Добавляем остаток слова.*/
//Пример работы:
//const recipeName = recipe.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
/*-------------------------------------------------*/
/*              СПИСОК В ДЕРЕВО РЕЦЕПТОВ           */
/*-------------------------------------------------*/
//Функция для преобразования списка в дерево
function createTreeFromList(recipes) {
  //Группировка рецептов по типу
  const groupedByType = recipes.reduce((acc, recipe) => {
    //Первая буква типа в каждом слове будет заглавной
    //const tmpRecipetype = recipe.type.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    //Первая буква типа в первом слове будет заглавной
    const tmpRecipetype = recipe.type && recipe.type.charAt(0).toUpperCase() + recipe.type.substring(1);
    if (!acc[tmpRecipetype]) {
      acc[tmpRecipetype] = [];
    }
    acc[tmpRecipetype].push(recipe);
    return acc;
  }, {});
 
  //Создание дерева
  const tree = document.createElement('ul');
  for (const type in groupedByType) {
      const typeList = document.createElement('li');
      typeList.textContent = type;
      const recipesList = document.createElement('ul');
      groupedByType[type].forEach(recipe => {
        //Первая буква название в каждом слове будет заглавной
        //const recipeName = recipe.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        //Первая буква название в первом слове будет заглавной
        const recipeName = recipe.name && recipe.name.charAt(0).toUpperCase() + recipe.name.substring(1);
        const recipeItem = document.createElement('li');
        recipeItem.textContent = recipeName;
        recipesList.appendChild(recipeItem);
      });
      typeList.appendChild(recipesList);
      tree.appendChild(typeList);
  }
  return tree;
 }
 
// Отображение дерева в HTML
//const tree = createTreeFromList(recipes);
//document.body.appendChild(tree);

// Отображение дерева в блоке table-recipes
const tree = createTreeFromList(recipes);
const tableRecipes = document.getElementById('table-recipes');
tableRecipes.appendChild(tree);

/*-------------------------------------------------*/
/*              ИЗМЕНЕНИЕ %                        */
/*-------------------------------------------------*/
/*function changeQuantity(recipes, percentageChange) {
  return recipes.map(recipe => {
     return {
       ...recipe,
       ingredients: recipe.ingredients.map(ingredient => ({
         ...ingredient,
         quantity: ingredient.quantity * (1 + percentageChange / 100)
       }))
     };
  });
 }
 
 const changeQuantityBtn = document.getElementById('change-quantity-btn');

 changeQuantityBtn.addEventListener('click', () => {
  // Пример изменения на 10% больше
  const updatedRecipes = changeQuantity(recipes, 5.0);
  displayRecipes(updatedRecipes);
 });
 */