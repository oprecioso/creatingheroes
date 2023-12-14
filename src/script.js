class heroi {

    ataque = ""

    constructor (nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    }

    atacar() {
    if (this.tipo === "mago") {
        this.ataque = "magia"

    } else if (this.tipo === "guerreiro") {
        this.ataque = "espada"

    } else if (this.tipo === "monge") {
        this.ataque = "artes marciais"

    } else if (this.tipo === "ninja") {
        this.ataque = "shuriken"
        
    } else {
        this.tipo = `- ${this.tipo} - é um TIPO INVÁLIDO`
        this.ataque = "ATAQUE INVÁLIDO"
    }

    console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let mago = new heroi ("Mago", "28","mago")
let guerreiro = new heroi ("Mago", "28","guerreiro")
let monge = new heroi ("Mago", "28","monge")
let ninja = new heroi ("Mago", "28","ninja")





mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()