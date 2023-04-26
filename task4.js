const btn = document.querySelector('.btn');
const outer = document.querySelector('.outer');

const useRequest = () => {
    const value1 = +document.querySelector('.input1').value;
    const value2 = +document.querySelector('.input2').value;

    if (!isNaN(value1) && !isNaN(value2) && (value1 >= 100 && value1 <= 300) && (value2 >= 100 && value2 <= 300)) {
        fetch(`https://picsum.photos/${value1}/${value2}`)
            .then((response) => {
                displayResult(response);
            })
    } else {
        displayError();
    }
}

btn.addEventListener('click', async () => {
    await useRequest();
});

function displayResult(answer) {
    outer.innerHTML = `
        <img
          src="${answer.url}"
          alt=""
        />
    `;
}

function displayError() {
    outer.innerHTML = 'одно из чисел вне диапазона от 100 до 300';
}