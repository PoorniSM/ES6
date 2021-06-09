function num(...args){
    let mul= 1;
    for (let i of args){
       mul*=i;
    }
    return mul;
}
console.log(num(2, 3, 4, 5, 6, 7));
