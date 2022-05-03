let res = document.getElementById('resultado')
function carregarPosts() {
    res.innerHTML = 'Carregando...'

    fetch('https://jsonplaceholder.typecode.com/posts')
        .then(function(resultado){
            return resultado.json()
        })
        .then(function(json){
            res.innerHTML += json.length + ' posts'
        })
        .catch(function(error){
            console.log('Deu problema')
        })
}