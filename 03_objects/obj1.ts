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
export{}