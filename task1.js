const parser = new DOMParser();

const xmlString =`
<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const listNode = xmlDOM.querySelector('list');
const studentNode = listNode.querySelectorAll('student');

let list = new Array(2);

for (let i = 0; i < studentNode.length; i++) {
    let nameNode = studentNode[i].querySelector('name');
    list[i] = {
        name: nameNode.querySelector('first').textContent + ' '
            + nameNode.querySelector('second').textContent,
        age: Number(studentNode[i].querySelector('age').textContent),
        prof: studentNode[i].querySelector('prof').textContent,
        lang: nameNode.getAttribute('lang')
    }
}

console.log('list', list);
