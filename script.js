
const catRes = document.getElementById('cat-frame');
const dogRes = document.getElementById('dog-frame');
const catBtn = document.getElementById('cat-btn');
const dogBtn = document.getElementById('dog-btn');

catBtn.addEventListener('click', getRandCat)

dogBtn.addEventListener('click', getRandDog)

function getRandCat() {
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())           // converts result to json
    .then(data => {                   // takes file value of the json object
        catRes.innerHTML = `<img src="${data.file}"/>`
    })
    .catch(err => {
        console.log("error")
    })
}

function getRandDog() {
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        if (data.url.includes('mp4')) {
            getRandDog()
        }
        dogRes.innerHTML = `<img src="${data.url}"/>`
    })
    .catch(err => {
        console.log("error")
    })
}

