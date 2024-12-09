document.addEventListener('DOMContentLoaded', async () => {
    if (localStorage.getItem('username').includes('admin')){
        const element1 = document.getElementById('a1');
        element1.remove();
        const element2 = document.getElementById('a2');
        element2.remove();
    };

    const response = await fetch('http://localhost:8000/api/bucket/me', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
        },
    });

    if (response.ok) {
        const items = await response.json();
        const cartDiv = document.getElementById('cart');
        cartDiv.innerHTML = '';
        var cnt = 0;
        items.items.forEach(item => {
          const itemDiv = document.createElement('div');
          
          itemDiv.classList.add('cart-item');
          itemDiv.id = cnt;
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
            <div class="cart-buttons">
                <button id="update" onclick="updateItem('${cnt}', '${item.amount+1}', '${Math.round(((item.amount+1)*item.price))}')">+</button>
                <button id="delete" onclick="removeItem('${cnt}', '${item.amount-1}', '${Math.round(((item.amount-1)*item.price))}')">-</button>
            </div>
          `;
          cnt++;
          cartDiv.appendChild(itemDiv);
        });
    } else {
        alert('Failed load data');
    }
});

function updateItem(itemId, amount, sum){
    document.getElementById(`amount${itemId}`).innerText = `Количество: ${amount}`;
    document.getElementById(`sum${itemId}`).innerText = `Итого: ${sum}`;
  };

function removeItem(itemId, amount, sum){
    if (amount == '0'){
        var parent = document.getElementById("cart");
        var child = document.getElementById(`${itemId}`);
        parent.removeChild(child);
    } else {
        document.getElementById(`amount${itemId}`).innerText = `Количество: ${amount}`;
        document.getElementById(`sum${itemId}`).innerText = `Итого: ${sum}`;
    }
  };
