

function sum(val:number){ //we have to write the type of the parameter else it can take any value be it string ,integer or boolean
    return val+2;
}

function greetings(val:string){
    return val+ " User";
}


function mySignup(name:string,email:string,isPaid:boolean){

}

// mySignup("Dalip","dalip@gmail.com");  to add value of isPaid by deafault we have to write isPaid:boolean=false in the parameter itself
mySignup("Dalip","dalip@gmail.com",false)


function login(name:string,email:string,isPaid:boolean=true){

}

login("dalip","dalip@gmail"); //now we dont  need to pass value of isPaid as a argument as we have already mentioned default value in function parameter

sum(4);
export{}