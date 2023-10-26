const btn = document.querySelector('.navbar__add__btn');
const menu = document.querySelector('.navbar__menu');
const remove__btn = document.querySelector('.navbar__remove__btn');


btn.addEventListener('click', () => {
    menu.classList.add('show');
    remove__btn.style.display = 'block'
    btn.style.display = 'none'

});
remove__btn.addEventListener('click', () => {
    menu.classList.remove('show');
    remove__btn.style.display = 'none'
    btn.style.display = 'block'

})

const url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-09-26&sortBy=publishedAt&apiKey=f9cf7dd5364f432ab6e3e17ee1a0b683'

async function getData(url){
    try{
        const response = await fetch(url);
        const result = await response.json();
        console.log(result.articles);
    }catch (error) {
        console.log(error)
    }
}

getData(url)    