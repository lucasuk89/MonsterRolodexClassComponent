

const myArray = [1,2,3,4,5,6,7,8,9,10]
myArray.includes(3)
myArray.includes(9)
/* vai retornar TRUE OR FALSE se existe incluso dentro do array*/

// Temos um array com varios objetos.
const newArray = [{id:1},{id:2},{id:3},{id:4},{id:5}]

/*Queremos saber se o numero 2 existe , a partir do 3 numero do index do array, irá retornar false,
porque seria o numero 4,5,6,7,8,10 e nao tem o numero 2 a partir dali*/
myArray.includes(2,3)
//FALSE

/* Queremos saber se existe o numero 2 dentro do array, a partir do index 1 
, no caso o numero 2 esta no index numero 1, entao retorna TRUE*/
myArray.includes(2,1)
//TRUE


//Se eu fizer isso aqui vai ser FALSE..ele nao acha.
newArray.includes({id:1})