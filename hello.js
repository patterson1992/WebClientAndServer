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

foods = ['tacos','popcorn', 'nachos', 'burgers']

foods.forEach(function(food, index){
    console.log(index+1, food)
})

for(let f=0; f< foods.length; f++){
    console.log(f+1, foods[f])
}

foods.forEach(function(food,index){
    console.log(food)
})
//add to the end
foods.push('carrots')
//add to beginning
foods.unshift('cheese')

foods.forEach(function(food, index){
    console.log(index+1, food)
})
console.log(foods)
//remove fromt the end
console.log(foods.pop())
console.log(foods)
//remove from the front
console.log(foods.shift())
console.log(foods)
//alter an entry
foods[1] = 'cheesy popcorn'
console.log(foods)

foods[12] = 'spaghetti'
console.log(foods)
//Creates a symbol between each number in the array
console.log(foods.join('---'))