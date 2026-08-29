document.addEventListener("DOMContentLoaded", () => {
  const shopApp = document.getElementById("shop-app");

  if (!shopApp) return;

  // Renderização da seção Cacao Concept (Sempre 2 colunas, estilo exclusivo)
  const renderCacaoConcept = () => {
    return `
      <section class="shop-container">
        <h2 class="category-title">Cacao Concept</h2>
        <div class="cacao-concept-grid">
          ${productsData.cacaoConcept.map(product => `
            <div class="product-card">
              <img src="${product.image}" alt="${product.name}" class="product-image" />
              <h3 class="product-name">${product.name}</h3>
              <p class="product-price">${product.price}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  };

  // Renderização dos demais produtos (3 colunas Web / 2 colunas Mobile)
  const renderStandardProducts = () => {
    return `
      <section class="shop-container">
        <h2 class="category-title">Outros Produtos</h2>
        <div class="product-grid">
          ${productsData.standardProducts.map(product => `
            <div class="product-card">
              <img src="${product.image}" alt="${product.name}" class="product-image" />
              <h3 class="product-name">${product.name}</h3>
              <p class="product-price">${product.price}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  };

  // Injeção do HTML no contêiner da loja
  shopApp.innerHTML = `
    ${renderCacaoConcept()}
    ${renderStandardProducts()}
  `;
});
