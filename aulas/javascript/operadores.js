/** OPEERADORES ARITIMETICOS */ 
//**  + MAIS - MENOR * /  % MODULO ** EXPONENCIACAO */
/** OPERADORES RELACIONAIS */
//**  */>= OU <= TEM QUE SER SEMPRE MAIOR IGUAL OU MENOR IGUAL != NÃO É IGUAL */
// && || (E LOGICO, OU LOGICO) && AS DUAS EXTREMIDADES DEVEM SER IGUAIS E ||

const ehPar = 15 // number
// para saber se ele é par 
/*
if (ehPar %  15 == 0) {
// trata quando a condicao for verdadeira 
alert ("O numero" + ehPar + 'é par!')
} else {
// trata a condicao quando falsa 
alert('o numero' + ehPar + 'e impar')
}
console.log(ehPar % 2 ==0 )
*/

// Pessoas com idade entre 18 e 70 anos podem entrar
// Pessoas maiores de 70 precisam de compainha
// Menores, vazam!

const idade = 16

// if (idade >= 18) {
// alert( "Voce tem " + idade + "anos \nPode entrar no baile!")  ?? \n é um enter
// } else {
//     alert('vaza, menor!') 
// }

if (idade >= 18  && idade <=70 ) {
    alert( "Pessoa com idade entre 18 e 70 anos")  
} else if(idade > 70){
    alert("Voce tem " + idade + "anos \nPrecisa de um acompanhante para entrar no baile.")
}