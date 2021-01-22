
const botaoBuscar = document.querySelector('#buscar-pacientes')

botaoBuscar.addEventListener('click', function(){
    console.log('buscando pacientes')

    let xhr = new XMLHttpRequest()

    xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes')

    xhr.addEventListener('load', function(){
        let erroAjax = document.querySelector('#erro-ajax');
            if(xhr.status === 200){
                erroAjax.classList.add('invisivel');
                let resposta = xhr.responseText;
                let pacientes = JSON.parse(resposta);
        
                pacientes.forEach(function(paciente){
        
                    adicionaPacienteNaTabela(paciente);
                })
            }else {
                console.log(xhr.status);
                console.log(xhr.statusText);
        
                erroAjax.classList.remove('invisivel')
            }
    });

    xhr.send();
})