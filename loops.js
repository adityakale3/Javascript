/*
while loop 
do/while loop 
for loop 
for/in loop  (Objects) 
forEach      (Array) 
*/

// While Loop
var a = 1; 
while (a <= 10){ 
console.log("Test ",a,"<br>"); 
a++; 
} 


// Do While
var a = 1; 
do { 
console.log("print",a,"<br>"); 
a++; 
} while(a <= 10);



// for Loop 
for(var a = 1; a < 10; a++){ 
console.log(`Value : ${a}`); 
} 


// forEach Used in array methods
var a = ["Aditya","Atharva","Anushri"]; 
a.forEach(function (value, b){ //value = data, b = index  
value + " index is second parameter : " + b; 
});




//For / In Loop (Objects) 
var a = { 
'name' : 'Aditya', 
'lname' : 'Kale', 
'age' : 26, 
'country' : 'India' 
    } 
for(var i in a){ 
console.log(i); 
} 
for(var key in a){ 
console.log(a[key]) 
} 

 