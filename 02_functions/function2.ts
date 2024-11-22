
function sum(val) :number{ //the :number after brackets will make sure that the return type of the sum fuction is number and no other data type will be returned
    return val + 2;
}


function test(val:string):void{ //this void will make sure the return type is void
    console.log("hey");
    
}


function handleError(error:string):never{ //along with other return type their is never also that is similar to void but it will never observed the function will terminate the execution of the program
    throw new Error(error);
}

export{}