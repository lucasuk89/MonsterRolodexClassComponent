//ele vai procurar o elemento com valor 5
const myArray = [1,2,3,4,5,6,7,8,9,10]

myArray.find(el => el === 5)

//O primeiro elemento que ele achar que for maior que 4 ele vai retornar.
myArray.find(el=> el > 4)


const peopleArray = [{id:1},{id:2},{id:3},{id:4},{id:5},]

peopleArray.find(person => person.id ===4)
// ele vai retornar {ide:4}