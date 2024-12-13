document.addEventListener('DOMContentLoaded', async () => {
    if (localStorage.getItem('username').includes('admin')){
        const element1 = document.getElementById('a1');
        element1.remove();
        const element2 = document.getElementById('a2');
        element2.remove();
    };

    const path = localStorage.getItem('username').includes('user') ? 'clients' : 'users';
    const response = await fetch('http://51.250.112.186/api/'+path+'/me/'+localStorage.getItem('username'), {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
        },
    });

    if (response.ok) {
        const employee = await response.json();
        const ptofileDetailsDiv = document.getElementById('profileDetails');
        ptofileDetailsDiv.innerHTML = '';

            if (employee.length === 0) {
                ptofileDetailsDiv.textContent = 'Нет данных о сотрудникe.';
                return;
            } else {
                if (employee.salary){
                    ptofileDetailsDiv.innerHTML = `
                    <div class="image_center"><img src="${employee.image_path}" alt="${employee.image_path}" class="image"></div>
                    <ul>
                        <li><span>Имя:</span> ${employee.name}</li>
                        <li><span>Фамилия:</span> ${employee.surname}</li>
                        <li><span>Отчество:</span> ${employee.patronymic}</li>
                        <li><span>Дата рождения:</span> ${employee.birth_date}</li>
                        <li><span>Номер телефона:</span> ${employee.phone_number}</li>
                        <li><span>Почта:</span> ${employee.email}</li>
                        <li><span>Дата устройства на работу:</span> ${employee.hire_date}</li>
                        <li><span>Позиция:</span> ${employee.position_id}</li>
                        <li><span>Заработная плата:</span> ${employee.salary}₽</li>
                    </ul> `
                } else {
                    ptofileDetailsDiv.innerHTML = `
                    <div class="image_center"><img src="${employee.image_path}" alt="${employee.image_path}" class="image"></div>
                    <ul>
                        <li><span>Имя:</span> ${employee.name}</li>
                        <li><span>Фамилия:</span> ${employee.surname}</li>
                        <li><span>Отчество:</span> ${employee.patronymic}</li>
                        <li><span>Номер телефона:</span> ${employee.phone}</li>
                        <li><span>Почта:</span> ${employee.email}</li>
                    </ul> `
                }
            }
    } else {
        alert('Failed load data');
    }
});
