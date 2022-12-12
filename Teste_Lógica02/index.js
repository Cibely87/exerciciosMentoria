/*Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres
(considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres).
Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova,
e a soma das idades do homem mais novo com a mulher mais velha.*/

//https://www.devmedia.com.br/javascript-if-else-criando-scripts-com-estruturas-condicionais/39686
//https://www.treinaweb.com.br/blog/estruturas-condicionais-e-estruturas-de-repeticao-em-javascript
//Switch Case


const homens = [];
for (let indice = 0; indice < 100; indice += 2) {
    homens.push(indice)
}

console.log(homens)

const mulheres = [];
for (let indice = 0; indice < 100; indice += 3) {
    mulheres.push(indice)
}

console.log(mulheres)