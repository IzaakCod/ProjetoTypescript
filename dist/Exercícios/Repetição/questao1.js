/* Crie um programa que peça números até o usuário digitar 0 e mostre:
 Quantidade de números digitados
 Soma total */
let cont = 0;
let soma = 0;
export function exercicio01() {
    let numero = Number(prompt("Informe um número ou digite 0 para sair:"));
    while (numero != 0) {
        cont++;
        soma += numero;
        numero = Number(prompt("Informe um número ou digite 0 para sair:"));
    }
}
exercicio01();
console.log("A quantidade de números digitados foi: " + cont);
console.log("E a soma total dos números é: " + soma);
