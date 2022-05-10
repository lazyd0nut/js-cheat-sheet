
//declare variable
var abc = "hello, bro"
var someInt = 1233
console.log(abc + someInt + 123)

//output to the console
console.log(abc + (someInt + 123))

//if statement 
if (1123 == someInt)
{
    console.log("lol, it works")
}
else
{
    console.log("lol, it works, but in another condition,ahahahah")
}

//string from the last to first
var firstName = "Ada"
var thirdToLastLetterOfFirstname = firstName[firstName.length - 3]
console.log(thirdToLastLetterOfFirstname)

//function
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb)
{
    var result = ""
    result += "The " + myAdjective + " " +myNoun + " " + myVerb + " to the store " + myAdverb
    return result
}

console.log(wordBlanks("dog", "big", "ran", "quickly"))

//arrays
var ourArray = ["Johny", 23]
var myArray = ["Quincy", 1]
//nested array
var ourArray = [["the university", 42], ["everything", 100101]]
//array acces using index

var ourArray = [50, 60, 70]
var ourData = ourArray[0]

var myArray = [50, 60, 70]

var myData = myArray[0]
console.log(myData)

//modify array data with indexes + 2dandmore Array 
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]]
var myData = myArray[3][0][1]
console.log(myData)

//push too Array (.push)
var myArray = [["Tom", 22], ["John", 25]]
myArray.push(["Someone", 32])
console.log(myArray)

//Array .pop() - last element?
var ourArray = [1,2,3]
var removedElement = ourArray.pop()
console.log(ourArray)
console.log(removedElement)

//Array .shift() - fisrt element?
var ourArray = [1,2,3]
var removedElement = ourArray.shift()
console.log(ourArray)
console.log(removedElement)

//unshift
myArray.unshift(["SomeOne", 35])
console.log(myArray)

//ShoppingList
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 1]]

//function
function ourReusableFunc()
{
    console.log("Hello, world!")
}

ourReusableFunc()
ourReusableFunc()

//func with imput
function ourFuncWithArgs(a, b)
{
    console.log(a-b)
}
ourFuncWithArgs(10, 5)


//Global/Local/OutofScope
var myGlobal = 10

function fun1()
{   
    oopsGlobal = 5
}

function fun2()
{
    var output = ""
    if (typeof myGlobal != "undefined")
    {
        output += "myGlobal: " + myGlobal
    }
    if(typeof oopsGlobal != "undefined")
    {
        output += " oopsGlobal: " + oopsGlobal
    }
    console.log(output)
}
fun1()
fun2()

//
var outerWear = "T-Shirt"

function myOutfit()
{
    var outerWear = "swerater"
    return outerWear
}

console.log(myOutfit())
console.log(outerWear)
//
function minusSevemn(num)
{
    return -7
}

console.log(minusSevemn(10))

function timesFive(num)
{
    return num * 5
}

console.log(timesFive(5))

//outstring

function nexxtInLine(arr, item)
{
    arr.push(item)
    return item
}

var testArr = [1,2,3,4,5]

console.log("Before: " + JSON.stringify(testArr))
console.log(nexxtInLine(testArr, 6))
console.log("After: "+ JSON.stringify(testArr))

//
function outrTrueOrFalse(isItTrue)
{
    if(isItTrue)
    {
        return "Yes, it's true"
    }
    return "Not, it's false"
}

console.log(outrTrueOrFalse(true))

function TrueOrFalse(wasThatTrue)
{
    if(wasThatTrue)
    {
        return "Yes, that was true"
    }
} 

//switch case.
function caseinSwitch(val)
{   var answer = ""
    switch(val)
    {
        case 1:
            answer = "alpha"
            break
        case 2:
            answer = "beta"
            break
    }
    return answer
}
console.log(caseinSwitch(1))

//f

function switchOfStuff(val)
{
    var answer = ""
    switch(val)
    {
        case "a":
            answer = "apple"
            break
        case "b":
            answer = "bird"
            break
        case "c":
            answer = "cat"
            break
        default:
            answer = "stuf"
            break 
    }
    return answer
}
console.log(switchOfStuff("a"))

