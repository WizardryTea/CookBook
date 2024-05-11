/*-------------------------------------------------*/
/*             Соотношение продуктов               */
/*-------------------------------------------------*/


/*Все меры: штук, грамм, мл, стакан, чайная ложка, столовая ложка*/

/*-------------------------------------------------*/
/* Все рецепты в формате название, ингредиенты, тип*/
/*-------------------------------------------------*/

/*
- id
- Название
- Имя картинки
- Ингредиенты (из чего, сколько (грамм), мера измерения) 
- Тип (
  Первое блюдо,
  Второе блюдо,
  Десерты,
  Закуски,
  Приправы (аджика),
  Напитки, 
  Соусы)
*/
const recipes = [
    {
      id: '1',
      name: 'картофельное пюре',
      imgName: 'img-food/potatoes.png',
      ingredients: [
        { name: 'соль', quantity: 0 },
        { name: 'растительное масло', quantity: 6, unit: 'мл' },
        { name: 'яйца', quantity: 0.5, unit: 'шт' },
        { name: 'картофель', quantity: 1, unit: 'кг' },
        { name: 'соль', quantity: 0 },
        { name: 'лавровый лист', quantity: 0, unit: 'шт' }
      ],
      type: 'первые блюда',
      description: 'Чистим картофель. Очищенный картофель нарезаем небольшими брусочами. Кладем картофель в кастрюлю. Заливаем холодной водой, добавляем соль, лавровый лист и ставим кастрюлю на огонь. Варим до тех, пор пока картофель не станет мягким. После чего сливаем половину отвара, оставив вторую половину в кастрюле. Начинаем хорошенько разминать картофель до однородности. При необходимости добавляем горячий картофельный отвар. Добавляем растительное масло и яйцо. Подавать картофельное пюре на гарнир в горячем виде.'
    },
    {
      id: '2',
      name: 'Филадельфия роллы',
      imgName: 'img-food/sushi.png',
      ingredients: [
        { name: 'семга', quantity: 120, unit: 'г' },
        { name: 'авокадо', quantity: 50, unit: 'г' },
        { name: 'огурец', quantity: 1, unit: 'шт' },
        { name: 'сыр сливочный', quantity: 30, unit: 'г' },
        { name: 'рис', quantity: 320, unit: 'г' },
        { name: 'водоросли нори', quantity: 1, unit: 'шт' },
        { name: 'соевый соус', quantity: 20, unit: 'мл' },
        { name: 'васаби', quantity: 0, unit: 'г' }
      ],
      type: 'вторые блюда',
      description: 'Желательно использовать максимально мягкий авокадо, рис требуется отварить. Итак, для приготовления роллов Филадельфия вам понадобится: рис для суши (заранее сварить рис), водоросли нори, сливочный сыр (Филадельфия или другой), свежая семга, авокадо, свежий огурец. Огурец очистить от кожуры и нарезать длинной соломкой. Авокадо очистить от кожуры. Нарезать авокадо таким же образом, как огурец. Отрезать от рыбного стейка небольшой кусок. Острым ножом (нож для нарезания всех продуктов для роллов должен быть обязательно острым), под углом 15 градусов, срезать шкуру, чтобы получить идеальное рыбное филе. Проверить, нет ли костей. Семгу нарезать слайсами. Циновку застелить пищевой плёнкой. Сверху выложить половину листа нори. По поверхности нори мокрыми руками распределить рис (140-170 г). Следить, чтобы не было пустых мест. Перевернуть лист нори. Выложить сыр, авокадо и огурец. Подвернуть циновку и сформировать ролл, равномерно прижимая начинку, слегка подбить по бокам. Сверху поместить сёмгу. Предварительно смочив нож водой, нарезать роллы порционными кусочками. Сверху накрыть циновкой и еще раз слегка прижать. Выложить роллы Филадельфия на тарелку. Подавать роллы Филадельфия с васаби и соевым соусом.'
    },
    {
      id: '3',
      name: 'картофель вареный',
      imgName: 'img-food/potato.png',
      ingredients: [
        { name: 'картофель', quantity: 500, unit: 'г' },
        { name: 'масло сливочное', quantity: 25, unit: 'г' },
        { name: 'соль', quantity: 0, unit: 'ч.л.' },
      ],
      type: 'первые блюда',
      description: 'Картофель очистить, вымыть и разрезать на 6–8 частей. Воду вскипятить, посолить и опустить в неё картофель. Воды в кастрюле должно быть столько, чтобы картофель полностью был покрыт водой. После закипания варить 15–20 минут на умеренном огне до готовности. Воду слить и добавить к отварному картофелю масло. Если на дне осталась часть воды, можно поставить кастрюлю на огонь для испарения жидкости, а затем добавить масло. При подаче отварной картофель можно посыпать зеленью по желанию.'
    },
    {
      id: '4',
      name: 'картофель жареный',
      imgName: 'img-food/potatoes.png',
      ingredients: [
        { name: 'картофель', quantity: 400, unit: 'г' },
        { name: 'репчатый лук', quantity: 0.5, unit: 'шт' },
        { name: 'растительное масло', quantity: 25, unit: 'мл' },
        { name: 'сливочное масло', quantity: 15, unit: 'г' },
        { name: 'молотый черный перец', quantity: 2, unit: 'г' },
        { name: 'соль', quantity: 0, unit: 'г' }
      ],
      type: 'первые блюда',
      description: 'Картофель очистить, нарезать одинаковыми кусочками. Поместить картошку в глубокую посуду и залить холодной водой, чтобы избавиться от лишнего крахмала. Оставить на 30–40 минут, затем хорошо обсушить на бумажных полотенцах. В толстостенной плоской сковороде на сильном огне разогреть растительное и сливочное масло. Понизить огонь до средне-низкого и выложить картошку в один или максимум два слоя. Жарить, не мешая, 5–7 минут. Затем немного перемешать, добавить измельчённый лук и жарить в течение 15–20 минут, стараясь мешать картошку как можно реже и аккуратнее, чтобы не разрушить бруски. В конце добавить соль и перец по вкусу.Картофель очистить, вымыть и разрезать на 6–8 частей. Воду вскипятить, посолить и опустить в неё картофель. Воды в кастрюле должно быть столько, чтобы картофель полностью был покрыт водой. После закипания варить 15–20 минут на умеренном огне до готовности. Воду слить и добавить к отварному картофелю масло. Если на дне осталась часть воды, можно поставить кастрюлю на огонь для испарения жидкости, а затем добавить масло. При подаче отварной картофель можно посыпать зеленью по желанию.'
    },
    {
      id: '5',
      name: 'картофель фри',
      imgName: 'img-food/potato-free.png',
      ingredients: [
        { name: 'картофель', quantity: 500, unit: 'г' },
        { name: 'растительное масло', quantity: 25, unit: 'мл' },
        { name: 'сливочное масло', quantity: 25, unit: 'г' },
        { name: 'чеснок сушеный', quantity: 1, unit: 'ч.л.' },
        { name: 'соль', quantity: 0, unit: 'г' },
      ],
      type: 'первые блюда',
      description: 'Картофель очистите от кожуры, нарежьте удобным способом и переложите в глубокую ёмкость. Залейте нарезку водой и оставьте на 30 минут. Слейте жидкость, обдайте дольки кипятком и хорошо промокните полотенцем. На раскалённую сковороду вылейте растительное масло, добавьте сливочное масло и дайте смеси нагреться. Выложите картофель на масло и оставьте на 5 минут. Аккуратно перемешайте нарезку так, чтобы подрумяненные дольки оказались сверху. Перемешивайте каждые 4–5 минут. Жарьте картофель до готовности, обычно на это требуется 25 минут. Узнать готовность можно по долькам: они должны держать форму, но внутри стать мягкими. За 5 минут до выключения огня добавьте соль и сухой чеснок. Последний можно заменить свежим, но лучше вводить его на пару минут позже. По готовности выключите нагрев, накройте сковороду крышкой и дайте настояться 5 минут. Подавайте жареный картофель сразу после настаивания.'
    },
    {
      id: '6',
      name: 'котлета куриная',
      imgName: 'img-food/kotleta.png',
      ingredients: [
        { name: 'курица', quantity: 500, unit: 'г' },
        { name: 'батон', quantity: 50, unit: 'г' },
        { name: 'молоко', quantity: 70, unit: 'мл' },
        { name: 'сливочное масло', quantity: 6, unit: 'г' },
        { name: 'соль', quantity: 0, unit: 'г' }
      ],
      type: 'мясные блюда',
      description: 'Котлета курина по рецепту СССР. Готовится как обычная котлета. Используется куриная грудка, бедра без шкурки, батон брать белый, без корок.'
    },
    {
      id: '7',
      name: 'бабушкина квашеная капуста',
      imgName: 'img-food/cabbage.png',
      ingredients: [
        { name: 'капуста белокочанная', quantity: 1, unit: 'кг' },
        { name: 'морковь', quantity: 40, unit: 'г' },
        { name: 'соль', quantity: 15, unit: 'г' }
      ],
      type: 'закуски',
      description: 'Бабушкина квашеная капуста - только капуста и соль - необыкновенно сочная и хрустящая. Очень долго стоит, не становится мягкой, не перебраживает. Капусту шинкуем тонкой соломкой. Морковь натираем на терке. В большой емкости смешиваем капусту, морковь и соль. Хорошо обминаем капусту руками. Далее очень плотно утрамбовываем капусту в банку. В трехлитровую банку помещается как раз 4 кг капусты. Капуста квасится три дня в теплом месте, не больше. При квашении банка с капустой должна быть открыта, т. к. образуется много сока и он должен свободно вытекать из банки. По истечении трех дней квашеная капуста готова. Далее капусту необходимо убрать в холод. Банку закрыть крышкой.'
    },
    {
      id: '8',
      name: 'крымские зори',
      imgName: 'img-food/salad.png',
      ingredients: [
        { name: 'сыр', quantity: 35, unit: 'г' },
        { name: 'масло сливочное', quantity: 15, unit: 'г' },
        { name: 'зелень', quantity: 15, unit: 'г' }
      ],
      type: 'закуски',
      description: 'Сыр нарезать ломтиками весом по 10 граммов. На каждый из них отшприцовывается из кондитерского мешочка или бумажного корнетика подкрашенная в разные цвета сырно-масляная масса (соотношение масла и сыра 1:1). Закуска украшается зеленью. Для подкрашивания сырно-масляной смеси используется рубленая зелень (петрушка, укроп), соки из моркови и свеклы.'
    },
    {
      id: '9',
      name: 'ласточкино гнездо',
      imgName: 'img-food/salad.png',
      ingredients: [
        { name: 'сыр', quantity: 25, unit: 'г' },
        { name: 'яйцо', quantity: 10, unit: 'г' },
        { name: 'чеснок', quantity: 1.5, unit: 'г' },
        { name: 'майонез', quantity: 6, unit: 'г' },
        { name: 'тарталетка', quantity: 1, unit: 'шт' },
        { name: 'зелень', quantity: 0, unit: 'г' }
      ],
      type: 'закуски',
      description: 'Сыр натереть на терке, соединить с мелко нарубленным чесноком и яйцом, заправить майонезом, уложить в тарталетку, украсить яйцом и зеленью.'
    },
    {
      id: '10',
      name: 'блины скорые',
      imgName: 'img-food/pancake.png',
      ingredients: [
        { name: 'мука', quantity: 1.5, unit: 'ст.л' },
        { name: 'молоко', quantity: 2, unit: 'ст.л.' },
        { name: 'сода', quantity: 0.5, unit: 'ч.л.' },
        { name: 'яйцо', quantity: 2, unit: 'шт' }
      ],
      type: 'десерты',
      description: 'Готовить как блины на сковороде. Желательно использовать теплое молоко.'
    }
];

