document.addEventListener('DOMContentLoaded', async () => {
    if (localStorage.getItem('username').includes('admin')){
        const element1 = document.getElementById('a1');
        element1.remove();
        const element2 = document.getElementById('a2');
        element2.remove();
    };
    const response = await fetch('http://51.250.112.186:8000/api/orders/me', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
        },
    });

    if (response.ok) {
        
        const items = await response.json();
        var cnt = 0;
        const cartDiv = document.getElementById('cart');
        items.forEach(order => {
            const orderDiv = document.createElement('div');
            orderDiv.classList.add('order-item');
            orderDiv.innerHTML = `<h4>Статус: ${order.status}</h4>`;
            order.items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('cart-item');
                itemDiv.innerHTML = `
                    <div style="width: 20%;">
                        <img src="${item.image_path}" alt="${item.title}" class="image">
                    </div>
                    <div class="cart-description" class="">
                        <span><strong>${item.title}</strong></span>
                        <span id='amount${cnt}'>Количество: ${item.amount}</span>
                        <span id='price${cnt}'>Цена: ${item.price}₽</span>
                        <span id='sum${cnt}'>Итого: ${Math.round((item.amount*item.price))}₽</span>
                    </div>
                `;
                orderDiv.appendChild(itemDiv);
            });
            cartDiv.appendChild(orderDiv);
        });
    } else {
        alert('Failed load data');
    }
});
