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



const   adv = document.querySelector('.promo__adv'),
        genre = document.querySelector('.promo__genre'),
        // backPromo = document.getElementsByClassName('promo__bg');
        itemList = document.querySelectorAll('.promo__interactive-item');




adv.remove();

movieDB.movies.sort();

for (let i = 0; i < movieDB.movies.length; i++) {
    // console.log('dfgbdfg');
    // console.log(itemList[i]);
        itemList[i].textContent = `${i + 1}. ${movieDB.movies[i]}`;
    }


// backPromo.style.background = "../img/bg.jpg";

// genre.replaceChild(genreNew, genre);

// genre.replaceWith(genreNew);

genre.innerHTML = "ДРАМА";


