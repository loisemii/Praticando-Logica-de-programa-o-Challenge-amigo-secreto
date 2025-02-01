//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
listaAmigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input');
    let valorAmigo = nomeAmigo.value.trim()

    if (valorAmigo == '' || valorAmigo == ' ') { 
        alert('Por favor, insira um nome válido')
        nomeAmigo.value = '';
        mensagemInicial()  
    } else if (/\d/.test(valorAmigo)) { 
        alert('Por favor, insira um nome válido(Números detectados)');
        nomeAmigo.value = ''
        mensagemInicial();
    } else {
        listaAmigos.push(valorAmigo);
        nomeAmigo.value = '';
        mostrarUL(); 
    }

}

function mostrarUL() { 
    let listaHTML = document.querySelector('ul');
    const ultimoAmigo = listaAmigos[listaAmigos.length - 1] 
    let li = document.createElement('li'); 
    li.textContent = ultimoAmigo;
    listaHTML.appendChild(li); 
}

function resetarUl(){
    let listaHTML = document.querySelector('ul');
    listaHTML.innerHTML = '';
    listaAmigos = [];
}

function sortearAmigo() {
    if (listaAmigos.length <= 1) {
        alert('Número de amigos inválido, insira 2 ou mais nomes para continuar.')
    }
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    console.log(amigoSorteado);
    let parabensMensagem = document.querySelector('h1');
    let proximoJogoMensagem = document.querySelector('h2');
    parabensMensagem.textContent = ('Parabéns ' + amigoSorteado + ' você foi sorteado(a)!');
    proximoJogoMensagem.textContent = ('Quer realizar outro sorteio ? Insira os nomes novamente!');
    resetarUl();

}

function mensagemInicial(){
    let mensagem = document.querySelector('h1');
    let mensagem2 = document.querySelector('h2');
    mensagem.textContent = 'Amigo Secreto';
    mensagem2.textContent = 'Digite o nome dos seus amigos';
}