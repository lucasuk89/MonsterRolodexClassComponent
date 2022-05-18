
/*Promise = promete que esse objeto eventualmente tem um value, vai ter um resultado ou um reject value, 
o resolve value
é usado quando tem sucesso , */

const myPromise = new Promise ((resolve, reject) => {
    //call back , e pega ele em miliseconds. 
    // quer dizer que dps de 1000 miliseconds eu quero que rode essa funcao antes do 1000 ai.
    if(false){
    setTimeout(()=>{
        resolve('I have succeeded');
    },1000);

  }else {
      reject('I have failed');
  }
});

myPromise
.then(value=> console.log(value))
.catch(rejectValue => console.log(rejectValue));

/*chamando a funcao usando then.buscando o valor  se 
eu mudar 0 1000 pra 3000 ele demora 3segundos pra chamar a funcao.*/

/*-----------------------------------------------*/
/* FETCH = QUANDO RETORNA UM FETCH , ESTAMOS RETORNANDO UM PROMISE VALUE FAZENDO UM API REQUEST PELO 
LINK QUE PEDIMOS
exemplo = fetch('http://jsonplaceholder.typicode.com/otdos/1')
.then (response => response.json)  //converte em json
.then(json => console.log(json)) */

// LINK NO FETCH ERRADO ( CAUSANDO A CHAMADA DO CATCH)
/* FETCH = QUANDO RETORNA UM FETCH , ESTAMOS RETORNANDO UM PROMISE VALUE FAZENDO UM API REQUEST PELO 
LINK QUE PEDIMOS
exemplo = fetch('http://jsoder.typide.com/otdos/1')
.then (response => response.json)  //converte em json
.then(json => console.log(json)) 
.catch(error=> console.log('I have errored')
o CATCH IRA ACONTECER PORQUE O LINK QUE FOI COLOCADO ESTA ERRADO.*/