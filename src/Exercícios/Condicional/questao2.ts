/* Crie uma função que receba um
número e retorne se ele é par ou ímpar
*/


export function exercicio02(): void{
    if(numero % 2 === 0){
        console.log("É par")
    }
    else{
        console.log("É ímpar")
    }
}
import readline from 'readline-sync';


let entrada = readline.question("Informe um número: ");
let numero = Number(entrada);
