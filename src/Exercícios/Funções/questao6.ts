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
let totalDescont: number = 0
let ir: number = 0

let inss: number = 0

let sindicato: number = 0

let fgts: number = 0
let valorfgts: number = 0
let valeAli: number = 0.0

let valeTrans: number = 0

export function ImpostoRenda(): void {
    horasTrabalhadas = Number(prompt("Quantas horas você trabalho: "))
    valorHora = Number(prompt("Quanto você ganha por hora: "))
    salarioBruto = valorHora * horasTrabalhadas
    if (salarioBruto <= 2428.80) {
        ir = 0
        inss = salarioBruto * 0.10
        valeAli = salarioBruto * 0.08
        valeTrans = salarioBruto * 0.06
        sindicato = salarioBruto * 0.03
        fgts = salarioBruto * 0.11
        totalDescont = + inss + sindicato + valeAli + valeTrans
        salarioLiquido = salarioBruto - totalDescont
        console.log("Isento")
    } else if (salarioBruto >= 2428.81 && salarioBruto <= 2826.65) {
        ir = salarioBruto * 0.075
        inss = salarioBruto * 0.10
        valeAli = salarioBruto * 0.08
        valeTrans = salarioBruto * 0.06
        sindicato = salarioBruto * 0.03
        fgts = salarioBruto * 0.11
        totalDescont = ir + inss + sindicato + valeAli + valeTrans
        salarioLiquido = salarioBruto - totalDescont
    } else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
        ir = salarioBruto * 0.15
        inss = salarioBruto * 0.10
        valeAli = salarioBruto * 0.08
        valeTrans = salarioBruto * 0.06
        sindicato = salarioBruto * 0.03
        fgts = salarioBruto * 0.11
        totalDescont = ir + inss + sindicato + valeAli + valeTrans
        salarioLiquido = salarioBruto - totalDescont
    } else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
        ir = salarioBruto * 0.225
        inss = salarioBruto * 0.10
        valeAli = salarioBruto * 0.08
        valeTrans = salarioBruto * 0.06
        sindicato = salarioBruto * 0.03
        fgts = salarioBruto * 0.11
        totalDescont = ir + inss + sindicato + valeAli + valeTrans
        salarioLiquido = salarioBruto - totalDescont
    } else if (salarioBruto >= 4664.68) {
        ir = salarioBruto * 0.275
        inss = salarioBruto * 0.10
        valeAli = salarioBruto * 0.08
        valeTrans = salarioBruto * 0.06
        sindicato = salarioBruto * 0.03
        fgts = salarioBruto * 0.11
        totalDescont = ir + inss + sindicato + valeAli + valeTrans
        salarioLiquido = salarioBruto - totalDescont
    }
}
ImpostoRenda()
console.log("Salário bruto: " ,salarioBruto)
console.log("IR: " ,ir)
console.log("Inss: " ,inss)
console.log("Sindicato: " ,sindicato)
console.log("Vale alimentação: " ,valeAli)
console.log("Vale transporte: " ,valeTrans)
console.log("E o fgts é de: ", fgts.toFixed(2))
console.log("Total descontos: " ,totalDescont)
console.log("O salário líquido é: ", salarioLiquido.toFixed(2))