import {Formulario} from "./Formulario.js";
document.getElementById("cadastrar").addEventListener("click", cadastrarPaciente)

document.getElementById("selecionar").addEventListener("change", dadosPaciente)

const formulario = new Formulario();

function cadastrarPaciente(e) {
    e.preventDefault();
    const nome = document.getElementById("cadastrarNome").value;
    const idade = document.getElementById("cadastrarIdade").value;
    const genero = document.querySelector('input[name="cadastrarGenero"]').value;
    const peso = document.getElementById("cadastrarPeso").value;
    const altura = document.getElementById("cadastrarAltura").value;
    const cintura = document.getElementById("cadastrarCintura").value;
    const quadril = document.getElementById("cadastrarQuadril").value

    formulario.adicionarPaciente(nome, idade, genero, peso, altura, cintura, quadril)
    console.log();
    atualizar();
}

function atualizar(){
    const listarPacientes = formulario.listarPacientes()
    const pacienteSelect = document.getElementById("selecionar");
    pacienteSelect.innerHTML = '<option value=" ">Selecione um paciente</option>'
    listarPacientes.forEach((paciente, index) => {
        const option = document.createElement('option')
        option.value = index;
        option.textContent = paciente.nome
        pacienteSelect.appendChild(option)
    })
    return atualizar
}
function dadosPaciente(){
    const listaPacientes = document.getElementById("listarPacientes")
    listaPacientes.innerHTML = "";
    formulario.pacientes.forEach((paciente) => {
        const linha = listaPacientes.insertRow(0);
        const tdNome = linha.insertCell(0);
        const tdIdade = linha.insertCell(1);
        const tdGenero = linha.insertCell(2);
        const tdPeso = linha.insertCell(3);
        const tdAltura = linha.insertCell(4);
        const tdIMC = linha.insertCell(5);
        const tdGordura = linha.insertCell(6);
        const tdPesoIdeal = linha.insertCell(7);
        const tdTMB = linha.insertCell(8);
        tdNome.textContent = paciente.nome
        tdIdade.textContent = paciente.idade
        tdGenero.textContent = paciente.genero
        tdPeso.textContent = paciente.peso 
        tdAltura.textContent = paciente.altura 
        tdIMC.textContent = paciente.calcularImc2().toFixed(2)
        tdGordura.textContent = paciente.calcularPercentualDeGordura().toFixed(2)
        tdPesoIdeal.textContent = paciente.calcularPesoIdeal().toFixed(2)
        tdTMB.textContent = paciente.calcularTaxaMetabolica().toFixed(2)
        
    })
}
