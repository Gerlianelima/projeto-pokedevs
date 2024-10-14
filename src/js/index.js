/*O OBJETIVO - quando clicar no pokedev da listagem temos que esconder
o cartao do pokedev aberto e mostrar o cartao correspondente
ao que foi selecionado na listagem
PASSO 01- precisamos criar uma variável no JS para trabalhar com
listagem de pokedev
PASSO 02- Identificar o evento de clique no elemento da listagem de pokedevs 
PASSO03- REMOVER a classe aberto só do cartão que está aberto
PASSO 4- ao clicar em um pokedev da lista pegamos o id desse pokedev para saber qual cartão abrir
PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
PASSO 6- ADICIONAR a classe ativo no pokedev selecionando na listagem*/

//PASSO 1-
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
//PASSO 2
listaSelecaoPokedevs.forEach(pokedev => {
	pokedev.addEventListener("click", () => {
//PASSO 3
		esconderCartaoPokedev();

//PASSO 4
		const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);
        
//PASSO 5
		desativarPokedevNaListagem();

//PASSO 6
		ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);

	})
})


function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
	const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
	pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
	const pokedevAtivoNaListagem = document.querySelector(".ativo");
	pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
	const idPokedevSelecionado = pokedev.attributes.id.value;
	const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
	const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
	cartaoPokedevParaAbrir.classList.add("aberto");
	return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
	const cartaoPokedevAberto = document.querySelector(".aberto");
	cartaoPokedevAberto.classList.remove("aberto");
}
