const btn = document.querySelector('.btn');
const outer = document.querySelector('.outer');

const useRequest = () => {
    const page = +document.querySelector('#page').value;
    const limit = +document.querySelector('#limit').value;

    console.log(`${page}, ${limit}`);

    if ((page < 1 || page > 10) && (limit < 1 || limit > 10)) {
        outer.innerHTML = "Номер страницы вне диапазона от 1 до 10";

    } else if (limit < 1 || limit > 10) {
        outer.innerHTML = "Лимит вне диапазона от 1 до 10";

    } else if (page < 1 || page > 10) {
        outer.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";

    } else {
        outer.innerHTML = "Vse chiki-puki!";
    }
}


btn.addEventListener('click', async () => {
    await useRequest();
});