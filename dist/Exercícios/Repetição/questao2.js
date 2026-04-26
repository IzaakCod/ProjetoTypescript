/* Desenvolva a tabuada de um número usando for */
export function exercicio02() {
    let numero = Number(prompt("Informe um número:"));
    for (let i = 1; i <= 10; i++) {
        let resultado = (numero * i);
        console.log("A tabuada de " + numero + " é: " + numero + " x " + i + " = " + resultado);
    }
}
exercicio02();
