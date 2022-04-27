//inconpleto

function gerar() {
    let valor = document.getElementById('fFim')
    let res = document.getElementById('resultado')
    res.innerHTML += `<p>Irá ser sorteado um número entre 1 e ${valor.value}</p>`
    let aleatorio = Math.floor(Math.random() * valor.value + 1)

    res.innerHTML += `<p>O número sorteado foi <mark>${aleatorio}</mark></p>`
}

function limpar() { // Essa é a funcionalidade do outro botão, pra limpar tudo
    let res = document.querySelector('section#resultado')
    res.innerHTML = null // Vai esvaziar a section toda
}