//
// function sequentialSizes(val)
// {
//     var answer = ""
//     switch(val)
//     {
//         case (val<=3):
//             answer = "Low"
//             break
//         case (val<3 && val<=7):
//             answer = "Mid"
//             break
//         case (val>7):
//             answer = "High"
//             break
//         default:
//             answer = "you dolboeb"
//             break
//     }
//     return answer
// }
// console.log(sequentialSizes(3))



//returning bool

function isLess(a, b)
{
    return a < b 
}

console.log(isLess(10, 15))


//Objects
var ourDog =
{
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
}
var myDog =
{
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "frieds":[]
}


var testObj =
{
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
    10: "Random"
}

//dot notation acces
var hatValue = testObj.hat
//bracket notation acces
var shirtValue = testObj["shirt"]
//
var nmbR = 10
var player = testObj[nmbR]
console.log(player)
//uppdate obj property
testObj.shoes = "Boots"
testObj[10] = "NoRandom"

//variables

var testObj2 =
{
    12: "Namath",
    16: "Montana",
    19: "Utah"
}

var playerNumber = 16
var player = testObj2[playerNumber]
console.log(player)

var Value = testObj2[16];
var player = testObj2[Value];
console.log(Value);

//update obj property

testObj2[16] = "Klo"
console.log(testObj2[16])

console.log(testObj.hat)
testObj.hat = "cap"
console.log(testObj["hat"])

//add new properties to obj
var ourDog = 
{
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends":["everything!"]
}

ourDog.bark = "bow-wow"

var myDog =
{
    "name": "Happy coder",
    "legal": 4,
    "tails": 1,
    "friends": ["Campers"]
}
//delete property
myDog["bark"] = "woof!"
console.log(myDog)
delete myDog["bark"]
delete myDog.friends
console.log(myDog)

//check objects for properties
function checkObj(checkProp)
{
    return "Change Me!"
}

console.log(checkObj("gift"))


console.log(checkObj.hasOwnProperty("gift"))

// manipulating complex obj

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "realease_y": 2003,
        "formats": ["Youtube Video"]
    }
]


// nested objects

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
}

var gloveBoxContent = myStorage.car.inside["glove box"]
console.log(gloveBoxContent)

// nested arrays

var myPlants = [
{
    type: "flowers",
    list: [
        "rose",
        "tulip",
        "danelion"
    ]
},
{
    type: "tree",
    list: [
        "fir",
        "pine",
        "birch"
    ]
}
]

console.log(myPlants[1].list)

// 
//record colection(skip)
//

//while loops
var a = []
var i = 0

while(i < 10)
{
    a.push(i)
    i++
    console.log(i)
}

console.log(a)

//for loops

for(var i = 0; i < 10; i++)
{
    console.log(i)
}

console.log("\n")

for(var i = 1; i < 10; i+=2)
{
    console.log(i)
}

console.log("\n")

for(var i = 10; i > 0; i-=1)
{
    console.log(i)
}

console.log("\n")

var arrAy = ["a","b","c","d"]

for(var i; i < arrAy.length; i++)
{
    console.log(arrAy[i])
}

console.log("\n")

var arrAy = [[1, 2], [3, 4], [5, 7, 8]]

for(var i = 0; i < arrAy.length; i++)
{
    for(var j = 0; j < arrAy[i].length; j++)
    {
        console.log(arrAy[i][j])
    }
}

// do-while
var l = []
do{
    l.push(i)
    i++
    console.log(i)
}while(i < 10)

//

var prof = [
    {
        "fname": "petuh",
        "likes":["Pizza", "Coding", "Brownie Points"]
    },
    {
        "fname": "chicken",
        "likes":["Minecraft", "Java"]
    },
    {
        "fname": "lol",
        "likes":["Youtube", "Microsoft"]
    }
]

