document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("mail").value.trim();
    const matricula = document.getElementById("matriculaReg").value.trim();
    const senha = document.getElementById("senhaRegister").value.trim();
    const disciplina = document.getElementById("disciplina").value.trim();

    if (!nome || !email || !matricula || !senha || !disciplina) {
        alert("Preencha todos os campos antes de continuar.");
        return;
    }

    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
});