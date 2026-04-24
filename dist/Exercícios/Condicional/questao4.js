/* Ler dois valores e imprimir uma das três mensagens a seguir:
● ‘Números iguais’, caso os números sejam iguais;
● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
● ‘Segundo maior’, caso o segundo seja maior que o primeiro. */
export function exercicio04() {
    let num1 = Number(prompt("Informe o primeiro número"));
    let num2 = Number(prompt("Informe o segundo número:"));
    if (num1 == num2 || num2 == num1) {
        console.log("Números iguais");
    }
    else if (num1 > num2) {
        console.log("O primeiro número é o maior.");
    }
    else {
        console.log("O segundo número é o maior.");
    }
}
exercicio04();
