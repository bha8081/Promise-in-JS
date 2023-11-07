new Promise(function(resolve, reject){
    setTimeout(function(){
         console.log("this is new promise")
         resolve()
    }, 1000)
}).then(function(){
  console.log("accept promise")
})


// 2nd
const student = new Promise(function(resolve, reject){
    setTimeout(function(){
       let blue = "ark"
       switch (blue) {
        case "dark":
            console.log("this is the dark web.")      
          break;
          
        case "white":
            console.log("this is white web.")
          break;
       
        default:
            console.log("this is default value.")
            break;
       }

       resolve()
    },2000)

})

student.then(function(){
    console.log("this is done");
})

// 3rd promise 
const bhav = new Promise(function(resolve, reject){
    setTimeout(function(){
       console.log("This is 3rd promise function")
       resolve()
    }, 3000)
})

bhav.then(function(){
    console.log("this is 3rd bhav Promise function.")
})

// 4th
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Bhavesh" , email: "bhavesh@1231"})
    }, 2000)
})

promiseFour.then(function(user){
   console.log(user)
})