document.getElementById("sair").addEventListener("click", () => {
    if (confirm("Deseja sair?")) {
        window.location.href = "index.html";
    }
});

document.getElementById("concluir-agendamento").addEventListener("click", () => {
    alert("Agendamento concluído com sucesso!");
});

function gerarTabelaDeHorarios(mes, turno) {
    const tabela = document.getElementById("tabela-horarios").getElementsByTagName('tbody')[0];
    tabela.innerHTML = "";

    const horarios = turno === "manha" ? ["07:00-07:50", "07:50-08:40", "08:40-09:30", "09:50-10:40", "10:40-11:30", "11:30-12:20"] 
                                        : ["13:20-14:10", "14:10-15:00", "15:30-16:20", "16:20-17:10"];

    const dias = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];

    horarios.forEach(horario => {
        let novaLinha = tabela.insertRow();

        let celulaHorario = novaLinha.insertCell();
        celulaHorario.textContent = horario;

        dias.forEach(dia => {
            let celula = novaLinha.insertCell();
            let btnReservar = document.createElement("button");
            btnReservar.textContent = "Reservar";
            btnReservar.classList.add("reservar-btn");

            btnReservar.addEventListener("click", () => {
                alert(`Horário ${horario} da ${dia} reservado!`);
            });

            celula.appendChild(btnReservar);
        });
    });
}

function navegarSemana(direcao) {
    const semanaAtual = document.getElementById("semana-atual");
    let novaSemana = new Date(semanaAtual.textContent);
    if (direcao === "anterior") {
        novaSemana.setDate(novaSemana.getDate() - 7);
    } else if (direcao === "proxima") {
        novaSemana.setDate(novaSemana.getDate() + 7);
    }
    semanaAtual.textContent = novaSemana.toLocaleDateString();
}

document.getElementById("mes").addEventListener("change", function () {
    const mes = this.value;
    const turno = document.getElementById("turno").value;
    if (mes && turno) {
        gerarTabelaDeHorarios(mes, turno);
    }
});

document.getElementById("turno").addEventListener("change", function () {
    const mes = document.getElementById("mes").value;
    const turno = this.value;
    if (mes && turno) {
        gerarTabelaDeHorarios(mes, turno);
    }
});

document.getElementById("semana-anterior").addEventListener("click", () => {
    navegarSemana("anterior");
});

document.getElementById("proxima-semana").addEventListener("click", () => {
    navegarSemana("proxima");
});

document.getElementById("sair").addEventListener("click", () => {
    if (confirm("Deseja sair?")) {
        window.location.href = "index.html";
    }
});
