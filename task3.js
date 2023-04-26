function useRequest(url, callback) {
    const value = document.querySelector('input').value;
    if (value >= 1 && value <= 10) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url + value, true);
        xhr.onload = () => {
            callback(JSON.parse(xhr.response));
        };
        xhr.send();
    } else {
        displayError();
    }
}

const btn = document.querySelector('button');
const div = document.querySelector('div');

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

    div.innerHTML = answer;
}

function displayError() {
    div.innerHTML = 'число вне диапазона от 1 до 10';
}

btn.addEventListener('click', () => {
    useRequest('https://picsum.photos/v2/list/?limit=', displayResult);
});