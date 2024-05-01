//declarando a variável do array fora das funções.
let amigos = [];


//trazendo os valores do input e realizando a inserção na tag da lista de amigos, utilizando uma condicional para não sobrescrever o conteúdo e sim adicionar. Aqui também já adiciona o nome do amigo no array para próxima etapa de sortear.
function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    //verificar se algum nome foi digitado
    if (amigo.value == '') {
        alert('Digite um nome!');
        return;
    }

    //validação para não adicionar dois nomes iguais
    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado');
        return;
    }

    //adiciona o valor do amigo no array
    amigos.push(amigo.value);

    //condicional para adicionar os amigos na tag.
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    //resetando o conteúdo do input
    amigo.value = '';
}

//fazendo o sorteio que embaralha o array "amigos" e traz o valor na tag de sorteados. A função de embaralhar é chamada nessa função.
function sortear() {
    //verifica se existe o valor mínimo de amigos para sortear (4)
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos para sortear')
        return;
    }
    //chamando a função para embaralhar.
    embaralha(amigos);
    //fazendo a estrutura de repetição para trazer os amigos sorteados.
    let sorteio = document.getElementById('lista-sorteio');
    
    //concatenando os amigos para a lista de sorteados.
    for (let i = 0; i < amigos.length; i++) {
        //condição para verificar quando a quantidade de amigos termina, para que o último sorteado caia com o primeiro sorteado.
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -> ' + amigos [0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -> ' + amigos [i + 1] + '<br>';
        }
    }
}

//aqui é a função que embaralha o array (foi retirado da internet).
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        //atribuição via destructuring.
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}