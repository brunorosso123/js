function newUser(user,age,country,uId){
    return{
        // antes era asi 
        // user:user,
        // age:age,
        // country:country,

        //ahora
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("gndz",34,"MX",1))