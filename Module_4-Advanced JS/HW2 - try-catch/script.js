// Наведіть кілька прикладів, коли доречно використовувати в коді конструкцію try...catch.

// Коли код може видати помилку та повністю зупинити виконання скрипту. Щоб цього уникнути, код пишеться в трай, а помилка виводиться в кетч, якщо код успішний, кетч пропуститься. а якщо ні, кетч спіймає помилку, та продовжить виконання скрипта.

const books = [{
    author: "Люсі Фолі", name: "Список запрошених", price: 70
}, {
    author: "Сюзанна Кларк", name: "Джонатан Стрейндж і м-р Норрелл",
}, {
    name: "Дизайн. Книга для недизайнерів.", price: 70
}, {
    author: "Алан Мур", name: "Неономікон", price: 70
}, {
    author: "Террі Пратчетт", name: "Рухомі картинки", price: 40
}, {
    author: "Анґус Гайленд", name: "Коти в мистецтві",
}];

const findDiv = document.querySelector('#root');

const booksCheck = books.map(item => {
    try {
        if (!item.author) {
            throw Error('no author')
        }
        if (!item.name) {
            throw Error('no name')
        }
        if (!item.price) {
            throw Error('no price')
        }
        return `
                <li>
                     <ul>
                        <li>${item.author}</li>
                        <li>${item.name}</li>
                        <li>${item.price}</li>
                     </ul>
                </li>
                `
    } catch (e) {
        console.log(e.stack)
    }
}).join('');

findDiv.insertAdjacentHTML('afterbegin', `<ul>${booksCheck}</ul>`)