/*-------------------------------------------------*/
/*ОСНОВНАЯ ФУНКЦИЯ ДЛЯ ОТОБРАЖЕНИЯ РЕЦЕПТОВ(начало)*/
/*-------------------------------------------------*/
//Принимаем массив recipes и отображает его в элементе с идентификатором recipe-list
function displayRecipes(recipes) {
  //Очищаем содержимое recipe-list перед добавлением новых элементов
  recipeList = document.getElementById('recipe-list');
  //Очищаем список перед добавлением новых элементов
  recipeList.innerHTML = '';
  
  //ОПИСАНИЕ (<h3>${recipe.name}</h3> - имя с маленькой буквы; .toUpperCase() - Все буквы становятся большими)
  recipes.forEach(recipe => {
    //Создаем новый элемент div для каждого рецепта,
    //Добавляем в него информацию о рецепте и добавляем его в recipe-list
    const recipeEl = document.createElement('div');
    //Присваиваем уникальный идентификатор
    recipeEl.id = `recipe-${recipe.name}`;
    recipeEl.classList.add('recipe');

    //Создание элемента изображения
    const img = document.createElement('img');    
    //!Устанавливаем src перед добавлением в DOM
    img.src = recipe.imgName;
    //Добавление атрибута alt для доступности
    img.alt = recipe.name;
    //Добавление элемента изображения в recipeEl
    recipeEl.appendChild(img);

    

    //Обновление содержимого recipeEl
    recipeEl.innerHTML = `
      <div class = "name-and-img">
        <h3>${recipe.name.toUpperCase()}</h3>
        <img src="${recipe.imgName}" alt="Изображение рецепта"/>
      </div>
      <p><strong>Тип:</strong> ${recipe.type}</p>
      <p><strong>Рассчитать порцию:</strong></p>
      <div id="counter">
      <input type="button" id="buttonCountMinus-${recipe.id}" value="-1" min="1" step="1">
      <div id="buttonCountNumber-${recipe.id}">1</div>
      <input type="button" id="buttonCountPlus-${recipe.id}" value="+1">
      </div>
      
      <div id="calculation-${recipe.id}"></div>

      <p><strong>Ингредиенты на 1 порцию:</strong></p>
      <ul>
        ${recipe.ingredients.map(ingr => `<li>${ingr.name} — ${ingr.quantity === 0 ? 'по вкусу' : `${ingr.quantity} ${ingr.unit}`} </li>`).join('')}
      </ul>

      <button onclick="showModal('${recipe.description}')">Показать рецепт</button>
      </div>
    `;

    recipeList.appendChild(recipeEl); 

    //Добавляем обработчики событий для кнопок увеличения
    //и уменьшения количества порций
    document.getElementById(`buttonCountPlus-${recipe.id}`).onclick = function() {
      let countPlus = parseInt(document.getElementById(`buttonCountNumber-${recipe.id}`).innerHTML, 10);
      if (!isNaN(countPlus)) {
        document.getElementById(`buttonCountNumber-${recipe.id}`).innerHTML = countPlus + 1;
        document.getElementById(`calculation-${recipe.id}`).innerHTML = calculations(countPlus + 1, recipe);
      }
  }

  document.getElementById(`buttonCountMinus-${recipe.id}`).onclick = function() {
      let countMinus = parseInt(document.getElementById(`buttonCountNumber-${recipe.id}`).innerHTML, 10);
      if (!isNaN(countMinus) && countMinus > 1) {
        document.getElementById(`buttonCountNumber-${recipe.id}`).innerHTML = countMinus - 1;
        document.getElementById(`calculation-${recipe.id}`).innerHTML = calculations(countMinus - 1, recipe);
      }
    }

  });
  //Часть 2: Получаем количество отображенных рецептов
  const numberOfRecipes = recipeList.childElementCount;
  
  //Находим элемент с идентификатором numberOfRecipes и устанавливаем его текстовое содержимое
  const numberOfRecipesElement = document.getElementById('numberOfRecipes');
  if (numberOfRecipesElement) {
      //numberOfRecipesElement.textContent = `Найдено по запросу: ${numberOfRecipes}`;
      numberOfRecipesElement.textContent = `${numberOfRecipes}`;
  }
}

