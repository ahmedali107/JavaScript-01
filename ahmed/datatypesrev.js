//Primitive 

//primitive have 7 datatypes namely :

//String,Number,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('321')
const anotherId = Symbol('321')

console.log(id === anotherId);


//const bigNumber = 63617744617795756707n



const heros = ["ahmed","abdul","sayed"]
let myObj = {
    name:"ahmed",
    age : 20,
}

 const myfunction = function (){
    console.log("hello world");
 }
 console.log(typeof scoreValue);//number 
 console.log(typeof bigNumber);//undefined
 console.log(typeof outsideTemp);// object

console.log(typeof heros);


//(non-primative)anouther datatype is references datatype
//Array, objects, Functions

console.log(typeof myfunction);//object funtuon 

console.log(typeof anotherId);//symbol