//function types

let x = 100;
let y = 200;

//traditional function
function getSum(x, y){
    return x + y;
}

// console.log(getSum(x,y))

//new way of function ES6

const GetSum = (x, y) =>{
    return x + y
}
console.log(GetSum(200, 200));