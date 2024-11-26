import {Paciente} from "./Paciente.js";
class Formulario {
    constructor() {
        this.pacientes = []
    }
    adicionarPaciente(nome, idade, genero, peso, altura, cintura, quadril){
        if(!nome || !idade || !genero || !peso || !altura || !cintura || !quadril) {
            alert("Preencha todos os campos para cadastrar!");
            return
        }
        const novoPaciente = new Paciente(nome, idade, genero, peso, altura, cintura, quadril);
        this.pacientes.push(novoPaciente);
        console.log(novoPaciente);
        
        alert("Paciente adicionado com sucesso!")
    }
    listarPacientes() {
        return this.pacientes
    }
}

export{Formulario}