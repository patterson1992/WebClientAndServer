console.log('hello world')


let name = 'Jakob'
let todayTemp = 82

console.log(name)
console.log(todayTemp)

let tempString = 'Today\'s temp is '+ todayTemp + 'F'
console.log(tempString)

let newTemp = ((todayTemp - 32) * 5/9)
console.log(newTemp)
console.log('my name is ' + name.toUpperCase())

function add(a, b) {
    let sum = a + b
    return sum
}

let total = add(3,5)
console.log(total)

///function validGPA(gpa){
///    if(gpa >= 0 && gpa <= 4){
///    return true
///} else{
///    return false
///}
///}

///One line test
function validGPA(gpa){
   return (gpa >= 0 && gpa <= 4)   
}
console.log(validGPA(-2))

function cityState(city, state){
    state = state.toUpperCase()
    address = city + ", " + state
    return address
}
address = cityState('Minneapolis','mn')
console.log(address)

///This won't work because uppercase doesnt work with integers
///adresses = cityState(1,42)
///console.log(addresses)

let lions = 4
let tigers = 7
let tigerPattern = 'striped'
console.log(`There are ${lions} lions.`)