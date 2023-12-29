// Do an async task
// DB calls, cryptography, network.

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("This is your first Async function:")
    resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Async function one")
})

// 2nd method
new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task 2");
    resolve();
  }, 1000)
}).then(function(){
    console.log("Async consume");
})