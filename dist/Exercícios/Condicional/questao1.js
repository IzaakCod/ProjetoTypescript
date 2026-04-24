/* Crie um programa que leia um número e informe se ele é:
 Par ou Ímpar
 Positivo ou Negativo */
export function exercicio01() {
    let numero = Number(prompt("Informe um número"));
    if (numero % 2 == 0) {
        console.log("Número é par");
    }
    else {
        console.log("Número é ímpar");
    }
    if (numero > 0) {
        console.log("Número é positivo");
    }
    else {
        console.log("Número é negativo");
    }
}
exercicio01();
