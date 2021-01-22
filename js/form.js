let botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault()  

    let form = document.querySelector('#form-adiciona')
    let paciente = obtemPacienteDoFormulario(form)
    console.log(paciente)

    let erros = validaPaciente(paciente)

    if(erros.length > 0){
        exibeMensagensErro(erros)
        return
    }

    adicionaPacienteNaTabela(paciente)

    form.reset()
    let mensagensDeErro = document.querySelector('.mensagens-de-erro')
    mensagensDeErro.innerHTML = ''
})

function adicionaPacienteNaTabela (paciente){
    let pacienteTr = montaTr(paciente)
    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
}
 
function exibeMensagensErro(erros){
    let ul = document.querySelector('.mensagens-de-erro')
    ul.innerHTML = ''
    erros.forEach(function(erro){
        let li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
        
    })
}

function obtemPacienteDoFormulario(form){

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)

    }
    return paciente
}

function montaTr (paciente) {
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    let nomeTd = document.createElement('td')
    nomeTd.classList.add('info-nome')
    let pesoTd = document.createElement('td')
    pesoTd.classList.add('info-peso')
    let alturaTd = document.createElement('td')
    alturaTd.classList.add('info-altura')
    let gorduraTd = document.createElement('td')
    gorduraTd.classList.add('info-gordura')
    let imcTd = document.createElement('td')
    imcTd.classList.add('info-imc')

    nomeTd.textContent = paciente.nome
    pesoTd.textContent = paciente.peso
    alturaTd.textContent = paciente.altura
    gorduraTd.textContent = paciente.gordura
    imcTd.textContent = paciente.imc

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr
}


function validaPaciente (paciente) {
    let erros = []

    if(!validaPeso(paciente.peso))erros.push('Peso inválido!')
    
    if(paciente.nome.length === 0)erros.push('Nome não pode ser em branco!')
    
    if(!validaAltura(paciente.altura))erros.push('Altura inválida!')
    
    if(paciente.gordura.length == 0)erros.push('Gordura inválida!')

    if(paciente.peso.length == 0)erros.push('Peso não pode ficar em branco')

    if(paciente.altura.length == 0) erros.push('Altura não pode ser em branco')

    return erros
    

}

