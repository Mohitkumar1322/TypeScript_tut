//content
//basic types
//primitive types
//number
//array
//tuples
//enum
//any, voud and never

//premitive types and reference types

// if bracket then it is reference type {}[]() if no bracker  so primitive

//we use let and const now var is not used
let a = 123; // now we cant change the value of a or data type
let arr=[1,2,3,4,5];
let arr1=[1,2,3,4,5,{name:'ali',age:23}]; //this is array of object
///this is array


let arr: [number, string, boolean] = [1, 'ali', true]; //this is tuple
// this is tuple it is fixed size array

//enums => enumeration

enum UserRoles{
    ADMIN = "admin",
    USER,
    MANAGER
}

