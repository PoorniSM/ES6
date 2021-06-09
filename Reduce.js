console.clear();
const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((accumulator,item)=>{
    // console.log(item);
    // console.log(acc);
    return accumulator*item;
},1)
console.log(result);