/*Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. 
A soma desses múltiplos é 23. Faça um programa JavaScript que diga que o numero é múltiplos de 3 e 5 */


function multiplo(numeroInformado) {
    if (numeroInformado % 3 === 0) {
        console.log("Múltiplo de 3")
    }
    else if (numeroInformado % 5 === 0) {
        console.log("Múltiplo de 5")
    }
    else {
        console.log("Não é multiplo de 3 ou 5")
    }
}
multiplo(6)

