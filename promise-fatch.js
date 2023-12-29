fetch('https://github.com/hiteshchoudhary/js-hindi-youtube/blob/main/09_advance_one/ApiRequest.html')
.then((response) => {
    return response.json()
})
.then((data) => {
     console.log(data)
})
.catch((error) => {
    console.log(error)
})