const btn = document.querySelector('.btn');
const outer = document.querySelector('.outer');

if (localStorage.getItem('lastImages') !== null) {
    outer.innerHTML = localStorage.getItem('lastImages');
}

const useRequest = () => {
    const page = +document.querySelector('#page').value;
    const limit = +document.querySelector('#limit').value;

    if ((page < 1 || page > 10) && (limit < 1 || limit > 10)) {
        outer.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";

    } else if (limit < 1 || limit > 10) {
        outer.innerHTML = "Лимит вне диапазона от 1 до 10";

    } else if (page < 1 || page > 10) {
        outer.innerHTML = "Номер страницы вне диапазона от 1 до 10";

    } else {
        return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            .then((response) => {
                return response.json();
            })
            .then((json) => { return json; })
            .catch(() => { console.log('error') });
    }
}

btn.addEventListener('click', async () => {
    const result = await useRequest();
    displayResult(result);
});

function displayResult(api) {
    let answer = '';

    api.forEach(item => {
        const elem = `
      <div style="display: inline-block; margin-right: 10px">
        <img
          src="${item.download_url}"
          style="width: 200px"
          alt=""
        />
        <p>${item.author}</p>
      </div>
    `;
        answer = answer + elem;
    });

    localStorage.setItem('lastImages', answer);
    outer.innerHTML = answer;
}