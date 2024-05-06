class Product {
  title = 'DEFAULT';
  imageUrl;
  description;
  price; 

  constructor(title, imageUrl, desc, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.desc = desc;
    this.price = price;
  };
}

const productsList = {
  products: [
    new Product(
      'A pillow',
      'https://www.coyuchi.com/cdn/shop/files/ACC-Dec_LostCoastOrganic_PillowCover_Redwood_A_FA23_16377_1.jpg?v=1695925578',
      19.99,
      'A soft pillow!'
    ),
    new Product(
      'A Carpet',
      'https://m.media-amazon.com/images/I/91zYlOJHPFL._AC_UF894,1000_QL80_.jpg',
      89.99,
      'A carpet which you might like – or not.'
    )
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}">
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description }</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

productsList.render();