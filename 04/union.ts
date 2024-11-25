//union in typescript is used when we are't sure about what can be datatype of a object

let points :number | string //the points variable can either have number or string as a type
points=33 
points="thirty"


type user={
    name:string
    id:string
}
type admin ={
    userName:string
    id:string
}

let myUser:user | admin //the myUser object can be of either user or admin type

let numberArray :number[]=[1,2,3]
let stringArray :string[]=["1","2","3"]
let mixedArray :number[] | string[]=[1,2,3]  //we can ahave either number or string as array elements
let mixedArray2 :(number|string|boolean)[] | string[]=[1,2,"3",false] //we can have anything as array elements


export{}