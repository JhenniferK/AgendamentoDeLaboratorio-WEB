document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("web-system");

    container.addEventListener("mousemove", (e) => {
        const contRect = container.getBoundingClientRect();
        const x = e.clientX - contRect.left;
        const y = e.clientY - contRect.top;

        const centerX = contRect.width / 2;
        const centerY = contRect.height / 2;

        const rotateX = ((y - centerY)/centerY) * 10;
        const rotateY = ((x - centerX)/centerX) * -10;

        container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    container.addEventListener("mouseleave", () => {
        container.style.transform = "rotateX(0) rotateY(0)";
    });

    const goToRegister = document.getElementById('go-to-register');
    const goToLogin = document.getElementById('go-to-login');
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');

    goToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginSection.style.display = 'none';
        registerSection.style.display = 'block';
        goToRegister.style.display = 'none';
        goToLogin.style.display = 'inline';
    });

    goToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        registerSection.style.display = 'none';
        loginSection.style.display = 'block';
        goToRegister.style.display = 'inline';
        goToLogin.style.display = 'none';
    });
});