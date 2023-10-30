var nome = window.document.getElementById('nome');
var email = document.querySelector('#email')
var assunto = document.querySelector('#assunto')
var mapa = document.querySelector('#mapa')
var nomeOk = false;
var emailOk = false;
var assuntoOk = false;

nome.style.width = '32%'
email.style.width = '32%'
assunto.style.width = '32%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
};

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido!'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido!'
        txtEmail.style.color = 'green'
        emailOk = true;
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtEmail.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true;
    }
}


function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!' + ' Obrigado por enviar sua mensagem, ' + nome.value + '!')

    } else {
        alert('Por favor, reveja os dados e preencha o formulário corretamente!')
    }
}



