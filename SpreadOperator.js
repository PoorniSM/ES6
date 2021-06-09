console.clear();

//Eg1
const names=['poorni', 'prani'];
const all_names=['gowtham', 'deepu', 'santhi', 'murali', ...names];
console.log(all_names);
console.log(names);

//Eg2
let arr1 = [3, 4, 5, 6, 7, 8];
let arr2 = [9, 5, 6, ...arr1] ;
let arr = [...arr1, ...arr2];
arr1.push(9);
console.log(arr1);
console.log(arr2);
console.log(arr);

//Eg3
let arr3 = {
    name: 'prani'
};
let arr4 = {
     age: '22'
 };

let arr5 = {...arr3, ...arr4};
console.log(arr3);
console.log(arr4);
console.log(arr5);