function profLookup(name, prop)
{
    var isExist = false

    for(var i = 0; i < prof.length; i++)
    {
        if(prof[i].fname == name)
        {
            isExist = true
            if(prof[i].hasOwnProperty(prop))
            {
                return prof[i][prop]
            }
            else
            {
                return "no such prop" 
            }
        }
    }
    if(isExist == false)
    {
        return "no such name"
    }
}

console.log(profLookup("chicken", "likes"))
console.log(profLookup("dakd", "likes"))
console.log(profLookup("lol", "jkds"))

// function lookupprofile(name, prop)
// {
//     for (var i = 0; i < contacts.length; i++)
//     {
//         if(contacts[i].firstname ===  name)
//         {
//             return contacts[i][prop] ||  "no such prop"
//         }
//     }
//     return "no such name"
// }

// var data = lookupprofile("Thor", "nmber")
// console.log(data)


//random

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
//21 max - 1 min
  console.log(Math.floor(Math.random() * 21 - 1 + 1) + 1)

// parseInt

function convertToInt(str)
{
    return parseInt(str, 10)
}

var k = convertToInt("23")
console.log(k)

//ternary operator
// multiple     a > 0 ? "positive" : a < 0 ? "negative" : "zero"

var a = 10
var b = 20

a === b ? "true" : "false"

// mutate const array

const s = [5, 7, 2]
function editInPlace()
{
    s[0] = 2
    s[1] = 5
    s[2] = 6
    return s
}

console.log(editInPlace())

//prevent object mutation

function freezeObj()
{
    const MATH_CONSTANTS = 
    {
        PI: 3.14
    }

    Object.freeze(MATH_CONSTANTS)

    // try
    // {
    //     MATH_CONSTANTS.PI = 99
    // }
    // catch( ex )
    // {
    //     console.log(ex)
    // }
    return MATH_CONSTANTS.PI
}
const PI = freezeObj()
console.log(PI)

//arrow function

var magic = () => new Date()
console.log(magic())
var myConcat = (arr1, arr2) => arr1.concat(arr2)
console.log(myConcat([1, 2], [3, 4, 5]))

//arrow function higher order
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)
    return squaredIntegers
}
const squaredIntegers = squareList(realNumberArray)
console.log(squaredIntegers)


//try/catch/throw/finally

try
{
    console.log("start of try runs")
    unicycle
    console.log("end of try runs -- never reached")
}
catch(err)
{
    console.log("error has occured: " + err)
}
finally
{
    console.log("this is always run")
}

console.log("...then the execution continues")



let json = '{"age":30}'

try
{
    let user = JSON.parse(json)
    if(!user.name)
    {
        throw new SyntaxError("Incomplete data: no name")
    }
    console.log(user.name)
}
catch(e)
{
    console.log("JSON Error: " + e.message)
}

//Array iteration: map, filter, reduce, some, every, find, findindex, forEach

//forEach
[1,2,3].forEach(function(item, index)
{
    console.log(item, index)
})

//map

const three = [1, 2, 3]
const doubled = three.map(function(item){
    return item * 2
})
console.log(doubled)

//filter

const ints = [1, 2, 3]
const evens = ints.filter(function(item){
    return item % 2 === 0
})
console.log(evens)


const inty = [1,2,3]
intx  = inty.map(function(item){
return item % 2 === 0
})
console.log(intx)

//reduce

const sum = [1, 2, 3].reduce(function(result, item){
    return result + item
}, 0)
console.log(sum)


//some 

const hasNegativeNumbers = [1,2,3,-1,4].some(function(item){
    return item < 0
})
console.log(hasNegativeNumbers)

//every

const allNegativeNumbers = [-1,-2,3,-1,-4].every(function(item){
    return item < 0
})
console.log(allNegativeNumbers)

//find

const objects = [{id:"a"}, {id:"b"}, {id:"c"}]
const found = objects.find(function(item){
    return item.id === "b"
})
console.log(found)

//findIndex

