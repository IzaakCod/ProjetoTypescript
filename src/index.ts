import { exercicio01 as cond1 } from "./Exercícios/Condicional/questao1.js";
import { exercicio02 as cond2 } from "./Exercícios/Condicional/questao1.js"
cond1()
cond2()

const opcao:number = Number(prompt());

switch (opcao) {
case 1:
     cond01();
     break;
    case 2:
      exercicio2();
      break;
    case 3:
      exercicio3();
      break;
    case 4:
        cond04()
        break;
   default:
     console.log("Exercício não encontrado!");
}