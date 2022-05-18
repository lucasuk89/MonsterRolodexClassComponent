
let c = 5;

const pureFunction = (a,b) => {
    return a + b + c;
}
pureFunction(2,2)

//o resultado vai ser 4 + 5 = 9

// se mudarmos o valor de C
c= 10;
// o resultado sera 2 + 2 +10 = 14
//Isso eh IMPURE FUNCTION


//OUTRO JEITO DE IMPURE FUNCTION

c= 3;
const funcB = (a,b)=>{
    c= a + b;
    return a*b
}
funcB (2,4)
//funcB = 8
// C = 6