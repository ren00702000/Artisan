const container = document.getElementById("featured-products-container");

if (container) {
  products.forEach(product => {
    const productCard = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>${product.price}</p>
      </div>
    `;

    container.innerHTML += productCard;
  });
}
