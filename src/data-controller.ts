import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
    const mainContainer = document.getElementById('main-container');
    if (!mainContainer) return;

    mainContainer.innerHTML = '';

    prods.forEach(product => {
        const pHTML = generateProductHTML(product);
        mainContainer.innerHTML += pHTML;
    });
}

function getByCategory(category: string): void {
    const pFiletered = products.filter(product => product.category === category);
    renderProducts(pFiletered);
}

function getByRating(minRating: number): void {
    const pFiletered = products.filter(product => product.rating > minRating);
    renderProducts(pFiletered);
}

export { renderProducts, getByCategory, getByRating };