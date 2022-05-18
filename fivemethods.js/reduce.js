//Reduce = Quando queremos ter um valor no final
const array = [1,2,3,4,5]

// ELE TRABALHA COM 2 ARGUMENTOS 
//O PRIMEIRO ARGUMENTO = É UMA FUNCAO QUE TEM 2 Parametros , currentElement e o primeiro accumulator.
//O SEGUNDO ARGUMENTO =
/* ZERO = O ZERO RPRESENTA O SEGUNDO ARGUMENTO , Nos queremos somar todos os elementos iterando 1 por 1 ,
 começando por ZERO.*/
//ZERO EH O PRIMEIRO NUMERO QUE VAMOS COMEÇAR NA NOSSA SOMA..SOMANDO COM 1 , SOMANDO COM 2, SOMANDO COM 3
// 1 = representa o currentElement
//accumulator  = ZERO
//currentELEMENT = É o primeiro elemento
//
array.reduce((accumulator,currentElement) =>
    accumulator + currentElement,0)   // zero  + 1 = 1 


    /*Na primeira corrida, accumulator eh 1 + 0 = resultado 1
      Na segunda corrida, accumulator eh 1 + 2 = resultado 3
      Na terceira corrida, accumulator eh 3 + 3 =resultado 6
      Na terceira corrida, accumulator eh 6 + 4 = resultado 10
      Na quarta corrida , accumlator eh 10 + 5 = resultado 15 */