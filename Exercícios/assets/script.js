class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  };
}

class ProductItem {
  constructor (product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description }</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    const addCartButton = document.querySelector('button');
    return prodEl;
  }
}

class ProductList {
  products = [
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
  ];

  constructor() {};

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);       
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
