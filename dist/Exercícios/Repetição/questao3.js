/* Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
programa.
Calcule e imprima:
● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
recebeu;
● O número de funcionários do sexo masculino e feminino cadastrado;
● O percentual de funcionários homens e mulheres cadastrados. */
let nome = "";
let horasTra = 0;
let salarioHora = 0;
let sexo = "";
let salario = 0;
let salarioTotal = 0;
let maior = -99999;
let nomeSalario = "";
let contM = 0;
let contF = 0;
let opcao = "S";
export function exercicio03() {
    while (opcao != "N") {
        nome = prompt("Qual o seu nome:");
        horasTra = Number(prompt("Quantas horas você trabalhou:"));
        salarioHora = Number(prompt("Quanto você recebe por hora trabalhada:"));
        sexo = prompt("Qual o seu sexo? M-masculino, F-Feminino").toUpperCase();
        salario = horasTra * salarioHora;
        salarioTotal += salario;
        if (salario > maior) {
            maior = salario;
            nomeSalario = nome;
        }
        if (sexo == "M") {
            contM++;
        }
        else {
            contF++;
        }
        opcao = prompt("Deseja continuar, digite S - Sim, ou N - Não").toUpperCase();
    }
}
exercicio03();
let total = contF + contM;
let percM = (contM / total) * 100;
let percF = (contF / total) * 100;
console.log("O salário total dos funcionários é: " + salarioTotal);
console.log("O maior salário é: " + maior);
console.log("E quem recebeu foi: " + nomeSalario);
console.log("O número de funcionários do sexo masculino são: " + contM);
console.log("O número de funcionários do sexo feminino são: " + contF);
console.log("A porcentagem de funcionários do sexo masculino é: " + percM.toFixed(2) + "%");
console.log("A porcentagem de funcionárias do sexo feminino é: " + percF.toFixed(2) + "%");
