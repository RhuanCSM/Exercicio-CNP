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
    éLegal: function pôLeandro() {
        console.log(', não é?')
    }
};

oLeandro.éLegal();
```
## Funções são objetos
<sub>127. Functions are Objects!</sub>

```Functions``` também tem ```properties``` como ```objects```, porque ela mesma é um ```object```. Sendo assim, é armazenada no ```Heap``` (armazenamento de longo prazo) e qualquer coisa que é aplicável a um ```object```, também o é para a ```function```.

## Funções em variáveis
<sub>128. Function Expressions: Storing Functions in Variables</sub>

Uma ```function``` dentro de uma ```variable``` só pode ser chamada pelo nome da ```variable```. Uma ```function``` fora de uma ```variable``` é uma ```declaration```. Uma ```function``` dentro de uma ```variable``` é apenas uma ```expression```. <br>
> _Use como exemplo o exemplo da 126_

Também existem as ```functions``` anônimas. Enquanto ```expressions```, não precisam de um nome.

```js
const leandro = function() {
    console.log('é legal')
};
```

## Expressions vs. Declarations
<sub>129. Function Expressions vs Function Declarations</sub>

```Declaration/statement```: pode ser usado a partir de todo o documento, até mesmo antes da ```declaration``` – por isso, podemos organizar todas as ```functions``` ao final do arquivo.

```Expression```: é também levado ao topo do documento, mas não inicializado.

## Funções anônimas
<sub>130. Anonymous Functions</sub>

```js
const leandersson = () => {};
```

Você pode querer considerar o uso de ```functions``` nomeadas, porque quando um erro é logado no ```console```, ele dará o nome da ```function``` declarada que contém o erro. No caso de uma anônima, dirá apenas ```<anonimous>```. Contudo, os erros também apontam a linha do código.

## Trabalhando no projeto "Pedra, papel e tesoura", do curso
<sub>131. Working on the Project: Adding User Choices to the Game</sub>


