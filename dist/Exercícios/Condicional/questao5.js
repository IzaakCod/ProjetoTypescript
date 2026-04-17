/* Crie uma função que receba a idade de uma
pessoa e informe se ela é maior de idade */
export function exercicio05() {
    let numero = Number(prompt("Informe um número:"));
    if (numero >= 18) {
        console.log("É maior de idade");
    }
    else {
        console.log("É menor de idade");
    }
}
