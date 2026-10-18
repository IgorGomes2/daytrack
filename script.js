const botaoGas = document.getElementById("registrarGas");
const dataGas = document.getElementById("dataGas");
const ultimaTrocaGas = document.getElementById("UltimaTrocaGas");
const proximaTrocaGas = document.getElementById("ProximaTrocaGas");

botaoGas.addEventListener("click", function() {

    if (dataGas.value === "") {
        alert("Selecione uma data antes de registrar.");
        return;
    }

    const dataEscolhida = new Date(dataGas.value + "T00:00:00");

    const dia = dataEscolhida.getDate();
    const mes = dataEscolhida.getMonth() + 1;
    const ano = dataEscolhida.getFullYear();

    const diaFormatado = String(dia).padStart(2, "0");
    const mesFormatado = String(mes).padStart(2, "0");

    const dataFormatada = diaFormatado + "/" + mesFormatado + "/" + ano;

    ultimaTrocaGas.textContent = "Última Troca: " + dataFormatada;

    localStorage.setItem("dataGas", dataGas.value);

    dataEscolhida.setDate(dataEscolhida.getDate() + 60);

    const diaProxima = dataEscolhida.getDate();
    const mesProxima = dataEscolhida.getMonth() + 1;
    const anoProxima = dataEscolhida.getFullYear();

    const diaProximaFormatado = String(diaProxima).padStart(2, "0");
    const mesProximaFormatado = String(mesProxima).padStart(2, "0");

    const proximaDataFormatada = diaProximaFormatado + "/" + mesProximaFormatado + "/" + anoProxima;

    const mensagem = verificarData(dataEscolhida, "gas");

    proximaTrocaGas.textContent = "Próxima Troca: " + proximaDataFormatada + " — " + mensagem;
});

const dataGasSalva = localStorage.getItem("dataGas");
if (dataGasSalva !== null) {
    dataGas.value = dataGasSalva;
    botaoGas.click();
}

const botaoRemedioVerme = document.getElementById("registrarRemedioVerme");
const dataRemedioVerme = document.getElementById("dataRemedioVerme");
const ultimoRemedioVerme = document.getElementById("ultimoRemedioVerme");
const proximoRemedioVerme = document.getElementById("ProximoRemedioVerme");

botaoRemedioVerme.addEventListener("click", function() {

    if (dataRemedioVerme.value === "") {
        alert("Selecione uma data antes de registrar.");
        return;
    }

    const dataEscolhida = new Date(dataRemedioVerme.value + "T00:00:00");

    const dataUltima = dataRemedioVerme.value;

    const dataUltimaEscolhida = new Date(dataUltima + "T00:00:00");

    const diaUltimo = dataUltimaEscolhida.getDate();

    const mesUltimo = dataUltimaEscolhida.getMonth() + 1;

    const anoUltimo = dataUltimaEscolhida.getFullYear();

    const diaUltimoFormatado = String(diaUltimo).padStart(2, "0");

    const mesUltimoFormatado = String(mesUltimo).padStart(2, "0");

    const dataUltimaFormatada = diaUltimoFormatado + "/" + mesUltimoFormatado + "/" + anoUltimo;

    ultimoRemedioVerme.textContent = "Última vez: " + dataUltimaFormatada;

    localStorage.setItem("dataRemedioVerme", dataRemedioVerme.value);

    dataEscolhida.setTime(adicionarMeses(dataEscolhida, 6).getTime());

    const dia = dataEscolhida.getDate();
    const mes = dataEscolhida.getMonth() + 1;
    const ano = dataEscolhida.getFullYear();

    const diaFormatado = String(dia).padStart(2, "0");
    const mesFormatado = String(mes).padStart(2, "0");

    const dataFormatada = diaFormatado + "/" + mesFormatado + "/" + ano;

    const mensagem = verificarData(dataEscolhida, "remedio");

    proximoRemedioVerme.textContent = "Próxima vez: " + dataFormatada + " —  " + mensagem; 
});

const dataRemedioVermeSalva = localStorage.getItem("dataRemedioVerme");
if (dataRemedioVermeSalva !== null) {
    dataRemedioVerme.value = dataRemedioVermeSalva;
    botaoRemedioVerme.click();
}

const botaoEscova = document.getElementById("registrarEscova");
const dataEscova = document.getElementById("dataEscova");
const ultimaTrocaEscova = document.getElementById("ultimaTrocaEscova");
const proximaTrocaEscova = document.getElementById("ProximaTrocaEscova");

botaoEscova.addEventListener("click", function() {
    if (dataEscova.value === "") {
        alert("Selecione uma data antes de registrar.");
        return;
    }

    const dataEscolhida = new Date(dataEscova.value + "T00:00:00");

    const dia = dataEscolhida.getDate();
    const mes = dataEscolhida.getMonth() + 1;
    const ano = dataEscolhida.getFullYear();

    const diaFormatada = String(dia).padStart(2, "0");
    const mesFormatada = String(mes).padStart(2, "0");

    const dataFormatada = diaFormatada + "/" + mesFormatada + "/" + ano;

    ultimaTrocaEscova.textContent = "Última Troca: " + dataFormatada; 

    localStorage.setItem("dataEscova", dataEscova.value);

    dataEscolhida.setTime(adicionarMeses(dataEscolhida, 3).getTime());

    const diaProxima = dataEscolhida.getDate();
    const mesProxima = dataEscolhida.getMonth() + 1;
    const anoProxima = dataEscolhida.getFullYear();

    const diaProximaFormatado = String(diaProxima).padStart(2, "0");
    const mesProximaFormatado = String(mesProxima).padStart(2, "0");

    const proximaDataFormatada = diaProximaFormatado + "/" + mesProximaFormatado + "/" + anoProxima;

    const mensagem = verificarData(dataEscolhida, "escova");

    proximaTrocaEscova.textContent = "Próxima Troca: " + proximaDataFormatada + " — " + mensagem;
});

const dataEscovaSalva = localStorage.getItem("dataEscova");
if (dataEscovaSalva !== null) {
    dataEscova.value = dataEscovaSalva;
    botaoEscova.click();
}

function verificarData(data, tipo) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    data.setHours(0, 0, 0, 0);

    const diferenca = data - hoje;
    const dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

    if (dias > 1) {
        return "Faltam " + dias + " dias!";
    } else if (dias === 1) {
        return "Falta 1 dia!";
    } else if (dias === 0) {

        if (tipo === "gas") {
            return "Está na hora de trocar o gás!";
        } else if (tipo === "escova") {
            return "Está na hora de trocar a escova!";
        } else if (tipo === "remedio") {
            return "Está na hora de tomar o remédio!";
        }

    } else {

        if (tipo === "gas") {
            return "Está atrasado para a troca do gás!";
        } else if (tipo === "escova") {
            return "Está atrasado para a troca da escova!";
        } else if (tipo === "remedio") {
            return "Está atrasado para tomar o remédio!";
        }
    }
}

function adicionarMeses(data, quantidade) {
    const resultado = new Date(data);
    const diaOriginal = resultado.getDate();

    resultado.setDate(1);
    resultado.setMonth(resultado.getMonth() + quantidade);

    const ultimoDia = new Date(
        resultado.getFullYear(),
        resultado.getMonth() + 1,
        0
    ).getDate();

    resultado.setDate(Math.min(diaOriginal, ultimoDia));

    return resultado;
}