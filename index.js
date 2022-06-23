const solarSystem = document.getElementById("solarSystem")
const totalMoonContainer = document.getElementById("total-moons")
const countDisplay = document.querySelector(".count-display")


const planetsObj = [
    {
        "name": "Mercury",
        "moons": 0
    },
    {
        "name": "Venus",
        "moons": 0
    },
    {
        "name": "Earth",
        "moons": 1
    },
    {
        "name": "Mars",
        "moons": 2
    },
    {
        "name": "Jupiter",
        "moons": 67
    },
    {
        "name": "Saturn",
        "moons": 62
    },
    {
        "name": "Uranus",
        "moons": 27
    },
    {
        "name": "Neptune",
        "moons": 14
    }
]
//   function getSum(){
//     let sum = planetsObj.reduce((a, b)=> {
//         return a+ b.moons}, 0)

//     }
//     console.log(getSum())

function getPlanets() {

    let sum
    let numMoons = 0

    let planetsArray = planetsObj.map((planet) => {

        let name = planet.name
        let moons = planet.moons

        // let moonArray = []
        // moonArray.push(moons)
        // moonArray.concat(moonArray)
        // console.log(moonArray)

        sum = planetsObj.reduce((a, b) => {
            return a + b.moons
        }, 0)
        console.log(sum)
        // console.log(sum)


        let planetContainer = document.createElement("div")
        solarSystem.appendChild(planetContainer)
        planetContainer.classList.add("planet-container")

        let planetInfo = document.createElement("div")
        planetInfo.innerHTML = `<strong>${name}:</strong> ${moons} moons`
        planetInfo.setAttribute("class", "planet-info")
        planetContainer.appendChild(planetInfo)






        let totalMoons = document.createElement("div")
        totalMoons.innerHTML = `Total number of moons: ${sum}`
        totalMoonContainer.appendChild(totalMoons)
        totalMoons.setAttribute("class", "total hide")
        console.log(totalMoons)





    })
    const timeInterval = setInterval(moonCount, 100)
    function moonCount() {
        numMoons += 1;
        countDisplay.innerText = numMoons
        console.log(sum)
        if (numMoons == sum) {
            clearInterval(timeInterval)
        }
    }
}

getPlanets()

// Task:
// 1. Display each planet’s name and number of moons in the DOM
// 2. Calculate and display the total number of moons in the solar system below

// Stretch goals:
// - 1: Make the numbers count up on page load 
// - 2: Make the planet names bold.

// Task:
// 1. Display each planet’s name and number of moons in the DOM
// 2. Calculate and display the total number of moons in the solar system below

// Stretch goals:
// - 1: Make the numbers count up on page load 
// - 2: Make the planet names bold.