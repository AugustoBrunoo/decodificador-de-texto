
const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".conteudo__resposta__mensagem");

const mensagemNaoEncontrada = document.querySelector(".mensagem-principal");
const textoInformativo = document.querySelector(".mensagem-secundaria");

function btnCriptografar() {
    const textoCriptografado = criptografar(textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = "";

    esconderMensagensInformativas() 
}

function criptografar (stringCriptografada){

    let matrizCodigo = [["e", "enter"] , ["i" , "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase(); 

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }
    }
    return stringCriptografada;
}

function btnDescriptografar(){
    const textoDescriptografado = descriptografar(textArea.value);
    mensagem.value = textoDescriptografado;
    textArea.value = "";

    esconderMensagensInformativas() 
}

function descriptografar(stringDescriptografada){
    let matrizCodigo = [["e", "enter"] , ["i" , "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDescriptografada.includes(matrizCodigo[i][1])){
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDescriptografada;
}

function esconderMensagensInformativas(){
    mensagemNaoEncontrada.style.display = 'none';
    textoInformativo.style.display = 'none';
    mensagem.style.backgroundImage = 'none'; 

}

function verificarMensagem(){
    if (mensagem.value.trim() === ''){
        mensagemNaoEncontrada.style.display = 'block';
        textoInformativo.style.display = 'block';
        mensagem.style.backgroundImage = 'url(/assets/personagem-mensagem.svg)';
    } else {
        esconderMensagensInformativas();
    }
}

function btnCopiar(){
    mensagem.select();
    document.execCommand("copy");
    alert('Texto copiado!');
}

textArea.addEventListener('blur', verificarMensagem);
mensagem.addEventListener('input', verificarMensagem);