/*-------------------------------------------------*/
/*  ФУНКЦИЯ ДЛЯ ОТОБРАЖЕНИЯ МОДАЛЬНОГО ОКНА        */
/*-------------------------------------------------*/


function showModal(text) {
  //Получаем элемент модального окна по его идентификатору
  const modal = document.getElementById("myModal");
  //Получаем элемент, в который будет вставлен текст модального окна, по его идентификатору 
  const modalText = document.getElementById("modal-text");
  //Устанавливаем HTML-содержимое элемента modalText равным переданному параметру text
  modalText.innerHTML = text;

  // Вставляем HTML-код счетчика в модальное окно
  const counterContainer = document.getElementById("counter-container");
  if (counterContainer) {
    counterContainer.innerHTML = counterHtml;
  }

  //Делаем модальное окно ВИДИМЫМ, изменяя его стиль display на "block"
  modal.style.display = "block";

  //Получаем первый элемент с классом "close"
  const span = document.getElementsByClassName("close")[0];
  //Добавляем обработчик события onclick к элементу span, который будет скрывать модальное окно
  span.onclick = function() {
    //Скрываем модальное окно, изменяя его стиль display на "none"
    modal.style.display = "none";
  }
  
  //Добавляем обработчик события onclick к объекту window, который будет скрывать модальное окно при клике вне его области
  window.onclick = function(event) {
    //Проверяем, является ли цель события (event.target) самим модальным окном
    if (event.target == modal) {
      //Скрываем модальное окно
      modal.style.display = "none";
    }
  }
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
/*показать выбранные ингредиенты*/
document.getElementById('recipe-ingredients-filter').addEventListener('change', function() {
  var select = document.getElementById('recipe-ingredients-filter');
  var selectedOptions = Array.from(select.selectedOptions);
  var selectedTexts = selectedOptions.map(option => option.textContent).join(', ');
  document.getElementById('selectedIngredients').textContent = "Выбранные ингредиенты: " + selectedTexts;
});

document.getElementById('showSelectedIngredients').addEventListener('click', function() {
  var displayElement = document.getElementById('selectedIngredients');
  if (displayElement.style.display === 'none') {
      displayElement.style.display = 'block';
  } else {
      displayElement.style.display = 'none';
  }
});
/*----*/


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
function calculations(count, recipe) {
  //получаем вычисленное count и используем его для изменения количества
  
  //если количество порций равно 1, то у нас уже есть рецепт и дубль не требуется.
  if (count === 1){
    return ``
  }
  // Проверяем, что recipe.quantity существует и является числом
  if (Number.isFinite(recipe.quantity)) {
    // Получаем вычисленное count и используем его для изменения количества
    return `<p><strong>Ингредиенты:</strong></p>
    ${recipe.ingredients.map(ingr => `<li>${ingr.name} — ${ingr.quantity === 0 ? 'по вкусу' : `${count * recipe.quantity} ${ingr.unit}`}  </li>`).join('')}`;
  } else {
    return `<p><strong>Ингредиенты:</strong></p>
    ${recipe.ingredients.map(ingr => `<li>${ingr.name} — ${ingr.quantity === 0 ? 'по вкусу' : `${count * ingr.quantity} ${ingr.unit}`}  </li>`).join('')}`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
 //для каждого id перебор
 recipes.forEach(recipe => {
    let recipeId = recipe.id;

    let calculate = document.getElementById(`calculation-${recipeId}`);
    let count = document.getElementById(`buttonCountNumber-${recipeId}`);
    let calculation = calculate.innerHTML;
    //textContent для получения текста
    //innerHTML для получения HTML, нас интересует это
    document.getElementById(`buttonCountPlus-${recipeId}`).onclick = function() {
        let countPlus = parseInt(count.innerHTML, 10); //Преобразование в число
        if (!isNaN(countPlus)) { //Проверяем, что countPlus является числом
          count.innerHTML = countPlus + 1; //изменение значения
          calculate.innerHTML = calculations(countPlus + 1, recipe); // Передаем recipe в функцию
        }
    }
  
    document.getElementById(`buttonCountMinus-${recipeId}`).onclick = function() {
        let countMinus = parseInt(count.innerHTML, 10); //Преобразование в число
        if (!isNaN(countMinus) && countMinus > 1) {
          count.innerHTML = countMinus - 1; //изменение значения
          calculate.innerHTML = calculations(countMinus - 1, recipe); // Передаем recipe в функцию
        }
    }
 });
});

/*-------------------------------------------------*/
/*              СБРОС ФИЛЬТРОВ                     */
/*-------------------------------------------------*/
function resetFilters() {
  //Сброс поля поиска
  document.getElementById('search-box').value = '';
  //Сброс выбора типа рецепта
  document.getElementById('recipe-type-filter').value = '';
  //Сброс выбора ингредиентов
  const ingredientsFilter = document.getElementById('recipe-ingredients-filter');
  Array.from(ingredientsFilter.options).forEach(option => {
     option.selected = false;
  });
  //Вызов функции фильтрации с начальными значениями
  filterRecipes();

  //промотать до верха
  var element = document.getElementById('top-content');
  var top = element.offsetTop;
  window.scrollTo({ top: top, behavior: 'smooth' });

}
document.getElementById('reset-filters').addEventListener('click', resetFilters);

 
