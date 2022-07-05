/*Теоретичні питання
1. Опишіть своїми словами що таке Document Object Model (DOM)
Це об"єктна модель документа, де всі елементи є обЄєктами, з якими ми можемо працювати в JS
2. Яка різниця між властивостями HTML-елементів innerHTML та innerText?
innerHTML передає дані включно з тегами, тоді як innerText тільки текст.
3. Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?
querySelector
querySelectorAll
getElementByID
getElementByTagName
getElementByClassName
Але найбільш універсальний буде querySelectorAll


Завдання
Код для завдань лежить в папці project.

1. Знайти всі параграфи на сторінці та встановити колір фону #ff0000

2. Знайти елемент із id="optionsList". Вивести у консоль. Знайти батьківський елемент та вивести в консоль. Знайти дочірні ноди, якщо вони є, і вивести в консоль назви та тип нод.

3. Встановіть в якості контента елемента з класом testParagraph наступний параграф -

This is a paragraph

4.Отримати елементи, вкладені в елемент із класом main-header і вивести їх у консоль. Кожному з елементів присвоїти новий клас nav-item.

5.Знайти всі елементи із класом section-title. Видалити цей клас у цих елементів. */

//1
const paragraph = document.querySelectorAll('p');

for (const item of paragraph) {
    item.style.backgroundColor = '#ff0000';
}

//2
const findId = document.getElementById('optionsList');

console.log(findId);

console.log(findId.parentElement)

console.log(findId.childNodes);
//3

const findParagraph = document.querySelector("#testParagraph")

findParagraph.textContent = "This is a paragraph";

//4
const findChildEl = document.querySelector('.main-header');
console.log(findChildEl.children);
[...findChildEl.children].forEach(element => {
    element.classList.add('nav-item');
});

//5 
const deleteEl = document.querySelectorAll('section-title')
console.log(deleteEl); //Відсутні елементи з таким класом
[...deleteEl].forEach(element => {
    element.classList.remove('section-title')
});