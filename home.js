document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: 'Product 1', price: 10.00 ,src:'src/img/images (1).jpg' },
        { id: 2, name: 'Product 2', price: 15.00 ,src:'src/img/images (2).jpg'},
        { id: 3, name: 'Product 3', price: 20.00,src:'src/img/images (3).jpg' },
        { id: 4, name: 'Product 4', price: 25.00 ,src:'src/img/images5.jpg'}
    ];

    const productGrid = document.getElementById('productGrid');
    const searchBar = document.getElementById('searchBar');
    const searchButton = document.getElementById('searchButton');

    function renderProducts(productList) {
        productGrid.innerHTML = '';
        productList.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.src}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;
            productGrid.appendChild(productCard);
        });
    }

    function handleAddToCart(event) {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProductIndex = cart.findIndex(item => item.id === productId);
            
            if (existingProductIndex > -1) {
                cart[existingProductIndex].quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${product.name} added to cart!`);
        }
    }

    function handleSearch() {
        const query = searchBar.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        renderProducts(filteredProducts);
    }

    renderProducts(products);
    productGrid.addEventListener('click', handleAddToCart);
    searchButton.addEventListener('click', handleSearch);
});