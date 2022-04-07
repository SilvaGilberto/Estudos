let num = [5, 8, 2, 9, 3]
//mostrando o vetor 
console.log(num)

console.log(`Nosso vetor é o ${num}`)

//Adicionando um novo valor aovetor
num[5] = 6
console.log(`Nosso vetor é o ${num}`)

//mostrando quantas posições tem o nosso vetor
console.log(`Nosso vetor tem ${num.length} posições`)

//Arrumando o vetor na ordem crescente
num.sort()
console.log(`Nosso vetor é o ${num}`)

//adicionando um novo conteudo para O ULTIMO elemento do nosso vetor
num.push(10)
console.log(`Nosso vetor é o ${num}`)

//mostrando na tela o vetor inteiro bonitinho
for(let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

//mostrando de forma mais simples em um jeito que so funciona para vetores
for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//procurando o indice de um valor
let pos = num.indexOf(8)
console.log(`O valor 8 esta no elemento ${pos}`)