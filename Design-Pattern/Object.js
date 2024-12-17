const mySym = Symbol("test")
const User ={
    name:"Shiva",
    age: 27,
    company :"Senwell Solutions",
    city:"Pune",
    [mySym]:"pass"
}


console.log(User.city)
// console.log(User["city"])
console.log(User[mySym])
