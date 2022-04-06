function verificar() {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let anoNasc = document.getElementById('nasc')
    let res = document.getElementById('resultado')
    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = anoAtual - Number(anoNasc.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 13) {
                img.setAttribute('src', 'midia/criança.jpg')
            } else if (idade > 13 && idade < 21) {
                img.setAttribute('src', 'midia/menino.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'midia/homem.jpg')
            } else {
                img.setAttribute('src', 'midia/idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 13) {
                img.setAttribute('src', 'midia/menininha.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'midia/menina.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'midia/mulher.jpg')
            } else {
                img.setAttribute('src', 'midia/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}