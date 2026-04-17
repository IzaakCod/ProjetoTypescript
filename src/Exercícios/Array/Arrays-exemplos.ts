let cores: string[] = ["vermelho","Verde","azul"]

let numeros: number[] = [30,56,89,5,3,6]


//push(): Insere um novo elemento ao final do array
//cores.push("Amarelo") // Adicional na lista ex:["vermelho","Verde","azul", "Amarelo]

//pop(): Remove o último item do array
//cores.pop() // Remove o último item ex: ["vermelho","Verde","azul",]

//unshift(): Insere um novo elemento no ínicio do array.
//cores.unshift("Roxo")

//shitf(): Removo o elemento no ínicio do array.
//cores.shift()

//reverse(): Inverte a ordem dos elementos.
//cores.reverse()

//sort(): Ordena os elementos em ordem crescente (alfabética para strings).
//cores.sort()

//join(): Junta todos os elementos em uma única string,
//separados por vírgula (ou outro separador escolhido).
//let novaPalavra = cores.join("")

//toString(): Converte o array em uma string simples separada por vígulas.
//let novaString = cores.toString()

//concat(): Junta dois ou mais arrays e retorna um novo, sem alterar os originais
/*let ar1: string[] = ["Carro","Moto"]
let ar2: string[] = ["Navio", "Skate"]
let transporte = ar1.concat(ar2)

console.log(ar1)
console.log(ar2)
console.log(transporte)*/


//indexOf(): Procura um elemento e retorna a sua posição (índice).
// Retorna -1 se não encontrar
//let posicao = cores.indexOf("preto")  // Retorna-1

//splice(): Remove ou substitui elementos em um ponto específico.
//let num: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// A partit do índice 2, remova 4 elementos 
//num.splice(2, 4)

//filter() - Filtro de Dados
//O que faz ? Cria um novo array apenas com itens que passam em um
//*Teste* (verdadeiro ou falso)

//Sintaxe:

// array.filter((elemento) => {
//    return /* condição lógica */ 
//      })

const notas = [4.5, 5.8, 9.2, 5.0, 10.0,]

//Filtra apenas notas maiores ou iguais a 6
const aprovados = notas.filter((n) => {
        return n >= 6
 })

console.log(notas)
console.log(aprovados)