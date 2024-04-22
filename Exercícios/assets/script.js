const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style['display'] = 'block';

let person = {
    'first name': 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    Greet: () => {
        alert('Hi there!');
    },
    1.5: 'Hello',
};

// person.age = 31;
// delete person.age;
// person.age = undefined;

console.log(person['age'])
console.log(person[1.5])

person.isAdmin = true;