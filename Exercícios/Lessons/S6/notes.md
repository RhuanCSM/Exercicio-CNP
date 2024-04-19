[Udemy](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/15942550#notes)

## Recapitulação sobre _functions_
<sub>124. Recapping Functions Knowledge - What We Know Thus Far</sub>

Nota no 125:

    Throughout this course, you'll hear me use the words "parameters" and "arguments" interchangeably.
    Technically, there is a difference though:
    Parameters are these variables which you specify between parentheses when defining a function.
    function sayHi(name) { ... } 
    In this example, name is a parameter.
    Arguments then are the concrete values you pass to a function when calling that function:
    sayHi('Max');
    'Max' is an argument of the function therefore - for the name parameter to be precise.
    Since both concepts obviously are extremely close connected, I will often say "let's define which arguments a function receives" or something comparable, since defining the arguments of a function in the end means that you set up its parameters (and vice-versa).

## Funções e Métodos
<sub>126. Functions vs Methods</sub>

A ```function``` tem bloco individual no código. Contudo, existe a possibilidade de guardar ```functions``` dentro de ```objects```, no lugar das ```properties```. Estes são os ```Methods```: ```functions``` dentro de ```objects```. Exemplo:

```js
const oLeandro = {
    name: 'Leandro',
    pôLeandro: function éLegal() {
        console.log(', não é?')
    }
};

oLeandro.éLegal();
```

