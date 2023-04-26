const jsonString = `
{
    "list": [
        {
            "name": "Petr",
            "age": "20",
            "prof": "mechanic"
        },
        {
            "name": "Vova",
            "age": "60",
            "prof": "pilot"
        }
    ]
}`;

const data = JSON.parse(jsonString);

let list = new Array(2);

for (let i = 0; i < data.list.length; i++) {
    list[i] = {
        name: data.list[i].name,
        age: Number(data.list[i].age),
        prof: data.list[i].prof,
    };
}

console.log('list', list);