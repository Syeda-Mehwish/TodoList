
import React from 'react';

//Data Types of ts

let name: string ="Mehwish";
let ExperienceYears: number | string = 1; // | is a union it is use if we want to write ExperienceYears in number orin string
let graduated: boolean= true;
let skills: string[]=["HTML","CSS","js","React","TS","node"]
let role:[number, string]=[1,"APP Developer"]; //tuple dataType:TS introduced a new data type called Tuple. Tuple can contain two or more values of different data types
//object datatype in ts. There are 2 ways to define a object
// 1st way
let personX: object; //not recommended b/c object have alot of properties
//2nd way
type Person = {      //Type is also konwn as interface, 1st letter should be capital
name: string;
age?: number;        //put ? to make it optional
};
//or
interface PersonInterface  {      
  name: string;
  age?: number;        //put ? to make it optional
  };
  // if we want to use PersonInterface variable in other 
interface Employ extends PersonInterface {
  salary:number;
}

let employ:Employ={
  salary:50000,
  name:"Mehwish",

}

  let person: Person={
name:"mehwish",
};

//Arry of Person 
let AlotOfPerson:Person[]=[{name:"mehwish",age:24},{name:"mehak"}];

//function(1st way)
function printInfo(name:string, age?:number| string){
  console.log(name);
  console.log(age);
}
//function(2st way)
let printName:(name:string)=>never; //void return undefined but never not return any thing

printInfo("mehwish","fourteen")
printInfo("mehwish",19)