/* Faça um programa para o cálculo de uma folha de pagamento fictício, sabendo que os
descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo),
3% para o Sindicato, 6% de vale transporte, 8% de vale alimentação, 10% do INSS e o FGTS
que corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita).

O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá
pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
Desconto do IR:
1. Salário Bruto até R$ 2.428,80 (inclusive) - isento
2. Salário Bruto de R$ 2.428,81 a R$ 2.826,65 (inclusive) - desconto de 7,5%
3. Salário Bruto de R$ 2.826,66 a R$ 3.751,05 (inclusive) - desconto de 15%
4. Salário Bruto de R$ 3.751,06 a R$ 4.664,68 (inclusive) - desconto de 22,5%
5. Salário Bruto acima de R$4.664,68 - desconto de 27,5%.
Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora
é R$15,00 e a quantidade de horas é 220.
Exemplo: Salário Bruto: (15 * 220)       : R$ 3300,00
(-) IR (15%)                      : R$  495,00  
(-) INSS (10%)                  : R$  330,00
(-) SINDICATO (3%)                  : R$   99,00
(-) V. ALIMENTAÇÃO (8%)              : R$  264,00
(-) V. TRANSPORTE (6%)               : R$  198,00
  FGTS (11%)                       : R$  121,00
  Total de descontos               : R$  1386,00
  Salário Líquido                 : R$  1914,00 */

let horasTrabalhadas: number = 0
let valorHora: number = 0

let salarioBruto = 0
let salarioLiquido: number = 0

let ir: number = 0

let inss: number = 0

let Sindicato: number = 0

let fgts: number = 0
let valeAli: number = 0.0

let valeTrans: number = 0

export function ImpostoRenda(): void {
    horasTrabalhadas = Number(prompt("Quantas horas você trabalho: "))
    valorHora = Number(prompt("Quanto você ganha por hora: "))
    if(salarioLiquido <= 2428.80){
        console.log("Isento")
    }else if(salarioBruto >= 2428.81 || salarioBruto <= 2826.65){
        ir = salarioBruto * 0.075
        desconto1 - salarioBruto
        inss = salarioBruto * 0.10
        inss - salarioBruto
        valeAli = salarioBruto * 0.08
        valeAli - salarioBruto
        valeTrans = salarioBruto * 0.06
        valeTrans - salarioBruto
        fgts = salarioBruto * 0.11
    }

}