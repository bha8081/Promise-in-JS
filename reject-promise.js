const rejectPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = true
        if (!error) {
            resolve({userName: "Jone", password: 'jone@1234'})
        } else {
            reject('ERROR: Somthing want to wrong try agin')
        }
    }, 1000)
})

rejectPromise.then((user) => {
    console.log(user);
    return user.userName
}).then((userName) => {
    console.log(userName)
}).catch(function(error){
    console.log(error)
}).finally(() => {
    console.log("The promise is either resolve or rejected!!")
})

/* 2nd code using async await*/
const asyncPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({subject: "Node.js", techer: "Jone"})
        } else {
            reject("ERROR: This is no data found!!")
        }
    }, 1000)
})

async function consumePromise(){
    try {
        const response =await asyncPromise
    console.log(response)
    } catch (error) {
        console.log("error")
    }
}
consumePromise();