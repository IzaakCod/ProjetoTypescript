/* Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
valor -1 é utilizado como sentinela para fim de leitura. */

let qpares: number =0
let qimpares: number = 0
let numero: number = 0

    
    numero = Number(prompt("Informe um número inteiro ou -1 para sair"))
export function exercicio04(): void{
    while(numero != -1){
        if(numero % 2 == 0){
            qpares++
        }
        else{
            qimpares++
        }
        numero = Number(prompt("Informe um número inteiro ou -1 para sair"))
    }
}
exercicio04()

console.log("A quantidade de números pares são: " ,qpares)
console.log("A quantidade de números impares são: " ,qimpares)