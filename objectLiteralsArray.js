//Object literals Array or Array objects
//ang array may mga laman siyang objects
// ito po yong tipical na list na binibigay ng API

const contact = [
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
    },
]

//ganito naman ang paglog
//pero kung gusto natin iaccess ang object sa loob ng array
//ganito siya(contact[0]) pag buong info ng object

//pero kung specific info lang naman sa loob ng object ganito
//contact[0].fullname
console.log(contact[0].id)