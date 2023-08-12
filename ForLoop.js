const contacts = [
    //ang object key value pairs
    {
        id: 1,
        fullname: "Samson Recluta",
        isSaved: "Phone",
    },
    {
        id: 2,
        fullname: "Samson Recluta Sr",
        isSaved: "Phone",
    },

    {
        id: 3,
        fullname: "Lilia Recluta",
        isSaved: "Phone",
    }
]

//For loop
//initiazation, condition, decrement or increment

//paano ba mag loop sa array object?
// or kahit sa object

//pwde naman ito pero ang talagang ginagamit ay for of
// for(let i = 0; i < contact.length; i++){
//   console.log(contact[i].fullname);
// }

//ito ang isa sa pinaka bes
// for(let contact of contacts){
//     console.log(contact.fullname);
// }

//pero ang another way na familiar ang mga developer ay forEach
// contacts.forEach(function(contact){
//     console.log(contact.fullname);
// })

//Mapping
//ito naman ay map another way para muha ang specific value na 
//  naka array parin
// const contactsFullname = contacts.map(function(contact){
//     return contact.fullname;
// }) 

// console.log(contactsFullname);


//another way is filter ipapakita niya ang mga array 
// na may phone na value
const contactPhone = contacts.filter(function(contact){
    return contact.isSaved == "Phone";
}).map(function(contact){
    return contact.fullname;
});

console.log(contactPhone);
