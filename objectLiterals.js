//Object literals
// Data structure siya na may mga key value pairs

const person = {
    firstName: "Samson",
    lastName: "Recluta",
    age: 30,
    //sa object pwede tayo dito mag lagay ng array
    favorites: ['Banana', 'Apple', "Water Melon"],
    familyMembers: {
        Father: "Samson Sr.",
        Mother: "Lilia",
        olderBrother: "Sonny",
        olderSister1: "Shalyn",
        olderSister2: "Sharlot",
        olderSister3: "Shalla",
        olderSister3: "Shalra",
        youngSister: "Shairyn",
    }
}

//paano naman natin aaccess ang mga value sa object natin
// sa pamamagitan ng dot (person.firstname), tinatawag ito minsan
// method chaining

//pwede mag log ng dalawa (person.familyMembers, person.lastName)


//note ang object literals kadalasan ito ginagamit sa API
// - APPliCATION PROGRAMMING INTERFACE
// kadalasan na ibinibigay na data ay naka object literals... lalo na sa API
// or kalimitan naka JSON format... JAVASCRIPT OBJECT NOTATION

//ganito naman ang pag access sa loob ng object sa array
// console.log(person.favorites[2])

//ganito naman ang pag access sa loob ng object na may object
console.log(person.familyMembers)