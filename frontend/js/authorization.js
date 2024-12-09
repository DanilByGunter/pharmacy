document.querySelector("#authorization").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.querySelector("#login_in").value;
    const password = document.querySelector("#pass_in").value;
    
    if (password.length == 0 || username.length == 0) {
        alert("Проверьте правильность введенных данных")
    } else if (password.length < 8) {
        alert("Проверьте, что длина пароля больше 8 символов")
    } else {
        const response = await fetch('http://127.0.0.1:8000/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            username,
            password,
            }),
        });

    if (response.ok) {
        const data = await response.json();
        alert(username + ", вы успешно авторизировались!");
        localStorage.clear();
        localStorage.setItem('username', username);
        localStorage.setItem('jwtToken', data.access_token);
        window.location = "main_page.html";
    } else {
        alert('Login failed');
    }
    }
});
