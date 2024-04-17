# Notas de aulas

## ES5 vs ES6+
<!-- 112. ES5 vs ES6+ ("Next Gen JS") - Evolution of JavaScript -->

- ES5 é uma linguagem por trás do JavaScript, conhecido como "ECMA / Script"
![print do website](image.png)
    Já que mudanças na estrutura poderiam danificar os sites que já usavam a linguagem, vem a necessidade de criar novas versões:

- ES6+ foi criado com melhorias: _const_ e _let_, por exemplo. 

## _Var_ & _Let_ & _Const_
<!-- 113. var vs let & const - Introducing "Block Scope" -->

- ***Var***: cria uma variável; _usado no escopo de function e global_.<br>
- ***Let***: cria uma variável; _usado no escopo de bloco_.<br>
- ***Const***: cria uma constante; _usado no escopo de bloco_.<br>

    O _Var_ redeclara a variável sem anunciar nada, e esse é o problema. Não é a intenção do programador, na maior parte dos casos. Sendo assim, diante de uma redeclaração de variável, é preferível que um erro apareça no console - o que é proporcionado pelo _Let_.