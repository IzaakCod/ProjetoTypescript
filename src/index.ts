import { exercicio01 as cond01 } from "./Exercícios/Condicional/questao1.js";
import { exercicio02 as cond02 } from "./Exercícios/Condicional/questao2.js"
import { exercicio03 as cond03 } from "./Exercícios/Condicional/questao3.js"
import { exercicio04 as cond04 } from "./Exercícios/Condicional/questao4.js"
import { exercicio05 as cond05 } from "./Exercícios/Condicional/questao5.js"


cond01()
cond02()
cond03()
cond04()
cond05()

const opcao:number = Number(prompt());

switch (opcao) {
  case 1:
    cond01();
    break;
    case 2:
      cond02();
      break;
      case 3:
        cond03();
        break;
        case 4:
        cond04()
        break;
        case 5:
          cond05();
          break
   default:
     console.log("Exercício não encontrado!");
}