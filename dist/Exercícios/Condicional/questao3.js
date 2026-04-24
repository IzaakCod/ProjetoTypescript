/* Crie um programa que solicite dois números e simule um menu de uma calculadora:
1 - Soma
2 - Subtração
3 - Multiplicação
4 - Divisão
Use switch...Case
*/
export function exercicio03() {
    let numero1 = Number(prompt("Informe o primeiro número:"));
    let numero2 = Number(prompt("Informe o segundo número:"));
    let opcao = Number(prompt("Informe 1 - Soma,  2 - Subtração, 3 - Multiplicação, 4 - Divisão"));
    switch (opcao) {
        case 1:
            let soma = numero1 + numero2;
            console.log(soma);
            break;
        case 2:
            let subtração = numero1 - numero2;
            console.log(subtração);
            break;
        case 3:
            let multiplicação = numero1 * numero2;
            console.log(multiplicação);
            break;
        case 4:
            let divisao = numero1 / numero2;
            console.log(divisao);
            break;
    }
}
exercicio03();
