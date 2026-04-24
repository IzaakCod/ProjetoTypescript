/* Crie um programa que peça números até o usuário digitar 0 e mostre:
 Quantidade de números digitados
 Soma total */
let numero = -1;
let cont = 0;
let soma = 0;
export function exercicio01() {
    while (numero != 0) {
        let numero = Number(prompt("Informe um número ou digite 0 para sair:"));
        cont++;
        soma += numero;
    }
}
exercicio01();
