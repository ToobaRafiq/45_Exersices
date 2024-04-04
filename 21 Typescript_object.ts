//Write a program that create objects containing these items.
// let person_Name : string = 'Muniza';
interface person {
    age : number,
    name : string,
    nationality : string,
    student : boolean
}
let person : person = {
    age : 23,
    name : 'Muniza',
    nationality : 'Pakistani',
    student : true
}
console.log(person);

interface car {
    maker : string,
    color : string,
    automatica : boolean
}
let car = {
    maker : 'toyota',
    color : 'Black',
    automatic : true
}

console.log(car);



