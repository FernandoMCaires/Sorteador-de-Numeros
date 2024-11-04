function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);


    if (de >= ate){
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }
    


    if (!quantidade || !de || !ate) {
        alert("Por favor, preencha todos os campos antes de sortear.");
        return; 
    }

    let sorteados = [];
    let numero;
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    sorteados.sort((a, b) => a - b);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ` <label class="texto__paragrafo">Números sorteados: ${sorteados} </label> `

    alterarStatusBotaoAtivo();

}

function obterNumeroAleatorio(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotaoAtivo() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao')
    }
}

function alterarStatusBotaoInativo(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao')) {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado')
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value = ''

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ` <label class="texto__paragrafo">Sem números sorteados. </label> `

    alterarStatusBotaoInativo();
}
