myDog = [];

const arr = [];
const $body = document.querySelector("body");
for (var i = 0; i < 10; i++) {


    const promise = fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
            return response.json()
        })
        .then((newResponse) => {
            return newResponse.message
        })
    arr.push(promise)

}


Promise.all(arr)
    .then((newPromises) => {

        newPromises.forEach((images) => {
            const $image = document.createElement("img");
            $image.setAttribute("src", images);
            $body.appendChild($image)
        })
    })
































