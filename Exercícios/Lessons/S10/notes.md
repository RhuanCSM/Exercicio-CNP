[Udemy](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/15942550#notes)

## Aulas sobre Object Oriented Programing. Projeto

## Classes! 
<sub>242. Defining & Using a First Class</sub>

As Classes são chamadas de _blueprints_ dos objetos. Em tese, é um objeto que engloba os outros. A consequência disso é a herança dos métodos.


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=, initial-scale=1.0">
  <title>Mini-Shop</title>
  <link rel="stylesheet" href="./styles.css">
  <script src="./script.js"></script>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

```css
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #540075;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
}

header h1 {
  color: white;
  font-size: 2rem;
}

button {
  background: #540075;
  color: white;
  border: 1px solid #540075;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  font: inherit;
  cursor: pointer;
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background: #790fa3;
  border-color: #790fa3;
}

.cart {
  margin: 5rem 2rem;
  border: 2px solid #540075;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
}

.cart h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #540075;
}

.product-list {
  list-style: none;
  margin: 0 2rem;
  padding: 0;
}

.product-item {
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 50rem;
  max-width: 90%;
}

.product-item img {
  width: 100%;
  height: 20rem;
  object-fit: cover;
}

.product-item__content {
  padding: 1rem;
  text-align: center;
}

.product-item h2,
.product-item h3 {
  margin: 0 0 1rem 0;
}
```

```js
const productsList = {
  products: [
    {
      title: 'A pillow', 
      imageUrl: 
        'https://www.coyuchi.com/cdn/shop/files/ACC-Dec_LostCoastOrganic_PillowCover_Redwood_A_FA23_16377_1.jpg?v=1695925578', 
      price: 19.99, 
      description: 'A soft pillow!'
    },
    {
      title: 'A Carpet', 
      imageUrl: 
        'https://m.media-amazon.com/images/I/91zYlOJHPFL._AC_UF894,1000_QL80_.jpg', 
      price: 89.99, 
      description: 'A carpet which  you might like – or not.'
    }
  ],
  render() {
    const renderHook =
  }
}
```