document.addEventListener('DOMContentLoaded', async () => {
    if (localStorage.getItem('username').includes('admin')){
        const element1 = document.getElementById('a1');
        element1.remove();
        const element2 = document.getElementById('a2');
        element2.remove();
    };
    const medecinesInfo = document.getElementById('medecinesInfo');

    const response = await fetch('http://localhost:8000/api/medicines', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
        },
    });

    if (response.ok) {
        const medicines = await response.json();
        medecinesInfo.innerHTML = '';
        medicines.forEach(medicine => {
            const medicinesCard = document.createElement('div');
            medicinesCard.className = 'medecine-card';
            medicinesCard.innerHTML = `
                <img src="${medicine.image_path}" alt="${medicine.title}" class="image">
                <h3>${medicine.title}</h3>
                <p>Стоимость: ${medicine.price}₽</p>
            `;
            medicinesCard.addEventListener('click', () => {
                window.location.href = `medicine.html?id=${medicine.id}`;
            });
            medecinesInfo.appendChild(medicinesCard);
            console.log(medicine);
        });
    } else {
        alert('Failed to retrieve medecines');
    }
});
