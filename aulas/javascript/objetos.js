// dados simples: numericos, strings, boolean..
// array: [1,2,3, "ana"]
//objetos: {propriedade: valor}
// funcoes;  functiion somar () {} => {}

// object literal = vou criar objeto direto - objetcos literal 
// irar criar uma chave e associar a uma propriedade valor

// const pessoa = { 

//     propriedade1: "valor1",
//     // key: value
//     nome: "Ana",
//     idade: 29,
//     profissao: "Desenvolvedora",
//     possuiFaculdade: true       

// }

const perfil = {
    nome: "João",
    idade: 32,
    profissao: "Designer",
    possuiFaculdade: false,
    solteiro: true
    roupas : [ "camisetas", "calças", "vestidos" ]      
}

// perfil.nome = "Carlos" // alterando valor da propriedade nome
// perfil.idade = 28 // alterando valor da propriedade idade   


console.log(Object.entries(perfil)) // mostra todas as chaves e valores do objeto em forma de array
console.log(Object.keys(perfil)) // mostra todas as chaves e valores do objeto em forma de array
console.log(Object.values(perfil)) // mostra todas as chaves e valores do objeto em forma de array




// for(let chave in perfil) {
//     console.log(chave)
//     console.log(perfil[chave])
// }

// let dadosPerfil = [];

// for(let dados in perfil) {
//     dadosPerfil.push( perfil + ": " + perfil[dados] )
// }

// console.log(dadosPerfil.join("\n")) // join une os elementos do array em uma string, separando por que eu quiser        

// alert(dadosPerfil.join("\n"))





// for(let dados in perfil) {
//     console.log(dados)
// }


// for(let i=0; < perfil.lenght; i++ ) {
//     console.log(perfil.roupas[i])
// }

// // imprimindo o objeto inteiro





// console.log(pessoa)
// console.log(perfil)

// // como acessar as propriedades do objeto
// // dot notation (notacao de ponto)

// console.log(pessoa.nome) // Ana
// console.log(perfil.idade) // 32

// // atribuicao dinamica
// // perfil.roupas = [ "camisetas", "calças", "vestidos" ] // adicionando nova propriedade ao objeto
// // console.log(perfil.roupas)  

// // bracket notation (notacao de colchetes)





