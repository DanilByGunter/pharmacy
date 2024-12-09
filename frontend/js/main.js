document.addEventListener('DOMContentLoaded', async () => {
    if (localStorage.getItem('username').includes('admin')){
        const element1 = document.getElementById('a1');
        element1.remove();
        const element2 = document.getElementById('a2');
        element2.remove();
    };
});
