interface user{
    readonly _id:string
        email:string
        name:string
        cardDetails?:number
        start():string
}   

const newUSer:user={
    _id:"222",
    email:"d@d",
    name:"Dalip",
    start:()=> {
        return "started"
    },
}
let user=newUSer;
//************Public and private keywords in ********************/

class user2{

    readonly cityName:string="Ludhiana"
    constructor(public name:string,private userId:number){
        //public values are accessible by anyone ,private values have some level of security
    }
}
//getter ans setters are used to get and update values respespectively

//******IMPORTANT********* */
//setters can't have any return type while getters can have
export{}