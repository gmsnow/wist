document.addEventListener('DOMContentLoaded', function() {
    const cartTableBody = document.querySelector('#cartTable tbody');
    const checkoutButton = document.getElementById('checkoutButton');

    function renderCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartTableBody.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button class="remove-button" data-index="${index}">Remove</button></td>
            `;
            cartTableBody.appendChild(row);
        });

        const totalRow = document.createElement('tr');
        totalRow.innerHTML = `
            <td colspan="4" class="total-label">Total</td>
            <td>$${total.toFixed(2)}</td>
        `;
        cartTableBody.appendChild(totalRow);
    }

    function handleRemoveButtonClick(event) {
        if (event.target.classList.contains('remove-button')) {
            const index = event.target.getAttribute('data-index');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        }
    }

    checkoutButton.addEventListener('click', function() {
        alert('Proceeding to checkout...');
    });

    cartTableBody.addEventListener('click', handleRemoveButtonClick);
    renderCart();
});