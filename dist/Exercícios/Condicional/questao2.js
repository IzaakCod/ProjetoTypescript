"use strict";
/* Crie uma função que receba um
número e retorne se ele é par ou ímpar
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function par_impar() {
    if (numero % 2 === 0) {
        console.log("É par");
    }
    else {
        console.log("É ímpar");
    }
}
const readline_sync_1 = __importDefault(require("readline-sync"));
let entrada = readline_sync_1.default.question("Informe um número: ");
let numero = Number(entrada);
par_impar();
