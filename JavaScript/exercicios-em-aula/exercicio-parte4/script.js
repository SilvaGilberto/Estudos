function gerar() {
    let tnum = document.getElementById('num')
    let res = document.getElementById('resultado')
    if (tnum.value.length == 0) {
        window.alert('[ERRO] Confira os dados.')
    } else {
        let NumTab = Number(tnum.value)
        res.innerHTML = `<h2 class="ajuste">A tabuada de ${NumTab} é </h2>`
        let c = 1
        while (c <= 10) {
            res.innerHTML += `<h2>${NumTab} X ${c} = ${NumTab * c}</h2>`
            c++
        }
    }
}