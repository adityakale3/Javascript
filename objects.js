/*
Object container
Create Object
Array of Object
De-Structuring of Object
*/
//Object can contain key value pair of data, or functions, or array or sub Object
var a = { 
    fname : "Aditya", 
    lastName : "Kale", 
    age : 26, 
    favPersons : ["Atharva","Anushri","Aman","Goddy"], 
    salary : function(){ 
            return 25000; 
            }, 
    fullName : function(){ 
            this.fname + " " + this.lastName; 
            }, 
    living : { 
            'city' : 'Nagpur', 
            'state' : 'Maharashtra'  
            } 
        } 
 
console.log(a.fname); 
console.log(a.favPersons[1]); 
console.log(a.salary()); 
console.log(a.living.state); 



//Create an Object
var person = new Object(); 
person.name = "Aditya"; 
person.lastName = "Kale";
person.age = 26 
console.log(person['age']); 


// Array of Object

var students = [ 
{'name' : 'Aditya', age : 26 }, 
{'name' : 'Anushri', age : 25 }, 
{'name' : 'Atharva', age : 18 }, 
]; 

console.log(students); 
for(var a = 0; a < students.length; a++){ 
console.log(students[a].name); 
} 


//Object De-structuring  
var bioData = { 
name : 'Aditya', 
age : 26, 
city : 'Nagpur' 
}; 
let {name,age,city} = bioData; 
console.log(`Person named : ${name} of age : ${age}, lives in city : ${city}` );