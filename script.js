const tituloProduto = document.getElementById("titulo-produto");
const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const nomeCorSelecionada = document.getElementById("nome-cor-selecionada");

const opcaoImagem0 = document.getElementById("0-imagem-miniatura");
const opcaoImagem1 = document.getElementById("1-imagem-miniatura");
const opcaoImagem2 = document.getElementById("2-imagem-miniatura");

const verdeCipreste = {
  nome: "Verde-cipreste",
  pasta: "imagens-verde-cipreste",
};

const azulInverno = {
  nome: "Azul-inverno",
  pasta: "imagens-azul-inverno",
};

const meiaNoite = {
  nome: "Meia-noite",
  pasta: "imagens-meia-noite",
};

const estelar = {
  nome: "Estelar",
  pasta: "imagens-estelar",
};

const rosaClaro = {
  nome: "Rosa-claro",
  pasta: "imagens-rosa-claro",
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ["41 mm", "45 mm"];

let tamanhoSelecionado = 1;
let imagemSelecionada = 1;
let corSelecionada = 1;

function trocarTamanho() {
  const opcaoTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0);
  
  tamanhoSelecionado = opcaoTamanhoSelecionado;
  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
  
  if (opcoesTamanho[tamanhoSelecionado] === "41 mm") {
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
}

function trocarImagem() {
  const opcaoImagemSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0);
  
  imagemSelecionada = opcaoImagemSelecionada;
  
  imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
  
  
}

function trocarCor() {
  const numeroCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0);
  
  corSelecionada = numeroCorSelecionada;
  
  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome.toLocaleLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
  
  opcaoImagem0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-0.jpeg`;
  opcaoImagem1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-1.jpeg`;
  opcaoImagem2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-2.jpeg`;
  imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
  
  nomeCorSelecionada.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`;
}