let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let tentativas = 1;
let numeroSecreto = parseInt(numeroAleatorio());



function numeroAleatorio(){
    let numeroSorteado = Math.floor(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroSorteado)){
        return numeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroSorteado);
        console.log(listaDeNumerosSorteados)
        return numeroSorteado; 
    }
}

const exibirNaTela = function(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

const limparInput = function(){
    chute = document.querySelector('input');
    chute.value = '';   
}

const telaInicial = function(){
    exibirNaTela('h1', 'Jogo do número secreto');
    exibirNaTela('p', 'Escolha um número de 1 à 10');
}

telaInicial();

const verificarChute = function (){
    let chute = parseInt(document.querySelector('input').value);
    let mensagemTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        if(chute == numeroSecreto){
            exibirNaTela('h1', 'Você acertou!');
            exibirNaTela('p', `Parabéns! Você acertou com ${tentativas} ${mensagemTentativas}!`);
            document.getElementById('reiniciar').removeAttribute('disabled')
        }
        else if(chute > numeroSecreto ){
            exibirNaTela('h1', 'Você errou!');
            exibirNaTela('p', 'O número secreto é menor!');
        }
        else {
            exibirNaTela('h1', 'Você errou!');
            exibirNaTela('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparInput();
}

const reiniciarJogo = function (){
    telaInicial();
    limparInput();
    tentativas = 1;
    numeroSecreto = parseInt(numeroAleatorio());
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

