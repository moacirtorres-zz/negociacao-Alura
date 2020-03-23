class NegociacaoController {

	constructor() {

		this.inputQuantidade = document.querySelector("#quantidade")
		this.inputData = document.querySelector("#data")
		this.inputValor = document.querySelector("#valor")

	}

	adiciona(event) {
		event.preventDefault()
	
	let negociacao = new Negociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value)	
	console.log(negociacao)



	}
}