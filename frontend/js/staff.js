document.addEventListener('DOMContentLoaded', async () => {
    if (localStorage.getItem('username').includes('admin')){
        const element1 = document.getElementById('a1');
        element1.remove();
        const element2 = document.getElementById('a2');
        element2.remove();
    };
    const staffsInfo = document.getElementById('staffsInfo');

    const response = await fetch('http://localhost:8000/api/staff', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
        },
    });

    if (response.ok) {
        const staffs = await response.json();
        staffsInfo.innerHTML = '';
        if (localStorage.getItem('username').includes('user')){
            staffs.forEach(staff => {
                const staffsCard = document.createElement('div');
                staffsCard.className = 'staff-card';
                staffsCard.innerHTML = `
                    <img src="${staff.image_path}" alt="${staff.image_path}" class="image">
                    <p><span>Имя:</span> ${staff.name}</p>
                    <p><span>Фамилия:</span> ${staff.surname}</p>
                    <p><span>Отчество:</span> ${staff.patronymic}</p>
                    <p><span>Позиция:</span> ${staff.position_id}</p>
                `;
                staffsInfo.appendChild(staffsCard);
            });
        } else {
            staffs.forEach(staff => {
                const staffsCard = document.createElement('div');
                staffsCard.className = 'staff-card';
                staffsCard.innerHTML = `
                    <img src="${staff.image_path}" alt="${staff.image_path}" class="image">
                    <p><span>Имя:</span> ${staff.name}</p>
                    <p><span>Фамилия:</span> ${staff.surname}</p>
                    <p><span>Отчество:</span> ${staff.patronymic}</p>
                    <p><span>Дата рождения:</span> ${staff.birth_date}</p>
                    <p><span>Номер телефона:</span> ${staff.phone_number}</p>
                    
                    <p><span>Дата устройства на работу:</span> ${staff.hire_date}</p>
                    <p><span>Позиция:</span> ${staff.position_id}</p>
                    <p><span>Заработная плата:</span> ${staff.salary}₽</p>
                `;
                staffsInfo.appendChild(staffsCard);
            });
        }
    } else {
        alert('Failed to retrieve staffs');
    }
});
