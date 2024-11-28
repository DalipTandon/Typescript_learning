interface People {
    name:string
    age:number
    greet:()=>string
}

let people :People={
    name:"dalip",
    age:21,
    greet:()=>{
        return "hey"
    }
}

let greeting =people.greet();
console.log(greeting);
export{}