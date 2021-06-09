//Eg1
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Fulfilled ! '), 2000);
});

promise
.then((result) => {
  console.log(result);
})
.catch((error) => {
  console.log(error);
});

//Eg2
let promise1 = new Promise((resolve, reject) => {
   let number = 10;
   if(number == 10)
   resolve('Success');
   else
   reject('Failed');
})
promise1
.then(resolve => console.log(resolve))
.catch(error => console.error(error))
