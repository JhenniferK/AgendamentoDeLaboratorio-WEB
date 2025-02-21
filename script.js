document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let matricula = document.getElementById("matricula").value;
    let senha = document.getElementById("senha").value;
    let valid = true;

    if (!matricula || !senha) {
        if (!matricula) {
            document.getElementById('matriculaError').textContent = "Por favor, insira sua matrícula!";
        }
        if (!senha) {
            document.getElementById('senhaError').textContent = "Por favor, insira sua senha!";
        }
    } else {
        document.getElementById('sucessMessage').textContent = "Login realizado com sucesso!";
    }
});

document.querySelector("form").addEventListener("submit", function (event) {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("mail").value;
    let matricula = document.getElementById("matricula-reg").value;
    let senha = document.getElementById("senha").value;
    let disciplina = document.getElementById("disciplina").value;
    let valid = true;

    if (nome === "" || email === "" || matricula === "" || senha === "" || disciplina === "") {
        alert("Todos os campos são obrigatórios!");
        valid = false;
    }

    if (!valid) event.preventDefault();
});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("web-system");

    container.addEventListener("mousemove", (e) => {
        const contRect = container.getBoundingClientRect();
        const x = e.clientX - contRect.left;
        const y = e.clientY - contRect.top;

        const centerX = contRect.width / 2;
        const centerY = contRect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * -10;

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

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.disponivel');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.remove('disponivel');
            this.classList.add('reservado');
            this.innerText = 'Reservado';
        });
    });
});

document.addEventListener("DOMContenteLoaded", function() {
    const selectTurno = document.getElementById("turno");
    const tabelaManha = document.getElementById("horarios-manha");
    const tabelaTarde = document.getElementById("horarios-tarde");

    selectTurno.addEventListener("change", function() {
        if (selectTurno.value == "manha") {
            tabelaManha.style.display = "table";
            tabelaTarde.style.display = "none";
        } else if (selectTurno.value == "tarde") {
            tabelaManha.style.display = "none";
            tabelaTarde.style.display = "table";
        }
    })
});