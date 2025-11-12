const formulario = document.querySelector('#form-user')
// const titulo = document.querySelector('#nome').value
// const desc = document.querySelector('#descricao').value
// const urlImagem = document.querySelector('#img')
const btnRemover = document.querySelector('#remover')
const containerCards = document.querySelector('#container-card')

const itensProdutos = [
    // {nome: "Prod1", descricao; "", url: "http//dfaffdas"),

]
// addEventListener = escutador de eventos  
formulario.addEventListener('submit', function(event){
    event.preventDefault() // previne o comportamento padrão do formulário (recarregar a página)
    const titulo = document.querySelector('#nome').value.trim()
    const desc = document.querySelector('#descricao').value.trim()
    const urlImagem = document.querySelector('#img').value.trim()
    itensProdutos.push({ titulo, descricao, urlImagem })  
    console.log(itensProdutos)
    // let cardProduto = `
    // <div class="card">
    //   <img src="${urlImagem}" alt="Imagem do produto ${titulo}">
    //   <h2>${titulo}</h2>
    //   <p>${desc}</p>
    // </div>
    // `
    // containerCards.innerHTML += cardProduto

    formulario.reset() // limpa o formulário após o envio
  })


//   // criar uma funcao que gera o template do card
//     function criarcardnovo (titulo, desc, urlImagem) {
//         return `
//         // TODO: criar tags html e retonar
//     }
//         // renderizar o card novo na pagina do app
//         function renderizarcard (card) {
//         //TODO: inserir card atualizado na pagina
//     }

//   // remover o ultimo card adicionado
//   btnRemover.addEventListener('click', function() {
//   alert('isso vai acabar deletando um card')
//     )}