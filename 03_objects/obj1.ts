function createUSer({name:string, isPaid:boolean}){

}

createUSer({name:"dalip",isPaid:false});


// function createUSer({name:string, emailID:string}){}  //gives error of duplicate identifier 


//in this way we can have two parameters with same data types
function create({name,emailID}:{name:string,emailID:string}){  

}

 

function test():{}{  //this indicates that return type is an object 
    return {}
}
function test2():{name:String,isPaid:boolean}{  //this indicates that return type is an object of the order or format name,isPaid 
    return {name:"dalip",isPaid:false}
}


create({ name: "Dalip", emailID: "dalip@gmail.com" });


//******************************Type Aliases****************************************************************************************************** */
//Type Aliases allow defining types with a custom name 
//It is basically creating a custome data types in typescript and type is the keyword for it
type User={
    name:string;
    enailD:string;
    isActive:boolean;
}

function createUser3(user:User){ //this means that the parameter of the createUser3 are of type User

}
function createUser4():User{ //this means that the return type of the createUser4 is of User type
    return {name:"",enailD:"",isActive:true};
}
createUser3({name:"",enailD:"",isActive:true});






//************readonly ,? */
type  user={
    readonly _id:string
    name :string
    email:string
    isActive:boolean
    credit?:number //the "?" here refers to that the credit field is optional
}
let myUser:user={
     _id:"sfdsafdsf",
    name :"dalip",
    email:"d@d",
    isActive:false
}

myUser.email="h@h"
//myUser._id="asfd"; //we can't change the id as it is  marked readonly which means we can only read the data but can not modify it
//IN case of arrays we can modify the array elements but can not modify the whole array


export{}