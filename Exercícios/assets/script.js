const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style['display'] = 'block';

let person = {
    'first name': 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    Greet: () => {
        alert('Hi there!');
    }
};

// person.age = 31;
// delete person.age;
// person.age = undefined;

console.log(person['age'])

person.isAdmin = true;