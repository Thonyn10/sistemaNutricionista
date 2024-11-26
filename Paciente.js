class Paciente {
    constructor(nome, idade, genero, peso, altura, estiloDeVida){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.genero = genero;
        this.estiloDeVida = estiloDeVida; 
    }
    calcularImc(peso , altura){
     
    const resultadoIMC = peso / (altura * altura);
    if (resultadoIMC < 18.5 ) {
        return `Abaixo do peso`
   } 
   else if (resultadoIMC > 18.6 && resultadoIMC < 24.9) { 
        return `Peso ideal `
    }
    else if (resultadoIMC > 25.0 && resultadoIMC < 29.9) {
        return `Acima do peso`
    }
    else if (resultadoIMC > 30 && resultadoIMC < 34.9) {
        return `Obesidade 1`
    }
    else if (resultadoIMC > 35 && resultadoIMC < 39.9) {
        return `Obesidade 2`
    }
    else  {
        return `Obesidade 3`
    } 
    }
    calcularImc2(){
        const resultadoIMC2 = this.peso / (this.altura * this.altura);
            return  resultadoIMC2 
    }
    calcularTaxaMetabolica(){
        
        if(this.genero === "Masculino")  
            { const resultadoTaxa = 88.36 + (13.4 * this.peso) + (4.8 * (this.altura * 100)) - (5.7 * this.idade)
            return resultadoTaxa
        }
        else if(this.genero === "Feminino") 
            { const resultadoTaxa = 447.6 + (9.2 * this.peso) + (3.1 * (this.altura * 100)) - (4.3 * this.idade)
            return resultadoTaxa
        }
    }
    calcularPercentualDeGordura(){
        
        if(this.genero === "Masculino")
            {const resultadoPercentual = 1.20 * this.calcularImc2() + 0.23 * this.idade - 16.2
            return resultadoPercentual
        }
        else(this.genero === "Feminino") 
            {const resultadoPercentual = 1.20 * this.calcularImc2() + 0.23 * this.idade - 5.4
            return resultadoPercentual
        }
    }
    calcularPesoIdeal(){
        
        if(this.genero === "Masculino") 
            { const resultadoPesoIdeal =  50 + 2.3 * (this.altura * 100 - 152)
            return resultadoPesoIdeal 
        }
        else if (this.genero === "Feminino")
         { const resultadoPesoIdeal = 45.5 + 0.9 * (this.altura * 100 - 152)
            return resultadoPesoIdeal 
        }
    }
    calcularMassaMagra(){
        
        const resultadoMassa = this.peso - (this.peso * this.gorduraCorporal / 100)
        return resultadoMassa + "Este e seu peso ideal"
    }
    calcularNecessidadeCalorica(){
        let resultadoNescessidade 
        if(this.estiloDeVida === "Sedentario") { 
            resultadoNescessidade = this.calcularTaxaMetabolica() * 1.2 
            return resultadoNescessidade
        }
        else if (this.estiloDeVida === "LevementeAtivo") { 
            resultadoNescessidade = this.calcularTaxaMetabolica() * 1.375
            return resultadoNescessidade
        }
        else if (this.estiloDeVida === "ModeradamenteAtivo") { 
            resultadoNescessidade = this.calcularTaxaMetabolica() * 1.550
            return resultadoNescessidade
        }
        else { 
            resultadoNescessidade = this.calcularTaxaMetabolica() * 1.725
            return resultadoNescessidade
        }
    }
    
}

    const paciente = new Paciente("Anthony" , 18 , 90, 1.59, "Masculino" , "Sedentario")
    console.log(paciente.calcularTaxaMetabolica(paciente));
    
    console.log(paciente.calcularNecessidadeCalorica(paciente));
    
    
export {Paciente}