document.querySelector("#registration").addEventListener("submit", async function(e) {
  e.preventDefault();

  const username = document.querySelector("#login_in").value;
  const password = document.querySelector("#pass_in").value;
  const password_verify = document.querySelector('#pass_in_verifivation').value;
  
  if (password === '' || username === '' || password_verify === '') {
    alert("Проверьте правильность введенных данных");
  } else if (password.length < 8 || password_verify < 8) {
    alert("Проверьте, что длина пароля больше 8 символов");
  } else if (password != password_verify) {
    alert("Проверьте, что пароли совпадают");
  } else {
    const response = await fetch("http://51.250.112.186/api/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
    });

    if (response.ok) {
      const response_token = await fetch('http://51.250.112.186/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            username,
            password,
            }),
        });
        if (response_token.ok) {
          const data = await response_token.json();
          alert(username + ", вы успешно зарегистрировались!");
          localStorage.clear();
          localStorage.setItem('username', username);
          localStorage.setItem('jwtToken', data.access_token);
          window.location = "main_page.html";
      } else {
          alert('Registration failed');
      }
        // const data = await response.json();
        // alert(data.username + ", вы успешно авторизировались!");
        // sessionStorage.clear();
        // sessionStorage.setItem('username', username);
        // window.location = "main_page.html";
    } else {
        alert('Registration failed');
    }
  }}
);
