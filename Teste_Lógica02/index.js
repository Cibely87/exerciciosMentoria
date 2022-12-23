/*Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres
(considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres).
Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova,
e a soma das idades do homem mais novo com a mulher mais velha.*/

//https://www.devmedia.com.br/javascript-if-else-criando-scripts-com-estruturas-condicionais/39686
//https://www.treinaweb.com.br/blog/estruturas-condicionais-e-estruturas-de-repeticao-em-javascript
//Switch Case

const homem1 = 35;
const homem2 = 33;

const mulher1 = 35;
const mulher2 = 33;

let homemMaisVelho
let homemMaisNovo

idade.maisVelho, idade.maisNovo = verificarQuemMaisVelhoMaisNovo(homem1, homem2);
console.log(homemMaisNovo)


let mulherMaisVelha
let mulherMaisNova

if (mulher1 > mulher2) {
    mulherMaisVelha = mulher1
    mulherMaisNova = mulher2
} else {
    mulherMaisVelha = mulher2
    mulherMaisNova = mulher1
}
console.log(mulherMaisVelha)

const soma1 = homemMaisVelho + mulherMaisNova
console.log(soma1)

const soma2 = homemMaisNovo + mulherMaisVelha
console.log(soma2)


function verificarQuemMaisVelhoMaisNovo(idade1, idade2) {
    let maisVelho
    let maisNovo
    if (idade1 > idade2) {
        maisVelho = idade1;
        maisNovo = idade2;
    } else {
        maisVelho = idade2;
        maisNovo = idade1;
    }
    return { 'maisVelho': maisVelho, 'maisNovo': maisNovo }
}

//Receber idades de 2 homens diferentes;
//Receber idades de 2 mulheres diferentes;
//Saber quem é o homem mais velho e o mais novo;
//Saber quem é a mulher mais velha  e a mais nova;
//Soma homem mais velho + mulher mais nova;
//Soma homem mais novo + mulher mais velha;

//greicepazvargas@gmail.com
//GreicePaz