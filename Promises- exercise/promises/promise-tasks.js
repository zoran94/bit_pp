
// new Promise((resolve, reject) => {

//     const date = new Date()
//     resolve(date)
//     //reject("this is error")

// }).then((myDate) => {
//     console.log(myDate);
// }).catch((error) => {
//     console.log(error)
// })

//var arr = [];

for (let id = 0; id < 100; id++) {
    new Promise((resolve, reject) => {

        const timeout = Math.random() * 500;
        setInterval(() => {
            resolve(id)
        }, timeout)

    }).then((newId) => {
        console.log(newId)

    })
    //arr.push(Promise)
}
console.log(arr);


