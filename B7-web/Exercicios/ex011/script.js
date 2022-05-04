function mostrar() {
    let arquivo = document.getElementById('arquivo').files[0];

    let img = document.createElement('img')
    img.src = URL.createObjectURL(arquivo)
    img.width = 200

    document.getElementById('resultado').appendChild(img)
}