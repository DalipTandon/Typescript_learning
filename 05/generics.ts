function identity<Type>(arg: Type): Type {
    return arg;
  }


  interface user{
    name:string
    age:number
    password:string
    email:string
  }

  type updateProps=Pick<user,"name" |"age"> //this will pick only name and age from the user interface

  type optionalProps=Partial<updateProps> //this will make the values as optional now user need not to forceflly fill the values it's more like optional

  function updateUser(updateProps:optionalProps){

  }