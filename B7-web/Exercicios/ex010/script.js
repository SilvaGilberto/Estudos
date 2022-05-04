function enviar() {
    let arquivo = document.getElementById('arquivo').files;

    let body = new FormData()
    body.append('title', 'bla bla bla')
    body.append('arquivo', arquivo)

    let req = await fetch('', {
        method: 'POST',
        body: body, 
        Headers: {
            'Content-Type': 'multipart/form-data'
        }
    }) 
}