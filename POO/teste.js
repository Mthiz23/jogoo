// class Pessoa{
//     constructor(m, h, r, l) {
//         this.nome = m;
//         this.sobrenome = h;
//         this.idade = r;
//         this.cpf = l;
//     }

// }

// let pessoa1 = new Pessoa('marcelo', 'henrique', 18, 'cpf')
// console.log(pessoa1)
// let pessoa2 = new Pessoa('maria', 'ribeiro', 59, 'cpf')
// console.log(pessoa2)

class Veiculo {
    #velocidade
    constructor(tipo, marca, cor, velocidade, passageiros){
        this.tipo = tipo;
        this.marca = marca;
        this.cor = cor;
        this.#velocidade = velocidade;
        this.passageiros = passageiros
    }
    acelerar () {
        this.#velocidade += 10
        console.log('vrum vrum')
    }
    freiar () {
        this.#velocidade -= 5
        console.log('niiiiiiiiii')
    }
    apresentar() {
        console.log(`O ${this.tipo} de marca ${this.marca} esta a ${this.#velocidade} km/h`)
    }
    get velocidade (){
        return this.#velocidade
    }
    set velocidade (valor){
        if (valor < 0){
            console.log('erro, o valor não pode ser menor que 0')
        } else {
            this.#velocidade += valor
        }
        this.#velocidade += valor
    }

}

class Carro extends Veiculo{
constructor(tipo, marca, cor, velocidade, passageiros, placa){
    super(tipo, marca, cor, velocidade, passageiros)
    this.placa = placa
}
}
class Barco extends Veiculo{
    constructor(tipo, marca, cor, velocidade, passageiros, marina){
        super(tipo, marca, cor, velocidade, passageiros)
        this.marina = marina
}
acelerar (){
    this.velocidade += 1
    console.log ('HAAAAAAAAAAAAANNNN')
}}
class Aviao extends Veiculo{
    constructor(tipo, marca, cor, velocidade, passageiros, aeroporto){
        super(tipo, marca, cor, velocidade, passageiros)
        this.aeroporto = aeroporto
} acelerar (){
    this.velocidade += 2
    console.log ('HUMMMMMM')
}}

let carro1 = new Carro('carro', 'renault', 'preto', 0,0, 'abc0984')
let carro2 =  new Carro('carro', 'bmw', 'preto', 0,0, 'tomi777')
let barco = new Barco('lancha', 'ferrari', 'branca', 0, 0, 'biguacity')
carro1.apresentar()
carro1.freiar()
carro1.apresentar()
carro1.acelerar()
carro1.apresentar()
carro1.freiar ()
carro1.apresentar()
barco.acelerar ()
barco.apresentar ()