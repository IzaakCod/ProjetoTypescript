/* Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
programa.
Calcule e imprima:
● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
recebeu;
● O número de funcionários do sexo masculino e feminino cadastrado;
● O percentual de funcionários homens e mulheres cadastrados. */

let nome: string =""
let horasTra: number = 0
let salarioHora: number = 0
let sexo: string =""

let salario: number = 0
let soma: number = 0

let maior: number = -99999
let nomeSalario: string =""

let contM: number = 0
let contF: number = 0

let opcao: string ="S"
export function exercicio03(): void{
    while(opcao !="N"){

        nome = prompt("Qual o seu nome:")
        horasTra = (prompt("Quantas horas você trabalhou:"))
        salarioHora = (prompt("Quanto você recebe por hora trabalhada:"))
        sexo = (prompt("Qual o seu sexo? M-masculino, F-Feminino"))?.toUpperCase()
        salario = horasTra * salarioHora
        soma += salario

        if(maior > salarioHora){
            maior = salarioHora
            nomeSalario = nome
        }
        if(sexo == "M"){
            contM++
        }
        else{
            contF++
        }
        
        opcao = prompt("Deseja continuar, digite S - Sim, ou N - Não")?.toUpperCase()
    }
}

let total = contF + contM

let percM = (total /contM) * 100
let percF = (total / contF) * 100