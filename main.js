const button = document.querySelector('#getButton')

const aliName = document.querySelector('#alienName')
const homeworld = document.querySelector('#alienWorld')
const alienFeatures = document.querySelector('#alienFeatures')
const alienFacts = document.querySelector('#alienFacts')
const alienExamples = document.querySelector('#alienExamples')
const alienImage = document.querySelector('#alienImage')

button.addEventListener('click', apiRequest)

async function apiRequest() {
    const alienName = document.querySelector('input').value
    console.log(alienName)
    try {
        const response = await fetch(`https://dragon-ball-api-x13l.onrender.com/api/${alienName}`)
        const data = await response.json()
        console.log(data)
        aliName.innerText = data.raceName
        homeworld.innerText = data.homeworld
        alienFeatures.innerText = data.features
        alienFacts.innerText = data.interestingFact
        alienExamples.innerText = data.examples
        alienImage.src = data.image
    } catch(err) {
        console.error(err)
    }
}