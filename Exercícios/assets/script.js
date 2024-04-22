let person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    Greet: () => {
        alert('Hi there!');
    }
};

// person.age = 31;
// delete person.age;
person.age = undefined;

console.log(person)

person.isAdmin = true;