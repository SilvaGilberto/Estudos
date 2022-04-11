//inconpleto

function gerar() {
    let valores = [document.getElementById('fIni'), document.getElementById('fFim')]
    let res = document.getElementById('resultado')
    res.innerHTML += `<p>Irá ser sorteado um número entre ${valores[0].value} e ${valores[1].value}</p>`
    let dif = valores[1].value - valores[0].value

    //O erro está nestas duas linhas de cdigo
    let aleatorio = Math.random()
    let num = valores[0].value + Math.trunc(dif * aleatorio)
    //

    res.innerHTML += `<p>O número sorteado foi <mark>${num}</mark></p>`
}

function limpar() { // Essa é a funcionalidade do outro botão, pra limpar tudo
    let res = document.querySelector('section#resultado')
    res.innerHTML = null // Vai esvaziar a section toda
}