
let titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

let pacientes = document.querySelectorAll('.paciente')


for(let i = 0; i < pacientes.length; i++){

    let paciente = pacientes[i]

    let peso = paciente.querySelector('.info-peso').textContent
    let altura = paciente.querySelector('.info-altura').textContent
    
    let tdImc = paciente.querySelector('.info-imc')
    
    let pesoEhValido = validaPeso(peso)
    let alturaEhValido = validaAltura(altura)
    
    
    if(!pesoEhValido) {
        pesoEhValido = false
        tdImc.textContent = 'Peso inválido!!'
        paciente.classList.add("paciente-invalido")
    }
    
    if(!alturaEhValido) {
        alturaEhValido = false
        tdImc.textContent = 'Altura Inválida!!'
        paciente.classList.add("paciente-invalido")
    }
    
    if (alturaEhValido && pesoEhValido) {
        let imc = calculaImc(peso, altura)
        tdImc.textContent = imc
        
    }
    
}

function validaPeso (peso){
    if(peso >= 0 && peso < 1000){
        return true
    }
    return false
}

function validaAltura (altura) {
    if(altura >= 0 && altura <= 3.0){
        return true
    }
    return false
}   

function calculaImc(peso, altura){
    let imc = 0

    imc = peso / (altura *altura)
    
    return imc.toFixed(2)
}


