//Eg1 - Callback
function Callback(callback, errorCallback) {
    let userLeft = false;
    let userWatching = false;
  
    if (userLeft) {
      errorCallback({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatching) {
      errorCallback({
        name: 'User Watching',
        message: ':)' 
      })
    } else {
      callback('Thumbs up')
    }
}

Callback(message => {
    console.log(message);
}, error => {
    console.log(error.name + ' ' + error.message);
})

//Eg2 - Promises
  
function Promise1() {
    let userLeft = false;
    let userWatching = false;
    return new Promise((resolve, reject) => {
      if (userLeft) {
        reject({
          name: 'User Left', 
          message: ':('
        })
      } else if (userWatching) {
        reject({
          name: 'User Watching',
          message: ':)' 
        })
      } else {
        resolve('Thumbs up')
      }
    })
}
  
Promise1()
.then(message => {
    console.log(message)
})
.catch(error => {
    console.log(error.name + ' ' + error.message)
})

//Chaining Promises
  
const videoOne = new Promise((resolve, reject) => {
    resolve('Video 1')
})
  
const videoTwo = new Promise((resolve, reject) => {
    resolve('Video 2')
})
  
const videoThree = new Promise((resolve, reject) => {
    resolve('Video 3')
})
  
Promise.all([
    videoOne,
    videoTwo,
    videoThree
])
.then(messages => {
    console.log(messages)
})
  
Promise.race([
   videoOne,
   videoTwo,
   videoThree
])
.then(message => {
    console.log(message)
})