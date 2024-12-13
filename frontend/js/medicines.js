document.addEventListener('DOMContentLoaded', async () => {
    if (localStorage.getItem('username').includes('admin')){
        const element1 = document.getElementById('a1');
        element1.remove();
        const element2 = document.getElementById('a2');
        element2.remove();
    };
    const params = new URLSearchParams(window.location.search);
    const medicineId = params.get('id');
    if (medicineId) {
        
        const response = await fetch(`http://51.250.112.186/api/medicines/${medicineId}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
            },
        });

        if (response.ok) {
            const medicine = await response.json();
            const medicineDetailsDiv = document.getElementById('medicineDetails');
            medicineDetailsDiv.innerHTML = `
                <div class="image_center"><img src="${medicine.image_path}" alt="${medicine.title}" class="image"></div>
                <h1>${medicine.title}</h1>
                <p>${medicine.description}</p>
                <ul>
                    <li><span>Категория:</span> ${medicine.category}</li>
                    <li><span>Рецептурный товар:</span> ${medicine.prescription ? 'Да' : 'Нет'}</li>
                    <li><span>Количество на складе:</span> ${medicine.count}</li>
                    <li><span>Стоимость:</span> ${medicine.price}₽</li>
                </ul>
                <div class="button_center"><button class="add-to-cart-btn" id="addToCartBtn">+</button></div>
            `;
            const addToCartBtn = document.getElementById('addToCartBtn');
            addToCartBtn.addEventListener('click', async () => {
                const cartResponse = await fetch('http://51.250.112.186/api/order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
                    },
                    body: JSON.stringify({ 
                        id: medicineId,
                        username: localStorage.getItem('username') })
                });
                if (cartResponse.ok) {
                    location.reload();
                    alert('Товар добавлен в корзину');
                } else {
                    alert('Не удалось добавить товар в корзину');
                }
            });
        } else {
            alert('Не удалось получить данные о продукте');
        }
    } else {
        alert('No medicine ID provided');
    }
});
