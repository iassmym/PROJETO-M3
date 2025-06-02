class Produto{
  constructor(nome, descricao, valor, imagem){
    this.nome = nome;
    this.descricao = descricao;
    this.valor = valor;
    this.imagem = imagem;
  }
}

const botaoAdicionar = document.getElementById('botao-add');

botaoAdicionar.addEventListener('click', adicionarDoce);

const nome = document.getElementById('input-nome');
const descricao = document.getElementById('input-descricao');
const valor = document.getElementById('input-valor');
const imagem = document.getElementById('image-select');
const containerProdutos = document.getElementById('container-products');

const listaProdutos = [];
function adicionarDoce(event){
  event.preventDefault();

  const novoDoce = new Produto(nome.value, descricao.value, valor.value, imagem.value);
  
  listaProdutos.push(novoDoce);

  containerProdutos.innerHTML = ''; // limpa antes de adicionar

  listaProdutos.forEach((doce) => {
    const item = document.createElement("div");
    item.classList.add("cards-doce");
    item.innerHTML = `
      <p>Nome: ${doce.nome}</p>
      <p>Descrição: ${doce.descricao}</p>
      <p>Valor: R$ ${doce.valor}</p>
      <img src="${doce.imagem}" alt="${doce.nome}">
      <span>
        <button>Editar</button>
        <button>Excluir</button>
      </span>
    `;
    containerProdutos.appendChild(item);
  });

  // Opcional: limpar campos
  nome.value = '';
  descricao.value = '';
  valor.value = '';
  imagem.value = '';
}