interface People{
    name:string
    age:number
}

class Manager implements People{
    name:string
    age: number; //you can have extra fields here but the fileds in people class are must you have extra like cardNumber etc but name and age mentioned in people are must
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
}

let manager1=new Manager("Dalip",21);

console.log(manager1.name);

export{}
