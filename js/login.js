document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const matricula = document.getElementById("matricula").value.trim();
    const senha = document.getElementById("senhaLogin").value.trim();
    const matriculaError = document.getElementById("matriculaError");
    const senhaError = document.getElementById("senhaError");

    let valido = true;

    if (matricula === "") {
        matriculaError.textContent = "Informe a matrícula.";
        valido = false;
    } else {
        matriculaError.textContent = "";
    }

    if (senha === "") {
        senhaError.textContent = "Informe a senha.";
        valido = false;
    } else {
        senhaError.textContent = "";
    }

    if (valido) {
        alert("Login realizado com sucesso!");
        window.location.href = "reservas.html";
    }
});
