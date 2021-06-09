const numbers = [1, 2, 3, 4, 5];

const multiply = numbers.map( num => num*2 );
console.log('Numbers multiplied by 2',multiply);

//Normal function
function message1(animal){
    return `${animal} makes noise`
}
console.log(message1('Dog'));

//Arrow function
const message2 = (animal) => {
    return `${animal} makes noise`
}
console.log(message2('Cat'));