const objects1 = [{id:"a"}, {id:"b"}, {id:"c"}]
const foundIndex = objects.findIndex(function(item){
    return item.id === "c"
})
console.log(foundIndex)

////


mass1 = [1, 2, 3]
mass2 = mass1.map(function(item){
    return "it" + item
})
console.log(mass2)

//

fgdfk = [1, 2 ,3 ,4 ,5 ,6].filter(function(item){
    return item%2 === 0
})
console.log(fgdfk)

//

fdsf = [1, 2, 3, 4, 5].reduce(function(result, item){
    return result + item
})
console.log(fdsf)

//

abc = [1, 2, 4, 5, -6].some(function(item){
    return item > 0
})
console.log(abc)

//

abdd = [1, 2, 3, 5 ,-6].every(function(item){
    return item > 0
})
console.log(abdd)

////

//Rest Operator

const sum1 = (function(){
    return function sum1(...args){
        return args.reduce((a, b) => a + b, 0)
    }
})()
console.log(sum1(1, 2, 3))

//Spread operator

firstArr = [1, 2, 3]
secondArr = [4, 5, 6]

botharr = [...firstArr, ...secondArr]


const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"]
let arr2 
(function(){
    arr2 = [...arr1]
    arr1[0] = "potato"
})()
console.log(arr2)
console.log(arr1)

//Use Destructuring Assignments to Assign Variables from Objects

var voxel = {x: 3.6, y: 7.4, z: 6.54}

var x = voxel.x
var y = voxel.y
var z = voxel.z

const {x: a9, y: b9, z: c9} = voxel

const AVGTemperatures = {
    today: 77.5,
    tomorrow: 79
}

function getTempTmrw(avgTemperatures){
    const TempTmrw = avgTemperatures
    return TempTmrw
}

console.log(getTempTmrw(AVGTemperatures))

//Destructuring Assignment with nested objects

const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
}

function getMaxOfTmrw(forecast){
    const {tomorrow : {min : minOfTmrw, max : maxOfTmrw}} = forecast
    // maxOfTmrw = forecast.tomorrow.max
    return {minOfTmrw, maxOfTmrw}
}
console.log(getMaxOfTmrw(LOCAL_FORECAST))

//

const[z8, x8, , y8] = [1, 2, 3, 4, 5, 6]
console.log(z8, x8, y8)

let a8 = 8, b8 = 6;

(() => {
    [a8, b8] = [b8, a8]
})()
console.log(a8)
console.log(b8)

//Template Literals

const result = {
    succes:["max-length","no-amd"],
    failure:["no-var", "var-on-top"],
    skipped:["id-blcklist", "no-dup-keys"]
}


function makeList(arr){
        const resultDisplayArray = []
        arr.forEach((item, index)=>{
        resultDisplayArray.push(`<li class="${item}"<\li>`)
    })
    return resultDisplayArray
}
console.log(makeList(result.failure))

//Simple Fields

const createPerson = (name, age, gender) => ({name, age, gender})
console.log(createPerson("Zodiac Hasbro", 56, "male"))

//Concise Declarative Function

const bicycle = {
    gear: 2,
    setGear(newGear){
        this.gear = newGear
    }
}

//Class(Constructor Function)

class SpaceShuttle {
    constructor(targetPlanet, targetShuttle){
        this.targetPlanet = targetPlanet
        this.targetShuttle = targetShuttle
    }
}
var zsu = new SpaceShuttle("Earth", "Russia")
console.log(zsu.targetPlanet)
console.log(zsu.targetShuttle)

//

function makeClass(){
    class Vegetable {
        constructor(name){
            this.name = name
        }
    }
    return Vegetable
}
const Vegetable = makeClass()
const carrot = new Vegetable("carrot")
console.log(carrot.name)

//getters and setters

class Book{
    constructor(author){
        this._author = author
    }
    get writer(){
        return this._author
    }
    set writer(updatedAuthor){
        this._author = updatedAuthor
    }
}

const book1 = new Book("Vlados")
auth = book1._author

console.log(auth)


