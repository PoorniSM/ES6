const numbers = [1, 2, 3, 4, 5];

const multiply = numbers.map( num => num*2 );
console.log('Numbers multiplied by 2',multiply);

//Normal function
function greet(animal){
    return `${animal} makes noise`
}
console.log(greet('Dog'));

//Arrow function
const greets = (animal) => {
    return `${animal} makes noise`
}
console.log(greets('Cat'));
