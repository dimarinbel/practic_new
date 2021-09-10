/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

function compareFilms(a, b){
    return a > b?1:-1;
}



const   //adv = document.querySelector('.promo__adv'),
        adv = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        backPromo = document.querySelector('.promo__bg'),
        // itemList = document.querySelectorAll('.promo__interactive-item');
        itemList = document.querySelector('.promo__interactive-list');


adv.forEach((item) => {
    item.remove();
});

// adv.remove();

backPromo.style.backgroundImage = "URL('img/bg.jpg')";


movieDB.movies.sort(compareFilms);

// for (let i = 0; i < movieDB.movies.length; i++) {
//         itemList[i].textContent = `${i + 1}. ${movieDB.movies[i]}`;
//     }

// movieDB.movies.forEach((film, i) => {
//     itemList[i].textContent = `${i + 1}. ${film}`;
// });

itemList.innerHTML = "";
movieDB.movies.forEach((film, i) => {
    itemList.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${film}
    <div class="delete"></div>
    </li>`;
});


genre.textContent = "ДРАМА";


