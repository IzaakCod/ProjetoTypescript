/* Analisador de Desempenho de Vendas (Relatório de Equipe)
Imagine que você está gerindo uma equipe de 5 vendedores.
 Função classificarVenda(valor):
o Se valor < 1000: Retorna "Bronze"
o Se valor entre 1000 e 5000: Retorna "Prata"
o Se valor > 5000: Retorna "Ouro"
 O Programa:
1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
2. Dentro do laço, chame a função de classificação.
3. Ao final, o programa deve exibir:
 O total de vendas da equipe (soma).
 Quem foi o vendedor com a maior venda (maior valor digitado).
 Quantos vendedores atingiram a categoria "Ouro" */

let valor: number = 0
let totalVendas: number = 0
let maiorVenda: number = 0
let vendedorMaior: number = 0
let contOuro: number = 0

function classificarVenda(valor: number): string{
    if(valor < 1000){
        return "Bronze"
    }
    else if(valor == 1000 || valor < 5000){
        return "Prata"
    }
    else{
        return "Ouro"
    }
}

for(let i = 1; i <= 5; i++){

    valor = Number(prompt("Valor da venda do vendedor " + i + ":")!)

    totalVendas += valor

    if(valor > maiorVenda){
        maiorVenda = valor
        vendedorMaior = i
    }

    let categoria = classificarVenda (valor)
    
    if(categoria === "Ouro"){
        contOuro++
    }

    }
classificarVenda(valor)

console.log("O total de vendas da equipe foi: " +totalVendas)
console.log("Maior venda foi de: " +maiorVenda+ " E o vendedor com a maior venda foi: " +vendedorMaior)
console.log("O total de pessoas na categoria Ouro foi de: " +contOuro)


