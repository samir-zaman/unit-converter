/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const button = document.getElementById("convertButton")
const inputVal = document.getElementById("valueInput")

const lengthResult = document.getElementById("lengthResult")
const volumeResult = document.getElementById("volumeResult")
const massResult = document.getElementById("massResult")


button.addEventListener("click", function(){
    let val = Number(inputVal.value)
    lengthResult.innerText = boxOne(val)
    volumeResult.innerText = boxTwo(val)
    massResult.innerText = boxThree(val)
})

//length conversion
// 20 meters = 65.616 feet | 20 feet = 6.096 meters
function boxOne(value) {
    let m2Ft = (value * 3.28084).toFixed(3)
    let ft2M = (value / 3.28084).toFixed(3)
    box1Conversion = `${value} meters = ${m2Ft} feet | ${value} feet = ${ft2M} meters`
    return box1Conversion
}

//volume conversion
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
function boxTwo(value) {
    let l2G = (value * 0.264172).toFixed(3)
    let g2L = (value / 0.264172).toFixed(3)
    box2Conversion = `${value} liters = ${l2G} gallons | ${value} gallons = ${g2L} liters`
    return box2Conversion
}

//mass conversion
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
function boxThree(value) {
    let kg2Lbs = (value * 2.20462).toFixed(3)
    let lbs2Kg = (value / 2.20462).toFixed(3)
    box3Conversion = `${value} kilos = ${kg2Lbs} pounds | ${value} pounds = ${lbs2Kg} kilos`
    return box3Conversion
}