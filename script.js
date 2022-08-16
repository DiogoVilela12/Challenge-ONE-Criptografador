function retornaParaTela (id, mensagem) {
    document.getElementById(id).innerHTML = mensagem
}

function criptografador (mensagem) {
    
    // Removendo imagem e verificando se mensagem é != de vazio
    const imagemCrip = document.getElementById('imagemDescriptografia');
    const msgDescriptrografia = document.getElementById('msgSobreDescriptografia');
    const buttonCopiar = document.getElementById('buttonCopiar');
    
    if (mensagem != '') {
        imagemCrip.style.display = 'none';
        msgDescriptrografia.innerHTML = 'Sua mensagem foi Criptografada !!!'
        buttonCopiar.style.display = 'inline-block';

    } else {
        msgDescriptrografia.innerHTML = 'Insira uma mensagem valida !!!'
        imagemCrip.style.display = 'flex';
        buttonCopiar.style.display = 'none';
    }

    //Mudando o texto escrito
    const textoBonito = document.getElementById('MsgDescriptografada')
    textoBonito.classList.add('textoBonito')

    //mudando botão
    const button = document.getElementById('buttonCopiar');
    button.innerHTML = 'Copiar'
    

    // Criptografia 
    var mensagemCriptografada = ''

    for (letter in mensagem) {
        if (mensagem[letter].toLowerCase() == 'a') {
            mensagemCriptografada = mensagemCriptografada + 'ai'
        } else if (mensagem[letter].toLowerCase() == 'e') {
            mensagemCriptografada = mensagemCriptografada + 'enter'
        } else if (mensagem[letter].toLowerCase() == 'i') {
            mensagemCriptografada = mensagemCriptografada + 'imes'
        } else if (mensagem[letter].toLowerCase() == 'o') {
            mensagemCriptografada = mensagemCriptografada + 'ober'
        } else if (mensagem[letter].toLowerCase() == 'u') {
            mensagemCriptografada = mensagemCriptografada + 'ufat'
        } else {
            mensagemCriptografada = mensagemCriptografada + mensagem[letter]
        }
    }
    retornaParaTela('MsgDescriptografada', mensagemCriptografada)
}

function descriptografador (mensagem) {

    // Removendo imagem e verificando se mensagem é != de vazio
    const imagemCrip = document.getElementById('imagemDescriptografia');
    const msgDescriptrografia = document.getElementById('msgSobreDescriptografia');
    const buttonCopiar = document.getElementById('buttonCopiar');

    if (mensagem != '') {
        imagemCrip.style.display = 'none';
        msgDescriptrografia.innerHTML = 'Sua mensagem foi Descriptografada !!!'
        buttonCopiar.style.display = 'inline-block';

    } else {
        msgDescriptrografia.innerHTML = 'Insira uma mensagem valida !!!'
        buttonCopiar.style.display = 'none';
        imagemCrip.style.display = 'flex';
    }

    
    //Mudando o texto escrito
    const textoBonito = document.getElementById('MsgDescriptografada')
    textoBonito.classList.add('textoBonito')

    //mudando botão
    const button = document.getElementById('buttonCopiar');
    button.innerHTML = 'Copiar'

    // Descriptografia

    var mensagemDescriptografada = ''

    for (var letter = 0; letter < mensagem.length; letter++) {
        if (mensagem[letter].toLowerCase() == 'a') {
            mensagemDescriptografada = mensagemDescriptografada + 'a'
            letter++
        } else if (mensagem[letter].toLowerCase() == 'e') {
            mensagemDescriptografada = mensagemDescriptografada + 'e'
            letter += 4
        } else if (mensagem[letter].toLowerCase() == 'i') {
            mensagemDescriptografada = mensagemDescriptografada + 'i'
            letter += 3
        } else if (mensagem[letter].toLowerCase() == 'o') {
            mensagemDescriptografada = mensagemDescriptografada + 'o'
            letter += 3
        } else if (mensagem[letter].toLowerCase() == 'u') {
            mensagemDescriptografada = mensagemDescriptografada + 'u'
            letter += 3
        } else {
            mensagemDescriptografada = mensagemDescriptografada + mensagem[letter]
        }
    }
    retornaParaTela('MsgDescriptografada', mensagemDescriptografada)
}


function copiarTexto() {
    //copiando texto
    const textoParaCopiar = document.getElementById('MsgDescriptografada').innerHTML;
    navigator.clipboard.writeText(textoParaCopiar);

    //mudando botão
    const button = document.getElementById('buttonCopiar');
    button.innerHTML = 'Copiado !!!'
}